import React, { createFactory } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { CartContext } from '../ContextCart/CartContext'
import cartStyle from "./cart.module.css"

function Cartquantity({qun,payload}) {
    const {handleQuantityChange} = useContext(CartContext)
    const [state,setState] = useState(qun)
    useEffect(()=>{
        handleQuantityChange(payload,state)
    },[state])

    return (
        <div style={{display:"flex"}}>
            <button disabled={state===1} onClick={()=>setState(prev=>prev-1)}  className={cartStyle.quantitybtns}>-</button>
            <div style={{width:"12%",background:"white",textAlign:"center"}}>{state}</div>
            <button onClick={()=>setState(prev=>prev+1)} className={cartStyle.quantitybtns}>+</button>
        </div>
    )
}

export default Cartquantity
