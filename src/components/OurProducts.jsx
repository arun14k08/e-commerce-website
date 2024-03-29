import { useState, useEffect } from "react";
import { client } from "../lib/client";
import { ContainerHeader, Product, Button } from "./index";

const OurProducts = () => {
    const [bestSelling, setBestSelling] = useState([]);

    useEffect(() => {
        client
            .fetch(
                `*[_type == "ourProducts"]{
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
        <div className="mb-20">
            <ContainerHeader
                tabName="Our Products"
                header="Explore Our Products"
            />
            <div className="flex w-full flex-wrap justify-around">
                {bestSelling.map((product) => {
                    return (
                        <>
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
                        </>
                    );
                })}
                <Button key={"btn"} title="View All Products" />
            </div>
        </div>
    );
};

export default OurProducts;
