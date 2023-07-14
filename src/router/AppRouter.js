import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Pages
import PageMain from '../pages/PageMain';
import PageSingleWord from '../pages/PageSingleWord';
import PageSearch from '../pages/PageSearch';

function AppRouter() {
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<PageMain />}/>
            <Route path="/:word" element={<PageSingleWord />}/>
            <Route path="/search/:word" element={<PageSearch />}/>
        </Routes>
    </BrowserRouter>
};

export default AppRouter;
