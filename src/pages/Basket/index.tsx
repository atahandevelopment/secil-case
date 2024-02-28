/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from "react";
import { Image } from "antd";
import DefaultLayout from "../../components/Layout";
import { useDispatch } from "react-redux";
import {
  incrementBasketCount,
  decrementBasketCount,
} from "../../store/basketSlice";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

type DetailType = {
  id: number;
  image: string;
  price: number;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
  count: number;
};

const Basket = () => {
  const dispatch = useDispatch();
  const basketProducts = JSON.parse(localStorage.getItem("basket") || "[]");
  const [basket, setBasket] = useState<DetailType[]>(basketProducts);

  const handleIncrement = (index: number) => {
    const updatedBasket = [...basket];
    updatedBasket[index].count++;
    setBasket(updatedBasket);
    localStorage.setItem("basket", JSON.stringify(updatedBasket));
    dispatch(incrementBasketCount());
    let counter = 0;
    for (let i in updatedBasket) {
        counter += updatedBasket[i].count;
    }  
    localStorage.setItem("counter", JSON.stringify(counter));
  };

  const handleDecrement = (index: number) => {
    const updatedBasket = [...basket];
    if (updatedBasket[index].count > 1) {
      updatedBasket[index].count--;
      setBasket(updatedBasket);
      localStorage.setItem("basket", JSON.stringify(updatedBasket));
      dispatch(decrementBasketCount());
      let counter = 0;
      for (let i = 0; i < updatedBasket.length; i++) {
        counter += updatedBasket[i].count;
      }
      localStorage.setItem("counter", JSON.stringify(counter));
    }
  };

  if(basket.length === 0) {
    return (
        <DefaultLayout>
            <div className="w-full h-screen flex justify-center items-center text-2xl">
                <h1>There isn't any products in basket.</h1>
            </div>
        </DefaultLayout>
    )
  }

  return (
    <DefaultLayout>
      <div className="w-full h-auto mt-5">
        <ul className="flex flex-col gap-4">
          <div className="flex px-3 font-semibold xs:hidden md:visible gap-10 justify-center items-center">
            <label>Order</label>
            <div>Image</div>
            <label className="md:w-5/12 xs:1/12">Title</label>
            <label className="md:w-2/12 xs:1/12  flex gap-2 justify-center items-center">Quantity</label>
            <label className="md:w-2/12 xs:1/12">Price</label>
            {/* @ts-ignore */}
            <label className="md:w-3/12 xs:1/12 flex justify-center items-center">Total</label>
          </div>
          {basket.length > 0 ? (
            basket.map((item: DetailType, index: number) => (
              <li
                className="px-3 border flex gap-10 md:h-[100px] xs:h-auto xs:flex-col md:flex-row md:justify-center md:items-center xs:justify-start xs:items-start rounded-md"
                key={index}
              >
                
                <label>{index + 1}</label>
                <div className="w-[24px] h-auto">
                  <Image
                    src={item?.image}
                    alt=""
                    className="h-auto w-full object-contain"
                  />
                </div>
                <Link  className="md:w-5/12 xs:1/12" to={'/product-detail/' + item?.id}>
                <label className="md:w-5/12 xs:1/12">{item?.title}</label>
                </Link>

                <div className="md:w-5/12 xs:1/12 flex gap-2 justify-center items-center">
                  <button onClick={() => handleDecrement(index)}>
                    <FaMinus size={16} />{" "}
                  </button>
                  <label className="text-[16px]">{item?.count}</label>

                  <button onClick={() => handleIncrement(index)}>
                    <FaPlus size={16} />
                  </button>
                </div>
                <label className="md:w-5/12 xs:1/12">{item?.price}$</label>
                <label className="md:w-5/12 xs:1/12">
                {/* @ts-ignore */}
                  {parseInt(item?.price * item?.count)}$
                </label>
              </li>
            ))
          ) : (
            <></>
          )}
        </ul>
        <div className="w-full mt-2 flex md:justify-end xs:justify-start items-center">
          <label className="font-semibold ms-2 w-2/12 xs:w-full">
            Total Price: {/* @ts-ignore */}
            {parseInt(basket.reduce((acc: number, item: DetailType) => acc + item.price * item.count, 0 ) )} $
          </label>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Basket;
