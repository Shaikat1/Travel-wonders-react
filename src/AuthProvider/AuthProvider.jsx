/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged, signOut } from "firebase/auth";
import auth from "../firebase.config";





export const AuthContext = createContext(null)
 const AuthProvider = ({children}) => {
   
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const [brandName,setBrandName] = useState(null);
    const [types,setTypes] = useState(null)
    const [updateId,setUpdateId] = useState(null);

    const googleProvider = new GoogleAuthProvider();

    const loginWithGoogle = () => {
        setLoading(true);
        return (signInWithPopup(auth, googleProvider))
    }

    const  register = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    // get brandName

    const handleBrandName =(brandName) =>{
           setBrandName(brandName)
    }


    const handleTypes =(types) =>{
           setTypes(types)
    }

    const handleUpdate = (id) =>{
        setUpdateId(id)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false);
          });

          return (() => {
            return unsubscribe()
          })
    },[])
    
    const authInfo ={
        user,
        loginWithGoogle,
        register,
        login,
        logOut,
        loading,
        
    }
    return (
        <AuthContext.Provider value = {authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;