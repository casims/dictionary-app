import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Components
import Header from '../components/Header';
import Footer from "../components/Footer";

//Pages
import PageMain from '../pages/PageMain';
import PageSingleWord from '../pages/PageSingleWord';
import PageAbout from "../pages/PageAbout";
import PageBookmarks from "../pages/PageBookmarks";

function AppRouter() {

    return (
        <BrowserRouter>
            <Header/>
                <main>
                    <Routes>
                        <Route path="/" exact element={<PageMain />}/>
                        <Route path="/word/:word" element={<PageSingleWord />}/>
                        <Route path="/bookmarks" element={<PageBookmarks />}/>
                        <Route path="/about" element={<PageAbout />}/>
                    </Routes>
                </main>
            <Footer/>
        </BrowserRouter>
    );
};

export default AppRouter;