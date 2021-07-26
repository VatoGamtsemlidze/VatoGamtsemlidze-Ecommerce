import React from "react";
import { useState } from "react";

export const UserContext = React.createContext({});

const UserContextProvider = ({ children }) => {
    let [data, setData] = useState({
        isLogged: false,
        user: {},
        counter:0,
    });

    return (
        <UserContext.Provider
            value={{
                data,
                setData,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;