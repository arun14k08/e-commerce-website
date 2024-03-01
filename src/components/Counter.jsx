import React from "react";

export const Counter = () => {
    return (
        <div className="flex text-[20px] font-medium">
            <button className="p-3 border-2 border-[#7D8184] rounded-l-md">
                -
            </button>
            <p className="p-3 border-2 border-[#7D8184] px-8">0</p>
            <button className="p-3 border-2 border-[#7D8184] rounded-r-md">
                +
            </button>
        </div>
    );
};
