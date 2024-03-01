import { useEffect, useState } from "react";
import { style } from "../styles";
import ContainerHeader from "./ContainerHeader";
import { client, urlFor } from "../lib/client";
const NewArrival = () => {
    const [newArrival, setNewArrival] = useState([]);

    useEffect(() => {
        client
            .fetch(
                `*[_type == "newArrival"]{
                id,
                name,
                desc,
                image,
                }`
            )
            .then((res) => {
                // console.log(res);
                // console.log(urlFor(res[0].image[0]).url());
                setNewArrival(res);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <ContainerHeader tabName="Featured" header="New Arrival" />
            <div
                className={`${style.boxWidth} flex items-center gap-6 text-white mb-12`}
            >
                <div className="w-[100%] h-[600px] bg-black rounded-lg p-6 px-10 flex flex-col justify-end items-start overflow-hidden relative">
                    <img
                        src={
                            newArrival.length
                                ? urlFor(newArrival[1].image[0]).url()
                                : ""
                        }
                        className="absolute bottom-0"
                        alt=""
                    />
                    <div className="z-10">
                        <h3 className="text-[24px] font-semibold mb-3">
                            {newArrival.length && newArrival[1].name}
                        </h3>
                        <p className="text-[14px] font-normal mb-4 w-[250px]">
                            {newArrival.length && newArrival[1].desc}
                        </p>
                        <p className="text-[16px] font-medium mb-3">Shop Now</p>
                    </div>
                </div>
                <div className="w-[100%] h-[600px]  rounded-lg gap-6 flex flex-col px-3 justify-between">
                    <div className="w-[100%] h-[280px] bg-black rounded-lg p-4  flex flex-col justify-end items-start overflow-hidden relative">
                        <img
                            src={
                                newArrival.length
                                    ? urlFor(newArrival[0].image[0]).url()
                                    : ""
                            }
                            className="relative bottom-[-155px] left-[150px]"
                            alt=""
                        />
                        <div className="z-10">
                            <h3 className="text-[24px] font-semibold mb-2">
                                {newArrival.length && newArrival[0].name}
                            </h3>
                            <p className="text-[14px] font-normal mb-4 w-[250px]">
                                {newArrival.length && newArrival[0].desc}
                            </p>
                            <p className="text-[16px] font-medium mb-3">
                                Shop Now
                            </p>
                        </div>
                    </div>
                    <div className="w-[100%] h-[280px] rounded-lg flex justify-between gap-12">
                        <div className="w-[320px] h-[100%] bg-black rounded-lg p-4  flex flex-col justify-end items-start overflow-hidden relative">
                            <img
                                src={
                                    newArrival.length > 0
                                        ? urlFor(newArrival[3].image[0]).url()
                                        : ""
                                }
                                className="absolute left-10"
                                alt=""
                            />
                            <div className="z-10">
                                <h3 className="text-[24px] font-semibold mb-2">
                                    {newArrival.length && newArrival[3].name}
                                </h3>
                                <p className="text-[14px] font-normal mb-4">
                                    {newArrival.length && newArrival[3].desc}
                                </p>
                                <p className="text-[16px] font-medium mb-3">
                                    Shop Now
                                </p>
                            </div>
                        </div>
                        <div className="w-[320px] h-[100%] bg-black rounded-lg p-4  flex flex-col justify-end items-start overflow-hidden relative">
                            <img
                                src={
                                    newArrival.length
                                        ? urlFor(newArrival[2].image[0]).url()
                                        : ""
                                }
                                className="absolute left-10"
                                alt=""
                            />
                            <div className="z-10">
                                <h3 className="text-[24px] font-semibold mb-2">
                                    {newArrival.length && newArrival[2].name}
                                </h3>
                                <p className="text-[14px] font-normal mb-4">
                                    {newArrival.length && newArrival[2].desc}
                                </p>
                                <p className="text-[16px] font-medium mb-3">
                                    Shop Now
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewArrival;
