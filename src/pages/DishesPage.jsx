import React, { Fragment, useRef, useState } from "react";
import DishCard from "../components/Dishes/DishCard";
import "../components/Dishes/styles.scss";
import morningIcon from "../assets/svg/morning.svg";
import noonIcon from "../assets/svg/noon.svg";
import nightIcon from "../assets/svg/night.svg";
import CIcon from "@coreui/icons-react";
import { cilFastfood, cilHeart } from "@coreui/icons";
import PrimaryButton from "../components/global/PrimaryButton";
import { Dialog, Transition } from "@headlessui/react";
import { CalendarIcon } from "@heroicons/react/24/outline";
import finalIngredients from "../data/buy-ingredient";
import FinalIngredientItem from "../components/Dishes/FinalIngredientItem";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    day: "Thứ 2",
    dishes: [
      {
        id: 1,
        name: "Bánh canh chay",
        filter: morningIcon,
        url: "https://monngonmoingay.com/wp-content/uploads/2015/08/banh-canh-chay-500.jpg",
        details: {
          ingredients: [
            { ingredientName: "Chả lụa chay", num: "200g" },
            { ingredientName: "Đâu hủ", num: "2 miếng" },
            { ingredientName: "Cà rốt", num: "1 củ" },
            { ingredientName: "Su hào", num: "1/2 củ" },
            { ingredientName: "Bắp mỹ ", num: "1 trái" },
            { ingredientName: "Củ cải trắng", num: "1 củ" },
            { ingredientName: "Nấm rơm", num: "200g" },
            { ingredientName: "Bánh canh bột lọc", num: "500g" },
            { ingredientName: "Bột năng", num: "2 muỗng" },
          ],
          preCook: [
            "Nước dùng: Cho cà rốt, su hào, bắp mỹ, củ cải trắng cắt khúc 5cm cho vào 2 lít nước, nấu sôi, giảm lửa vừa trong vòng 40p, lọc lấy 1.5 lít nước dùng, giữ lại bắp.",
            "Chả lụa chay cắt lát mỏng. Nấm rơm cắt đôi.",
            " Phi thơm hành boaro với dầu, vớt boaro ra để riêng, tiếp tục xào sơ nấm rơm và 1m hạt nêm Aji-ngon® Nấm và ít tiêu.",
            "Cà rốt tỉa hoa, cắt miếng. Ngò rí cắt nhỏ. Đậu hũ cắt miếng vuông.",
          ],
          howToCook: [
            "Đun sôi nước, trụng bánh canh để bánh canh ngon, không bị chua.",
            "Đun sôi nước dùng, cho cà rốt tỉa hoa, nấm rơm, đậu hũ nêm 2M hạt nêm Aji-ngon® Nấm, 1/2m bột ngọt AJI-NO-MOTO®, 1m muối, 1m đường, nếm vị vừa ăn, cho 2M dầu điều, cho bánh canh, chả lụa vào, đun vừa sôi, cho 2M nước bột năng vào cho sôi lại, tắt lửa, cho boaro phi vào.",
          ],
        },
      },
      {
        id: 2,
        name: "Salad rong nho",
        filter: noonIcon,
        url: "https://monngonmoingay.com/wp-content/uploads/2015/08/salad-rong-nho-50.jpg",
        details: {
          ingredients: [
            { ingredientName: "Chả lụa chay", num: "200g" },
            { ingredientName: "Đâu hủ", num: "2 miếng" },
            { ingredientName: "Cà rốt", num: "1 củ" },
            { ingredientName: "Su hào", num: "1/2 củ" },
            { ingredientName: "Bắp mỹ ", num: "1 trái" },
            { ingredientName: "Củ cải trắng", num: "1 củ" },
            { ingredientName: "Nấm rơm", num: "200g" },
            { ingredientName: "Bánh canh bột lọc", num: "500g" },
            { ingredientName: "Bột năng", num: "2 muỗng" },
          ],
          preCook: [
            "Nước dùng: Cho cà rốt, su hào, bắp mỹ, củ cải trắng cắt khúc 5cm cho vào 2 lít nước, nấu sôi, giảm lửa vừa trong vòng 40p, lọc lấy 1.5 lít nước dùng, giữ lại bắp.",
            "Chả lụa chay cắt lát mỏng. Nấm rơm cắt đôi.",
            " Phi thơm hành boaro với dầu, vớt boaro ra để riêng, tiếp tục xào sơ nấm rơm và 1m hạt nêm Aji-ngon® Nấm và ít tiêu.",
            "Cà rốt tỉa hoa, cắt miếng. Ngò rí cắt nhỏ. Đậu hũ cắt miếng vuông.",
          ],
          howToCook: [
            "Đun sôi nước, trụng bánh canh để bánh canh ngon, không bị chua.",
            "Đun sôi nước dùng, cho cà rốt tỉa hoa, nấm rơm, đậu hũ nêm 2M hạt nêm Aji-ngon® Nấm, 1/2m bột ngọt AJI-NO-MOTO®, 1m muối, 1m đường, nếm vị vừa ăn, cho 2M dầu điều, cho bánh canh, chả lụa vào, đun vừa sôi, cho 2M nước bột năng vào cho sôi lại, tắt lửa, cho boaro phi vào.",
          ],
        },
      },
      {
        id: 3,
        name: "Bò kho chay",
        filter: nightIcon,
        url: "https://monngonmoingay.com/wp-content/uploads/2017/12/bo-kho-chay-500.jpg",
        details: {
          ingredients: [
            { ingredientName: "Chả lụa chay", num: "200g" },
            { ingredientName: "Đâu hủ", num: "2 miếng" },
            { ingredientName: "Cà rốt", num: "1 củ" },
            { ingredientName: "Su hào", num: "1/2 củ" },
            { ingredientName: "Bắp mỹ ", num: "1 trái" },
            { ingredientName: "Củ cải trắng", num: "1 củ" },
            { ingredientName: "Nấm rơm", num: "200g" },
            { ingredientName: "Bánh canh bột lọc", num: "500g" },
            { ingredientName: "Bột năng", num: "2 muỗng" },
          ],
          preCook: [
            "Nước dùng: Cho cà rốt, su hào, bắp mỹ, củ cải trắng cắt khúc 5cm cho vào 2 lít nước, nấu sôi, giảm lửa vừa trong vòng 40p, lọc lấy 1.5 lít nước dùng, giữ lại bắp.",
            "Chả lụa chay cắt lát mỏng. Nấm rơm cắt đôi.",
            " Phi thơm hành boaro với dầu, vớt boaro ra để riêng, tiếp tục xào sơ nấm rơm và 1m hạt nêm Aji-ngon® Nấm và ít tiêu.",
            "Cà rốt tỉa hoa, cắt miếng. Ngò rí cắt nhỏ. Đậu hũ cắt miếng vuông.",
          ],
          howToCook: [
            "Đun sôi nước, trụng bánh canh để bánh canh ngon, không bị chua.",
            "Đun sôi nước dùng, cho cà rốt tỉa hoa, nấm rơm, đậu hũ nêm 2M hạt nêm Aji-ngon® Nấm, 1/2m bột ngọt AJI-NO-MOTO®, 1m muối, 1m đường, nếm vị vừa ăn, cho 2M dầu điều, cho bánh canh, chả lụa vào, đun vừa sôi, cho 2M nước bột năng vào cho sôi lại, tắt lửa, cho boaro phi vào.",
          ],
        },
      },
    ],
  },
  {
    id: 2,
    day: "Thứ 4",
    dishes: [
      {
        id: 1,
        name: "Lẩu nấm chay",
        filter: morningIcon,
        url: "https://monngonmoingay.com/wp-content/uploads/2015/08/lau-nam-chay-500.jpg",
        details: {
          ingredients: [
            { ingredientName: "Chả lụa chay", num: "200g" },
            { ingredientName: "Đâu hủ", num: "2 miếng" },
            { ingredientName: "Cà rốt", num: "1 củ" },
            { ingredientName: "Su hào", num: "1/2 củ" },
            { ingredientName: "Bắp mỹ ", num: "1 trái" },
            { ingredientName: "Củ cải trắng", num: "1 củ" },
            { ingredientName: "Nấm rơm", num: "200g" },
            { ingredientName: "Bánh canh bột lọc", num: "500g" },
            { ingredientName: "Bột năng", num: "2 muỗng" },
          ],
          preCook: [
            "Nước dùng: Cho cà rốt, su hào, bắp mỹ, củ cải trắng cắt khúc 5cm cho vào 2 lít nước, nấu sôi, giảm lửa vừa trong vòng 40p, lọc lấy 1.5 lít nước dùng, giữ lại bắp.",
            "Chả lụa chay cắt lát mỏng. Nấm rơm cắt đôi.",
            " Phi thơm hành boaro với dầu, vớt boaro ra để riêng, tiếp tục xào sơ nấm rơm và 1m hạt nêm Aji-ngon® Nấm và ít tiêu.",
            "Cà rốt tỉa hoa, cắt miếng. Ngò rí cắt nhỏ. Đậu hũ cắt miếng vuông.",
          ],
          howToCook: [
            "Đun sôi nước, trụng bánh canh để bánh canh ngon, không bị chua.",
            "Đun sôi nước dùng, cho cà rốt tỉa hoa, nấm rơm, đậu hũ nêm 2M hạt nêm Aji-ngon® Nấm, 1/2m bột ngọt AJI-NO-MOTO®, 1m muối, 1m đường, nếm vị vừa ăn, cho 2M dầu điều, cho bánh canh, chả lụa vào, đun vừa sôi, cho 2M nước bột năng vào cho sôi lại, tắt lửa, cho boaro phi vào.",
          ],
        },
      },
      {
        id: 2,
        name: "Bánh mì nướng tỏi",
        filter: noonIcon,
        url: "https://monngonmoingay.com/wp-content/uploads/2021/11/banh-mi-nuong-toi-500.jpg",
        details: {
          ingredients: [
            { ingredientName: "Chả lụa chay", num: "200g" },
            { ingredientName: "Đâu hủ", num: "2 miếng" },
            { ingredientName: "Cà rốt", num: "1 củ" },
            { ingredientName: "Su hào", num: "1/2 củ" },
            { ingredientName: "Bắp mỹ ", num: "1 trái" },
            { ingredientName: "Củ cải trắng", num: "1 củ" },
            { ingredientName: "Nấm rơm", num: "200g" },
            { ingredientName: "Bánh canh bột lọc", num: "500g" },
            { ingredientName: "Bột năng", num: "2 muỗng" },
          ],
          preCook: [
            "Nước dùng: Cho cà rốt, su hào, bắp mỹ, củ cải trắng cắt khúc 5cm cho vào 2 lít nước, nấu sôi, giảm lửa vừa trong vòng 40p, lọc lấy 1.5 lít nước dùng, giữ lại bắp.",
            "Chả lụa chay cắt lát mỏng. Nấm rơm cắt đôi.",
            " Phi thơm hành boaro với dầu, vớt boaro ra để riêng, tiếp tục xào sơ nấm rơm và 1m hạt nêm Aji-ngon® Nấm và ít tiêu.",
            "Cà rốt tỉa hoa, cắt miếng. Ngò rí cắt nhỏ. Đậu hũ cắt miếng vuông.",
          ],
          howToCook: [
            "Đun sôi nước, trụng bánh canh để bánh canh ngon, không bị chua.",
            "Đun sôi nước dùng, cho cà rốt tỉa hoa, nấm rơm, đậu hũ nêm 2M hạt nêm Aji-ngon® Nấm, 1/2m bột ngọt AJI-NO-MOTO®, 1m muối, 1m đường, nếm vị vừa ăn, cho 2M dầu điều, cho bánh canh, chả lụa vào, đun vừa sôi, cho 2M nước bột năng vào cho sôi lại, tắt lửa, cho boaro phi vào.",
          ],
        },
      },
      {
        id: 3,
        name: "Nui xào chay",
        filter: nightIcon,
        url: "https://monngonmoingay.com/wp-content/uploads/2021/06/nui-xao-chay-thap-cam-500.jpg",
        details: {
          ingredients: [
            { ingredientName: "Chả lụa chay", num: "200g" },
            { ingredientName: "Đâu hủ", num: "2 miếng" },
            { ingredientName: "Cà rốt", num: "1 củ" },
            { ingredientName: "Su hào", num: "1/2 củ" },
            { ingredientName: "Bắp mỹ ", num: "1 trái" },
            { ingredientName: "Củ cải trắng", num: "1 củ" },
            { ingredientName: "Nấm rơm", num: "200g" },
            { ingredientName: "Bánh canh bột lọc", num: "500g" },
            { ingredientName: "Bột năng", num: "2 muỗng" },
          ],
          preCook: [
            "Nước dùng: Cho cà rốt, su hào, bắp mỹ, củ cải trắng cắt khúc 5cm cho vào 2 lít nước, nấu sôi, giảm lửa vừa trong vòng 40p, lọc lấy 1.5 lít nước dùng, giữ lại bắp.",
            "Chả lụa chay cắt lát mỏng. Nấm rơm cắt đôi.",
            " Phi thơm hành boaro với dầu, vớt boaro ra để riêng, tiếp tục xào sơ nấm rơm và 1m hạt nêm Aji-ngon® Nấm và ít tiêu.",
            "Cà rốt tỉa hoa, cắt miếng. Ngò rí cắt nhỏ. Đậu hũ cắt miếng vuông.",
          ],
          howToCook: [
            "Đun sôi nước, trụng bánh canh để bánh canh ngon, không bị chua.",
            "Đun sôi nước dùng, cho cà rốt tỉa hoa, nấm rơm, đậu hũ nêm 2M hạt nêm Aji-ngon® Nấm, 1/2m bột ngọt AJI-NO-MOTO®, 1m muối, 1m đường, nếm vị vừa ăn, cho 2M dầu điều, cho bánh canh, chả lụa vào, đun vừa sôi, cho 2M nước bột năng vào cho sôi lại, tắt lửa, cho boaro phi vào.",
          ],
        },
      },
    ],
  },
  {
    id: 3,
    day: "Chủ Nhật",
    dishes: [
      {
        id: 1,
        name: "Đậu hủ non xốt cà",
        filter: morningIcon,
        url: "https://monngonmoingay.com/wp-content/uploads/2021/11/dauhu-non-xot-cay-500.jpg",
        details: {
          ingredients: [
            { ingredientName: "Chả lụa chay", num: "200g" },
            { ingredientName: "Đâu hủ", num: "2 miếng" },
            { ingredientName: "Cà rốt", num: "1 củ" },
            { ingredientName: "Su hào", num: "1/2 củ" },
            { ingredientName: "Bắp mỹ ", num: "1 trái" },
            { ingredientName: "Củ cải trắng", num: "1 củ" },
            { ingredientName: "Nấm rơm", num: "200g" },
            { ingredientName: "Bánh canh bột lọc", num: "500g" },
            { ingredientName: "Bột năng", num: "2 muỗng" },
          ],
          preCook: [
            "Nước dùng: Cho cà rốt, su hào, bắp mỹ, củ cải trắng cắt khúc 5cm cho vào 2 lít nước, nấu sôi, giảm lửa vừa trong vòng 40p, lọc lấy 1.5 lít nước dùng, giữ lại bắp.",
            "Chả lụa chay cắt lát mỏng. Nấm rơm cắt đôi.",
            " Phi thơm hành boaro với dầu, vớt boaro ra để riêng, tiếp tục xào sơ nấm rơm và 1m hạt nêm Aji-ngon® Nấm và ít tiêu.",
            "Cà rốt tỉa hoa, cắt miếng. Ngò rí cắt nhỏ. Đậu hũ cắt miếng vuông.",
          ],
          howToCook: [
            "Đun sôi nước, trụng bánh canh để bánh canh ngon, không bị chua.",
            "Đun sôi nước dùng, cho cà rốt tỉa hoa, nấm rơm, đậu hũ nêm 2M hạt nêm Aji-ngon® Nấm, 1/2m bột ngọt AJI-NO-MOTO®, 1m muối, 1m đường, nếm vị vừa ăn, cho 2M dầu điều, cho bánh canh, chả lụa vào, đun vừa sôi, cho 2M nước bột năng vào cho sôi lại, tắt lửa, cho boaro phi vào.",
          ],
        },
      },
      {
        id: 2,
        name: "Cơm chiên thập cẩm",
        filter: noonIcon,
        url: "https://monngonmoingay.com/wp-content/uploads/2021/05/com-chien-thap-cam-500.jpg",
        details: {
          ingredients: [
            { ingredientName: "Chả lụa chay", num: "200g" },
            { ingredientName: "Đâu hủ", num: "2 miếng" },
            { ingredientName: "Cà rốt", num: "1 củ" },
            { ingredientName: "Su hào", num: "1/2 củ" },
            { ingredientName: "Bắp mỹ ", num: "1 trái" },
            { ingredientName: "Củ cải trắng", num: "1 củ" },
            { ingredientName: "Nấm rơm", num: "200g" },
            { ingredientName: "Bánh canh bột lọc", num: "500g" },
            { ingredientName: "Bột năng", num: "2 muỗng" },
          ],
          preCook: [
            "Nước dùng: Cho cà rốt, su hào, bắp mỹ, củ cải trắng cắt khúc 5cm cho vào 2 lít nước, nấu sôi, giảm lửa vừa trong vòng 40p, lọc lấy 1.5 lít nước dùng, giữ lại bắp.",
            "Chả lụa chay cắt lát mỏng. Nấm rơm cắt đôi.",
            " Phi thơm hành boaro với dầu, vớt boaro ra để riêng, tiếp tục xào sơ nấm rơm và 1m hạt nêm Aji-ngon® Nấm và ít tiêu.",
            "Cà rốt tỉa hoa, cắt miếng. Ngò rí cắt nhỏ. Đậu hũ cắt miếng vuông.",
          ],
          howToCook: [
            "Đun sôi nước, trụng bánh canh để bánh canh ngon, không bị chua.",
            "Đun sôi nước dùng, cho cà rốt tỉa hoa, nấm rơm, đậu hũ nêm 2M hạt nêm Aji-ngon® Nấm, 1/2m bột ngọt AJI-NO-MOTO®, 1m muối, 1m đường, nếm vị vừa ăn, cho 2M dầu điều, cho bánh canh, chả lụa vào, đun vừa sôi, cho 2M nước bột năng vào cho sôi lại, tắt lửa, cho boaro phi vào.",
          ],
        },
      },
      {
        id: 3,
        name: "Mướp xào đậu phộng",
        filter: nightIcon,
        url: "https://monngonmoingay.com/wp-content/uploads/2021/07/muop-xao-dau-phong-500.jpg",
        details: {
          ingredients: [
            { ingredientName: "Chả lụa chay", num: "200g" },
            { ingredientName: "Đâu hủ", num: "2 miếng" },
            { ingredientName: "Cà rốt", num: "1 củ" },
            { ingredientName: "Su hào", num: "1/2 củ" },
            { ingredientName: "Bắp mỹ ", num: "1 trái" },
            { ingredientName: "Củ cải trắng", num: "1 củ" },
            { ingredientName: "Nấm rơm", num: "200g" },
            { ingredientName: "Bánh canh bột lọc", num: "500g" },
            { ingredientName: "Bột năng", num: "2 muỗng" },
          ],
          preCook: [
            "Nước dùng: Cho cà rốt, su hào, bắp mỹ, củ cải trắng cắt khúc 5cm cho vào 2 lít nước, nấu sôi, giảm lửa vừa trong vòng 40p, lọc lấy 1.5 lít nước dùng, giữ lại bắp.",
            "Chả lụa chay cắt lát mỏng. Nấm rơm cắt đôi.",
            " Phi thơm hành boaro với dầu, vớt boaro ra để riêng, tiếp tục xào sơ nấm rơm và 1m hạt nêm Aji-ngon® Nấm và ít tiêu.",
            "Cà rốt tỉa hoa, cắt miếng. Ngò rí cắt nhỏ. Đậu hũ cắt miếng vuông.",
          ],
          howToCook: [
            "Đun sôi nước, trụng bánh canh để bánh canh ngon, không bị chua.",
            "Đun sôi nước dùng, cho cà rốt tỉa hoa, nấm rơm, đậu hũ nêm 2M hạt nêm Aji-ngon® Nấm, 1/2m bột ngọt AJI-NO-MOTO®, 1m muối, 1m đường, nếm vị vừa ăn, cho 2M dầu điều, cho bánh canh, chả lụa vào, đun vừa sôi, cho 2M nước bột năng vào cho sôi lại, tắt lửa, cho boaro phi vào.",
          ],
        },
      },
    ],
  },
];
export default function DishesPage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  return (
    <div className="my-10">
      <div className="pl-4 py-6 flex items-center flex-row justify-start gap-5">
        <CIcon icon={cilFastfood} size="sm" className="w-[40px] dishes-icon" />
        <h1 className="w-full text-[#1c6758] font-bold">
          Đây là những món ăn chúng mình gợi ý cho bạn nè ^^
        </h1>
      </div>
      <div
        className="flex flex-row justify-center gap-10 bg-white drop-shadow-xl mb-5

w-full"
      >
        {data.map((col) => (
          <div
            key={col.id}
            className={
              col.id !== data.length
                ? "flex flex-col pr-10 border-r-2 justify-center"
                : "flex flex-col pr-5justify-center"
            }
          >
            <h3 className="pt-3 text-2xl font-semibold text-center pb-5">
              {col.day}
            </h3>
            {col.dishes.map((item) => (
              <DishCard
                key={item.id}
                url={item.url}
                name={item.name}
                filter={item.filter}
                card={item}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="ml-auto w-fit mt-10">
        <PrimaryButton onClick={() => setModalIsOpen(true)}>Tiếp theo</PrimaryButton>
      </div>

      <Transition.Root show={modalIsOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[100]"
          initialFocus={cancelButtonRef}
          onClose={() => setModalIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0  bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-[101] overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:p-6 max-w-[50%]">
                  <h4 className="h4 text-center">Danh sách nguyên liệu</h4>
                  <div className="ingredient-list mt-5">
                    {finalIngredients.map( item => (
                      <FinalIngredientItem data={item} />
                    ))}

                  </div>

<div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-[#1C6758] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#1C6758]focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-2 sm:col-start-2 sm:text-sm">
                      <Link to="/dishes-page">Đặt nguyên liệu online</Link>
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-slate-200focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                      onClick={() => setModalIsOpen(false)}
                      ref={cancelButtonRef}>
                      Tự chuẩn bị
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
