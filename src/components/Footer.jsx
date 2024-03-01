// import React from 'react'
import { style } from "../styles";
const Footer = () => {
    return (
        <div
            className={`${style.flexCenter} flex-col w-full text-white bg-black pt-12`}
        >
            <div className="flex justify-between w-full px-6">
                <div className="flex flex-col gap-4">
                    <h2 className="text-[24px] font-bold">Exclusive</h2>
                    <p className="text-[16px] font-medium">Subscribe</p>
                    <p className="text-[16px] font-normal">
                        Get 10% off your first order
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-[24px] font-bold">Support</h2>
                    <p className="text-[16px] font-medium">
                        111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                    </p>
                    <p className="text-[16px] font-normal">
                        exclusive@gmail.com
                    </p>
                    <p className="text-[16px] font-normal">+88015-88888-9999</p>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-[24px] font-bold">Account</h2>
                    <p className="text-[16px] font-medium">My Account</p>
                    <p className="text-[16px] font-normal">Login / Register</p>
                    <p className="text-[16px] font-normal">Cart</p>
                    <p className="text-[16px] font-normal">Wish List</p>
                    <p className="text-[16px] font-normal">Shop</p>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-[24px] font-bold">Quick Link</h2>
                    <p className="text-[16px] font-medium">Privacy Policy</p>
                    <p className="text-[16px] font-normal">Terms Of Use</p>
                    <p className="text-[16px] font-normal">FAQ</p>
                    <p className="text-[16px] font-normal">Contact</p>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-[24px] font-bold">Exclusive</h2>
                    <p className="text-[16px] font-medium">Subscribe</p>
                    <p className="text-[16px] font-normal">
                        Get 10% off your first order
                    </p>
                </div>
            </div>
            <div className="text-[#D9D9D9] mt-10">
                &copy; Copyright Rimel 2022. All right reserved
            </div>
        </div>
    );
};

export default Footer;
