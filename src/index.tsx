import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { Top } from './components/page/Top/Top';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Top />
  </React.StrictMode>
);
