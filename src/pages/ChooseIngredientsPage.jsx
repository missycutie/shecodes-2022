import React from 'react';
import SearchInput from '../components/global/SearchInput';
import '../components/choose-ingredient/ChooseIngredients.scss';

const ChooseIngredients = () => {
  return (
    <div className='choose-ingredient-page'>

      <div className="choose-ingredient-hate ">
        <h4>Chọn nguyên liệu bạn không thích :</h4>

        <SearchInput />
      </div>

    </div>
  );
};

export default ChooseIngredients;