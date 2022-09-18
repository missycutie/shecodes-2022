import React from "react";
import LikeIcon from "../../assets/svg/LikeIcon";
import UnlikeIcon from "../../assets/svg/UnlikeIcon";

const IngredientItem = ({ data }) => {
  return (
    <div className="w-1/4 px-5 text-center">
      <div className="p-[10px] bg-[#abd4b7] rounded-lg group">
        <div className="overflow-hidden">
          <img
            src={data.img}
            alt=""
            className="w-full aspect-square object-cover rounded-lg transition duration-200 ease-out group-hover:scale-105"
          />
        </div>

        <p className="my-2 font-bold text-gray-900 text-lg group-hover:text-green-500">
          {data.value}
        </p>

        <div className="flex justify-between">
          <LikeIcon />
          <UnlikeIcon />
        </div>
      </div>
    </div>
  );
};

export default IngredientItem;
