import './App.css';
import TaskBar from "../../euphoria/src/components/TaskBar/TaskBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import RootPage from "./pages/RootPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import WishListPage from "./pages/WishListPage.jsx";
import {
    BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import {ROUTS} from "./constants/routs.js";
import Layout from "./Layout.jsx";

function App() {

    return (
    <Router>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<RootPage/>}/>
                <Route path={ROUTS.CART} element={<CartPage/>}/>
                <Route path={ROUTS.WISHLIST} element={<WishListPage/>}/>
            </Route>
        </Routes>
    </Router>
    );
}

export default App;