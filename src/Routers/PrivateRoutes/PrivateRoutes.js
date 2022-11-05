
import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';

const PrivateRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading) {
        return <h2 className='text-5xl '>Loading</h2>
    }

    if(user?.email) {
        return children
    }

    return <Navigate state={{from:location}} replace> </Navigate>
};

export default PrivateRoutes;