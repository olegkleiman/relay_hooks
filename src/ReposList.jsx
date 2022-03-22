// @flow

import React, { useCallback, SyntheticEvent } from "react";
import { useFragment } from "react-relay";
import Repo from './Repo';

import type { RepoList_repo$key } from './generated/RepoList_repo.graphql.js'

type Props = {
    reposList: RepoList_repo$key,
  };

export default function TodoList(props: Props) {
    const repos = useFragment(
        graphql`
        fragment ReposList_repo on RepositoryConnection {
            totalCount
            nodes {
                ...Repo_data
              }
          }
        `,
        props.userFragment
    );

    const { nodes } = repos;

    return (
      
        <section className="ReposList">
            <ul className="repos-list">
            {
                nodes.map( (item, index) => {
                    return item != null ? <Repo key={index} fragment={item} /> : null
                } )
            }
            </ul>
        </section>
        
    )
}