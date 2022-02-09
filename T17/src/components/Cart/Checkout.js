
import { useRef } from 'react';
import style from './Checkout.module.css'

const Chackout = (props) => {
    
    const enteredName = useRef();
    const enteredStreet = useRef();
    const enteredPostalCode = useRef();
    const enteredCity = useRef();

    const onConfirmHandler = event => {
        event.preventDefault()
        console.log('send')
    }

    return (
        <form className={style.form} onSubmit={onConfirmHandler}>
            <div className={style.control}>
                <label htmlFor='firstName'>Your Name</label>
                <input ref={enteredName} name ='firstName' type ='text'  />
            </div>
            <div className={style.control}>
                <label htmlFor='street'>Street</label>
                <input ref={enteredStreet} name ='street' type ='text'/>
            </div>
            <div className={style.control}>
                <label  htmlFor='postalCode'>Postal Code</label>
                <input ref={enteredPostalCode} name ='postalCode' type ='text'/>
            </div>
            <div className={style.control}>
                <label htmlFor='city'>City</label>
                <input ref={enteredCity} name ='city' type ='text' />
            </div>
            <div className={style.actions}>
                <button type='button' onClick={props.onCansel}>Cancel</button>
                <button className={style.submit}>Confirm</button>
            </div>
        </form>
    )
}

export default Chackout; 