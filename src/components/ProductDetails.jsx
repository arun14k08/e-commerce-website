// import React from 'react'

import { WishList, delivery, psBig, psImages, returnIcon } from "../assets";
import { style } from "../styles";
import Button from "./Button";
import Rating from "./Rating";
import { Counter, OurProducts } from "./index";
const ProductDetails = () => {
    let sizes = ["XS", "S", "M", "L", "XL"];
    return (
        <>
            <div
                className={`${style.boxWidth} ${style.flexCenter} sm:flex-row flex-col`}
            >
                <div className={`${style.flexCenter} w-[200%] gap-4`}>
                    <div className="flex flex-col gap-2">
                        {psImages.map((image, i) => {
                            return (
                                <div
                                    key={i}
                                    className="py-6 px-4 border-2 border-slate-400 rounded-md"
                                >
                                    <img src={image} alt="" className="" />
                                </div>
                            );
                        })}
                    </div>
                    <div className="py-10 px-6 border-2 border-slate-400 rounded-md">
                        <img src={psBig} alt="" />
                    </div>
                </div>
                <div className="flex flex-col gap-4 p-9 w-[100%]">
                    <h2 className="font-semibold text-[24px]">
                        Playstation 5 Controller
                    </h2>
                    <div className="flex">
                        <Rating />
                    </div>
                    <p className="text-[24px] font-normal">$192.00</p>
                    <p className="text-[14px] font-normal">
                        PlayStation 5 Controller Skin High quality vinyl with
                        air channel adhesive for easy bubble free install & mess
                        free removal Pressure sensitive.
                    </p>
                    <div className="flex gap-2 sm:flex-row flex-col">
                        <h2 className="text-[20px] font-normal">Size:</h2>
                        <div className="flex gap-2">
                            {sizes.map((size, i) => {
                                return (
                                    <div
                                        className="px-2 w-fit border-2 border-[#7D8184] rounded-md category-cards"
                                        key={i}
                                    >
                                        {size}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="flex gap-4 justify-start items-center sm:flex-row flex-col">
                        <Counter />
                        <div className="flex gap-4 justify-center items-center">
                            <Button title="Buy Now" />
                            <div className=" border-2 border-[#7D8184] rounded-md w-fit h-fit">
                                <img src={WishList} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="border-2 border-slate-400 rounded-md">
                        <div className="flex gap-3 px-4 py-2 border-b-2 border-slate-400">
                            <img src={delivery} alt="delivery" />
                            <div className="flex flex-col gap-2">
                                <h2 className="text-[16px] font-medium">
                                    Free Delivery
                                </h2>
                                <p className="text-[12px] font-medium">
                                    <u>
                                        Enter your postal code for Delivery
                                        Availability
                                    </u>
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-3 px-4 py-2">
                            <img src={returnIcon} alt="return" />
                            <div className="flex flex-col gap-2">
                                <h2 className="text-[16px] font-medium">
                                    Return Delivery
                                </h2>
                                <p className="text-[12px] font-medium">
                                    Free 30 Days Delivery Returns.
                                    <u> Details </u>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <OurProducts />
        </>
    );
};

export default ProductDetails;
