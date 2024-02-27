import React from "react";
import { productImages } from "../assets";
import { style } from "../styles";
import Product from "./Product";
import { productData } from "../constants";
import ContainerHeader from "./ContainerHeader";

const Products = () => {
    return (
        <>
            <ContainerHeader tabName="Today's" header="Flash Sales" />
            <div className="flex gap-8 w-max">
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
