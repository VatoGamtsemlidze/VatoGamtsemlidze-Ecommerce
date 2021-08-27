import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import {selectLoggedIn} from "../store/selectors/userSelectors";
import {mainPage} from "../routes";

const PrivateRoute = ({ component: Component, ...rest }) => {

    const isLoggedIn = useSelector(selectLoggedIn);
    console.log(isLoggedIn);
    return (
        <Route
            {...rest}
            render={(props) => (
                isLoggedIn ? <Redirect
                        to={{
                            pathname: mainPage,
                            state: {
                                from: props.location,
                            },
                        }}
                    />
                    :
                    <Component {...props}/>
            )
            }
        />
    );
}
export default PrivateRoute;