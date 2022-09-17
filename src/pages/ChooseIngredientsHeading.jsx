import React from 'react';
import IngredientIcon from '../assets/svg/IngredientIcon';
import './ChooseIngredientsHeading.scss';

const ChooseIngredientsHeading = () => {
  return (
    <div className='choose-ingredients-heading'>
      <IngredientIcon />
      <h3>NGUYÊN LIỆU</h3>
    </div>
  );
};

export default ChooseIngredientsHeading;