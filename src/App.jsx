import React from "react";
import { Navbar, Hero, Products, CategoryTabs } from "./components";
import { style } from "./styles"

function App() {
    return (
        <>
            <div className={`w-full ${style.paddingX} overflow-hidden`}>
                <Navbar />
                <Hero />
                <Products />
                <CategoryTabs />
            </div>
        </>
    );
}

export default App;
