import React, { useState } from 'react';
import SignUpUi from '../ui/sign-up';
import {SignValidar} from '../sign-validar/sign-validar';
import { firebase } from '../firebase/firebase-config';
export default function SignUp({ history }) {
  const [usuario, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [reCaptcha, setReCaptcha] = useState(false);
  const onChangeReCaptcha  = async value => {
    console.log("Captcha value:", value);
    setReCaptcha(true);
  }
  const correoNewClave = async e => {
   
    e.preventDefault();
    console.log(`error =>verifica`);
    if (SignValidar(usuario, password)){
      console.log(`error =>verifica- ok`);
      if (reCaptcha){
          firebase.auth().createUserWithEmailAndPassword(usuario, password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
        
          alert(`se refistro correctamente su usuario`);
        
          history.replace('/');
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(`error =>${errorMessage} - ${errorCode}`);
          // ..
        });
    }else{alert(`debe validar que no es un robot`);}
   }
  }
  return (<><SignUpUi 
     username={e => setUserName(e.target.value)} password={e => setPassword(e.target.value)}  onChangeReCaptcha={(e)=> onChangeReCaptcha(e)} handleSubmit={(e)=> correoNewClave(e)} 
  /></>);  
}