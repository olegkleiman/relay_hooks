import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { ErrorBoundary } from "react-error-boundary";
import { loadQuery, RelayEnvironmentProvider } from "react-relay";
import RelayEnvironment from "./RelayEnvironment";

import * as AppQuery from "./__generated__/AppQuery.graphql";
import App from './App.jsx';
import "./index.css";

const initialQueryRef = loadQuery(
    RelayEnvironment,
    AppQuery,
    {
        "login_name":"olegkleiman",
        "isFork": false,
        "reposNumber": 10
    }
  );

ReactDOM.render(<React.StrictMode>
                    <RelayEnvironmentProvider environment={RelayEnvironment}>
                        <ErrorBoundary fallbackRender={({ error }) => <div>{error.message}</div>}>
                            <Suspense fallback={'Loading...'}>
                                <App initialQueryRef={initialQueryRef} />
                            </Suspense>
                        </ErrorBoundary>
                    </RelayEnvironmentProvider>
                </React.StrictMode>,
                document.getElementById('root'));