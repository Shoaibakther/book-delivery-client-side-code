import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import firebaseAuthentication from "../Components/Firebase/firebase.init";


firebaseAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState([])
    const [error, setError] = useState('')
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
      return signInWithPopup(auth, googleProvider)
            // .then((result) => {
            //     setUser(result.user)
            // }).catch(error => {
            //     setError(error.message)
            // })
    }
            
        const logOut = () => {
            signOut(auth)
                .then(result => {
            
                })
        }
        useEffect(() => {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setUser(user)
                }
            });
        }, [setUser]);
    return {
        user,
        error,
        signInUsingGoogle,
        logOut
        }
}
export default useFirebase;
