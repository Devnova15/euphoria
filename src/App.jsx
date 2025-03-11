import './App.css';
import TaskBar from "../../euphoria/src/components/TaskBar/TaskBar.jsx";
import {BannerEmblaCarousel} from "./components/Banner&EmblaCarousel/Banner&EmblaCarousel.jsx";
import Products from "./components/Products/Products.jsx";

function App() {
    return (
        <>
            <TaskBar
                img1="search.svg" name1="Search Icon"
                img2="heart.svg" name2="Heart Icon"
                img3="shopping-cart.svg" name3="Cart Icon"
            />
            <BannerEmblaCarousel/>
            <Products/>

            {/*<Banner/>*/}
            {/*<Popular/>*/}
            {/*<Footer/>*/}
        </>
    );
}

export default App;