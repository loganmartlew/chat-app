import React, { useEffect, FC } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import App from '~/app/App';
import store from '~/app/store';
import { initApp } from './services/firebase/app';
import registerAuthObserver from '~/services/firebase/registerAuthObserver';

let persistor = persistStore(store);

const AppWrapper: FC = () => {
  useEffect(() => {
    initApp();
    registerAuthObserver();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <App />
      </PersistGate>
    </Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
  document.getElementById('root')
);
