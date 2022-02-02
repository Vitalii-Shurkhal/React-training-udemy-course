import useInput from "../hooks/use-input";

const SimpleInput = (props) => {

  const { 
    value: enteredName,
    isValid: nameInputIsValid,
    hasError: nameInputhasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: emailInputIsValad,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput

  } = useInput(value => value.includes('@gmail.com'))

  let formIsValid = false;


  if (nameInputIsValid && emailInputIsValad) {
    formIsValid = true
  }


  const formSubmitHandler = event => {
    event.preventDefault();
    if (!nameInputIsValid && !emailInputIsValad) {
      return
    }
    console.log(enteredName);
    console.log(enteredEmail);
    resetNameInput();
    resetEmailInput();

  }

  const inputNameClasses = nameInputhasError ? 'form-control invalid' : 'form-control'
  const inputEmailClasses = emailInputHasError ? 'form-control invalid' : 'form-control'


  return (
    <form onSubmit={formSubmitHandler}>
      <div className={inputNameClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameChangeHandler} value={enteredName} onBlur={nameBlurHandler} />
        {nameInputhasError && <p className="error-text">Name can't be empty</p>}
      </div>
      <div className={inputEmailClasses}>
        <label htmlFor='email'>Your Email</label>
        <input type='text' id='email' onChange={emailChangeHandler} value={enteredEmail} onBlur={emailBlurHandler} />
        {emailInputHasError && <p className="error-text">Email Not Valid</p>}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;



// last Example
// const SimpleInput = (props) => {

//   const [enteredName, setEnteredNAme] = useState('');
//   const [enteredEmail, setEnteredEmail] = useState('');
//   const [enteredNameInputTouched, setEnteredNameInputTouched] = useState(false);
//   const [enteredEmailInputTached, setEnteredEmailInputTached ] = useState(false)
//   const enteredNameIsValid = enteredName.trim() !== '';
//   const enteredEmailIsValid = enteredEmail.includes('@'); 
//   const nameInputIsInvalid =  !enteredNameIsValid && enteredNameInputTouched;
//   const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailInputTached
//   let formIsValid = false; 
//   console.log(enteredEmailIsValid)

//   if(enteredNameIsValid && enteredEmailIsValid){
//     formIsValid = true
//   }

//   const inputOnBlurHandler = () =>{ 
//     setEnteredNameInputTouched(true); 
//   }

//   const inputEmailOnBlur = () => {
//     setEnteredEmailInputTached(true)
//   }

//   const inputNameHandler = event => {
//     setEnteredNAme(event.target.value);
//   }

//   const inputEmailHandler = event => {
//     setEnteredEmail(event.target.value)
//   }

//   const formSubmitHandler = event => {
//     event.preventDefault();
//     setEnteredNameInputTouched(true)
//     setEnteredEmailInputTached(true)

//     if (!enteredNameIsValid && enteredEmailIsValid) {
//       return
//     }
//     console.log(enteredName)
//     setEnteredNAme('')
//     setEnteredEmail('')
//     setEnteredNameInputTouched(false)
//     setEnteredEmailInputTached(false)
//   }


//   const inputNameClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control'
//   const inputEmailClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control'


//   return (
//     <form onSubmit={formSubmitHandler}>
//       <div className={inputNameClasses}>
//         <label htmlFor='name'>Your Name</label>
//         <input type='text' id='name' onChange={inputNameHandler} value={enteredName} onBlur={inputOnBlurHandler} />
//         {nameInputIsInvalid && <p className="error-text">Name can't be empty</p>}
//       </div>
//       <div className={inputEmailClasses}>
//         <label htmlFor='email'>Your Email</label>
//         <input type='text' id='email' onChange={inputEmailHandler} value={enteredEmail} onBlur={inputEmailOnBlur} />
//         {emailInputIsInvalid && <p className="error-text">Email Not Valid</p>}
//       </div>

//       <div className="form-actions">
//         <button disabled = {!formIsValid}>Submit</button>
//       </div>
//     </form>
//   );
// };
