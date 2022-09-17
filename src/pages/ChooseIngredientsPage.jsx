import React from 'react';
import SearchInput from '../components/global/SearchInput';
import '../components/choose-ingredient/ChooseIngredients.scss';
import ChooseIngredientsHeading from '../components/choose-ingredient/ChooseIngredientsHeading';
import ingredients from '../data/ingredients';
import IngredientItem from './IngredientItem';

const ChooseIngredients = () => {
  return (
    <div className='choose-ingredient-page'>
        <SearchInput />
        <ChooseIngredientsHeading heading='NGUYÊN LIỆU'/>

        <ul className="flex flex-wrap -mx-5 mt-10">
          {ingredients.map( (item) => (
            <IngredientItem prop={`ig-${item.id}`} data={item}/>
          ))}
        </ul>
    </div>
  );
};

export default ChooseIngredients;