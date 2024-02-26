import React from "react";
import { style } from "../styles";
import { HeroImage, apple } from "../assets";
import { HeroText } from "../constants";

const Hero = () => {
    return (
        <div className={`${style.boxWidth} flex ${style.paddingY} mb-12`}>
            <div className={`${style.flexCenter} w-[100%]`}>
                <h1>Categories</h1>
            </div>
            <div className={`bg-black w-[300%] overflow-hidden flex`}>
                <div
                    className={`w-[100%] text-white flex flex-col ${style.paddingX} ${style.paddingY}`}
                >
                    <div className={`flex justify-between items-center`}>
                        <img src={apple} alt="apple" />
                        <h3 className="mr-auto ml-4">{HeroText.title}</h3>
                    </div>
                    <div className="my-4">
                        <p className="text-5xl font-semibold mb-4">
                            {HeroText.desc}
                        </p>
                        <p>{HeroText.buttonText}</p>
                    </div>
                </div>
                <img
                    src={HeroImage}
                    alt="hero-image"
                    className={`w-[500px] h-[350px]  block relative top-6`}
                />
            </div>
        </div>
    );
};

export default Hero;
