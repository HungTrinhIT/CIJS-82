import React, { useContext } from "react";
import AppContext from "../../contexts/AppContext";

export const Footer = () => {
  const appCtx = useContext(AppContext);
  console.log(appCtx);
  return (
    <div className="mt-5">
      <h2 className="text-center">Footer</h2>
    </div>
  );
};
