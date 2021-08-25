import React from "react";
import { useState } from "react";

export const UserContext = React.createContext({});

const UserContextProvider = ({ children }) => {
    let [data, setData] = useState({
        isLogged: false,
        user: {},
        counter:0,
        cartProduct: [
            // {
            // img: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
            // title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
            // price: 109.95,
            // desc: 'Your Perfect Pack For Everyday Use And Walks In The Forest. Stash Your Laptop (Up To 15 Inches) In The Padded Sleeve, Your Everyday',
            // },
            // {
            //     img: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            //     title: 'Mens Casual Premium Slim Fit T-Shirts',
            //     price: 22.3,
            //     desc: 'Your Perfect Pack For Everyday User In The Padded Sleeve, Your Everyday',
            // }
        ]
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