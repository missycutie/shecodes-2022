import React from "react";
import { Link } from "react-router-dom";
import "./CategoryItem.scss";
import cn from "classnames";

const CategoryItem = ({
  data,
  type = "button",
  fullWidth = false,
  disabled = false,
  className,
  loading = false,
}) => {
  const buttonClass = {
    default:
      "bg-[#1C6758] h-12 rounded-[70px] text-center text-sm font-bold text-white enabled:hover:bg-[#094237]transition ease-out duration-200 enabled:active:bg-[#094237] enabled:active:ring-[#5da597] enabled:active:ring-4 enabled:active:translate-y-0.5 inline-block py-3 truncate min-w-[180px] text-center px-6 inline-flex items-center justify-center pointer-events-auto",
    fullWidth: "w-full",
    disabled: "disabled:bg-slate-200 cursor-not-allowed",
    loading: "bg-primary-40 cursor-progress",
  };
  return (
    <button
      type={type === "submit" ? "submit" : "button"}
      className={cn(buttonClass.default, className, {
        [buttonClass.fullWidth]: fullWidth,
        [buttonClass.disabled]: disabled,
        [buttonClass.loading]: loading,
      })}
      disabled={disabled || loading}>
      <Link to="/choose-ingredient">{data.value}</Link>
    </button>
  );
};

export default CategoryItem;
