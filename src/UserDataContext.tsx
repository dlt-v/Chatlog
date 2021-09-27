import React, { useState, useEffect, createContext } from 'react';

export const UserDataContext = createContext();

export const UserDataProvider = (props) => {

    

    return (
        <UserDataContext.Provider value={[tasks, setTasks]}>
            {props.children}
        </UserDataContext.Provider>
    );
};
