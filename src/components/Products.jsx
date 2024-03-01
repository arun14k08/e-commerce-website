import { useEffect, useState } from "react";
import { style } from "../styles";
import Product from "./Product";
import ContainerHeader from "./ContainerHeader";
import { client } from "../lib/client";

const Products = (props) => {
    const [flashSales, setFlashSales] = useState([]);

    useEffect(() => {
        client
            .fetch(
                `*[_type == "flashSales"]{
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
                if (res.length < 2) {
                    res = [
                        ...res,
                        {
                            id: "pace-holder-1",
                            name: "name",
                            price: "0",
                            priceCross: "0",
                            totalRatings: "0",
                            stars: "0",
                            discount: "0",
                            image: "",
                        },
                        {
                            id: "pace-holder-2",
                            name: "name",
                            price: "0",
                            priceCross: "0",
                            totalRatings: "0",
                            stars: "0",
                            discount: "0",
                            image: "",
                        },
                        {
                            id: "pace-holder-3",
                            name: "name",
                            price: "0",
                            priceCross: "0",
                            totalRatings: "0",
                            stars: "0",
                            discount: "0",
                            image: "",
                        },
                    ];
                }
                setFlashSales(res);
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <>
            <ContainerHeader
                tabName="Today's"
                header="Flash Sales"
                needTimer={true}
            />
            <div className="flex gap-8 w-max">
                {flashSales.map((product, i) => {
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
        </>
    );
};

Product.defaultProps = {
    key: "pace-holder",
    name: "name",
    price: "0",
    priceCross: "0",
    totalRatings: "0",
    stars: "0",
    discount: "0",
    image: "",
};

export default Products;
