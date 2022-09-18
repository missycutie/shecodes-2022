import React from 'react';

const FinalIngredientItem = ({ data }) => {
  return (
    <div className='flex items-center p-3 bg-blue-100 rounded-lg mb-5'>
      <img src={data.img} alt='' className='w-[70px] aspect-square object-cover rounded-md' />

      <div className='ml-[30px] flex-1'>
        <p className="font-bold text-[#1C6758]">{data.value}</p>

        <div className='flex items-center justify-between'>
          <span className='flex-1 mr-5'>Số lượng cần mua:</span>
          <span className='mr-5'>{data.amount}</span>
          <span className='mr-5'>x</span>
          <span> {data.unit}</span>
        </div>
      </div>
    </div>
  );
};

export default FinalIngredientItem;
