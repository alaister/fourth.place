/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  /** A high precision floating point value represented as a string */
  BigFloat: { input: string; output: string }
  /** An arbitrary size integer represented as a string */
  BigInt: { input: string; output: string }
  /** An opaque string using for tracking a position in results during pagination */
  Cursor: { input: any; output: any }
  /** A date wihout time information */
  Date: { input: string; output: string }
  /** A date and time */
  Datetime: { input: string; output: string }
  /** A Javascript Object Notation value serialized as a string */
  JSON: { input: string; output: string }
  /** Any type not handled by the type system */
  Opaque: { input: any; output: any }
  /** A time without date information */
  Time: { input: string; output: string }
  /** A universally unique identifier */
  UUID: { input: string; output: string }
}

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
  eq?: InputMaybe<Scalars['BigFloat']['input']>
  gt?: InputMaybe<Scalars['BigFloat']['input']>
  gte?: InputMaybe<Scalars['BigFloat']['input']>
  in?: InputMaybe<Array<Scalars['BigFloat']['input']>>
  is?: InputMaybe<FilterIs>
  lt?: InputMaybe<Scalars['BigFloat']['input']>
  lte?: InputMaybe<Scalars['BigFloat']['input']>
  neq?: InputMaybe<Scalars['BigFloat']['input']>
}

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']['input']>
  gt?: InputMaybe<Scalars['BigInt']['input']>
  gte?: InputMaybe<Scalars['BigInt']['input']>
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  is?: InputMaybe<FilterIs>
  lt?: InputMaybe<Scalars['BigInt']['input']>
  lte?: InputMaybe<Scalars['BigInt']['input']>
  neq?: InputMaybe<Scalars['BigInt']['input']>
}

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']['input']>
  is?: InputMaybe<FilterIs>
}

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']['input']>
  gt?: InputMaybe<Scalars['Date']['input']>
  gte?: InputMaybe<Scalars['Date']['input']>
  in?: InputMaybe<Array<Scalars['Date']['input']>>
  is?: InputMaybe<FilterIs>
  lt?: InputMaybe<Scalars['Date']['input']>
  lte?: InputMaybe<Scalars['Date']['input']>
  neq?: InputMaybe<Scalars['Date']['input']>
}

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']['input']>
  gt?: InputMaybe<Scalars['Datetime']['input']>
  gte?: InputMaybe<Scalars['Datetime']['input']>
  in?: InputMaybe<Array<Scalars['Datetime']['input']>>
  is?: InputMaybe<FilterIs>
  lt?: InputMaybe<Scalars['Datetime']['input']>
  lte?: InputMaybe<Scalars['Datetime']['input']>
  neq?: InputMaybe<Scalars['Datetime']['input']>
}

export enum FilterIs {
  NotNull = 'NOT_NULL',
  Null = 'NULL',
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']['input']>
  gt?: InputMaybe<Scalars['Float']['input']>
  gte?: InputMaybe<Scalars['Float']['input']>
  in?: InputMaybe<Array<Scalars['Float']['input']>>
  is?: InputMaybe<FilterIs>
  lt?: InputMaybe<Scalars['Float']['input']>
  lte?: InputMaybe<Scalars['Float']['input']>
  neq?: InputMaybe<Scalars['Float']['input']>
}

export type Friend = Node & {
  __typename?: 'Friend'
  createdAt: Scalars['Datetime']['output']
  id: Scalars['UUID']['output']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output']
  profileA: Profile
  profileAId: Scalars['UUID']['output']
  profileB: Profile
  profileBId: Scalars['UUID']['output']
}

export type FriendConnection = {
  __typename?: 'FriendConnection'
  edges: Array<FriendEdge>
  pageInfo: PageInfo
}

export type FriendDeleteResponse = {
  __typename?: 'FriendDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Friend>
}

export type FriendEdge = {
  __typename?: 'FriendEdge'
  cursor: Scalars['String']['output']
  node: Friend
}

export type FriendFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<FriendFilter>>
  createdAt?: InputMaybe<DatetimeFilter>
  id?: InputMaybe<UuidFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<FriendFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<FriendFilter>>
  profileAId?: InputMaybe<UuidFilter>
  profileBId?: InputMaybe<UuidFilter>
}

export type FriendOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>
  id?: InputMaybe<OrderByDirection>
  profileAId?: InputMaybe<OrderByDirection>
  profileBId?: InputMaybe<OrderByDirection>
}

