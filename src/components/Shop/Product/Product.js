import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({pd}) => {
    return (
        <section className='product col-md-3'>
          <div className="card my-4">
            <Link to={`/product/${pd._id}`}>
               <img className="card-img-top img-fluid" src={`data:image/png;base64,${pd.image.img}`} alt={pd.name}/>
            </Link>
            <div className="card-body">
                <h5 className="card-title">{pd.name}</h5>
                <div className="d-flex justify-content-between">
                    <span>Price: ${pd.price}</span>
                    <Link to={`/product/${pd._id}`}  className="btn btn-buyNow">Buy Now</Link>
                </div>
            </div>
          </div>
       </section>
    );
};

export default Product;