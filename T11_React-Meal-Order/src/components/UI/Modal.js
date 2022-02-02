import React from "react";
import  ReactDOM  from "react-dom";
import style from './Modal.module.css';

const Backdrop = (props) => {
    return <div className={style.backdrop} onClick={props.onClose}></div>
};

const ModalOverlay = (props) => {
    return <div className={style.modal}>
        <div className={style.content}>
        {props.children}
        </div>
    </div>
}

const portalElement = document.getElementById('overlay')


const Modal = (props) => {

    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onClose = {props.onClose} />,portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </React.Fragment>
    )

}

export default Modal;
