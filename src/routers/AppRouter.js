//import React from "react";
import React, { useState, useEffect } from 'react';
import Login from '../sign-in/sign-in';
import Home from '../home/home';
import ErrorPage from '../error/error';
import signUp from '../sign-up/sign-up';
import { firebase } from '../firebase/firebase-config';
import { PublicRoute } from './PublicRouter';
import { PrivateRoute } from './PrivateRouter';
import {AuthRouter} from  './AuthRouter';
import {
  BrowserRouter as Router,
  Switch, 
  Redirect
} from "react-router-dom";
export default function AppRouter (props) {
    const [loguin, setLoguin] = useState(false);
    useEffect(() => {
    /** ente metodo onchang en caso que se necesite un login a un api propio */
     function onChange(){
       console.log(`entro commit`);
     if (localStorage.getItem("token")){
         console.log(`nuevo  token ${localStorage.getItem("token")}`);
         setLoguin(true);
     }
   }

   if( !loguin){
    /**listerner que si esta logueado devuelve el uid de firebase */
    firebase.auth().onAuthStateChanged( (user) => {
 
     if ( user?.uid ) {
        setLoguin(true);
        console.log(`uid=>${user.uid} v=${loguin}`);
       

     } else {
       console.log(`no loguin`);
       setLoguin(false);
     }
   
 
 }); 
 }
    /** se usa en caso de un api propia */  
    // window.addEventListener('submit', onChange);
  
   }); 


   /** PrivateRoute parametriza las pantallas propias si no esta logueado lo envia al loguin */
   /**AuthRouter routh de las pantallas de login y register */
    return (
        <Router  >
        <div>
            <Switch> 
                
                <PublicRoute 
                        path="/auth"
                        component={ AuthRouter }
                        isAuthenticated={ loguin }
                    />
                    <PrivateRoute path="/" component={ Home }  isAuthenticated={ loguin }  />           
              

                <Redirect to="/login" />
            </Switch>
        </div>
    </Router>
      );
}