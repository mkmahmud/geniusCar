import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from 'react';
import app from '../../Firebase/Firebase.config';
import { useState } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children }) => {


    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // Create User
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authinfo  = {
        user,
        loading,
        createUser
    }


    return (
        <AuthContext.Provider value={authinfo}>
            {children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;