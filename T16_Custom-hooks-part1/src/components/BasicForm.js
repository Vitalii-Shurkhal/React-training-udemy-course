import useInput from '../hooks/use-input';

const BasicForm = (props) => {
  // First Name
  const {
    value: enteredFn,
    isValid: enteredFnIsValid,
    hasError: inputFnIsInValid,
    valueChangeHandler: changeFnHandler,
    inputBlurHandler: blurFnHandler,
    reset: resetFnInput
  } = useInput(value => value.trim() !== '')

  // Last Name 
  const {
    value: enteredLn,
    isValid: enteredLnIsValid,
    hasError: inputLnIsInvalid,
    valueChangeHandler: changeLnHandler,
    inputBlurHandler: blurLnHandler,
    reset: resetLnInput

  } = useInput(value => value.trim() !== '')


  // Email 
  const { 
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputIsInvalid,
    valueChangeHandler: changeEmailHandler,
    inputBlurHandler: blurEmailInput,
    reset: resetEmailInput
  } = useInput(value => value.includes('@'));

  // Form 

  let formIsValid = false;

  if (enteredFnIsValid && enteredLnIsValid && enteredEmailIsValid) {
    formIsValid = true
  }

  const submitHandler = event => {
    event.preventDefault()

    console.log(enteredFn)
    console.log(enteredLn)
    console.log(enteredEmail)

    resetFnInput();
    resetLnInput();
    resetEmailInput();
  }

  // Class Validation 
  const inputFnClasses = inputFnIsInValid ? 'form-control invalid' : 'form-control';
  const inputLnClasses = inputLnIsInvalid ? 'form-control invalid' : 'form-control';
  const inputEmailClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={inputFnClasses} >
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onBlur={blurFnHandler} onChange={changeFnHandler} value={enteredFn} />
          {inputFnIsInValid && <p className = 'error-text'>Please enter your name</p>}
        </div>
        <div className={inputLnClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' onBlur={blurLnHandler} onChange={changeLnHandler} value={enteredLn} />
          {inputLnIsInvalid && <p className = 'error-text'>Please enter your Last Name</p>}
        </div>
      </div>
      <div className={inputEmailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' onChange={changeEmailHandler} onBlur={blurEmailInput} value={enteredEmail} />
        {emailInputIsInvalid && <p className = 'error-text'>Please enter valid email</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;


// const BasicForm = (props) => {
//   // First Name
//   const [enteredFn, setEnteredFn] = useState('');
//   const [inputFnTouched, setInputFnTouched] = useState(false);
//   const enteredFnIsValid = enteredFn.trim() !== '';
//   const inputFnIsInValid = !enteredFnIsValid && inputFnTouched;

//   const changeFnHandler = event => {
//     setEnteredFn(event.target.value)
//   };

//   const blurFnHandler = () => {
//     setInputFnTouched(true)
//   };

//   // Last Name 
//   const [enteredLn, setEnteredLn] = useState('');
//   const [inputLnTouched, setInputLnTouched] = useState(false);
//   const enteredLnIsValid = enteredLn.trim() !== '';
//   const inputLnIsInvalid = !enteredLnIsValid && inputLnTouched;

//   const changeLnHandler = event => {
//     setEnteredLn(event.target.value)
//   };

//   const blurLnHandler = () => {
//     setInputLnTouched(true)
//   }

//   // Email 
//   const [enteredEmail, setEnteredEmail] = useState('');
//   const [inputEmailTouched, setInputEmailTouched] = useState(false);
//   const enteredEmailIsValid = enteredEmail.includes('@');
//   const emailInputIsInvalid = !enteredEmailIsValid && inputEmailTouched;

//   const changeEmailHandler = event => {
//     setEnteredEmail(event.target.value)
//   };

//   const blurEmailInput = () => {
//     setInputEmailTouched(true)
//   }

//   // Form 

//   let formIsValid = false;

//   if (enteredFnIsValid && enteredLnIsValid && enteredEmailIsValid) {
//     formIsValid = true
//   }

//   const submitHandler = event => {
//     event.preventDefault()

//     console.log(enteredFn)
//     console.log(enteredLn)
//     console.log(enteredEmail)

//     setEnteredFn('');
//     setEnteredLn('');
//     setEnteredEmail('');
//     setInputLnTouched(false);
//     setInputFnTouched(false);
//     setInputEmailTouched(false);
//   }

//   // Class Validation 
//   const inputFnClasses = inputFnIsInValid ? 'form-control invalid' : 'form-control';
//   const inputLnClasses = inputLnIsInvalid ? 'form-control invalid' : 'form-control';
//   const inputEmailClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control';

//   return (
//     <form onSubmit={submitHandler}>
//       <div className='control-group'>
//         <div className={inputFnClasses} >
//           <label htmlFor='name'>First Name</label>
//           <input type='text' id='name' onBlur={blurFnHandler} onChange={changeFnHandler} value={enteredFn} />
//           {inputFnIsInValid && <p>Please enter your name</p>}
//         </div>
//         <div className={inputLnClasses}>
//           <label htmlFor='name'>Last Name</label>
//           <input type='text' id='name' onBlur={blurLnHandler} onChange={changeLnHandler} value={enteredLn} />
//           {inputLnIsInvalid && <p>Please enter your Last Name</p>}
//         </div>
//       </div>
//       <div className={inputEmailClasses}>
//         <label htmlFor='name'>E-Mail Address</label>
//         <input type='text' id='name' onChange={changeEmailHandler} onBlur={blurEmailInput} value={enteredEmail} />
//         {emailInputIsInvalid && <p>Please enter valid email</p>}
//       </div>
//       <div className='form-actions'>
//         <button disabled={!formIsValid}>Submit</button>
//       </div>
//     </form>
//   );
// };