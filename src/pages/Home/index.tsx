/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import DefaultLayout from "../../components/Layout";
import { GetProducts } from "./service";
import { ProductTypes } from "./types";
import "./styles/home.css";
import { Link, useParams } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState<ProductTypes[]>([]);
  const { category } = useParams();
  const categoryQuery = category || undefined;
  // Sayfa ilk render edildiğinde parametreyi alıp query'yi gelen parametreye göre düzenliyorum ve isteği category parametresine göre yapıyorum.
  useEffect(() => {
    GetProducts(categoryQuery, 30)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.error(err));
  }, [categoryQuery]);

  if (products.length === 0) {
    return <div className="w-screen h-screen flex justify-center items-center">
    <div className="loader"></div>
  </div>;
  }

  return (
    <DefaultLayout>
      <div data-testid="home-component" className="list-container">
        <div className="products-list">
          {products && products.length > 0 ? (
            products.map((product, index) => (
              <Link key={index} to={`/product-detail/${product?.id}`}>
                <Card data={product} />
              </Link>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Home;
