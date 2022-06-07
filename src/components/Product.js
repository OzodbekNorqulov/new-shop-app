import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from './Config';
import Footer from './Footer';
import Header from './Header';
import Loader from './Loader';

const Product = () => {
    const [product, setProduct] = useState({});
    const param = useParams()
    console.log(product.id);

  let apiProduct;

  const fetchApi = () => {
    return apiProduct = fetch(`${API_URL}/${param.id}`)
      .then(res => res.json())
      .then(res => setProduct(res)) 
  }

  useEffect(() => {
    fetchApi()
  }, [])
    return (
        product.image 
        ? (
            <div className='product-more'>
            <div className='d-flex'>
                <div className='left'>
                    <img src={product.image} alt="product" />
                </div>
                <div className='right-content'>
                    <h2>{product.title}</h2>
                    <h1>${product.price}</h1>
                    <h5>{product.description}</h5>
                </div>
            </div>
        </div>
        )
        :
        <Loader />
        
    );
}

export default Product;
