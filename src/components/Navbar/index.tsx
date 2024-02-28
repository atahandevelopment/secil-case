/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Link, useNavigate } from "react-router-dom";
import "./styles/navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import { GetAllCategories } from "./service";
import { Badge } from "antd";
import { FaCartShopping } from "react-icons/fa6";

type Props = {
  show: boolean;
  setShow: (show: boolean) => void;
};

const Navbar = ({ show, setShow }: Props) => {
  const [categories, setCategories] = useState([
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ]);

  const counter = JSON.parse(localStorage.getItem("counter")!) || 0;
  const router = useNavigate();
  useEffect(() => {
    GetAllCategories().then((res) => {
      setCategories(res.data);
    });
  }, []);

  const toggleMobileNav = () => {
    setShow(!show);
  };
  return (
    <div className="nav-container">
      <div className="mobile-menu-icon">
        <button onClick={toggleMobileNav}>
          <GiHamburgerMenu size={32} />
        </button>
        <button className="flex cursor-pointer" onClick={() => router("/basket")}>
          <FaCartShopping size={24} />
          <Badge className="relative bottom-3 right-1" count={counter} />
        </button>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {categories && categories.length > 0 ? (
          categories.map((item, index) => {
            // @ts-ignore
            const title = item.charAt(0).toUpperCase() + item.slice(1);
            return (
              <li key={index}>
                <Link to={`/${item}`}>{title}</Link>
              </li>
            );
          })
        ) : (
          <></>
        )}
        <li onClick={() => router("/basket")} className="flex cursor-pointer">
          <FaCartShopping size={24} />
          <Badge className="relative bottom-3 right-1" count={counter} />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
