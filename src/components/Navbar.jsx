import React from "react";
import { Navlinks } from "../constants";
import { Cart, WishList, Search } from "../assets";
import { style } from "../styles";

const Navbar = () => {
    return (
        <>
            <div className={`w-full ${style.flexCenter}  mt-4 flex-1`}>
                <h2 className="poppins text-[2rem] font-semibold">Exclusive</h2>
                <ul
                    className={`${style.flexCenter} justify-between mr-auto ml-auto`}
                >
                    {Navlinks.map((NavLink) => {
                        return (
                            <li
                                key={NavLink.id}
                                className="m-4 hover:underline hover:cursor-pointer underline-offset-8"
                            >
                                {NavLink.title}
                            </li>
                        );
                    })}
                </ul>
                <div className={`${style.paddingX} ${style.flexCenter}`}>
                    <div className="flex">
                        <input
                            type="text"
                            placeholder="What are you looking for"
                            className="bg-[#F5F5F5] px-4 py-2"
                        />
                        <img
                            src={Search}
                            alt="search"
                            className="mr-4 bg-[#F5F5F5] px-4 py-2  hover:cursor-pointer"
                        />
                    </div>
                    <img src={WishList} alt="wishlist" className="mr-4" />
                    <img src={Cart} alt="cart" />
                </div>
            </div>
        </>
    );
};

export default Navbar;
