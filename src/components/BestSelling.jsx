import React from "react";
import { style } from "../styles";
import ContainerHeader from "./ContainerHeader";
import Product from "./Product";
import { BestSellingProducts } from "../constants";
import { productImages2 } from "../assets";

const BestSelling = () => {
    return (
        <div>
            <ContainerHeader
                tabName="This Month"
                header="Best Selling Products"
            />
            <div className="flex gap-8 w-max">
                {BestSellingProducts.map((product, i) => {
                    return (
                        <Product
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            priceCross={product.priceCross}
                            totalRatings={product.totalRatings}
                            stars={product.stars}
                            discount={product.discount}
                            image={productImages2[i]}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default BestSelling;
