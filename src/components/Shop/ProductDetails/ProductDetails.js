import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';


const ProductDetails = () => {
    const { id } = useParams();
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user)
    const [product, setProduct] = useState({});
    console.log(product)
    const [orderData, setOrderData] = useState({
        userName: user.name,
        email: user.email,
        // img: product.image.img
    })

const handleSubmit = (pd) => {
    pd.preventDefault();
    if (orderData.quantity >= 1) {
    fetch('https://warm-peak-57266.herokuapp.com/order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(orderData)
    })
       .then(data => {
        history.replace('/');
    });
    } else {
        alert("Please set a quantity(only positive value)")
    }
}

     
const handleQuantityChange = (pd) => {
   const newOrderData = { ...orderData };
   newOrderData.quantity = pd.target.value;
   setOrderData(newOrderData);
}


useEffect(() => {
   fetch(`https://warm-peak-57266.herokuapp.com/product/${id}`)
     .then(res => res.json())
     .then(data => {
         setProduct(data)
           const newOrderData = {...orderData}
           newOrderData.name = data.name
           newOrderData.price = data.price
           newOrderData.img = data.img;
           newOrderData.description = data.description;
           setOrderData(newOrderData);
       })
     }, [id])

    return (
        <div className=" container justify-content-center mt-5">
            <h3 className='text-center'>Details & Order</h3>
               <form className=" bg-light p-5 m-5" onSubmit={handleSubmit}>
                  <h5>{product.name}</h5>
                  <br></br>
                  <p><span className="fw-bold me-2">Details: 
                  </span>{product.description}</p> 
                  <p className="fw-bold">Price: ${product.price}</p>
                  <input type="number" name="quantity" placeholder="Quantity" onChange={handleQuantityChange}></input>
                  <br></br>
                   <button className="btn btn-primary mt-2">Order Now</button>
                </form>
        </div> 
    );
};

export default ProductDetails;