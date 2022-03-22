import React from 'react';
import { useFragment } from "react-relay";

const RepoOwner = (props) => {
    const repoOwner = useFragment(
        graphql`
            fragment RepoOwner_data on RepositoryOwner {
                login
                avatarUrl
                id                
            }
        `,
        props.ownerFragment
    )

    return (
        <div className='column'>{repoOwner.login}</div>
    )
}

export default RepoOwner;