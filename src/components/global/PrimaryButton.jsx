import React from "react";

const PrimaryButton = (props) => {
  return (
    <button
      class="bg-[#1C6758] h-12 rounded-[70px] text-sm font-bold text-white enabled:hover:bg-[#094237]transition ease-out duration-200 enabled:active:bg-[#094237] enabled:active:ring-[#5da597] enabled:active:ring-4 enabled:active:translate-y-0.5 inline-block py-3 truncate min-w-[180px] text-center px-6 items-center justify-center pointer-events-auto"
      onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default PrimaryButton;
