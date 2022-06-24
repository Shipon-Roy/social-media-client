import { getAuth,  onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.initialize';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsloading] = useState(true);
    const [error, setError] = useState('');

    const auth = getAuth();

    const userRegister = (name, email, password, history) => {
        setIsloading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            history.replace('/')
            const user = {email, displayName: name};
            setUser(user);
            setError('')
            // allRegisterUser(email, name)
        })
        .catch((error) => {
            setError(error.message)
        })
        .finally( () => setIsloading(false))
    }


    const logInUser = (email, password, location, histroy) => {
        setIsloading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const redairect = location?.state?.from || '/';
            histroy.replace(redairect);
            setError('')
        })
        .catch((error) => {
            setError(error.message)
        })
        .finally( () => setIsloading(false))
    }


    useEffect( () => {
        const unKnownUser = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
            }
            else{
                setUser({})
            }
            setIsloading(false)
        })
        return () => unKnownUser;
    }, [auth])

    const logOut = () => {
        setIsloading(true)
        signOut(auth)
        .then( () => { })
        .finally( () => setIsloading(false))
    }

    // const allRegisterUser = (email, name) => {
    //     fetch('http://localhost:5000/user', {
    //         method: "POST",
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify({email, name})
    //     })
    //     .then(res => res.json())
    //     .then(data => { 
    //         setUser(data)
    //      })
    // }


    return {
        user,
        error,
        isLoading,
        userRegister,
        logInUser,
        logOut
    }

};

export default useFirebase;