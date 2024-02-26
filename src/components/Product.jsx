import React from "react";
import { ProductImage } from "../assets";
import { style } from "../styles";
import Rating from "./Rating";

const Product = () => {
    return (
        <div className={` flex-col mb-10`}>
            <div
                className={`bg-[#F5F5F5] ${style.flexCenter} px-8 py-6 relative mb-2`}
            >
                <div className="absolute top-4 left-4 px-3  rounded-lg bg-[#DB4444] text-white">
                    -40%
                </div>
                <img
                    src={ProductImage}
                    alt="product"
                    className="object-contain"
                />
            </div>
            <div className="flex flex-col gap-2">
                <p className="font-semibold">HAVIT HV-G92 Gamepad</p>
                <span className="text-[#DB4444] font-semibold">
                    $120 <s className="text-[#7D8184]">$160</s>
                </span>
                <span className="flex gap-1">
                    <Rating />
                </span>
                <p>{"(80)"}</p>
            </div>
        </div>
    );
};

export default Product;
