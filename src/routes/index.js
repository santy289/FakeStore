import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
    HOME_RUTE, 
    PRODUCT_DETAIL_RUTE,
    ABOUT_RUTE,
    RUTE_404,
} from './routes';
import Home from '../pages/Home';
import Page404 from '../pages/Page404';
import ProductDetail from '../pages/ProductDetail';
import About from '../pages/About';

function Mainrouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={RUTE_404} element={<Page404 />} />
                <Route path={HOME_RUTE} element={<Home />} />
                <Route path={PRODUCT_DETAIL_RUTE} element={<ProductDetail />} />
                <Route path={ABOUT_RUTE} element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Mainrouter;