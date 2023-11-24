import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import CreateContext from "../store/create-context";
import { useHistory } from "react-router-dom";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const history = useHistory();
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [isloggin, setLoggin] = useState(false);
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState(null);
  const createContext = useContext(CreateContext);
  function changeLogginFun(e) {
    e.preventDefault();
    setLoggin((prev) => {
      return !prev;
    });
  }
  async function userAuthntication(e) {
    e.preventDefault();
    let authurl;
    setloading(true);
    if (isloggin) {
      authurl =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyABXkXXXIAvM7L6AZX5G4LLoJ2HLvjV8N0";
    } else {
      authurl =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyABXkXXXIAvM7L6AZX5G4LLoJ2HLvjV8N0";
    }
    let res = await fetch(authurl, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: phone,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setloading(false);
    if (res.ok) {
      let data = await res.json();
      createContext.login(data.idToken, data.email);
      history.replace("/store");
    } else {
      let data = await res.json();
      let errormessage = "Authentication failed";
      if (data && data.error && data.error.code) {
        errormessage = data.error.message;
      }
      seterr(errormessage);
    }
  }

  return (
    <>
      <section className={classes.auth}>
        {err ? (
          <div>
            <Alert key={"danger"} variant={"danger"}>
              {err}
            </Alert>
          </div>
        ) : null}
        <div className={classes.control}>
          <h2 style={{color:"white"}}>{isloggin ? "Login" : "Signup"}</h2>
          <Form  onSubmit={userAuthntication}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email Id</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter password"
                value={phone}
                onChange={(e) => {
                  setphone(e.target.value);
                }}
              />
            </Form.Group>
            {loading && <p>Sending request...</p>}
            {!loading && (
              <Button className={classes.actions} variant="primary" type="submit">
                {isloggin ? "Login" : "Signup"}
              </Button>
            )}
          </Form>
          <div >
            <Button  className={classes.actions} variant="primary" type="submit" onClick={changeLogginFun}>
              {isloggin ? "Go to signup page" : "Go to loggin page"}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
export default AuthForm;
