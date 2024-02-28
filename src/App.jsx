import React from "react";
import {
    Navbar,
    Hero,
    Products,
    CategoryTabs,
    BestSelling,
    Timer,
} from "./components";
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
            </div>
        </>
    );
}

export default App;
