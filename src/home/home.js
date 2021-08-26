import logo from '../logo.svg';
import '../App.css';
//import Dashboard from '../ui/Chart';
import Card from '@material-ui/core/Card';
import Link from '@material-ui/core/Link';
import { firebase } from '../firebase/firebase-config';

export const startLogout  = async()  => {
  /* await firebase.auth().signOut();
  await firebase.auth().getInstance().signOut(); */
  console.log("init Successfully signed out.")
  await firebase.auth().signOut().then(function() {
    console.log("Successfully signed out.")

  }).catch(function(error) {
    console.log(error)
    console.log("An error occurred")
  });
}
function Home() { 
  
    return (
      <div className="App">
        <Card>
          <h1>Home</h1> 
          <Link
  component="button"
  variant="body2"
  onClick={() => startLogout()}
>
  Cerrar sesion
</Link>
        </Card>
         

      </div>
    );
}
export default Home;