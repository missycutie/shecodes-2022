import React from 'react';
import SearchInput from '../components/global/SearchInput';
import '../components/choose-ingredient/ChooseIngredients.scss';
import ChooseIngredientsHeading from '../components/choose-ingredient/ChooseIngredientsHeading';
import ingredients from '../data/ingredients';
import PrimaryButton from '../components/global/PrimaryButton';
import { Link } from 'react-router-dom';
import IngredientItem from '../components/choose-ingredient/IngredientItem';

const ChooseIngredients = () => {
  return (
    <div className='choose-ingredient-page'>
      <SearchInput />
      <ChooseIngredientsHeading heading='NGUYÊN LIỆU' />
      <p className='mt-[10px]'>Hiển thị 4 kết quả </p>

      <ul className='flex flex-wrap -mx-5 mt-10'>
        {ingredients.map((item) => (
          <IngredientItem prop={`ig-${item.id}`} data={item} />
        ))}
      </ul>

      <div className='ml-auto w-fit mt-10'>
        <PrimaryButton>
          Tiếp theo
        </PrimaryButton>
      </div>


    </div>
  );
};

export default ChooseIngredients;
