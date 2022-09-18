import React from 'react';
import IngredientIcon from '../../assets/svg/IngredientIcon'

const ChooseIngredientsHeading = ({heading, style}) => {
  return (
    <div className='choose-ingredients-heading flex items-center mt-10 font-bold'>
      <IngredientIcon />
      <h3 className="h4 ml-5">{heading}</h3>
    </div>
  );
};

export default ChooseIngredientsHeading;