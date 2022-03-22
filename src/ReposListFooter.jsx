import React from 'react';
import { useFragment } from "react-relay";

const ReposListFooter = (props) => {

    const repos = useFragment(
        graphql`
        fragment ReposListFooter_repo on RepositoryConnection {
            totalCount
        }
        `,
        props.userFragment
    );

    const { totalCount } = repos;

    return (
        <footer className="footer">
            Total: {totalCount} repositories
        </footer>
    )
}

export default ReposListFooter;
