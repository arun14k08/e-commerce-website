import React from "react";

const Button = (props) => {
    return (
        <button className="bg-[#DB4444] text-white p-4">{props.title}</button>
    );
};

export default Button;
