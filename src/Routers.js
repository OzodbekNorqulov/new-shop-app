import React, { useLayoutEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Loader from './components/Loader';
import { API_URL } from './components/Config';
import { useEffect, useState } from 'react';
import Cart from './components/Cart';
import { toast } from 'react-toastify';

const Routers = () => {

  const [product, setProduct] = useState([]);
  const [order, setOrder] = useState([]);
  const [isSeen, setIsSeen] = useState(false)
  let apiProduct

  const addToBasket = (item) => {
    const itemIndex = order.findIndex(orderItem => orderItem.id === item.id)
    console.log(itemIndex);

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1
      }
      console.log(itemIndex);

      setOrder([...order, newItem])
    } else {
      const newOrder = order.map((item, index) => {
        if (index === itemIndex) {
          return {
            ...item,
            quantity: item.quantity + 1,
            price: item.quantity * item.price
          }
        } else {
          return item
        }
      })

      setOrder(newOrder)
    }

  }
  const increaseQuantity = (itemId) => {
    const newOrder = order.map(item => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: item.quantity + 1,
        }
      } else {
        return item
      }
    })
    setOrder(newOrder)
  }
  const decreaseQuantity = (itemId) => {
    const newOrder = order.map(item => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: item.quantity <= 0 ? 0 : item.quantity - 1,
        }
      } else {
        return item
      }
    })
    setOrder(newOrder)
  }


  // const productId = product.map(i => (
  //   i.id
  // ))
  // console.log(productId);

  const fetchApi = () => {
    return apiProduct = fetch(API_URL)
      .then(res => res.json())
      .then(res => setProduct(res))
  }

  useEffect(() => {
    fetchApi()
  }, [])
  return (

    product.length
      ? (
        <div className='goods'>

          <Cart decreaseQuantity={decreaseQuantity} increaseQuantity={increaseQuantity} setOrder={setOrder} quantity={order.length} isSeen={isSeen} seen={setIsSeen} order={order} />
          {
            product.map(item => (
              <div className='product' key={item.id}>
                <div className='product-img'>
                  <img src={item.image} alt="product" />
                </div>
                <div className='product-description'>
                  <h4>{item.title}</h4>
                  <h6><b>${item.price}</b></h6>

                  <Link to={`/product/${item.id}`} > 
                    <button className='btn btn-success'>
                      more
                    </button>
                  </Link>
                  <button onClick={() => addToBasket(item)} style={{ marginLeft: "20px" }} className='btn btn-primary'>Add to cart</button>
                </div>
              </div>
            ))
          }
        </div>

      )
      : <Loader />
  );
}

export default Routers;
