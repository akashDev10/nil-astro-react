import React, { useRef, useState} from 'react';
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import TosterError from "../Toster/TosterError"



const Register = () =>  {
  const usernameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();


  const [isLogin, setIsLogin] = useState(true);

  const [isLoading ,setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const [isError, SetIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

   const submitHandler = (event) => {
      event.preventDefault();

      const enteredUsername = usernameInputRef.current.value;
      const enteredEmail = emailInputRef.current.value;
      const enteredPassword = passwordInputRef.current.value;

      if(isLogin){
      }else{
        setIsLoading(true);
        fetch('http://localhost:8080/api/auth/signup',
        {
          method: 'POST',
          body: JSON.stringify({
            username: enteredUsername,
            email : enteredEmail,
            password : enteredPassword
            
          }),
          headers: {
            'Content-Type':'application/json'
          }
        }).then(response => {
          setIsLoading(false);
          if(response.ok){
            
          }else{
            return response.json().then(data => {

              let errorMessage = "Authentication Failed!";
             
              if(data.errors[0].defaultMessage){
                errorMessage=data.errors[0].field+" "+data.errors[0].defaultMessage;
              }else{
                errorMessage=data.message;
              }

              SetIsError(true);
              setErrorMessage(errorMessage);
            })

          }
        });

      }

    }

    return (
      <div>
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <img src={require("../../assets/images/logo.svg")} alt="logo" />
                </div>
                <h4>New here?</h4>
               {isError && <TosterError msg={errorMessage}/>}
                <h6 className="font-weight-light">Signing up is easy. It only takes a few steps</h6>
                <form className="pt-3" onSubmit={submitHandler}>
                  <div className="form-group">
                    <input type="text" className="form-control form-control-lg" id="exampleInputUsername1" placeholder="Username" required ref={usernameInputRef}/>
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email" required ref={emailInputRef}/>
                  </div>
                  {/* <div className="form-group">
                    <select className="form-control form-control-lg" id="exampleFormControlSelect2">
                      <option>Country</option>
                      <option>United States of America</option>
                      <option>United Kingdom</option>
                      <option>India</option>
                      <option>Germany</option>
                      <option>Argentina</option>
                    </select>
                  </div> */}
                  <div className="form-group">
                    <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" required ref={passwordInputRef}/>
                  </div>
                  <div className="mb-4">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input" />
                        <i className="input-helper"></i>
                        I agree to all Terms & Conditions
                      </label>
                    </div>
                  </div>
                  <div className="mt-3">
                  {!isLoading && <button type='submit' onClick={switchAuthModeHandler} className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">SIGN UP</button>}
                  {isLoading && <Spinner animation="border" variant="info" />}
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Already have an account? <Link to="/user-pages/login" className="text-primary">Login</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }


export default Register
