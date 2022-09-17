import React from "react";
import category from "../../data/category";
import CategoryItem from "./CategoryItem";
import "./ChooseCategory.scss";

const ChooseCategory = () => {
  return (
    <div className="choose-category">
      <h3>Vì ẩm thực Việt</h3>
      <p>Vui lòng lựa chọn:</p>

      <div className="mt-8 space-y-3">
        {category.map((item) => (
          <CategoryItem key={`ct-${item.id}`} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ChooseCategory;
