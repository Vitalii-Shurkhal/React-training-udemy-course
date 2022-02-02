import React from 'react';
import mealsImg from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';
import style from './Header.module.css';


const Header = (props) => {

    return (
        <React.Fragment>
            <header className={style.header}>
                <h1>React-Meal-App</h1>
                <HeaderCartButton onShown = {props.onShown}/>
            </header>
            <div className= {style['main-image']}>
                <img src = {mealsImg} alt='full table of meal'/>
            </div>
        </React.Fragment>
    )

}

export default Header;