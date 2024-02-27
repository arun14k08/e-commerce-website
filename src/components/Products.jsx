import React from "react";
import { Bulletin, productImages } from "../assets";
import { style } from "../styles";
import Product from "./Product";
import { productData } from "../constants";

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
            <div className="flex gap-4 w-max">
                {productData.map((product, i) => {
                    return (
                        <Product
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            priceCross={product.priceCross}
                            totalRatings={product.totalRatings}
                            stars={product.stars}
                            discount={product.discount}
                            image={productImages[i]}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default Products;
