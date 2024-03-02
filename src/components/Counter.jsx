import React from "react";

export const Counter = () => {
    return (
        <div className="flex text-[20px] font-medium">
            <button className="p-2 border-2 border-[#7D8184] rounded-l-md category-cards">
                -
            </button>
            <p className="p-2 border-y-2 border-x-0 border-[#7D8184] px-8">0</p>
            <button className="p-2 border-2 border-[#7D8184] rounded-r-md category-cards">
                +
            </button>
        </div>
    );
};
