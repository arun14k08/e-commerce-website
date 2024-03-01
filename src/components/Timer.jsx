import { useEffect } from "react";
// import { style } from "../styles";
import { useState } from "react";

const Timer = () => {
    const [Timer, setTimer] = useState({
        countDownDate: new Date("Mar 03, 2024 00:00:00").getTime(),
        now: new Date().getTime(),
        timeLeft: "00",
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
    });
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer({
                ...Timer,
                now: new Date().getTime(),
                timeLeft: Timer.countDownDate - Timer.now,
                days: Math.floor(Timer.timeLeft / (1000 * 60 * 60 * 24)),
                hours: Math.floor(
                    (Timer.timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                ),
                minutes: Math.floor(
                    (Timer.timeLeft % (1000 * 60 * 60)) / (1000 * 60)
                ),
                seconds: Math.floor((Timer.timeLeft % (1000 * 60)) / 1000),
            });
            // console.log(
            //     "Days: " +
            //         Timer.days +
            //         " Hours: " +
            //         Timer.hours +
            //         " Minutes: " +
            //         Timer.minutes +
            //         " Seconds: " +
            //         Timer.seconds +
            //         " TimeLeft: " +
            //         Timer.timeLeft
            // );
        }, 1000);
        return () => clearInterval(interval);
    }, [Timer]);

    return (
        <div className="ml-40 flex mr-auto justify-around items-center">
            <div className="flex flex-col justify-center items-center">
                <p className="text-lg font-semibold">Day&#39;s</p>
                <h3 className="text-4xl font-semibold">
                    {String(Timer.days).length > 1
                        ? Timer.days
                        : `0${Timer.days}`}
                </h3>
            </div>
            <span className="text-4xl font-semibold mx-4 text-[#E07575] mt-4">
                :
            </span>
            <div className="flex flex-col justify-center items-center">
                <p className="text-lg font-semibold">Hours</p>
                <h3 className="text-4xl font-semibold">
                    {String(Timer.hours).length > 1
                        ? Timer.hours
                        : `0${Timer.hours}`}
                </h3>
            </div>
            <span className="text-4xl font-semibold mx-4 text-[#E07575] mt-4">
                :
            </span>
            <div className="flex flex-col justify-center items-center">
                <p className="text-lg font-semibold">Minutes</p>
                <h3 className="text-4xl font-semibold">
                    {String(Timer.minutes).length > 1
                        ? Timer.minutes
                        : `0${Timer.minutes}`}
                </h3>
            </div>
            <span className="text-4xl font-semibold mx-4 text-[#E07575] mt-4">
                :
            </span>
            <div className="flex flex-col justify-center items-center">
                <p className="text-lg font-semibold">Seconds</p>
                <h3 className="text-4xl font-semibold">
                    {String(Timer.seconds).length > 1
                        ? Timer.seconds
                        : `0${Timer.seconds}`}
                </h3>
            </div>
        </div>
    );
};

export default Timer;
