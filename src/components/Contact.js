import { useRef } from "react";
import classes from "./ContactUs.module.css";
const ContactUs = () => {
  const nameInputref = useRef();
  const emailIdInputref = useRef();
  const phoneNumberInputref = useRef();

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
        const userData = {
            name: nameInputref.current.value,
            emailId: emailIdInputref.current.value,
            phoneNumner: phoneNumberInputref.current.value
          };

          const response = fetch(
            "https://newcontact-da682-default-rtdb.firebaseio.com/user.json",
            {
              method: "POST",
              body: JSON.stringify(userData),
              headers: {
                "Content-Type": "application/json",
              },

            }
          );

          console.log(response.data);
    }
    catch(error) {
        console.log(error)
    }
  };
  return (
    <div className={classes.form}>
    <form>
      <div>
        <span>Name</span>
        <input type="text" ref={nameInputref}></input>
      </div>
      <div>
        <span>Email id</span>
        <input type="text" ref={emailIdInputref}></input>
      </div>
      <div>
        <span>Phone Number</span>
        <input type="text" ref={phoneNumberInputref}></input>
      </div>
      <button type="submit" onClick={onSubmitHandler}>
        Submit
      </button>
    </form>
   </div>
  );
};

export default ContactUs;
