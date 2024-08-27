import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [cartItems, setCartItems] = useState([]);

    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
        setCartItems([]);
    };

    return (
        <AuthContext.Provider value={{ user, setUser, login, logout, cartItems, setCartItems }}>
            {children}
        </AuthContext.Provider>
    );
};
