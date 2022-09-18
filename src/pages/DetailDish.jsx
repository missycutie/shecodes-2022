import React from "react";
import { useLocation } from "react-router-dom";
import favIcon from "../assets/svg/heart-red.svg";

const DetailDish = () => {
  const location = useLocation();
  console.log(location.state.data);
  const data = location.state.data;
  console.log(data.details.ingredients);
  return (
    <div className="flex flex-col justify-center gap-10 py-10 w-[70%] mx-auto">
      <div className="flex flex-row justify-center gap-10 items-center">
        <img src={data.url} className="w-[400px] " alt="filter" />
        <div className="flex flex-col flex-1 justify-between">
          <h1>
            <p className="pb-5 text-center text-3xl text-[#1c6758] font-semibold">
              {data.name}
            </p>
            <div className="flex flex-row justify-center w-[400px]">
              <div className="flex flex-row pr-5">
                <img src="https://monngonmoingay.com/wp-content/themes/monngonmoingay/images/icon-cook.png" />
                <span className="pl-2 pt-1 text-xl">Dễ</span>
              </div>
              <p className="text-xl pr-5">
                <span className="text-2xl text-red-700 font-bold">4</span> Người
              </p>
              <div className="flex flex-row pr-5">
                <img src={favIcon} className="text-red-700 " alt="heart" />
                <span className="pl-2 pt-1 min-w-[100px] text-xl">
                  Yêu thích
                </span>
              </div>{" "}
            </div>
          </h1>
        </div>
      </div>

      <div>
        <div className="flex flex-row gap-4 text-xl font-semibold pr-5 pb-4">
          <img src="https://monngonmoingay.com/wp-content/themes/monngonmoingay/images/icon-nguyenlieu.png" />
          <p>Nguyên liệu</p>
        </div>

        <div className="flex flex-col ">
          {data.details.ingredients.map((item) => (
            <div className="flex flex-row justify-between px-40 pb-3 ">
              <p>{item.ingredientName}</p>
              <p>{item.num}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex flex-row gap-4 text-xl font-semibold pr-5 pb-4">
          <img src="https://monngonmoingay.com/wp-content/themes/monngonmoingay/images/icon-soche.png" />
          <p>Sơ chế</p>
        </div>

        <div className="flex flex-col ">
          {data.details.preCook.map((item) => (
            // <div className="flex flex-row justify-between px-40 pb-3 text-[18px]">
              <p className="pb-3">- {item}</p>
            // </div>
          ))}
        </div>
      </div>


      <div>
        <div className="flex flex-row gap-4 text-xl font-semibold pr-5 pb-4">
          <img src="https://monngonmoingay.com/wp-content/themes/monngonmoingay/images/icon-thuchien.png" />
          <p>Thực hiện</p>
        </div>

        <div className="flex flex-col mb-5 ">
          {data.details.howToCook.map((item) => (
            // <div className="flex flex-row justify-between px-40 pb-3 text-[18px]">
              <p className="pb-3">- {item}</p>
            // </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default DetailDish;
