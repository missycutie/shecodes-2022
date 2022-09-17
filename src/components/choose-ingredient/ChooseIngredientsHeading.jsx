import React from 'react';
import IngredientIcon from '../../assets/svg/IngredientIcon'

const ChooseIngredientsHeading = ({heading}) => {
  return (
    <div className='choose-ingredients-heading flex items-center mt-10'>
      <IngredientIcon />
      <h3 className="ml-5">{heading}</h3>
    </div>
  );
};

export default ChooseIngredientsHeading;