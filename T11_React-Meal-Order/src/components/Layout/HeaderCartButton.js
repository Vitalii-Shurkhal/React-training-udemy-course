import React, {useContext, useEffect, useState} from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import style from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {

    const [btnAnimated, setbtnAnimated] = useState(false);

    const cartCtx = useContext(CartContext)
    const {items} = cartCtx;
    
    const numberOfCartItems = items.reduce((currentNum, item)=>{
        return currentNum + item.amount
    },0)

    const btnClasses = `${style.button} ${btnAnimated ? style.bump: ''}`

    useEffect(() => {

        if (items.length === 0){
            return;
        }
        setbtnAnimated(true)

       const timer = setTimeout(()=> {
            setbtnAnimated(false)
        }, 300)

        return () => {
            clearTimeout(timer)
        }
    }, [items])

    return <button className={btnClasses} onClick={props.onShown}>
        <span className={style.icon}>
            <CartIcon/>
        </span>
        <span>Your Meal</span>
        <span className={style.badge}>
            {numberOfCartItems}
        </span>
    </button>
}

export default HeaderCartButton; 