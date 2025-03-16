import TaskBar from "./components/TaskBar/TaskBar.jsx";
import {Outlet} from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";

const Layout = () => {
    return (
        <>
            <TaskBar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}

export default Layout;