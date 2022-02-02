import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import style from './Cart.module.css';

const Cart = (props) => {

    const cartCtx = useContext(CartContext);
    const cartItemAddHandler = (item) => {

        cartCtx.addItem({...item, amount: +1})
    };

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id)
    }

    const cartItems = (
        <ul className={style['cart-items']}>{cartCtx.items.map(item => {
            return <CartItem kye = {item.id} name = {item.name} amount = {item.amount} price = {item.price} 
            onAdd={cartItemAddHandler.bind(null, item)}
            onRemove = {cartItemRemoveHandler.bind(null, item.id)}/>
        })}</ul>
    );

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0; 


    return (
        <Modal onClose = {props.onClose}>
            {cartItems}
            <div className={style.total}>
                <span>Total amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={style.actions}>
                <button className={style['button--alt']} onClick={props.onClose}>Close</button>
                {hasItems && <button className={style.button}>Order</button>}

            </div>
        </Modal>
    )
}

export default Cart;