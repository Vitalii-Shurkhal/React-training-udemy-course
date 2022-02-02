import React, { useRef, useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUsersForm.module.css';

const AddUsersForm = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    // const [enteredUserName, setEnteredUserName] = useState('')
    // const [enteredAge, setEntereAge] = useState('')
    const [error, setError] = useState();

    const addNewUserHandler = (event) => {
        event.preventDefault()
        const userNameRef = nameInputRef.current.value;
        const userAgeRef = ageInputRef.current.value;

        if(userNameRef.trim().length === 0 || userAgeRef.trim().length === 0){
            setError({
                title: 'Invalid Input',
                content: 'Fill some value to Input'
            })
            return
        }

        if (+userAgeRef < 1 ) {
            setError({
                title: 'Invalid Age',
                content: 'Age must be > 0'
            })
            return
        }
        props.onAddUser(userNameRef, userAgeRef)
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
        // setEnteredUserName('')
        // setEntereAge('')
    }

    // const enteredUserNameHandler = event => {
    //     setEnteredUserName(event.target.value)
    // }

    // const enteredAgeHandler = event => {
    //     setEntereAge(event.target.value)
    // }

    const clearErrorHandler = () => {
        setError(null)
    }

    return (
        <div>
        {error &&  <ErrorModal title = {error.title} content = {error.content} onError = {clearErrorHandler}/>}
        <Card className={styles.input}>
            <form onSubmit={addNewUserHandler}>
                <label htmlFor='username'>User name</label>
                <input id='username' type='text' 
                ref = {nameInputRef}
                // onChange = {enteredUserNameHandler} 
               // value = {enteredUserName} 
                />
                <label>Age</label>
                <input id='age' type='number' 
                ref = {ageInputRef}
                // onChange = {enteredAgeHandler} 
                //value = {enteredAge} 
                />
                <Button type='submit'>Add New user</Button>
            </form>
        </Card>
        </div>

    )
}

export default AddUsersForm;