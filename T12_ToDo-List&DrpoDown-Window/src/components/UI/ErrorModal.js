import React from 'react';
import ReactDOM from 'react-dom'
import Button from './Button';
import Card from './Card';
import styles from './ErrorModal.module.css';

const ErrorModal = props => {

    const Dropdown = props => {
        return <div className = {styles.backdrop} onClick = {props.onError}/>
    }

    const Owerlay = props => {
        return <Card className={styles.modal}>
        <header className={styles.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
            {props.content}
        </div>
        <footer className={styles.actions}>
            <Button onClick = {props.onError}> Okai</Button>
        </footer>
    </Card>
    }

    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Dropdown onError = {props.onError}/>,
                document.getElementById('dropdown-root')
            )}
            {ReactDOM.createPortal(
                <Owerlay
                title = {props.title}
                content = {props.content}
                onError = {props.onError}/>,
                document.getElementById('owerlay-root')
            )}
            
        </React.Fragment>


    )
}

export default ErrorModal;

