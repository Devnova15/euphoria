import './App.css';
import TaskBar from "../../euphoria/src/components/TaskBar/TaskBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import RootPage from "./pages/RootPage.jsx";
import CartPage from "./pages/CartPage/CartPage.jsx";
import WishListPage from "./pages/WishListPage.jsx";
import {
    BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import {ROUTS} from "./constants/routs.js";
import Layout from "./Layout.jsx";
import {useState} from "react";
import {LOCAL_STORAGE_KEYS} from "./constants/localStorageKeys.js";


const initCart = () => {
    const cart = localStorage.getItem(LOCAL_STORAGE_KEYS.CART)
    return cart ? JSON.parse(cart) : []
}


const App = () => {

    const [cart, setCart] = useState(initCart())

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<RootPage cart={cart} setCart={setCart}/>}/>
                    <Route path={ROUTS.CART} element={<CartPage cart={cart} setCart={setCart}/>}/>
                    <Route path={ROUTS.WISHLIST} element={<WishListPage/>}/>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;