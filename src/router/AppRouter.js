import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Pages
import PageMain from '../pages/PageMain';
import PageSingleWord from '../pages/PageSingleWord';

function AppRouter() {
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<PageMain />}/>
            <Route path="/:word" element={<PageSingleWord />}/>
        </Routes>
    </BrowserRouter>
};

export default AppRouter;