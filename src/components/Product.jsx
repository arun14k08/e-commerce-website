import React from "react";
import { style } from "../styles";
import Rating from "./Rating";
import { urlFor } from "../lib/client";

const Product = (props) => {
    // console.log( props.test &&    urlFor(props.test).url());
    // console.log(urlFor(props.test).toString());
    return (
        <div className={` flex-col mb-10`}>
            <div
                className={`bg-[#F5F5F5] ${style.flexCenter} px-8 py-6 relative mb-2 rounded-lg`}
            >
                <div className="absolute top-4 left-4 px-3  rounded-lg bg-[#DB4444] text-white">
                    {`-${props.discount}%`}
                </div>
                {
                    // props.image &&
                    <img
                        src={
                            props.image
                                ? urlFor(props.image).url()
                                : "https://placehold.co/180x190"
                        }
                        alt="product"
                    />
                }
            </div>
            <div className="flex flex-col gap-2">
                <p className="font-semibold">{props.name}</p>
                <span className="text-[#DB4444] font-semibold">
                    ${props.price}{" "}
                    <s className="text-[#7D8184]">${props.priceCross}</s>
                </span>
                <span className="flex gap-1">
                    <Rating stars={props.stars} />
                </span>
                <p>{`(${props.totalRatings})`}</p>
            </div>
        </div>
    );
};

export default Product;
