// import React from "react";
import {
    Navbar,
    Hero,
    Products,
    CategoryTabs,
    BestSelling,
    OurProducts,
    Footer,
} from "./components";
import Fetures from "./components/Fetures";
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
                <Fetures />
            </div>
            <Footer />
        </>
    );
}

export default App;
