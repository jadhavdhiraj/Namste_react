import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { useState } from "react";
import { MenuShimmer } from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [text, setTet] = useState("test");

  const restaurant = useRestaurant(resId);

  const dispatch = useDispatch();
  const handleClick = (item) => {
    dispatch(addItem(item));
  };
  const handleRemove = () => {
    dispatch(removeItem());
  };

  return !restaurant ? (
    <MenuShimmer/>
  ) : (
    <div>
      <div className="flex bg-slate-900 text-white">
        <img
          className="w-70 h-60 object-cover p-10 m-10"
          src={
            IMG_CDN_URL +
            restaurant?.cards?.[0].card?.card?.info?.cloudinaryImageId
          }
        />
        <div className="m-20 p-2 ">
          <h1 className="text-3xl  font-bold py-2">
            {restaurant?.cards?.[0].card?.card?.info?.name}
          </h1>

          <h3 className="non">
            {restaurant?.cards?.[0].card?.card?.info?.cuisines.join(", ")}
          </h3>
          <h3>
            {restaurant?.cards?.[0].card?.card?.info?.avgRating} stars ||{"  "}
            {restaurant?.cards?.[0].card?.card?.info?.costForTwoMessage}{" "}
          </h3>
          <h3></h3>
        </div>

        {/* <h1>Restaurant id:{resId}</h1>                        
            <h1>{restaurant?.name}</h1>
            <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} alt="menu"/>
            <h3>{restaurant?.city}</h3>
            <h3>{restaurant?.areaName}</h3> */}

        {/* <h3>{restaurant?.avgRating} stars</h3> */}

        {/* <h3>{restaurant?.costForTwoMessage}</h3> */}
      </div>
      <div className="bg-orange-50 m-10 shadow-xl border">
        <ul className="">
          {restaurant?.cards?.[2].groupedCard?.cardGroupMap?.REGULAR?.cards?.[1].card?.card?.itemCards?.map(
            (item) => (
              <li
                className="border m-5 p-5 flex justify-between shadow-lg"
                key={item?.card?.info?.id}
              >
                <div className="flex">
                  <div className="text-lg font-bold">{item?.card?.info?.name}</div> -<div className="mx-1 text-lg font-bold">₹
                  {Math.round(item?.card?.info?.price / 100)}</div>
                </div>
                <div className="justify-end">
                  {
                    <img
                      className="w-20 h-14"
                      src={IMG_CDN_URL + item?.card?.info?.imageId}
                    />
                  }
                  <button
                    className="bg-green-600 m-5 p-2 rounded-lg"
                    onClick={() => handleClick(item?.card?.info)}
                  >
                    Add
                  </button>
                </div>
              </li>
            )
          )}
          {/* {Object.values(restaurant?.menu?.items).map((item)=>(<li key={item.id}>{item.name}</li>))}
                {console.log(restaurant?.menu?.items)} */}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
