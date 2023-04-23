import React from "react";
import AddProductForm from "../../components/AddProductForm/AddProductForm";

const Admin = ({ onAddNewProductToProductList }) => {
  return (
    <div>
      <h1 className="text-center text-primary my-3">Admin dashboard</h1>
      <AddProductForm onAddNewProduct={onAddNewProductToProductList} />
    </div>
  );
};

export default Admin;
