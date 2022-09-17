import React from "react";
import category from "../../data/category";
import Button from "./Button";
import "./ChooseCategory.scss";

const ChooseCategory = () => {
  return (
    <div className="choose-category">
      <h3>Không biết ăn gì ? Để Onee 'care'</h3>
      <p>Vui lòng lựa chọn:</p>

      <div className="mt-8 space-y-3">
        {category.map((item) => (
          <Button
            key={`ct-${item.id}`}
            data={item.value}
            className="rounded-[70px]"
            href="/choose-ingredient"
          />
        ))}
      </div>


    </div>
  );
};

export default ChooseCategory;
