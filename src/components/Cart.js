import React, { useEffect } from "react";

function Cart(props) {
    const { quantity = 1, seen, isSeen, order, setOrder, increaseQuantity, decreaseQuantity } = props;
    const deleteItem = (item) => {
        const orderIndex = order.filter(orderedItem => orderedItem.id !== item.id)
        setOrder(orderIndex)
        
    }
    useEffect(() => {
        order.map(item => {
            if (item.quantity === 0) {
                deleteItem(item)
            }
        })
    }, [order])
    return (
        <>
            <div onClick={() => seen(!isSeen)} className="cart indigo darken-3">
                <i className="material-icons">add_shopping_cart</i>
                {quantity ? <span className="cart-quantity">{quantity}</span> : null}
            </div>
            {
                isSeen
                ?
                <div className="modalCartFixed" onClick={() => seen(!isSeen)}>
                <div className="modalCart" onClick={(e) => e.stopPropagation()}>
                    {order.length ? order.map(item => (
                        <>
                            <div key={item.id} className="productCart">
                            <div className="cart-img">
                                <img src={item.image} alt="" />
                                <h5>{item.quantity}x &nbsp; &nbsp; &nbsp; &nbsp;<b>${item.price * item.quantity}</b></h5>
                            </div>
                            <div className="text-content">
                                <h5>{item.title}</h5>
                                <div>
                                    <button onClick={() => increaseQuantity(item.id)} className="btn btn-secondary">+</button>
                                    <button onClick={() => decreaseQuantity(item.id)} style={{marginLeft: "15px"}} className="btn btn-secondary">-</button>
                                    <button className="btn btn-secondary material-icons" style={{marginLeft: "20px"}} onClick={() => deleteItem(item)}>delete_forever</button>
                                </div>
                            </div>
                        </div>
                        </>
                    )) : <h2 style={{marginLeft: "100px"}}>Basket is empty currently!</h2>}
                    <div>
                        <h4>total: {
                            order.reduce((sum, el) => {
                                return sum + el.price * el.quantity
                            }, 0)
                        }$</h4>
                    </div>
                </div>
            </div>
            : null
            }
        </>
    );
}

export default Cart;
