import React from "react";
import SearchInput from "../components/global/SearchInput";
import "../components/choose-ingredient/ChooseIngredients.scss";
import ChooseIngredientsHeading from "../components/choose-ingredient/ChooseIngredientsHeading";
import ingredients from "../data/ingredients";
import PrimaryButton from "../components/global/PrimaryButton";
import IngredientItem from "../components/choose-ingredient/IngredientItem";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CalendarIcon } from "@heroicons/react/24/outline";
import "./checkbox.scss";
import { Link } from "react-router-dom";

const ChooseIngredients = () => {
  const cancelButtonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="choose-ingredient-page my-10">
      <SearchInput />
      <ChooseIngredientsHeading heading="TUỲ CHỌN NGUYÊN LIỆU CHO MÓN ĂN" />
      <p className="mt-[10px]">Hiển thị 4 kết quả </p>

      <ul className="flex flex-wrap -mx-5 mt-10">
        {ingredients.map((item) => (
          <IngredientItem prop={`ig-${item.id}`} data={item} />
        ))}
      </ul>

      <div className="ml-auto w-fit mt-10">
        <PrimaryButton onClick={() => setIsOpen(true)}>Tiếp theo</PrimaryButton>
      </div>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="space-y-8">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <CalendarIcon
                        className="h-6 w-6 text-green-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900">
                        Mời bạn chọn ngày trong tuần
                      </Dialog.Title>
                      <div className="mt-5 flex justify-center">
                        <ul>
                          <li>
                            <input
                              type="checkbox"
                              id="check_1"
                              name="check_1"
                              value="check_1"
                              defaultChecked={true}
                            />
                            <label for="check_1">T2</label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              id="check_2"
                              name="check_2"
                              value="check_2"
                              defaultChecked={true}
                            />
                            <label for="check_2">T3</label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              id="check_3"
                              name="check_3"
                              value="check_3"
                              defaultChecked={true}
                            />
                            <label for="check_3">T4</label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              id="check_4"
                              name="check_4"
                              value="check_4"
                              defaultChecked={true}
                            />
                            <label for="check_4">T5</label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              id="check_5"
                              name="check_5"
                              value="check_5"
                              defaultChecked={true}
                            />
                            <label for="check_5">T6</label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              id="check_6"
                              name="check_6"
                              value="check_6"
                              defaultChecked={true}
                            />
                            <label for="check_6">T7</label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              id="check_7"
                              name="check_7"
                              value="check_7"
                              defaultChecked={true}
                            />
                            <label for="check_7">CN</label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-[#1C6758] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#1C6758]focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-2 sm:col-start-2 sm:text-sm" onClick={(e) => e.preventDefault()}>
                      <Link to="/dishes-page">Xem thực đơn</Link>
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-slate-200focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                      onClick={() => setIsOpen(false)}
                      ref={cancelButtonRef}>
                      Hủy
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
};

export default ChooseIngredients;
