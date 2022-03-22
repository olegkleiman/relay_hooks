/**
 * @generated SignedSource<<9fbd8fb07f37bccbdcc14109663002c2>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
type ReposListFooter_repo$fragmentType = any;
type ReposList_repo$fragmentType = any;
export type AppQuery$variables = {|
  isFork?: ?boolean,
  login_name: string,
  reposNumber?: ?number,
|};
export type AppQuery$data = {|
  +user: ?{|
    +repositories: {|
      +$fragmentSpreads: ReposList_repo$fragmentType & ReposListFooter_repo$fragmentType,
    |},
  |},
|};
export type AppQuery = {|
  variables: AppQuery$variables,
  response: AppQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "isFork"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "login_name"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "reposNumber"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "login",
    "variableName": "login_name"
  }
],
v2 = [
  {
    "kind": "Variable",
    "name": "isFork",
    "variableName": "isFork"
  },
  {
    "kind": "Variable",
    "name": "last",
    "variableName": "reposNumber"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v2/*: any*/),
            "concreteType": "RepositoryConnection",
            "kind": "LinkedField",
            "name": "repositories",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ReposList_repo"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ReposListFooter_repo"
              }
            ],
            "storageKey": null
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v2/*: any*/),
            "concreteType": "RepositoryConnection",
            "kind": "LinkedField",
            "name": "repositories",
            "plural": false,
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
                  (v3/*: any*/),
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
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__typename",
                        "storageKey": null
                      },
                      {
                        "kind": "TypeDiscriminator",
                        "abstractKey": "__isRepositoryOwner"
                      },
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
                      (v3/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "9ba2f0a630adcdf246368650bb570cf9",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery(\n  $isFork: Boolean\n  $login_name: String!\n  $reposNumber: Int\n) {\n  user(login: $login_name) {\n    repositories(last: $reposNumber, isFork: $isFork) {\n      ...ReposList_repo\n      ...ReposListFooter_repo\n    }\n    id\n  }\n}\n\nfragment RepoOwner_data on RepositoryOwner {\n  __isRepositoryOwner: __typename\n  login\n  avatarUrl\n  id\n}\n\nfragment Repo_data on Repository {\n  name\n  url\n  id\n  updatedAt\n  owner {\n    __typename\n    ...RepoOwner_data\n    id\n  }\n}\n\nfragment ReposListFooter_repo on RepositoryConnection {\n  totalCount\n}\n\nfragment ReposList_repo on RepositoryConnection {\n  totalCount\n  nodes {\n    ...Repo_data\n    id\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "5f3b5c1a00ea582c586ebc17a23adc17";

module.exports = ((node/*: any*/)/*: Query<
  AppQuery$variables,
  AppQuery$data,
>*/);
