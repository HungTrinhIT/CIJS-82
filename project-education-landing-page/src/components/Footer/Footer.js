import React from "react";

const Footer = (props) => {
  return (
    <footer>
      <div
        style={{
          backgroundImage: `url(${props.url})`,
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      Footer
    </footer>
  );
};

export default Footer;
