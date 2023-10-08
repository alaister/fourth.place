/**
 * @generated SignedSource<<ab39378be39ae1948796856d8082c72c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CurrentUser_profile$data = {
  readonly name: string;
  readonly nodeId: string;
  readonly " $fragmentType": "CurrentUser_profile";
};
export type CurrentUser_profile$key = {
  readonly " $data"?: CurrentUser_profile$data;
  readonly " $fragmentSpreads": FragmentRefs<"CurrentUser_profile">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CurrentUser_profile",
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
  "type": "Profiles",
  "abstractKey": null
};

(node as any).hash = "21c2bfe062c4d7f7d1a650a48ed2ce78";

export default node;
