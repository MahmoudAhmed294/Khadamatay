import { NavigationProgress } from '@mantine/nprogress';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {store} from './store/store';
import { Theme } from './theme';
import "./i18n/i18n";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Theme>
        <BrowserRouter>
          <NavigationProgress />
          <App />
        </BrowserRouter>
      </Theme>
    </Provider>
  </React.StrictMode>
);
