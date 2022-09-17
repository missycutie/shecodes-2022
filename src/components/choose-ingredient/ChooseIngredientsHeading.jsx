import React from 'react';
import './ChooseIngredientsHeading.scss';
import IngredientIcon from '../../assets/svg/IngredientIcon'

const ChooseIngredientsHeading = ({heading}) => {
  return (
    <div className='choose-ingredients-heading'>
      <IngredientIcon />
      <h3>{heading}</h3>
    </div>
  );
};

export default ChooseIngredientsHeading;