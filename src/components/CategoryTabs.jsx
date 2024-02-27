import React from "react";
import ContainerHeader from "./ContainerHeader";
import { style } from "../styles";
import CategoryCards from "./CategoryCards";
import { computer, camera, gamePad, headphone, watch, phone } from "../assets";
import { category } from "../constants";

const CategoryTabs = () => {
    let src = [phone, computer, watch, camera, headphone, gamePad];
    return (
        <div className="mb-4">
            <ContainerHeader tabName="Categories" header="Browse By Category" />
            <div className={`${style.flexCenter} ${style.paddingX}`}>
                {category.map((category, i) => {
                    return (
                        <CategoryCards
                            key={category.id}
                            name={category.name}
                            src={src[i]}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default CategoryTabs;
