import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import App2 from './sign-in/sign-in';
import Home from './home/home';
import ErrorPage from  './error/error.js';
import { firebase } from './firebase/firebase-config';
import AppRouter from './routers/AppRouter';

function App() {
 /*  const [loguin, setLoguin] = useState();
   useEffect(() => {
   
    function onChange(){
      console.log(`entro commit`);
    if (localStorage.getItem("token")){
        console.log(`nuevo  token ${localStorage.getItem("token")}`);
        setLoguin(true);
    }
  }
  if( !loguin){
    console.log(`entro loguin`);
   firebase.auth().onAuthStateChanged( (user) => {

    if ( user?.uid ) {
      console.log(`uid=>${user.uid}`);
      
       setLoguin(true);
    } else {
      setLoguin(false);
    }
  

}); 
}
    window.addEventListener('submit', onChange);
 
  }); */ 
 // return ( !loguin)?(<> <App2 /> </>) : (<><Home /> </>)
 
  return( <> <AppRouter  /> </>)
}

export default App;
