import React, { useState } from "react";
// import Sidebar from "../Dashboard/Sidebar/Sidebar";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";

const AddProduct = () => {
  const [product, setProduct] = useState({});
  console.log(product);
  const [file, setFile] = useState(null);
  const handleBlur = (e) => {
    const newProduct = { ...product };
    newProduct[e.target.name] = e.target.value;
    setProduct(newProduct);
  };

  const handleFileUpload = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", product.name);
    formData.append("description", product.description);
    formData.append("price", product.price);

    fetch('https://warm-peak-57266.herokuapp.com/addProducts', {
      method: "POST",
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Access-Control-Allow-Origin": "http://localhost:8080/addProducts"
      },
      body: formData
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section className="container-fluid row">
      <div style={{ marginLeft: "-23px" }} className="col-md-2 me-5 col-2">
        <Sidebar />
      </div>
      <div
        className="col-md-5 me-5 col-8 p-4 pr-5"
        style={{
          marginTop: "10px",
          marginLeft: "145px",
          backgroundColor: "#F4FDFB",
        }}
      >
        <h5 className="text-brand">Add a New Product</h5>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Product Name</label>
            <input
              onBlur={handleBlur}
              type="text"
              className="form-control"
              name="name"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <label>Product Details</label>
            <textarea
              onBlur={handleBlur}
              name="description"
              className="form-control"
              cols="10"
              rows="5"
              placeholder="Product Details"
            ></textarea>
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              onBlur={handleBlur}
              type="number"
              className="form-control"
              name="price"
              placeholder="Product Price"
            />
          </div>
          <div className="form-group">
            <label>Upload an image</label>
            <input
              onChange={handleFileUpload}
              type="file"
              placeholder="Product Picture"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn my-3 btn-lg btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddProduct;
