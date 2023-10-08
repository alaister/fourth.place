/**
 * @generated SignedSource<<39af4f0138b4c87db6b82e2bc858b02e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TabOne_Query$variables = {};
export type TabOne_Query$data = {
  readonly viewer: {
    readonly " $fragmentSpreads": FragmentRefs<"CurrentUser_profile">;
  } | null;
};
export type TabOne_Query = {
  response: TabOne_Query$data;
  variables: TabOne_Query$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TabOne_Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Profiles",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CurrentUser_profile"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TabOne_Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Profiles",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "nodeId",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "6288ffdfef2fd56b59ac006b8f38d042",
    "id": null,
    "metadata": {},
    "name": "TabOne_Query",
    "operationKind": "query",
    "text": "query TabOne_Query {\n  viewer {\n    ...CurrentUser_profile\n    nodeId\n  }\n}\n\nfragment CurrentUser_profile on Profiles {\n  nodeId\n  name\n}\n"
  }
};

(node as any).hash = "bf5973a367aa9932c3813036a977cd56";

export default node;
