import React,{useState, useRef,useContext } from 'react';
import { Link,useHistory } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import AuthContext from '../store/auth-context';
import TosterError from "../Toster/TosterError"
import TosterSuccess from "../Toster/ToastSuccess"


const Login = () =>  {

  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  let history = useHistory();
  const authctx = useContext(AuthContext);


  const [isError, SetIsError] = useState('');
  const [message, setMessage] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    fetch('http://localhost:8080/api/auth/signin',
    {
      method: 'POST',
      body: JSON.stringify({
        username: enteredUsername,
        password : enteredPassword
        
      }),
      headers: {
        'Content-Type':'application/json'
      }
    }).then(response => {
      if(response.ok){
        response.json().then(data => {
            console.log("after sigin---------->",data);

            authctx.login(data);

            SetIsError(false);
            setMessage("Welcome "+enteredUsername);
            history.replace('/dashboard')
        });
        
      }
      else{
        return response.json().then(data => {

          let errorMessage = "Authentication Failed!";

          setMessage(errorMessage);
         
          if(data.error){
            errorMessage=data.error;
          }else{
            errorMessage=data.message;
          }

         
          SetIsError(true);
        })

      }
    });

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
                <h4>Hello! let's get started</h4>
                <h6 className="font-weight-light">Sign in to continue.</h6>
                <Form className="pt-3" onSubmit={submitHandler}>
                  <Form.Group className="d-flex search-field">
                    <Form.Control type="text" placeholder="Username" size="lg" className="h-auto" required ref={usernameInputRef}/>
                  </Form.Group>
                  <Form.Group className="d-flex search-field">
                    <Form.Control type="password" placeholder="Password" size="lg" className="h-auto" required ref={passwordInputRef}/>
                  </Form.Group>
                  <div className="mt-3">
                  <button type='submit' className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">SIGN IN</button>
                  </div>
                  <div className="my-2 d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input"/>
                        <i className="input-helper"></i>
                        Keep me signed in
                      </label>
                    </div>
                    <a href="!#" onClick={event => event.preventDefault()} className="auth-link text-black">Forgot password?</a>
                  </div>
                  <div className="mb-2">
                    <button type="button" className="btn btn-block btn-facebook auth-form-btn">
                      <i className="mdi mdi-facebook mr-2"></i>Connect using facebook
                    </button>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Don't have an account? <Link to="/user-pages/register" className="text-primary">Create</Link>
                  </div>
                  {isError && message && <TosterError msg={message}/>}
                {!isError && message && <TosterSuccess msg={message}/>}
                </Form>
                
              </div>
            </div>
          </div>
        </div>  
      </div>
    )
  }


export default Login
