import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

//Pages
import PageMain from "./pages/PageMain";
import PageAllWords from "./pages/PageAllWords";
import PageSingleWord from "./pages/PageSingleWord";
import PageSearch from "./pages/PageSearch";

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PageMain />}/>
      <Route path="/words/" element={<PageAllWords />}/>
      <Route path="/words/:value" element={<PageSingleWord />}/>
      <Route path="/search/:value" element={<PageSearch />}/>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();