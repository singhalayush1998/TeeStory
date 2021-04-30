import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { productDetails } from '../../ReduxFiles/action'
import friendsItem from './friendsItem.module.css'


const btns = ["XS","S","M","L",'XL','XXL','XXXL','4XL',"5XL",'6XL']
const des =["Description","Quality","Deliver & Return"]

function FriendItems() {
    const data = useSelector(state=>state.data.details)
    const name = useParams()
    const individual_data=data?.friends.filter(item=>item.name === name.name)[0]
    const [image,setImg] = useState(individual_data?.img)
    const [quantity,setQuantity] = useState(1)
    const [size,setSize] = useState("")
    const handleSize=(e)=>{
        setSize(e.target.textContent)
        e.target.style.border="1px solid black"
    }

    console.log(individual_data)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(productDetails())
    },[])
    return (
        <div>
            <div className={friendsItem.Fullcontents}>
                <div className={friendsItem.imgdiv}>                
                    <div>
                        <img width="100%" src={image||individual_data?.img} alt=""/>
                    </div>
                    <div>
                        <div className={friendsItem.differimgdiv}>
                            <img onClick={(e)=>setImg(e.target.src)} width="12%" src={individual_data?.img} alt=""/>
                            <img onClick={(e)=>setImg(e.target.src)} width="12%" src={individual_data?.hoverimg} alt=""/>
                        </div>
                    </div>
                </div>
                <div className={friendsItem.contentdiv}>
                    <div>
                        <h1>{individual_data?.name}</h1>
                    </div>
                    <strong><spam style={{color:"red"}}>*</spam> size</strong>
                    <div style={{margin:"1rem 0px"}}>
                        {
                            btns.map(item=><button onClick={handleSize} className={friendsItem.sizebtns}>{item}</button>)
                        }
                    </div>
                    <div style={{display:"flex"}}>
                        <span style={{marginRight:"20px"}}>QTY: </span>
                        <button className={friendsItem.quantitybtns} disabled={quantity===1} onClick={()=>setQuantity(prev=>prev-1)}>-</button>
                            <div style={{border:"1px solid #E5E5E5",width:"10%",textAlign:"center"}}>{quantity}</div>
                        <button className={friendsItem.quantitybtns} onClick={()=>setQuantity(prev=>prev+1)}>+</button>
                    </div>
                    <div className={friendsItem.price}>{individual_data?.price}</div>
                    <div><button className={friendsItem.cartbtn}>Add to cart</button></div>
                </div>
            </div>
            <div style={{textAlign:"left",margin:"1rem 0rem 10rem 2rem"}}>
                <div>
                    <h2>Description</h2>
                    <p>{individual_data?.description}</p>
                </div>
                <div>
                    <h2>Quality</h2>
                    <ol>
                        {
                            individual_data?.quality.map(item=><li>{item}</li>)
                        }
                    </ol>
                </div>
                <div>
                    <h2>Services</h2>
                    <p>{individual_data?.delreturn}</p>
                </div>
            </div>
        </div>
    )
}

export default FriendItems
