// import React from 'react'

import { WishList } from "../assets";
import { style } from "../styles";
import Button from "./Button";
import Rating from "./Rating";
import { Counter } from "./index";
const ProductDetails = () => {
    let sizes = ["XS", "S", "M", "L", "XL"];
    return (
        <>
            <div className={`${style.boxWidth} ${style.flexCenter}`}>
                <div className={`${style.flexCenter} w-full`}>IMAGES</div>
                <div className="flex flex-col gap-4 p-9">
                    <h2 className="font-semibold text-[24px]">TITLE</h2>
                    <div className="flex">
                        <Rating />
                    </div>
                    <p className="text-[24px] font-normal">$192.00</p>
                    <p className="text-[14px] font-normal w-[400px]">
                        PlayStation 5 Controller Skin High quality vinyl with
                        air channel adhesive for easy bubble free install & mess
                        free removal Pressure sensitive.
                    </p>
                    <div className="flex gap-2">
                        <h2 className="text-[20px] font-normal">Size:</h2>
                        {sizes.map((size, i) => {
                            return (
                                <div
                                    className="px-2 w-fit border-2 border-[#7D8184] rounded-md"
                                    key={i}
                                >
                                    {size}
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex gap-4 justify-start items-center">
                        <Counter />
                        <Button title="Buy Now" />
                        <div className=" border-2 border-[#7D8184] rounded-md w-fit h-fit">
                            <img src={WishList} alt="" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="" alt="" />
                            <div>
                                <h2>Free Delivery</h2>
                                <p>Enter your postal code for Delivery Availability</p>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
