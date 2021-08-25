import React from "react";
import { useHistory } from "react-router";
import "./style.css";

const NotFound = () => {
  const history = useHistory();
  return (
    <div className="notFound-base">
      <h1>Page Not Found</h1>
      <p>
        {`Go to `}
        <span
          onClick={() => {
            history.push("/1");
          }}
        >
          Exercise1
        </span>
        {`, `}
        <span
          onClick={() => {
            history.push("/2");
          }}
        >
          Exercise2
        </span>
        {` or `}
        <span
          onClick={() => {
            history.push("/3");
          }}
        >
          Exercise3
        </span>
      </p>
    </div>
  );
};

export default NotFound;
