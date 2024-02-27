import React from 'react'
import { style } from '../styles'
import { camera, phone } from "../assets";
const CategoryCards = (props) => {
  return (
    <div className={`${style.flexCenter} w-[170px] h-[145px] mb-6 border-solid border-2 border-[#bbb] mr-6`}>
                <div className={`${style.flexCenter} flex-col`}>
                    <img
                        src={props.src}
                        alt=""
                        className="w-[56px] h-[56px]"
                    />
                    <h3>{props.name}</h3>
                </div>
            </div>
  )
}

export default CategoryCards