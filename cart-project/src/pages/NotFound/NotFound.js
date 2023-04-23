import React from "react";

const NotFound = () => {
  return (
    <div
      style={{
        width: "100$%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "32px",
      }}
    >
      <h1 className="text-dander">404</h1>
      <h3>Page not found</h3>
      <p> This page you are looking for doesn't exist or an other occurred</p>
    </div>
  );
};

export default NotFound;
