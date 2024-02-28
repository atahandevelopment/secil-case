import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./styles/layout.css";
import MobileNavbar from "../Navbar/mobileNav";

type Props = {
  children: React.ReactNode;
};

const DefaultLayout = (props: Props) => {
  const { children } = props;
  const [show, setShow] = useState<boolean>(false);

  if (show) {
    return (
      <div className="w-full h-auto">
        <MobileNavbar show={show} setShow={setShow} />
      </div>
    );
  }

  return (
    <div className="container">
      <Navbar setShow={setShow} show={show} />
      <div className="layout">{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
