import './App.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import { useEffect, useState } from 'react';
//import ListOfTodo from './components/ListOfTodo';
import UserCard from './components/UserCard'
function App() {
  const [auth, setAuth] = useState(
    false || window.localStorage.getItem('auth') === 'true'
  );
  const [token, setToken] = useState('');
  const [userData, setUserData] = useState({ uuid: "", name: "", photoURL: "" });


  useEffect(() => {
    firebase.auth().onAuthStateChanged((userCred) => {
      if (userCred) {
        setAuth(true);
        window.localStorage.setItem('auth', 'true');
        userCred.getIdToken().then((token) => {
          setToken(token);
          setUserData({ uuid: userCred.uuid, name: userCred.displayName, photoURL: userCred.photoURL });
        });

      }
    });
  }, []);

  const loginWithGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((userCred) => {
        if (userCred) {
          setAuth(true);
          window.localStorage.setItem('auth', 'true');
        }
      });
  };
  const logout = () => {
    firebase.auth().signOut().then(() => {
      setAuth(false);
      window.localStorage.setItem('auth', 'false');
    })
  }

  return (
    <div className="App">
      {auth ? (
        <div>
          <UserCard userData={userData} logout={logout} />
        </div>
      ) : (
        <div>
          <button onClick={loginWithGoogle}>Login with Google</button>
        </div>
      )}
    </div>
  );
}

export default App;