export type FriendRequest = Node & {
  __typename?: 'FriendRequest'
  actionedAt?: Maybe<Scalars['Datetime']['output']>
  createdAt: Scalars['Datetime']['output']
  fromUser: Profile
  fromUserId: Scalars['UUID']['output']
  id: Scalars['UUID']['output']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output']
  state: FriendRequestState
  toUser: Profile
  toUserId: Scalars['UUID']['output']
}

export type FriendRequestConnection = {
  __typename?: 'FriendRequestConnection'
  edges: Array<FriendRequestEdge>
  pageInfo: PageInfo
}

export type FriendRequestEdge = {
  __typename?: 'FriendRequestEdge'
  cursor: Scalars['String']['output']
  node: FriendRequest
}

export type FriendRequestFilter = {
  actionedAt?: InputMaybe<DatetimeFilter>
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<FriendRequestFilter>>
  createdAt?: InputMaybe<DatetimeFilter>
  fromUserId?: InputMaybe<UuidFilter>
  id?: InputMaybe<UuidFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<FriendRequestFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<FriendRequestFilter>>
  state?: InputMaybe<FriendRequestStateFilter>
  toUserId?: InputMaybe<UuidFilter>
}

export type FriendRequestInsertInput = {
  toUserId?: InputMaybe<Scalars['UUID']['input']>
}

export type FriendRequestInsertResponse = {
  __typename?: 'FriendRequestInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<FriendRequest>
}

export type FriendRequestOrderBy = {
  actionedAt?: InputMaybe<OrderByDirection>
  createdAt?: InputMaybe<OrderByDirection>
  fromUserId?: InputMaybe<OrderByDirection>
  id?: InputMaybe<OrderByDirection>
  state?: InputMaybe<OrderByDirection>
  toUserId?: InputMaybe<OrderByDirection>
}

export enum FriendRequestState {
  Accepted = 'ACCEPTED',
  Cancelled = 'CANCELLED',
  Pending = 'PENDING',
  Rejected = 'REJECTED',
}

/** Boolean expression comparing fields on type "FriendRequestState" */
export type FriendRequestStateFilter = {
  eq?: InputMaybe<FriendRequestState>
  in?: InputMaybe<Array<FriendRequestState>>
  is?: InputMaybe<FilterIs>
  neq?: InputMaybe<FriendRequestState>
}

export type FriendRequestUpdateInput = {
  state?: InputMaybe<FriendRequestState>
}

export type FriendRequestUpdateResponse = {
  __typename?: 'FriendRequestUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<FriendRequest>
}

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']['input']>
}

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  in?: InputMaybe<Array<Scalars['Int']['input']>>
  is?: InputMaybe<FilterIs>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  neq?: InputMaybe<Scalars['Int']['input']>
}

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation'
  /** Deletes zero or more records from the `Friend` collection */
  deleteFromFriendCollection: FriendDeleteResponse
  /** Adds one or more `FriendRequest` records to the collection */
  insertIntoFriendRequestCollection?: Maybe<FriendRequestInsertResponse>
  /** Updates zero or more records in the `FriendRequest` collection */
  updateFriendRequestCollection: FriendRequestUpdateResponse
  /** Updates zero or more records in the `Profile` collection */
  updateProfileCollection: ProfileUpdateResponse
}

/** The root type for creating and mutating data */
export type MutationDeleteFromFriendCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<FriendFilter>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoFriendRequestCollectionArgs = {
  objects: Array<FriendRequestInsertInput>
}

/** The root type for creating and mutating data */
export type MutationUpdateFriendRequestCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<FriendRequestFilter>
  set: FriendRequestUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateProfileCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<ProfileFilter>
  set: ProfileUpdateInput
}

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID']['output']
}

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
  eq?: InputMaybe<Scalars['Opaque']['input']>
  is?: InputMaybe<FilterIs>
}

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = 'AscNullsFirst',
  /** Ascending order, nulls last */
  AscNullsLast = 'AscNullsLast',
  /** Descending order, nulls first */
  DescNullsFirst = 'DescNullsFirst',
  /** Descending order, nulls last */
  DescNullsLast = 'DescNullsLast',
}

