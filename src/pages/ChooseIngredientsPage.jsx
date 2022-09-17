import React from 'react';
import SearchInput from '../components/global/SearchInput';
import '../components/choose-ingredient/ChooseIngredients.scss';
import ChooseIngredientsHeading from '../components/choose-ingredient/ChooseIngredientsHeading';

const ChooseIngredients = () => {
  return (
    <div className='choose-ingredient-page'>
        <SearchInput />

        <ChooseIngredientsHeading heading='NGUYÊN LIỆU'/>
    </div>
  );
};

export default ChooseIngredients;