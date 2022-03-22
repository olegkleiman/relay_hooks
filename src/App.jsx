// @flow

import React from 'react';
import { usePreloadedQuery, PreloadedQuery } from "react-relay";
import { graphql } from 'relay-hooks';

import ReposList from './ReposList';
import ReposListFooter from './ReposListFooter';

const App = (props) => {

    const data = usePreloadedQuery(
        graphql`
        query AppQuery($isFork: Boolean, $login_name: String!, $reposNumber: Int) {
             user(login: $login_name) {
                repositories(last: $reposNumber, isFork: $isFork) {
                    ...ReposList_repo
                    ...ReposListFooter_repo
                }
            }          
        }
        `,
        props.initialQueryRef
    );
    const reposFragment = data.user?.repositories;

    if (!reposFragment) {
        throw new Error("Expected user fragment to be defined");
    }    

    return (
        <div>
            <section className="app">
                <header className="header">
                    <h1>Repos</h1>
                </header>
                <ReposList userFragment={reposFragment} />
                <ReposListFooter userFragment={reposFragment} />
            </section>
        </div>
    )

}

export default App;