import React, { useEffect, useState } from "react";
import Problem from "./Problem";
import Solution from "./Solution";
import "./style.css";

const Exercise1 = () => {
  return (
    <div className="base">
      <Problem />
      <Solution />
    </div>
  );
};

export default Exercise1;
