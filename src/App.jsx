import React from "react";
import { Navbar, Hero, Products } from "./components";
import { style } from "./styles";

function App() {
    return (
        <>
            <div className={`w-full ${style.paddingX} overflow-hidden`}>
                <Navbar />
                <Hero />
                <Products />
            </div>
        </>
    );
}

export default App;
