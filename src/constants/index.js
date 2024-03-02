import { services, customer, money } from "../assets";

export const Navlinks = [
    {
        id: "home",
        title: "Home",
        to:"/",
    },
    {
        id: "contact",
        title: "Contact",
        to:"/contact",
    },
    {
        id: "about",
        title: "About",
        to:"/about",
    },
    {
        id: "sign-up",
        title: "Sign Up",
        to:"/sign-up",
        
    },
    {
        id: "product",
        title: "Test page",
        to:"/test",
        
    },
];

export const HeroText = {
    title: "iPhone 14 Series",
    desc: "Up to 10% off Voucher",
    buttonText: "Shop Now ->",
};

export const category = [
    {
        id: "phones",
        name: "Phones",
    },
    {
        id: "computers",
        name: "Computers",
    },
    {
        id: "smartwatch",
        name: "SmartWatch",
    },
    {
        id: "camera",
        name: "Camera",
    },
    {
        id: "headphones",
        name: "Headphones",
    },
    {
        id: "gaming",
        name: "Gaming",
    },
];

export const features = [
    {
        id: "FREE AND FAST DELIVERY",
        name: "FREE AND FAST DELIVERY",
        desc: "Free delivery for all orders over $140",
        image: services,
    },
    {
        id: "24/7 CUSTOMER SERVICE",
        name: "24/7 CUSTOMER SERVICE",
        desc: "Friendly 24/7 customer support",
        image: customer,
    },
    {
        id: "MONEY BACK GUARANTEE",
        name: "MONEY BACK GUARANTEE",
        desc: "We reurn money within 30 days",
        image: money,
    },
];
