import React from "react";
import { style } from "../styles";
import { useState } from "react";

const Timer = () => {
    // const countDownDate = new Date("Mar 03, 2024 00:00:00").getTime();
    // const [now, setNow] = useState(new Date().getTime());
    // const [timeLeft, setTimeLeft] = useState(countDownDate - now)
    // const [days, setDays] = useState(Math.floor(timeLeft / (1000 * 60 * 60 * 24)))
    // const [hours, setHours] = useState(Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
    // const [minutes, setMinutes] = useState(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)))
    // const [seconds, setSeconds] = useState(Math.floor((timeLeft % (1000 * 60)) / 1000))

    // let call = () => {
        
    //     console.log(`${days} : ${hours} : ${minutes} : ${seconds}`);
    // };

    // let myfunc = setInterval(call, 1000);

    return (
        <div className="ml-12 flex mr-auto justify-around items-center">
            <div>
                <p className="text-lg font-semibold">Day's</p>
                <h3 className="text-4xl font-semibold">00</h3>
            </div>
            <span className="text-4xl font-semibold mx-4 text-[#E07575] mt-4">
                :
            </span>
            <div>
                <p className="text-lg font-semibold">Hours</p>
                <h3 className="text-4xl font-semibold">00</h3>
            </div>
            <span className="text-4xl font-semibold mx-4 text-[#E07575] mt-4">
                :
            </span>
            <div>
                <p className="text-lg font-semibold">Minutes</p>
                <h3 className="text-4xl font-semibold">00</h3>
            </div>
            <span className="text-4xl font-semibold mx-4 text-[#E07575] mt-4">
                :
            </span>
            <div>
                <p className="text-lg font-semibold">Seconds</p>
                <h3 className="text-4xl font-semibold">00</h3>
            </div>
        </div>
    );
};

export default Timer;
