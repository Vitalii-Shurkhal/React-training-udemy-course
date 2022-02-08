import { useCallback, useState } from 'react';
import style from './Checkout.module.css'

const Chackout = () => {
 // Name input 
    const [enteredName, setEnteredName] = useState('');
    const [inputNameTouched, setInputNameTouched] = useState(false);
    const enteredNameIsValid = enteredName.trim() !== '';
    const inputNameIsInvalid = !enteredNameIsValid && inputNameTouched; 

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value)
    }; 

    const nameInputTouched = () => {
        setInputNameTouched(true)
    }

// Street input 

const [enteredStreet, setEnteredStreet] = useState('');
const [inputStreetTouched, setInputStreetTouched] = useState(false);
const enteredStreetIsValid = enteredStreet.trim() !== '';
const inputStreetIsInvalid = !enteredStreet && inputStreetTouched;

const streetChangeHandler = (event) => {
    setEnteredStreet(event.target.value)
}

const streetInputTouched = () => {
    setInputStreetTouched(true)
}

// Postal code input 

const [enteredPostalCode, setEnteredPostalCode] = useState('');
const [inputPostalCodeTouched, setInputPostalCodeTouched] = useState(false);
const enteredPostalCodeIsValid = enteredPostalCode.trim() !== '';
const inputPostalCodeIsInvalid = !enteredPostalCode && inputPostalCodeTouched;

const postalCodeChangeHandler = (event) => {
    setEnteredPostalCode(event.target.value)
}

const postalCodeInputTouched = () => {
    setInputPostalCodeTouched(true)
}

// City input 


    return (
        <form className={style.form}>
            <div className={style.control}>
                <label htmlFor='firstName'>Your Name</label>
                <input name ='firstName' type ='text' onChange={nameChangeHandler}  onBlur={nameInputTouched} value = {enteredName} />
            </div>
            <div className={style.control}>
                <label htmlFor='street'>Street</label>
                <input name ='street' type ='text' onChange={streetChangeHandler} onBlur={streetInputTouched}  value={enteredStreet}/>
            </div>
            <div className={style.control}>
                <label  htmlFor='postalCode'>Postal Code</label>
                <input name ='postalCode' type ='text' onChange={postalCodeChangeHandler} onBlur={postalCodeInputTouched} value={enteredPostalCode} />
            </div>
            <div className={style.control}>
                <label htmlFor='city'>City</label>
                <input name ='city' type ='text' />
            </div>
            <div className={style.actions}>
                <button>Cancel</button>
                <button className={style.submit}>Confirm</button>
            </div>
        </form>
    )
}

export default Chackout; 