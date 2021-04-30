import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { CartContext } from '../ContextCart/CartContext'
import cartStyle from "./cart.module.css"
import Cartquantity from './Cartquantity'

function Cart() {
    // const [quantity,setQuantity] = useState(0)
    const addref = useRef()
    const subref = useRef()
    const {handleDelete,cart} = useContext(CartContext)
    const [total,setTotal] = useState(0)
    useEffect(()=>{
        if(cart.length===1){
            setTotal(cart[0].price*cart[0].qty)
        }else if(cart.length !== 0){
            setTotal(cart.reduce((a,b)=>(a.price*a.qty) +( b.price*b.qty)))
        }
    },[cart])
    // console.log(cart)
    console.log(cart,total)
    return (
        <div>
            <div>
                <img width="100%" src="https://www.teestory.in/image/catalog/checkoutbanner/checkoutbannerd.jpg" alt=""/>
            </div>
            <div>
                <h1>Shopping Cart</h1>
            </div>
            <div>
                <div style={{textAlign:"left"}}>
                    {
                        cart?.map((item)=>
                            <div className={cartStyle.cartCards}>
                                <div className={cartStyle.cartCardsImg}>
                                    <img width="100%" height="100%" src={item.img} alt=""/>
                                </div>
                                <div className={cartStyle.cartCardsDetails}>
                                    <p>{item.name}</p>
                                    <p>Size: {item.size}</p>
                                    <Cartquantity qun={item.qty} name={item.name}/>
                                    <h2>{item.price}</h2>
                                </div>
                                <div className={cartStyle.cartCardsRemoveBtn}>
                                    <button onClick={()=>handleDelete(item.name)}>Remove</button>
                                </div> 
                            </div>
                        )
                    }
                </div>
                {cart.length!==0 &&
                    <div>
                        <div>Summary</div>
                        <div style={{display:"flex"}}>
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
                            <button>Place Order</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Cart
