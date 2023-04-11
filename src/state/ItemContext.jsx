import React, { createContext, useState } from 'react';

export const ItemContext = createContext();

const ItemContextProvider = (props) => {

    // ======================================== shop items ========================================

    const [shopItems, setShopItems] = useState([]);


    const addItem = (item) => {
        if (!shopItems.find((i) => i.id === item.id)) {
            setShopItems([...shopItems, item]);
        }
    };
    const removeItem = (item) => {
        const newCartItems = [...(shopItems.filter((i) => i.id !== item.id))];
        setShopItems(newCartItems);
    };
 

    // ======================================== recent search ========================================
    const [recentSearch, setRecentSearch] = useState([]);

    const addRecentSearch = (search) => {
        setRecentSearch([...recentSearch, search]);
    };
    const removeRecentSearch = (index) => {
        const tempList = [...recentSearch];
        tempList.splice(index, 1);
        setRecentSearch(tempList);
    };

    return (
        <ItemContext.Provider value={{ recentSearch ,addRecentSearch, removeRecentSearch ,shopItems, addItem, removeItem }}>
            {props.children}
        </ItemContext.Provider>
    );
    

};

export default ItemContextProvider;
