import React from 'react';
import SearchInput from '../components/global/SearchInput';
import '../components/choose-ingredient/ChooseIngredients.scss';
import ChooseIngredientsHeading from './ChooseIngredientsHeading';

const ChooseIngredients = () => {
  return (
    <div className='choose-ingredient-page'>
        <SearchInput />

        <ChooseIngredientsHeading />
    </div>
  );
};

export default ChooseIngredients;