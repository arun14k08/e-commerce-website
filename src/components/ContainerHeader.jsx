import React from "react";
import { style } from "../styles";
import { Bulletin } from "../assets";
import Timer from "./Timer";

const ContainerHeader = (props) => {
    // console.log(props);
    return (
        <>
            <div className={`flex items-center mt-5 `}>
                <img src={Bulletin} alt="bulletin" />
                <h2 className="ml-3 text-[#DB4444] font-semibold">
                    {props.tabName}
                </h2>
                {props.needTimer ? <Timer /> : null}
            </div>
            <div className="my-8 mt-2">
                <h2 className="text-4xl font-semibold">{props.header}</h2>
            </div>
        </>
    );
};

export default ContainerHeader;
