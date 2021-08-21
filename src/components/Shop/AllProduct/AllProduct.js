import React  from 'react';
import { useState, useEffect } from "react";
import Product from '../Product/Product'
import './AllProduct.css'
import { useHistory } from "react-router-dom";
import productData from '../productData';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer/Footer';

// const addAllProduct = () => {
//     fetch('http://localhost:8000/addProducts', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(productData)
//     })
//     .then(res => res.json())
//     .then(data => console.log(data))
// }


const AllProduct = () => {
  const [allProduct, setAllProduct] = useState([]);
  console.log(allProduct);
  const history = useHistory();

  const addProduct = (pd) => {
    history.push("/shipment");
  };

  useEffect(() => {
    fetch(`http://localhost:8000/products`)
      .then((res) => res.json())
      .then((data) => setAllProduct(data));
  }, []);

    return (
      <section>
        <div className="m-5 py-4">
          <h2 className="text-center text-secondary">Best Sellers</h2>
          <div className='row'>
              {allProduct.length !==0 ? (
                allProduct.map((pd) => (<Product pd={pd} addProduct={addProduct} key={pd._id}>
                </Product>))
              ):(
             <div style={{ textAlign: "center", border: "none" }}>
               <div class="loadingio-spinner-wedges-icf5o9raiej"><div class="ldio-8113h5x8z08">
                <div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div></div>
                </div></div>
             </div>
              )}
          </div>
        </div>
      </section>
    );
};

export default AllProduct;