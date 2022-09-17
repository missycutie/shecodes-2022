import React from 'react';

const IngredientItem = ({data}) => {
  return (
    <div className="w-1/4 px-5 text-center">
      <div className="p-[10px] bg-[#639572] rounded-lg">
      <img src={data.img} alt="" className='w-full aspect-square object-cover'/>

      <p className="my-1">{data.value}</p>
      </div>
    </div>
  );
};

export default IngredientItem;