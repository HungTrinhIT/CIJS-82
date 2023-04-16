import "./Product.css";
import { FaCartPlus } from "react-icons/fa";
const ProductItem = (props) => {
  const { productImage, productName, onAddToCart, productId, productPrice } =
    props;

  return (
    <div className="col-6 col-md-4 col-lg-3 mb-4 product">
      <div className="card">
        <div className="card-img">
          <img
            src={productImage}
            className="card-img-top p-3"
            alt={productName}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{productName}</h5>
          <div className="card-information d-flex items-center justify-content-between">
            <span className=" text-primary">$ {productPrice}</span>
            <button
              className="btn btn-primary"
              onClick={() => onAddToCart(productId)}
            >
              <FaCartPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
