import React, {createContext, useState} from 'react';
// import auth from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';
import firebase,{auth, db} from '../firebase/config';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [image, setImage] = useState('');
  const [roles, setRoles] = useState('');


  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth.signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        
        register: async ( email, password) => {
          try {
            await auth.createUserWithEmailAndPassword(email,  password)
            .then(() => {
              //Once the user creation has happened successfully, we can add the currentUser into firestore
              //with the appropriate details.
              db.collection('users').doc(auth.currentUser.uid)
              .set({
                  fname: firstName,
                  lname: lastName,
                  email: email,
                  roles: roles,
                  createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
                  userImg: image,
              })
              //ensure we catch any errors at this stage to advise us if something does go wrong
              .catch(error => {
                  console.log('Something went wrong with added user to firestore: ', error);
              })
            })
            //we need to catch the whole sign up process if it fails too.
            .catch(error => {
                console.log('Something went wrong with sign up: ', error);
            });
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth.signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};