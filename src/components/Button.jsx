// import React from "react";

const Button = (props) => {
    return (
        <button className="bg-[#DB4444] text-white rounded-md sm:px-8 sm:py-2 px-2 py-2">
            {props.title}
        </button>
    );
};

export default Button;
