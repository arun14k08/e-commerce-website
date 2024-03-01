// import React from 'react'

import { style } from "../styles";
import { features } from "../constants";

const Fetures = () => {
    return (
        <div className={`${style.flexCenter} my-16 gap-[100px] flex-wrap`}>
            {features.map((feature) => {
                return (
                    <div
                        key={feature.id}
                        className="flex flex-col items-center gap-2 my-8"
                    >
                        <img
                            src={feature.image}
                            alt={feature.name}
                            className="w-[80px] h-[80px]"
                        />
                        <h3 className="text-[20px] font-semibold">
                            {feature.name}
                        </h3>
                        <p className="text-[14px] font-normal">
                            {feature.desc}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default Fetures;
