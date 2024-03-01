import React from "react";
import ContainerHeader from "./ContainerHeader";
import { style } from "../styles";
import CategoryCards from "./CategoryCards";
import { category } from "../constants";
import {phone, computer, watch, camera, headphone, gamePad} from "../assets/index"

const CategoryTabs = () => {
    let src = [phone, computer, watch, camera, headphone, gamePad];
    return (
        <div className="mb-20">
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
