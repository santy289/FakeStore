import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
    HOME_RUTE, 
    PRODUCT_DETAIL_RUTE,
    ABOUT_RUTE,
    RUTE_404,
    LOGIN_RUTE,
    REGISTER_ROUTE,
    CAR_ROUTE,

} from './routes';
import Home from '../pages/Home';
import Page404 from '../pages/Page404';
import ProductDetail from '../pages/ProductDetail';
import About from '../pages/About';
import Login from '../pages/login/login.jsx';
import Register from '../pages/Register/Register.jsx'
import Car from '../pages/Car/Car.jsx'

function Mainrouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={RUTE_404} element={<Page404 />} />
                <Route path={HOME_RUTE} element={<Home />} />
                <Route path={`${PRODUCT_DETAIL_RUTE}/:id`} element={<ProductDetail />} />
                <Route path={ABOUT_RUTE} element={<About />} />
                <Route path={LOGIN_RUTE} element={<Login />} />
                <Route path={REGISTER_ROUTE} element={<Register />} />
                <Route path={CAR_ROUTE} element={<Car />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Mainrouter;