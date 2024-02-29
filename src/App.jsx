// import React from "react";
import {
    Navbar,
    Hero,
    Products,
    CategoryTabs,
    BestSelling,
    OurProducts,
} from "./components";
import NewArrival from "./components/NewArrival";
import { style } from "./styles";

function App() {
    return (
        <>
            <div className={`w-full ${style.paddingX} overflow-hidden`}>
                <Navbar />
                <Hero />
                <Products />
                <CategoryTabs />
                <BestSelling />
                <OurProducts />
                <NewArrival />
            </div>
        </>
    );
}

export default App;
