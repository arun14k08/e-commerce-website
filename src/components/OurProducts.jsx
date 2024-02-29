import { useState, useEffect } from "react";
import { client } from "../lib/client";
import {ContainerHeader, Product} from "./index"

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
    <div>
            <ContainerHeader
                tabName="Our Products"
                header="Explore Our Products"
            />
            <div className="flex gap-8 w-max">
                {bestSelling.map(product => {
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
  )
}

export default OurProducts