export type PageInfo = {
  __typename?: 'PageInfo'
  endCursor?: Maybe<Scalars['String']['output']>
  hasNextPage: Scalars['Boolean']['output']
  hasPreviousPage: Scalars['Boolean']['output']
  startCursor?: Maybe<Scalars['String']['output']>
}

export type Profile = Node & {
  __typename?: 'Profile'
  avatarPath?: Maybe<Scalars['String']['output']>
  createdAt: Scalars['Datetime']['output']
  friendCollection?: Maybe<FriendConnection>
  friendRequestCollection?: Maybe<FriendRequestConnection>
  id: Scalars['UUID']['output']
  name: Scalars['String']['output']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output']
  receivedFriendRequestCollection?: Maybe<FriendRequestConnection>
  sentFriendRequestCollection?: Maybe<FriendRequestConnection>
}

export type ProfileFriendCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<FriendFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<FriendOrderBy>>
}

export type ProfileFriendRequestCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<FriendRequestFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<FriendRequestOrderBy>>
}

export type ProfileReceivedFriendRequestCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<FriendRequestFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<FriendRequestOrderBy>>
}

export type ProfileSentFriendRequestCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<FriendRequestFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<FriendRequestOrderBy>>
}

export type ProfileConnection = {
  __typename?: 'ProfileConnection'
  edges: Array<ProfileEdge>
  pageInfo: PageInfo
}

export type ProfileEdge = {
  __typename?: 'ProfileEdge'
  cursor: Scalars['String']['output']
  node: Profile
}

export type ProfileFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProfileFilter>>
  avatarPath?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DatetimeFilter>
  id?: InputMaybe<UuidFilter>
  name?: InputMaybe<StringFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<ProfileFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProfileFilter>>
}

export type ProfileOrderBy = {
  avatarPath?: InputMaybe<OrderByDirection>
  createdAt?: InputMaybe<OrderByDirection>
  id?: InputMaybe<OrderByDirection>
  name?: InputMaybe<OrderByDirection>
}

export type ProfileUpdateInput = {
  name?: InputMaybe<Scalars['String']['input']>
}

export type ProfileUpdateResponse = {
  __typename?: 'ProfileUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Profile>
}

/** The root type for querying data */
export type Query = {
  __typename?: 'Query'
  /** A pagable collection of type `Friend` */
  friendCollection?: Maybe<FriendConnection>
  /** A pagable collection of type `FriendRequest` */
  friendRequestCollection?: Maybe<FriendRequestConnection>
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>
  previewProfile?: Maybe<Profile>
  /** A pagable collection of type `Profile` */
  profileCollection?: Maybe<ProfileConnection>
  viewer?: Maybe<Profile>
}

/** The root type for querying data */
export type QueryFriendCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<FriendFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<FriendOrderBy>>
}

/** The root type for querying data */
export type QueryFriendRequestCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<FriendRequestFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<FriendRequestOrderBy>>
}

/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root type for querying data */
export type QueryPreviewProfileArgs = {
  id?: InputMaybe<Scalars['UUID']['input']>
}

/** The root type for querying data */
export type QueryProfileCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<ProfileFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<ProfileOrderBy>>
}

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  ilike?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<Scalars['String']['input']>>
  iregex?: InputMaybe<Scalars['String']['input']>
  is?: InputMaybe<FilterIs>
  like?: InputMaybe<Scalars['String']['input']>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  neq?: InputMaybe<Scalars['String']['input']>
  regex?: InputMaybe<Scalars['String']['input']>
  startsWith?: InputMaybe<Scalars['String']['input']>
}

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']['input']>
  gt?: InputMaybe<Scalars['Time']['input']>
  gte?: InputMaybe<Scalars['Time']['input']>
  in?: InputMaybe<Array<Scalars['Time']['input']>>
  is?: InputMaybe<FilterIs>
  lt?: InputMaybe<Scalars['Time']['input']>
  lte?: InputMaybe<Scalars['Time']['input']>
  neq?: InputMaybe<Scalars['Time']['input']>
}

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']['input']>
  in?: InputMaybe<Array<Scalars['UUID']['input']>>
  is?: InputMaybe<FilterIs>
  neq?: InputMaybe<Scalars['UUID']['input']>
}

export type FriendItemFragment = {
  __typename: 'Friend'
  id: string
  nodeId: string
  profile: { __typename: 'Profile'; nodeId: string; id: string; name: string }
}

