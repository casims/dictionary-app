import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

//Pages
import PageMain from "./pages/PageMain";
import PageSearch from "./pages/PageSearch";
import PageWord from "./pages/PageWord";


const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PageMain />}/>
      <Route path="/search/:value" element={<PageSearch />}/>
      <Route path="/word/:value" element={<PageWord />}/>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();