import React from "react";
import { style } from "../styles";
import { Bulletin } from "../assets";

const ContainerHeader = (props) => {
    return (
        <>
            <div className={`flex items-center`}>
                <img src={Bulletin} alt="bulletin" />
                <h2 className="ml-3 text-[#DB4444] font-semibold">{props.tabName}</h2>
            </div>
            <div className="my-8">
                <h2 className="text-4xl font-semibold">{props.header}</h2>
            </div>
        </>
    );
};

export default ContainerHeader;
