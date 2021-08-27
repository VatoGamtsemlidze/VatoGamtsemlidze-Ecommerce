import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import {mainPage} from "../routes";
import {selectUser} from "../store/selectors/userSelectors";

const PrivateRoute = ({ component: Component, ...rest }) => {

    const token = localStorage.getItem('token')
    const user = useSelector(selectUser)

    return (
        <Route
            {...rest}
            render={(props) =>
                user.isLoggedIn && token ? (
                        <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: mainPage,
                            state: {
                                from: props.location,
                            },
                        }}
                    />
                )
            }
        />
    )
}

export default PrivateRoute;