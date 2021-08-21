import React from 'react';

const SingleProduct = ({pd}) => {
    return (
        <div>
            <div className="card"> 
              <img className="card-img-top img-fluid" src={`data:image/png;  base64,${pd.image.img}`} alt={pd.name}/>
              <div class="card-body">
                <h5 class="card-title">{pd.name}</h5>
                <p class="card-text">{pd.description}</p>
               </div>
            </div>
        </div>
    );
};

export default SingleProduct;