import React from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardImage,
  CCardText,
  CCardTitle,
} from "@coreui/react";
import { cilReload, cilTrash } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { useNavigate } from "react-router-dom";

const DishCard = (prop) => {
  const { name, filter, url, card } = prop;
  const navigate = useNavigate();

  return (
    <CCard
      onClick={() =>
        navigate(`/dishes-page/${name}`, { state: { data: card } })
      }
      style={{ width: "16rem" }}
      className="mb-9 shadow-lg min-h-[300px] "
    >
      <CCardImage orientation="top" src={url} />
      <CCardBody>
        <div className="text-center font-semibold text-2xl p-3 pb">
          <h2 className="p-2 pb-5 min-h-[40px] text-xl"> {name}</h2>
          <div className="flex flex-row justify-center gap-5 pb-3 ">
            <button className="bg-white shadow-lg rounded-full flex justify-center p-3">
              <CIcon icon={cilReload} size="sm" className="w-[30px]" />
            </button>
            <button className="bg-white shadow-lg rounded-full flex justify-center p-3">
              <CIcon icon={cilTrash} size="sm" className="w-[30px]" />
            </button>

            <button>
              <img className="w-[30px]" src={filter} />
            </button>
          </div>
        </div>
      </CCardBody>
    </CCard>
  );
};

export default DishCard;
