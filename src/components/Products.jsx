import React from "react";
import { Bulletin } from "../assets";
import { style } from "../styles";
import Product from "./Product";

const Products = () => {
    return (
        <>
            <div className={`flex items-center`}>
                <img src={Bulletin} alt="bulletin" />
                <h2 className="ml-3 text-[#DB4444] font-semibold">Today's</h2>
            </div>
            <div className="my-8">
                <h2 className="text-4xl font-semibold">Flash Sales</h2>
            </div>
            <div className="flex gap-4">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </>
    );
};

export default Products;
