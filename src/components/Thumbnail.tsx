import React from "react";
import { useState , useContext} from "react";
// import Image from "next/image";
// import {
//   SearchIcon,
//   StarIcon,
//   HeartIcon,
//   BriefcaseIcon,
// } from "@heroicons/react/solid";
// import FavContext from "../pages/index";
type catProps = {
    product:{
        id: number;
        title: string;
        price: number;
        rating: { rate: number; count: number };
        image: string;
        category: string;
        description: string;
      }
}
export const Thumbnail = ({ product }: catProps) => {
  let base = product.image;
  let rate = product.rating.rate;
  let [favourite, setfavourite] = useState("");

//   let handleFavourites = () => {
//     setfavourite(result.title);
//     console.log(star);
//   };

  return (
    <div className=" thumbnail">
      <div className="md:group-hover:scale-105  transition transform ">
        <div className="image-container">
          <img className="image" src={base} alt={product.title}/>
        </div>
      </div>
      <div>
        
        <p className="title truncate">
          {product.title}
        </p>
        <p className="truncate">
          {product.description}
        </p>
      </div>
      <div className="flex px-1 items-center opacity-0 group-hover:opacity-100 relative">
        <p className="font-bold text-sm">Rating: {rate}</p>

        <div className="flex px-1">
          {/* {[...Array(rate)].map((rate) => (
            <StarIcon className="rate fill-yellow-400 w-4 h-4" />
          ))} */}
        </div>
        {/* <HeartIcon
          onClick={handleFavourites}
          className={"rate fill-red-600 w-5 h-5 absolute right-0"}
        /> */}
        {/* <BriefcaseIcon  className={'rate fill-red-600 w-5 h-5 absolute right-0'}/> */}
        {/* <p className=" pl-2 font-bold text-sm">{result.release_date}</p> */}
      </div>
    </div>
  );
};