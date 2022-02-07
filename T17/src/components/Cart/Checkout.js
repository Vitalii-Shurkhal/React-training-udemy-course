import style from './Checkout.module.css'

const Chackout = () => {

    return (
        <form className={style.form}>
            <div className={style.control}>
                <label htmlFor='firstName'>Your Name</label>
                <input name ='firstName' type ='text' />
            </div>
            <div className={style.control}>
                <label htmlFor='street'>Street</label>
                <input name ='street' type ='text' />
            </div>
            <div className={style.control}>
                <label  htmlFor='postalCode'>Postal Code</label>
                <input name ='postalCode' type ='text' />
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