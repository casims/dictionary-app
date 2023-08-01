import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Components
import Header from '../components/Header';

//Pages
import PageMain from '../pages/PageMain';
import PageSingleWord from '../pages/PageSingleWord';

function AppRouter() {

    return (
        <BrowserRouter>
            <Header/>
            <main>
                <Routes>
                    <Route path="/" exact element={<PageMain />}/>
                    <Route path="/word/:word" element={<PageSingleWord />}/>
                    <Route path="/favorites" />
                    <Route path="/about" />
                </Routes>
            </main>
        </BrowserRouter>
    );
};

export default AppRouter;