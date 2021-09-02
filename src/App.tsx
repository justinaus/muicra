import { CssBaseline } from '@material-ui/core';
import React, { Suspense } from 'react';
import { SWRConfig } from 'swr';

import ErrorBoundary from './components/shared/ErrorBoundary';
import Routes from './Routes';

function App() {
  return (
    <ErrorBoundary fallback={<h2>Error</h2>}>
      <Suspense fallback={<div>Spinner</div>}>
        <SWRConfig
          value={{
            suspense: true,
            fetcher: (resource, init) =>
              fetch(resource, init).then((res) => res.json()),
            onError: (error, key) => {
              if (error.status !== 403 && error.status !== 404) {
                // We can send the error to Sentry,
                // or show a notification UI.
                console.log('error!', key);
              }
            },
          }}
        >
          <CssBaseline />
          <Routes />
        </SWRConfig>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
