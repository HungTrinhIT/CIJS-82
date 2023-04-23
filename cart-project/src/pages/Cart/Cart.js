import React from "react";
import { useNavigate } from "react-router-dom";
import CartInformation from "../../components/CartInformation/CartInformation";

const Cart = (props) => {
  const navigate = useNavigate();

  const onBackButton = () => {
    navigate(-1);
  };
  return (
    <div>
      <button className="my-3 btn btn-secondary" onClick={onBackButton}>
        Go back
      </button>
      <CartInformation {...props} />
    </div>
  );
};

export default Cart;
