/**
 * @generated SignedSource<<221ae6d17d099f0590edf8c1ce54f4ae>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
type RepoOwner_data$fragmentType = any;
import type { FragmentType } from "relay-runtime";
declare export opaque type Repo_data$fragmentType: FragmentType;
export type Repo_data$data = {|
  +name: string,
  +url: any,
  +id: string,
  +updatedAt: any,
  +owner: {|
    +$fragmentSpreads: RepoOwner_data$fragmentType,
  |},
  +$fragmentType: Repo_data$fragmentType,
|};
export type Repo_data$key = {
  +$data?: Repo_data$data,
  +$fragmentSpreads: Repo_data$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Repo_data",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "url",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "updatedAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "owner",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "RepoOwner_data"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Repository",
  "abstractKey": null
};

(node/*: any*/).hash = "8a659286fa243636806728bcac69f466";

module.exports = ((node/*: any*/)/*: Fragment<
  Repo_data$fragmentType,
  Repo_data$data,
>*/);
