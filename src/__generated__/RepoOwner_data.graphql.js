/**
 * @generated SignedSource<<17fe20f8cc946ba2e11a517ac5f00a94>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type RepoOwner_data$fragmentType: FragmentType;
export type RepoOwner_data$data = {|
  +login: string,
  +avatarUrl: any,
  +id: string,
  +$fragmentType: RepoOwner_data$fragmentType,
|};
export type RepoOwner_data$key = {
  +$data?: RepoOwner_data$data,
  +$fragmentSpreads: RepoOwner_data$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RepoOwner_data",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "login",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "avatarUrl",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "RepositoryOwner",
  "abstractKey": "__isRepositoryOwner"
};

(node/*: any*/).hash = "272b013948f5bd48165c196c21fc709e";

module.exports = ((node/*: any*/)/*: Fragment<
  RepoOwner_data$fragmentType,
  RepoOwner_data$data,
>*/);
