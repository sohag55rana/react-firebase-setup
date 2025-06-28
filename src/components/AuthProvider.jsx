import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword, FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, TwitterAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [users, setUsers] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const twitterProvider = new TwitterAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const githubSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    const twitterSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, twitterProvider)
    }
    const facebookSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, facebookProvider)
    }

    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUsers(currentUser)
        })
        return () => {
            unSubscribe()
        }

    }, [])

    const authInfo = {
        users, setUsers, loading, createUser, signOutUser, googleSignIn, githubSignIn, twitterSignIn, signInUser, facebookSignIn
    }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;