/**
 * @generated SignedSource<<2b81c19f8986a207bfbfbb8cfff0507b>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
type Repo_data$fragmentType = any;
import type { FragmentType } from "relay-runtime";
declare export opaque type ReposList_repo$fragmentType: FragmentType;
export type ReposList_repo$data = {|
  +totalCount: number,
  +nodes: ?$ReadOnlyArray<?{|
    +$fragmentSpreads: Repo_data$fragmentType,
  |}>,
  +$fragmentType: ReposList_repo$fragmentType,
|};
export type ReposList_repo$key = {
  +$data?: ReposList_repo$data,
  +$fragmentSpreads: ReposList_repo$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ReposList_repo",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "totalCount",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Repository",
      "kind": "LinkedField",
      "name": "nodes",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "Repo_data"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "RepositoryConnection",
  "abstractKey": null
};

(node/*: any*/).hash = "95b6b45a7bba6ee1e565838cdc682b3d";

module.exports = ((node/*: any*/)/*: Fragment<
  ReposList_repo$fragmentType,
  ReposList_repo$data,
>*/);
