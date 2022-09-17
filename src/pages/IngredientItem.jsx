import React from 'react';
import LikeIcon from '../assets/svg/LikeIcon';
import UnlikeIcon from '../assets/svg/UnlikeIcon';
import CategoryItem from '../components/home-page/CategoryItem';

const IngredientItem = ({data}) => {
  return (
    <div className="w-1/4 px-5 text-center">
      <div className="p-[10px] bg-[#abd4b7] rounded-lg">
      <img src={data.img} alt="" className='w-full aspect-square object-cover rounded-lg'/>

      <p className="my-1">{data.value}</p>

      <div className="flex justify-between">
        <LikeIcon />
        <UnlikeIcon />
      </div>

      </div>

    </div>
  );
};

export default IngredientItem;