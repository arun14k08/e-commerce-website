// import React from "react";
import {
    Navbar,
    Hero,
    Products,
    CategoryTabs,
    BestSelling,
    OurProducts,
    Footer,
    NotFound,
    ProductDetails,
} from "./components";
import Fetures from "./components/Fetures";
import NewArrival from "./components/NewArrival";
import { style } from "./styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <div className={`w-full ${style.paddingX} overflow-hidden`}>
                        <Navbar />
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <Hero />
                                    <Products />
                                    <CategoryTabs />
                                    <BestSelling />
                                    <OurProducts />
                                    <NewArrival />
                                    <Fetures />
                                </>
                            }
                        ></Route>
                        <Route path="*" element={<NotFound />}></Route>
                        <Route
                            path="/test"
                            element={<ProductDetails />}
                        ></Route>
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
