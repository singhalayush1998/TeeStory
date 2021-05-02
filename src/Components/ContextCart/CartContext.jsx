import { createContext, useState } from "react";
import { useSelector } from "react-redux";
import { loadData, saveData } from "../../Utils/LocalStorage";


export const CartContext = createContext()

export const CartContextProvider=({children})=>{
    const [cart,setCart] = useState([]||loadData("cart"))

    const handleAdd=(payload)=>{
        setCart([...cart.filter(item=>item.name !== payload.name||item.size !==payload.size),payload])
        saveData("cart",[...cart.filter(item=>item.name !== payload.name || item.size !==payload.size),payload])
    }
    const handleQuantityChange=(payload,quantity)=>{
        setCart([...cart.map(item=>item.name === payload.name?{...item,qty:quantity}:item)])
        saveData("cart",[...cart.map(item=>item.name === payload.name?{...item,qty:quantity}:item)])
    }
    const handleDelete=(name)=>{
        setCart([...cart.filter(item=>item.name!==name)])
        saveData("cart",[...cart.filter(item=>item.name !== name)])
    }
    const values = {
        cart,
        handleAdd,
        handleQuantityChange,
        handleDelete
    }

    return <CartContext.Provider value={values}>{children}</CartContext.Provider>
}