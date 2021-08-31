import React, { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFramework, handleGoogleSignIn, handleSignOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './loginManager';
import './Login.css'
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer/Footer';

function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    error: '',
    success: '',
    name: '',
    email: '',
    password: '',
    photo: ''
  });

  initializeLoginFramework();

  const [loggedInUser, setLoggedInUser ] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
      handleGoogleSignIn()
      .then(res => {
        handleResponse(res, true);
        history.replace(from)
      })
     
  }

  const signOut = () => {
      handleSignOut()
      .then(res => {
          handleResponse(res, false);
      })
  }

  const handleResponse = (res, redirect) =>{
    setUser(res);
    setLoggedInUser(res);
    if(redirect){
        history.replace(from);
    }
  }

  const handleBlur = (e) => {
    let isFieldValid = true;
    if(e.target.name === 'email'){
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if(e.target.name === 'password'){
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber =  /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if(isFieldValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }
  const handleSubmit = (e) => {
    if(newUser && user.email && user.password){
      createUserWithEmailAndPassword(user.name, user.email, user.password)
      .then(res => {
        handleResponse(res, true);
        localStorage.setItem('user', JSON.stringify());
      })
    }

    if(!newUser && user.email && user.password){
      signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        handleResponse(res, true);
      })
    }
    e.preventDefault();
  }


  return (
    <section>
      <Navbar></Navbar>
        {user.isSignedIn ? <button onClick={signOut}>Sign Out</button> : <Link to='/login'>Login in</Link>
}
      <div className='login-area'>
        <div className="text-center">
            <h3>Login via Email & Password</h3>
            <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id=""/>
            <label htmlFor="newUser">New User? Sign up</label>
            <form onSubmit={handleSubmit}>
                {newUser && <input name="name" type="text" onBlur={handleBlur} placeholder="Your name"/>}
                <br/>
                <input type="text" name="email" onBlur={handleBlur} placeholder="Your Email address" required/>
                <br/>
                <input type="password" name="password" onBlur={handleBlur} placeholder="Your Password" required/>
                <br/>
                <input className='bg-success text-white w-50 fw-bold' type="submit" value={newUser ? 'Sign up' : 'Sign in'}/>
            </form>
            <p style={{color: 'red'}}>{user.error}</p>
            { user.success && <p style={{color: 'green'}}>User { newUser ? 'created' : 'Logged In'} successfully</p>}
        </div>
            {
             <div class="google-btn">
                <div class="google-icon-wrapper">
                   <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt=''/>
                </div>
                   <span className='btn-text' onClick={googleSignIn}>Continue with Google</span>
             </div>
            }
      
       </div>
     <Footer/>
    </section>
     
  );
}

export default Login;
