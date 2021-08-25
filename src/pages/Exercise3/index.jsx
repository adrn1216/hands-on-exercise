import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import "./style.css";

const Exercise3 = () => {
  return (
    <div className="responsive">
      <Header />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100vw",
          position: "relative",
        }}
      >
        <Nav />
        <Content />
      </div>
      <Footer />
    </div>
  );
};

export default Exercise3;
