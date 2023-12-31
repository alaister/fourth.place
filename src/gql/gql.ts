/* eslint-disable */
import * as types from './graphql'
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  fragment EventItem on Event {\n    id\n    nodeId\n    name\n    startAt\n    endAt\n    hostCollection: eventParticipantCollection(filter: { role: { eq: HOST } }) {\n      edges {\n        node {\n          nodeId\n          profile {\n            nodeId\n            name\n            avatarPath\n          }\n        }\n      }\n    }\n  }\n':
    types.EventItemFragmentDoc,
  '\n  fragment FriendItem on Friend {\n    id\n    nodeId\n    profile: profileB {\n      nodeId\n      id\n      name\n      avatarPath\n      friendDistance {\n        nodeId\n        distance\n        updatedAt\n      }\n    }\n  }\n':
    types.FriendItemFragmentDoc,
  '\n  fragment FriendRequestItem on FriendRequest {\n    nodeId\n    id\n    state\n    actionedAt\n    toUser {\n      nodeId\n      name\n    }\n    fromUser {\n      nodeId\n      name\n    }\n  }\n':
    types.FriendRequestItemFragmentDoc,
  '\n  fragment ProfileItem on Profile {\n    nodeId\n    name\n    avatarPath\n  }\n':
    types.ProfileItemFragmentDoc,
  '\n  mutation DeleteFriend($nodeId: ID!) {\n    deleteFromFriendCollection(filter: { nodeId: { eq: $nodeId } }) {\n      records {\n        ...FriendItem\n      }\n    }\n  }\n':
    types.DeleteFriendDocument,
  '\n  mutation InsertFriendRequest($toUserId: UUID!) {\n    insertIntoFriendRequestCollection(objects: [{ toUserId: $toUserId }]) {\n      records {\n        ...FriendRequestItem\n      }\n    }\n  }\n':
    types.InsertFriendRequestDocument,
  '\n  mutation UpdateFriendRequest($nodeId: ID!, $state: FriendRequestState!) {\n    updateFriendRequestCollection(\n      set: { state: $state }\n      filter: { nodeId: { eq: $nodeId } }\n    ) {\n      records {\n        ...FriendRequestItem\n      }\n    }\n  }\n':
    types.UpdateFriendRequestDocument,
  '\n  query Events {\n    eventCollection {\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      edges {\n        cursor\n        node {\n          nodeId\n          ...EventItem @nonreactive\n        }\n      }\n    }\n  }\n':
    types.EventsDocument,
  '\n  query FriendRequests {\n    viewer {\n      nodeId\n      receivedFriendRequestCollection(\n        filter: { state: { eq: PENDING } }\n        orderBy: { createdAt: DescNullsLast }\n      ) {\n        edges {\n          node {\n            ...FriendRequestItem @nonreactive\n          }\n        }\n      }\n      sentFriendRequestCollection(\n        filter: { state: { eq: PENDING } }\n        orderBy: { createdAt: DescNullsLast }\n      ) {\n        edges {\n          node {\n            ...FriendRequestItem @nonreactive\n          }\n        }\n      }\n    }\n  }\n':
    types.FriendRequestsDocument,
  '\n  query Friends {\n    viewer {\n      nodeId\n      friendCollection {\n        edges {\n          node {\n            nodeId\n            ...FriendItem @nonreactive\n          }\n        }\n      }\n    }\n  }\n':
    types.FriendsDocument,
  '\n  query PreviewProfile($id: UUID!) {\n    profile: previewProfile(id: $id) {\n      nodeId\n      id\n      name\n      avatarPath\n    }\n  }\n':
    types.PreviewProfileDocument,
  '\n  query Viewer {\n    viewer {\n      nodeId\n      ...ProfileItem\n    }\n  }\n':
    types.ViewerDocument,
}

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment EventItem on Event {\n    id\n    nodeId\n    name\n    startAt\n    endAt\n    hostCollection: eventParticipantCollection(filter: { role: { eq: HOST } }) {\n      edges {\n        node {\n          nodeId\n          profile {\n            nodeId\n            name\n            avatarPath\n          }\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  fragment EventItem on Event {\n    id\n    nodeId\n    name\n    startAt\n    endAt\n    hostCollection: eventParticipantCollection(filter: { role: { eq: HOST } }) {\n      edges {\n        node {\n          nodeId\n          profile {\n            nodeId\n            name\n            avatarPath\n          }\n        }\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment FriendItem on Friend {\n    id\n    nodeId\n    profile: profileB {\n      nodeId\n      id\n      name\n      avatarPath\n      friendDistance {\n        nodeId\n        distance\n        updatedAt\n      }\n    }\n  }\n',
): (typeof documents)['\n  fragment FriendItem on Friend {\n    id\n    nodeId\n    profile: profileB {\n      nodeId\n      id\n      name\n      avatarPath\n      friendDistance {\n        nodeId\n        distance\n        updatedAt\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment FriendRequestItem on FriendRequest {\n    nodeId\n    id\n    state\n    actionedAt\n    toUser {\n      nodeId\n      name\n    }\n    fromUser {\n      nodeId\n      name\n    }\n  }\n',
): (typeof documents)['\n  fragment FriendRequestItem on FriendRequest {\n    nodeId\n    id\n    state\n    actionedAt\n    toUser {\n      nodeId\n      name\n    }\n    fromUser {\n      nodeId\n      name\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment ProfileItem on Profile {\n    nodeId\n    name\n    avatarPath\n  }\n',
): (typeof documents)['\n  fragment ProfileItem on Profile {\n    nodeId\n    name\n    avatarPath\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation DeleteFriend($nodeId: ID!) {\n    deleteFromFriendCollection(filter: { nodeId: { eq: $nodeId } }) {\n      records {\n        ...FriendItem\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation DeleteFriend($nodeId: ID!) {\n    deleteFromFriendCollection(filter: { nodeId: { eq: $nodeId } }) {\n      records {\n        ...FriendItem\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation InsertFriendRequest($toUserId: UUID!) {\n    insertIntoFriendRequestCollection(objects: [{ toUserId: $toUserId }]) {\n      records {\n        ...FriendRequestItem\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation InsertFriendRequest($toUserId: UUID!) {\n    insertIntoFriendRequestCollection(objects: [{ toUserId: $toUserId }]) {\n      records {\n        ...FriendRequestItem\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation UpdateFriendRequest($nodeId: ID!, $state: FriendRequestState!) {\n    updateFriendRequestCollection(\n      set: { state: $state }\n      filter: { nodeId: { eq: $nodeId } }\n    ) {\n      records {\n        ...FriendRequestItem\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation UpdateFriendRequest($nodeId: ID!, $state: FriendRequestState!) {\n    updateFriendRequestCollection(\n      set: { state: $state }\n      filter: { nodeId: { eq: $nodeId } }\n    ) {\n      records {\n        ...FriendRequestItem\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query Events {\n    eventCollection {\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      edges {\n        cursor\n        node {\n          nodeId\n          ...EventItem @nonreactive\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  query Events {\n    eventCollection {\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      edges {\n        cursor\n        node {\n          nodeId\n          ...EventItem @nonreactive\n        }\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query FriendRequests {\n    viewer {\n      nodeId\n      receivedFriendRequestCollection(\n        filter: { state: { eq: PENDING } }\n        orderBy: { createdAt: DescNullsLast }\n      ) {\n        edges {\n          node {\n            ...FriendRequestItem @nonreactive\n          }\n        }\n      }\n      sentFriendRequestCollection(\n        filter: { state: { eq: PENDING } }\n        orderBy: { createdAt: DescNullsLast }\n      ) {\n        edges {\n          node {\n            ...FriendRequestItem @nonreactive\n          }\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  query FriendRequests {\n    viewer {\n      nodeId\n      receivedFriendRequestCollection(\n        filter: { state: { eq: PENDING } }\n        orderBy: { createdAt: DescNullsLast }\n      ) {\n        edges {\n          node {\n            ...FriendRequestItem @nonreactive\n          }\n        }\n      }\n      sentFriendRequestCollection(\n        filter: { state: { eq: PENDING } }\n        orderBy: { createdAt: DescNullsLast }\n      ) {\n        edges {\n          node {\n            ...FriendRequestItem @nonreactive\n          }\n        }\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query Friends {\n    viewer {\n      nodeId\n      friendCollection {\n        edges {\n          node {\n            nodeId\n            ...FriendItem @nonreactive\n          }\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  query Friends {\n    viewer {\n      nodeId\n      friendCollection {\n        edges {\n          node {\n            nodeId\n            ...FriendItem @nonreactive\n          }\n        }\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query PreviewProfile($id: UUID!) {\n    profile: previewProfile(id: $id) {\n      nodeId\n      id\n      name\n      avatarPath\n    }\n  }\n',
): (typeof documents)['\n  query PreviewProfile($id: UUID!) {\n    profile: previewProfile(id: $id) {\n      nodeId\n      id\n      name\n      avatarPath\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query Viewer {\n    viewer {\n      nodeId\n      ...ProfileItem\n    }\n  }\n',
): (typeof documents)['\n  query Viewer {\n    viewer {\n      nodeId\n      ...ProfileItem\n    }\n  }\n']

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
