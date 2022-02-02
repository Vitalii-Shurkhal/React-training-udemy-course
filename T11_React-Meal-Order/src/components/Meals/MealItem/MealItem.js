import React, { useContext } from "react";
import style from './MealItem.module.css';
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
    const cartCrx = useContext(CartContext);

    const addToCartHandler = (amount) => {

        console.log('meal item ')
        cartCrx.addItem({
            id: props.id,
            amount : amount,
            name: props.name,
            price: props.price
        })
    }

    const price = `$${props.price.toFixed(2)}`
    return (
        <li className={style.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={style.description}>{props.description}</div>
                <div className={style.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onAddToCart = {addToCartHandler}/>
            </div>
        </li>
    )
}

export default MealItem; 