export type FriendRequestItemFragment = {
  __typename: 'FriendRequest'
  nodeId: string
  id: string
  state: FriendRequestState
  actionedAt?: string | null
  toUser: { __typename: 'Profile'; nodeId: string; name: string }
  fromUser: { __typename: 'Profile'; nodeId: string; name: string }
}

export type DeleteFriendMutationVariables = Exact<{
  nodeId: Scalars['ID']['input']
}>

export type DeleteFriendMutation = {
  __typename: 'Mutation'
  deleteFromFriendCollection: {
    __typename: 'FriendDeleteResponse'
    records: Array<{
      __typename: 'Friend'
      id: string
      nodeId: string
      profile: {
        __typename: 'Profile'
        nodeId: string
        id: string
        name: string
      }
    }>
  }
}

export type InsertFriendRequestMutationVariables = Exact<{
  toUserId: Scalars['UUID']['input']
}>

export type InsertFriendRequestMutation = {
  __typename: 'Mutation'
  insertIntoFriendRequestCollection?: {
    __typename: 'FriendRequestInsertResponse'
    records: Array<{
      __typename: 'FriendRequest'
      nodeId: string
      id: string
      state: FriendRequestState
      actionedAt?: string | null
      toUser: { __typename: 'Profile'; nodeId: string; name: string }
      fromUser: { __typename: 'Profile'; nodeId: string; name: string }
    }>
  } | null
}

export type UpdateFriendRequestMutationVariables = Exact<{
  nodeId: Scalars['ID']['input']
  state: FriendRequestState
}>

export type UpdateFriendRequestMutation = {
  __typename: 'Mutation'
  updateFriendRequestCollection: {
    __typename: 'FriendRequestUpdateResponse'
    records: Array<{
      __typename: 'FriendRequest'
      nodeId: string
      id: string
      state: FriendRequestState
      actionedAt?: string | null
      toUser: { __typename: 'Profile'; nodeId: string; name: string }
      fromUser: { __typename: 'Profile'; nodeId: string; name: string }
    }>
  }
}

export type FriendRequestsQueryVariables = Exact<{ [key: string]: never }>

export type FriendRequestsQuery = {
  __typename: 'Query'
  viewer?: {
    __typename: 'Profile'
    nodeId: string
    receivedFriendRequestCollection?: {
      __typename: 'FriendRequestConnection'
      edges: Array<{
        __typename: 'FriendRequestEdge'
        node: {
          __typename: 'FriendRequest'
          nodeId: string
          id: string
          state: FriendRequestState
          actionedAt?: string | null
          toUser: { __typename: 'Profile'; nodeId: string; name: string }
          fromUser: { __typename: 'Profile'; nodeId: string; name: string }
        }
      }>
    } | null
    sentFriendRequestCollection?: {
      __typename: 'FriendRequestConnection'
      edges: Array<{
        __typename: 'FriendRequestEdge'
        node: {
          __typename: 'FriendRequest'
          nodeId: string
          id: string
          state: FriendRequestState
          actionedAt?: string | null
          toUser: { __typename: 'Profile'; nodeId: string; name: string }
          fromUser: { __typename: 'Profile'; nodeId: string; name: string }
        }
      }>
    } | null
  } | null
}

export type FriendsQueryVariables = Exact<{ [key: string]: never }>

export type FriendsQuery = {
  __typename: 'Query'
  viewer?: {
    __typename: 'Profile'
    nodeId: string
    friendCollection?: {
      __typename: 'FriendConnection'
      edges: Array<{
        __typename: 'FriendEdge'
        node: {
          __typename: 'Friend'
          nodeId: string
          id: string
          profile: {
            __typename: 'Profile'
            nodeId: string
            id: string
            name: string
          }
        }
      }>
    } | null
  } | null
}

export type PreviewProfileQueryVariables = Exact<{
  id: Scalars['UUID']['input']
}>

export type PreviewProfileQuery = {
  __typename: 'Query'
  profile?: {
    __typename: 'Profile'
    nodeId: string
    id: string
    name: string
    avatarPath?: string | null
  } | null
}

