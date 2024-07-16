'use client';
import { SessionProvider } from 'next-auth/react';
import React, { useRef } from 'react';
import { Provider } from 'react-redux';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import './nprogress.css';
import { makeStore } from '@/lib/redux/store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const Providers = ({ children, session }) => {
  const storeRef = useRef(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }
  const persistor = persistStore(storeRef.current);

  return (
    <SessionProvider session={session}>
      <Provider store={storeRef.current}>
        <PersistGate loading={null} persistor={persistor}>
          <ProgressBar
            height='4px'
            color='#fffd00'
            options={{ showSpinner: false }}
            shallowRouting
          />
        </PersistGate>

        {children}
      </Provider>
    </SessionProvider>
  );
};

export default Providers;
