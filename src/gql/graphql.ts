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
  /** Deletes zero or more records from the `Things` collection */
  deleteFromThingsCollection: ThingsDeleteResponse
  /** Adds one or more `Things` records to the collection */
  insertIntoThingsCollection?: Maybe<ThingsInsertResponse>
  /** Updates zero or more records in the `Profiles` collection */
  updateProfilesCollection: ProfilesUpdateResponse
  /** Updates zero or more records in the `Things` collection */
  updateThingsCollection: ThingsUpdateResponse
}

/** The root type for creating and mutating data */
export type MutationDeleteFromThingsCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<ThingsFilter>
}

/** The root type for creating and mutating data */
export type MutationInsertIntoThingsCollectionArgs = {
  objects: Array<ThingsInsertInput>
}

/** The root type for creating and mutating data */
export type MutationUpdateProfilesCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<ProfilesFilter>
  set: ProfilesUpdateInput
}

/** The root type for creating and mutating data */
export type MutationUpdateThingsCollectionArgs = {
  atMost?: Scalars['Int']['input']
  filter?: InputMaybe<ThingsFilter>
  set: ThingsUpdateInput
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

export type Profiles = Node & {
  __typename?: 'Profiles'
  avatarPath?: Maybe<Scalars['String']['output']>
  createdAt: Scalars['Datetime']['output']
  id: Scalars['UUID']['output']
  name: Scalars['String']['output']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output']
  thingsCollection?: Maybe<ThingsConnection>
}

export type ProfilesThingsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<ThingsFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<ThingsOrderBy>>
}

export type ProfilesConnection = {
  __typename?: 'ProfilesConnection'
  edges: Array<ProfilesEdge>
  pageInfo: PageInfo
}

export type ProfilesEdge = {
  __typename?: 'ProfilesEdge'
  cursor: Scalars['String']['output']
  node: Profiles
}

export type ProfilesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProfilesFilter>>
  avatarPath?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DatetimeFilter>
  id?: InputMaybe<UuidFilter>
  name?: InputMaybe<StringFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<ProfilesFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProfilesFilter>>
}

export type ProfilesOrderBy = {
  avatarPath?: InputMaybe<OrderByDirection>
  createdAt?: InputMaybe<OrderByDirection>
  id?: InputMaybe<OrderByDirection>
  name?: InputMaybe<OrderByDirection>
}

export type ProfilesUpdateInput = {
  name?: InputMaybe<Scalars['String']['input']>
}

export type ProfilesUpdateResponse = {
  __typename?: 'ProfilesUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Profiles>
}

/** The root type for querying data */
export type Query = {
  __typename?: 'Query'
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>
  /** A pagable collection of type `Profiles` */
  profilesCollection?: Maybe<ProfilesConnection>
  /** A pagable collection of type `Things` */
  thingsCollection?: Maybe<ThingsConnection>
  viewer?: Maybe<Profiles>
}

/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input']
}

/** The root type for querying data */
export type QueryProfilesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<ProfilesFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<ProfilesOrderBy>>
}

/** The root type for querying data */
export type QueryThingsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>
  before?: InputMaybe<Scalars['Cursor']['input']>
  filter?: InputMaybe<ThingsFilter>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Array<ThingsOrderBy>>
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

export type Things = Node & {
  __typename?: 'Things'
  createdAt: Scalars['Datetime']['output']
  id: Scalars['UUID']['output']
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output']
  profile?: Maybe<Profiles>
  profileId?: Maybe<Scalars['UUID']['output']>
  title: Scalars['String']['output']
}

export type ThingsConnection = {
  __typename?: 'ThingsConnection'
  edges: Array<ThingsEdge>
  pageInfo: PageInfo
}

export type ThingsDeleteResponse = {
  __typename?: 'ThingsDeleteResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Things>
}

export type ThingsEdge = {
  __typename?: 'ThingsEdge'
  cursor: Scalars['String']['output']
  node: Things
}

export type ThingsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ThingsFilter>>
  createdAt?: InputMaybe<DatetimeFilter>
  id?: InputMaybe<UuidFilter>
  nodeId?: InputMaybe<IdFilter>
  /** Negates a filter */
  not?: InputMaybe<ThingsFilter>
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ThingsFilter>>
  profileId?: InputMaybe<UuidFilter>
  title?: InputMaybe<StringFilter>
}

export type ThingsInsertInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>
  id?: InputMaybe<Scalars['UUID']['input']>
  profileId?: InputMaybe<Scalars['UUID']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type ThingsInsertResponse = {
  __typename?: 'ThingsInsertResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Things>
}

export type ThingsOrderBy = {
  createdAt?: InputMaybe<OrderByDirection>
  id?: InputMaybe<OrderByDirection>
  profileId?: InputMaybe<OrderByDirection>
  title?: InputMaybe<OrderByDirection>
}

export type ThingsUpdateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>
  id?: InputMaybe<Scalars['UUID']['input']>
  profileId?: InputMaybe<Scalars['UUID']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type ThingsUpdateResponse = {
  __typename?: 'ThingsUpdateResponse'
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output']
  /** Array of records impacted by the mutation */
  records: Array<Things>
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

export type AllThingsQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['Cursor']['input']>
}>

export type AllThingsQuery = {
  __typename: 'Query'
  thingsCollection?: {
    __typename: 'ThingsConnection'
    edges: Array<{
      __typename: 'ThingsEdge'
      node: { __typename: 'Things'; nodeId: string; title: string }
    }>
    pageInfo: {
      __typename: 'PageInfo'
      endCursor?: string | null
      hasNextPage: boolean
    }
  } | null
}

export type ThingQueryVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type ThingQuery = {
  __typename: 'Query'
  thing?:
    | { __typename: 'Profiles' }
    | { __typename: 'Things'; createdAt: string; nodeId: string; title: string }
    | null
}

export type ThingItemFragment = {
  __typename: 'Things'
  nodeId: string
  title: string
}

export const ThingItemFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ThingItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Things' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ThingItemFragment, unknown>
export const AllThingsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'AllThings' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'cursor' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Cursor' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'thingsCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'first' },
                value: { kind: 'IntValue', value: '1' },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'after' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'cursor' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
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
                              name: { kind: 'Name', value: 'ThingItem' },
                              directives: [
                                {
                                  kind: 'Directive',
                                  name: { kind: 'Name', value: 'nonreactive' },
                                },
                              ],
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pageInfo' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'endCursor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'hasNextPage' },
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
      name: { kind: 'Name', value: 'ThingItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Things' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AllThingsQuery, AllThingsQueryVariables>
export const ThingDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Thing' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
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
            alias: { kind: 'Name', value: 'thing' },
            name: { kind: 'Name', value: 'node' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'nodeId' },
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
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ThingItem' },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'Things' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
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
      name: { kind: 'Name', value: 'ThingItem' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Things' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ThingQuery, ThingQueryVariables>
