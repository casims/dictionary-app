import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Pages
import PageMain from '../pages/PageMain';
import PageSingleWord from '../pages/PageSingleWord';

function AppRouter() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<PageMain />}/>
                <Route path="/:word" element={<PageSingleWord />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;