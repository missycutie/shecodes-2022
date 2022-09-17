import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryItem.scss';

const CategoryItem = ({data}) => {
  return (
    <div className='category-item'>
      <Link to='/choose-ingredient'>
      {data.value}
      </Link>
    </div>
  );
};

export default CategoryItem;