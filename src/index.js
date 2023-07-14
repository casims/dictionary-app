import * as React from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from './router/AppRouter';
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AppRouter/>
  </React.StrictMode>
);