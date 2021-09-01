import React from 'react';
import { SWRConfig } from 'swr';

import Routes from './Routes';

function App() {
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
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
      <Routes />
    </SWRConfig>
  );
}

export default App;
