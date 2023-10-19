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
  '\n  query AllThings($cursor: Cursor) {\n    thingsCollection(first: 1, after: $cursor) {\n      edges {\n        node {\n          nodeId\n          ...ThingItem @nonreactive\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n':
    types.AllThingsDocument,
  '\n  query Thing($id: ID!) {\n    thing: node(nodeId: $id) {\n      ...ThingItem\n      ... on Things {\n        createdAt\n      }\n    }\n  }\n':
    types.ThingDocument,
  '\n  fragment ThingItem on Things {\n    nodeId\n    title\n  }\n':
    types.ThingItemFragmentDoc,
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
  source: '\n  query AllThings($cursor: Cursor) {\n    thingsCollection(first: 1, after: $cursor) {\n      edges {\n        node {\n          nodeId\n          ...ThingItem @nonreactive\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n',
): (typeof documents)['\n  query AllThings($cursor: Cursor) {\n    thingsCollection(first: 1, after: $cursor) {\n      edges {\n        node {\n          nodeId\n          ...ThingItem @nonreactive\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query Thing($id: ID!) {\n    thing: node(nodeId: $id) {\n      ...ThingItem\n      ... on Things {\n        createdAt\n      }\n    }\n  }\n',
): (typeof documents)['\n  query Thing($id: ID!) {\n    thing: node(nodeId: $id) {\n      ...ThingItem\n      ... on Things {\n        createdAt\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment ThingItem on Things {\n    nodeId\n    title\n  }\n',
): (typeof documents)['\n  fragment ThingItem on Things {\n    nodeId\n    title\n  }\n']

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
