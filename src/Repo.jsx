import React from 'react';
import { useFragment } from "react-relay";

import RepoOwner from './RepoOwner';

const Repo = (props) => {
    const repo = useFragment(
        graphql`
        fragment Repo_data on Repository {
                name
                url
                id
                updatedAt
                owner {
                    ...RepoOwner_data
                } 
          }
        `,
        props.fragment
    );

    const repoOwnerFragment = repo.owner;     

    return (
        <li className='completed'>
            <label className='apgrid'>
                <a href={repo.url} target="_blank" className='column'>
                    <div>{repo.name}</div>
                </a>
                <RepoOwner ownerFragment={repoOwnerFragment}/> 
            </label>
        </li>

    )
}

export default Repo;