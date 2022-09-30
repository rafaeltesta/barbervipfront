import React, { useContext } from 'react';


import AuthRoutes from './auth.routes.js';
// import ClienteRoutes from './cliente.routes';
import BarbeiroRoutes from './barbeiro.routes';


function Routes(){
    
    return (
        <BarbeiroRoutes></BarbeiroRoutes>
    )
}

export default Routes;
