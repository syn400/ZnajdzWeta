import React, {useContext} from 'react';
import { Route } from 'react-router-dom';
import { AuthContext } from '../Auth';

export const PrivateRoute = ({component: RouteComponent, ...rest}) => {
    const {currentUser} = useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={routeProps => 
            !!currentUser ? (
                <RouteComponent {...routeProps} />
            ) : (
                null
            )
        }
    />
    );
}