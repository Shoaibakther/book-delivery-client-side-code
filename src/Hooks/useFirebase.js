import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import firebaseAuthentication from "../Components/Firebase/firebase.init";


firebaseAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
        .finally(() => setIsLoading(false))
            // .then((result) => {
            //     setUser(result.user)
            // }).catch(error => {
            //     setError(error.message)
            // })
    }
            
    const logOut = () => {
        setIsLoading(true);
            signOut(auth)
                .then(result => {
            
                })
        .finally(() => setIsLoading(false))
        }
        useEffect(() => {
           const unsubscribed = onAuthStateChanged(auth, (user) => {
                if (user) {
                    setUser(user)
               }
                else {
                    setUser({})
               }
               setIsLoading(false)
           });
            return () => unsubscribed;
        }, [setUser]);
    return {
        user,
        error,
        isLoading,
        signInUsingGoogle,
        logOut
        }
}
export default useFirebase;
