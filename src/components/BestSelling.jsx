import React, { useEffect, useState } from "react";
import { style } from "../styles";
import ContainerHeader from "./ContainerHeader";
import Product from "./Product";
import { client } from "../lib/client";
const BestSelling = () => {
    const [bestSelling, setBestSelling] = useState([]);

    useEffect(() => {
        client
            .fetch(
                `*[_type == "bestSelling"]{
                id,
                name,
                price,
                priceCross,
                discount,
                totalRatings,
                stars,
                image,
                }`
            )
            .then((res) => {
                // console.log(res);
                setBestSelling(res);
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <div>
            <ContainerHeader
                tabName="This Month"
                header="Best Selling Products"
            />
            <div className="flex gap-8 w-max">
                {bestSelling.map((product, i) => {
                    return (
                        <Product
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            priceCross={product.priceCross}
                            totalRatings={product.totalRatings}
                            stars={product.stars}
                            discount={product.discount}
                            image={product.image[0]}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default BestSelling;
