import useInput from "../hooks/use-input";
import styles from "./ContactForm.module.css";

const ContactForm = (props) => {

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: messageInputHasError,
    valueChangeHandler: messageChangedHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessageInput,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid && enteredMessageIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("Name:", enteredName);
    console.log("Email:", enteredEmail);
    console.log("Message:", enteredMessage);
    resetNameInput();
    resetEmailInput();
    resetMessageInput();
  };
  
  return (
    <form onSubmit={formSubmissionHandler} className={styles.container}>
      <div className={styles.inputContainer}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className={styles["error-text"]}>Please enter a valid name.</p>
        )}

        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className={styles["error-text"]}>Please enter a valid email.</p>
        )}

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          onChange={messageChangedHandler}
          onBlur={messageBlurHandler}
          value={enteredMessage}
        />
        {messageInputHasError && (
          <p className={styles["error-text"]}>Please enter a valid message.</p>
        )}

        <div className={styles["form-actions"]}>
          <button className={styles.submitBtn} disabled={!formIsValid}>
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;