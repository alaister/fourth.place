import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  createHttpLink,
  defaultDataIdFromObject,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { relayStylePagination } from '@apollo/client/utilities'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AsyncStorageWrapper, persistCache } from 'apollo3-cache-persist'
import { Platform } from 'react-native'

import possibleTypes from '~/gql/possible-types.json'
import supabase from '~/lib/supabase'

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined

export function getApolloClient() {
  if (!apolloClient) {
    throw new Error(
      'Apollo Client not initialized. Call setupApolloClient() first.',
    )
  }

  return apolloClient
}

export async function setupApolloClient() {
  const cache = new InMemoryCache({
    dataIdFromObject(responseObject) {
      if ('nodeId' in responseObject) {
        return `${responseObject.nodeId}`
      }

      return defaultDataIdFromObject(responseObject)
    },
    possibleTypes,
    typePolicies: {
      Query: {
        fields: {
          thingsCollection: relayStylePagination(),
          node: {
            read(_, { args, toReference }) {
              const ref = toReference({
                nodeId: args?.nodeId,
              })

              return ref
            },
          },
        },
      },
    },
  })

  if (!__DEV__ && Platform.OS !== 'web') {
    await persistCache({
      cache,
      storage: new AsyncStorageWrapper(AsyncStorage),
    })
  }

  const httpLink = createHttpLink({
    uri: 'http://localhost:54321/graphql/v1',
  })

  const authLink = setContext(async (_, { headers }) => {
    const token = (await supabase.auth.getSession()).data.session?.access_token

    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : '',
      },
    }
  })

  apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
  })
}
