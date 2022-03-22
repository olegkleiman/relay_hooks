/**
 * @generated SignedSource<<8e2a4db0ba569bf3c1de5ece1a22acf8>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type ReposListFooter_repo$fragmentType: FragmentType;
export type ReposListFooter_repo$data = {|
  +totalCount: number,
  +$fragmentType: ReposListFooter_repo$fragmentType,
|};
export type ReposListFooter_repo$key = {
  +$data?: ReposListFooter_repo$data,
  +$fragmentSpreads: ReposListFooter_repo$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ReposListFooter_repo",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "totalCount",
      "storageKey": null
    }
  ],
  "type": "RepositoryConnection",
  "abstractKey": null
};

(node/*: any*/).hash = "913fd08be474a12d8a87c1413f246f86";

module.exports = ((node/*: any*/)/*: Fragment<
  ReposListFooter_repo$fragmentType,
  ReposListFooter_repo$data,
>*/);
