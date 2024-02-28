/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useParams } from "react-router-dom";
import DefaultLayout from "../../components/Layout";
import { useEffect, useState } from "react";
import { DetailService } from "./service";
import ReactStars from "react-stars";
import "./styles/detail.css";
import { DetailType } from "./types";
import { Image } from "antd";
import { useDispatch } from "react-redux";
import { incrementBasketCount } from "../../store/basketSlice";

const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState<DetailType>();
  const dispatch = useDispatch();

  useEffect(() => {
    DetailService(id)
      .then((res) => {
        setDetail(res.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  const handleBasket = () => {
    //@ts-ignore
    const existingBasket = JSON.parse(localStorage.getItem("basket")) || [];
    const existingProductIndex = existingBasket.findIndex(
      (item: { id: number | undefined }) => item.id === detail?.id
    );

    if (existingProductIndex !== -1) {
      existingBasket[existingProductIndex].count++;
    } else {
      existingBasket.push({ ...detail, count: 1 });
    }
    dispatch(incrementBasketCount());

    let count = 0; // Başlangıç değeri 0 olarak ayarlanmalı
    for (let i = 0; i < existingBasket.length; i++) {
      count += existingBasket[i].count; // Sepetteki her ürünün sayısını toplamak için += kullanılmalı
    }
    localStorage.setItem("counter", JSON.stringify(count));
    localStorage.setItem("basket", JSON.stringify(existingBasket));
  };

  if (!detail) {
    return <div className="w-screen h-screen flex justify-center items-center">
      <div className="loader"></div>
    </div>;
  }

  return (
    <DefaultLayout>
      <div className="detail-container">
        <div className="img-container">
          <div className="w-8/12 p-4 auto">
            <Image className="image" src={detail?.image} />
          </div>
        </div>
        <div className="md:w-1/2 xs:w-full">
          <div className="detail-field">
            <h1 className="text-2xl font-bold">{detail?.title}</h1>
            <ReactStars
              value={detail?.rating?.rate}
              size={32}
              color2={"#ffd700"}
            />
            <p>{detail?.description}</p>
            <p className="text-5xl font-bold">
              {detail?.price ? `${detail?.price} $` : ""}
            </p>
            <button
              onClick={handleBasket}
              className="rounded-md bg-indigo-950 text-white p-4 font-semibold md:w-4/12 xs:w-full"
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Detail;
