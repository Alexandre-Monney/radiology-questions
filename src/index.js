import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './reset.css';
import 'semantic-ui-css/semantic.min.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

const rootReactElement = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(rootReactElement);
