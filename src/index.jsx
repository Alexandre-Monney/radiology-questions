// Import React
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// Import Styles
import './reset.css';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

// Import main component
import App from './components/App/App';

const rootReactElement = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(rootReactElement);

serviceWorkerRegistration.register();