export const FriendItemFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FriendItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Friend' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'profile' },
            name: { kind: 'Name', value: 'profileB' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FriendItemFragment, unknown>
export const FriendRequestItemFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FriendRequestItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FriendRequest' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'state' } },
          { kind: 'Field', name: { kind: 'Name', value: 'actionedAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'toUser' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'fromUser' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FriendRequestItemFragment, unknown>
export const DeleteFriendDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeleteFriend' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'nodeId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deleteFromFriendCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'nodeId' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'nodeId' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'records' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' },
                      },
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'FriendItem' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FriendItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Friend' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'profile' },
            name: { kind: 'Name', value: 'profileB' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteFriendMutation,
  DeleteFriendMutationVariables
>
export const InsertFriendRequestDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'InsertFriendRequest' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'toUserId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'insertIntoFriendRequestCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'objects' },
                value: {
                  kind: 'ListValue',
                  values: [
                    {
                      kind: 'ObjectValue',
                      fields: [
                        {
                          kind: 'ObjectField',
                          name: { kind: 'Name', value: 'toUserId' },
                          value: {
                            kind: 'Variable',
                            name: { kind: 'Name', value: 'toUserId' },
                          },
                        },
                      ],
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'records' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' },
                      },
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'FriendRequestItem' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FriendRequestItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FriendRequest' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'state' } },
          { kind: 'Field', name: { kind: 'Name', value: 'actionedAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'toUser' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'fromUser' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  InsertFriendRequestMutation,
  InsertFriendRequestMutationVariables
>
export const UpdateFriendRequestDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateFriendRequest' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'nodeId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'state' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'FriendRequestState' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateFriendRequestCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'set' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'state' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'state' },
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'nodeId' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'nodeId' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'records' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' },
                      },
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'FriendRequestItem' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FriendRequestItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FriendRequest' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'state' } },
          { kind: 'Field', name: { kind: 'Name', value: 'actionedAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'toUser' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'fromUser' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateFriendRequestMutation,
  UpdateFriendRequestMutationVariables
>
export const FriendRequestsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FriendRequests' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'viewer' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'receivedFriendRequestCollection',
                  },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'filter' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'state' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'eq' },
                                  value: {
                                    kind: 'EnumValue',
                                    value: 'PENDING',
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'orderBy' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'createdAt' },
                            value: {
                              kind: 'EnumValue',
                              value: 'DescNullsLast',
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'edges' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: '__typename' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'node' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: '__typename' },
                                  },
                                  {
                                    kind: 'FragmentSpread',
                                    name: {
                                      kind: 'Name',
                                      value: 'FriendRequestItem',
                                    },
                                    directives: [
                                      {
                                        kind: 'Directive',
                                        name: {
                                          kind: 'Name',
                                          value: 'nonreactive',
                                        },
                                      },
                                    ],
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'sentFriendRequestCollection' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'filter' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'state' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'eq' },
                                  value: {
                                    kind: 'EnumValue',
                                    value: 'PENDING',
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'orderBy' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'createdAt' },
                            value: {
                              kind: 'EnumValue',
                              value: 'DescNullsLast',
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'edges' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: '__typename' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'node' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: '__typename' },
                                  },
                                  {
                                    kind: 'FragmentSpread',
                                    name: {
                                      kind: 'Name',
                                      value: 'FriendRequestItem',
                                    },
                                    directives: [
                                      {
                                        kind: 'Directive',
                                        name: {
                                          kind: 'Name',
                                          value: 'nonreactive',
                                        },
                                      },
                                    ],
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FriendRequestItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FriendRequest' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'state' } },
          { kind: 'Field', name: { kind: 'Name', value: 'actionedAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'toUser' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'fromUser' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FriendRequestsQuery, FriendRequestsQueryVariables>
export const FriendsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Friends' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'viewer' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'friendCollection' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'edges' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: '__typename' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'node' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: '__typename' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'nodeId' },
                                  },
                                  {
                                    kind: 'FragmentSpread',
                                    name: { kind: 'Name', value: 'FriendItem' },
                                    directives: [
                                      {
                                        kind: 'Directive',
                                        name: {
                                          kind: 'Name',
                                          value: 'nonreactive',
                                        },
                                      },
                                    ],
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FriendItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Friend' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'profile' },
            name: { kind: 'Name', value: 'profileB' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FriendsQuery, FriendsQueryVariables>
export const PreviewProfileDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'PreviewProfile' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'profile' },
            name: { kind: 'Name', value: 'previewProfile' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'avatarPath' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PreviewProfileQuery, PreviewProfileQueryVariables>
