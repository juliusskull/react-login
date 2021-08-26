import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import SignIn from '../ui/sign-in';
import {SignValidar} from '../sign-validar/sign-validar';
import { firebase, googleAuthProvider } from '../firebase/firebase-config';

async function loginUser(credentials) {
 const url ='http://192.168.110.32/api_principal/v1/web/auth';

 return fetch(url, {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())   
   .catch((error) => {
    console.log(`token:error no se puede conectar:${error}`);
    console.error(error);
    return `{"code":"401"}`;
  })
}
const socialLogin = async (_googleAuthProvider)=>{
  firebase.auth().signInWithPopup( _googleAuthProvider )
            .then( ({ user }) => {
                console.log(`user=> ${user}`);
                
            });
} 
export default function Login({ history }) {
  const [usuario, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const titulo = 'Aguas del Norte';

  const singUp = e =>{
    e.preventDefault();
    history.push('/auth/register');
  }
  const correoClave = async e => {
  
    e.preventDefault();
    
    if (SignValidar(usuario, password) ){
    await firebase
        .auth()
        .signInWithEmailAndPassword(usuario, password)
        .then(result => {
            console.log(result);
            //history.push("/");
            console.log(`token:${result.user.email} `);
            //localStorage.setItem("token",token.token );
        })
        .catch(error => {
          // seterror(error.message) 
           console.log('error=>'+error);
        });
      }
  };
  const _resetPassword= async e => {
    console.log(`reset password*`);
    e.preventDefault();
  
    if (SignValidar(usuario,'ok' ) ){
    try {
      firebase
        .auth()
        .sendPasswordResetEmail(usuario)
        .then(() =>
        {alert(`El reset password correcto, se envio un email a su casilla de correos`);}
         /*  dispatch({
            type: RESET_SUCCESS,
            payload: "Reset email sent. Go check your inbox."
          }) */
        )
        .catch(err => {
          console.log(`reset password/ error`);
         /*  dispatch({
            type: RESET_ERROR,
            payload: "...some message for the user..."
          }); */
        });
    } catch (err) {
      /* dispatch({
        type: RESET_ERROR,
        payload: "...some message for the user..."
      }); */
    }
  }
  }
  const handleSubmit = async e => {
    
    e.preventDefault();
    console.log(`entra`);
    //---con promesas
    
/*    loginUser({
        usuario,
        password
    }).then(a=>{
      if(a.code === 200){        
      console.log(`token:${a.token}`);
    }else{
      console.log(`token:error no se puede conectar`);
    }
  }); */
   
   
  //--------- con wait-async
  const token = await loginUser({
    usuario,
    password
});
  if(token.code === 200){        
    console.log(`token:${token.token}`);
    localStorage.setItem("token",token.token );
  }else{
    console.log(`token:error no se puede conectar`);
  }

  } 
 return (<><SignIn titulo={titulo} username={e => setUserName(e.target.value)} password={e => setPassword(e.target.value)}  socialLogin={(e)=>socialLogin(googleAuthProvider)}  handleSubmit={(e)=> correoClave(e)} singup = { (e)=> singUp(e)} resetPassword={(e)=>_resetPassword(e)} /> </>);


}
