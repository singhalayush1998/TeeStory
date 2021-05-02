import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { loadData } from '../../Utils/LocalStorage'
import { CartContext } from '../ContextCart/CartContext'
import cartStyle from "./cart.module.css"
import Cartquantity from './Cartquantity'

function Cart() {
    const {handleDelete} = useContext(CartContext)
    const cart = loadData("cart")
    const [total,setTotal] = useState(0)
    useEffect(()=>{
        if(cart.length===1){
            setTotal(cart[0].price*cart[0].qty)
        }else if(cart.length !== 0 && cart.length!==1){
            setTotal(cart.reduce((a,b)=>a+b.price*b.qty,0))
        }
    },[cart])
    console.log(cart,total)
    return (
        <div>
            <div>
                <img  width="100%" src="https://www.teestory.in/image/catalog/checkoutbanner/checkoutbannerd.jpg" alt=""/>
            </div>
            <div>
                <h1>Shopping Cart</h1>
            </div>
            {cart.length!==0 &&
            <div className={cartStyle.CartDiv}>
                <div className={cartStyle.CartDivitem} >
                    {
                        cart?.map((item)=>
                            <div className={cartStyle.cartCards}>
                                <div className={cartStyle.cartCardsImg}>
                                    <img width="100%" height="100%" src={item.img} alt=""/>
                                </div>
                                <div className={cartStyle.cartCardsDetails}>
                                    <p>{item.name}</p>
                                    <p>Size: {item.size}</p>
                                    <Cartquantity qun={item.qty} payload={item}/>
                                    <h2>₹{item.price}</h2>
                                </div>
                                <div className={cartStyle.cartCardsRemoveBtn}>
                                    <button onClick={()=>handleDelete(item.name)}>✖️</button>
                                </div> 
                            </div>
                        )
                    }
                </div>
                <div  className={cartStyle.CartDivSummery}>
                    {cart.length!==0 &&
                        <div>
                            <h1>Summary</h1>
                            <div style={{display:"flex",justifyContent:"space-between",padding:"0rem 1rem",textAlign:"left"}}>
                                <div>
                                    <p>Sub total: </p>
                                    <p>Shipping: </p>
                                    <p>Gst: </p>
                                    <p>Total: </p>
                                </div>
                                <div>
                                    <p>₹ {Math.floor(total-((total*5)/100))}</p>
                                    <p>₹ 0</p>
                                    <p>₹ {Math.floor((total*5)/100)}</p>
                                    <p>₹ {total}</p>
                                </div>
                            </div>
                            <div>
                                <button className={cartStyle.cartPlaceOrderbtn}>Place Order</button>
                            </div>
                        </div>
                    }
                </div>
            </div>}
            {
                cart.length===0 && 
                <>
                <div>
                    <img  width="20%" src="https://www.teestory.in/image/catalog/failure_icon.png" alt=""/>
                </div>
                <div>
                    <h1>Oops!!</h1> 
                </div>
                <div>
                    <h3>Your shopping cart is empty!</h3>
                </div>
                </>
            }
        </div>
    )
}

export default Cart
