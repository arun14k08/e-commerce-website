import React from "react";
import { Button } from "../components";

const NotFound = () => {
    return (
        <div className="flex flex-col justify-evenly items-center h-[500px]">
            <h1 className="text-[110px] font-medium">404 Not Found</h1>
            <p className="text-lg">
                Your visited page not found. You may go home page.
            </p>
            <Button title="Back to HomePage"/>
        </div>
    );
};

export default NotFound;
