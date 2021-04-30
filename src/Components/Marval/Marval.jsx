import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { productDetails } from '../../ReduxFiles/action'
import marvalStyle from "./marval.module.css"


function Marval() {
    const data = useSelector(state=>state.data.details)
    const dispatch = useDispatch()
    const over=(name,img)=>{
        document.getElementsByClassName(name)[0].src=img
    }
    useEffect(()=>{
        dispatch(productDetails())
    },[])

    return (
        <div>
            <div>
                <img src="https://www.teestory.in/image/catalog/categorybanner/category-BANNER-marvel.jpg" width="100%" alt=""/>
            </div>
            <div>
                <div className={marvalStyle.marvalproddiv}>
                        {
                            data?.marval.map((item)=>
                            <Link to={`/marval/${item.name}`} className={marvalStyle.proddiv} key={item.id}>
                                <img onMouseOver={()=>over(item.name,item.hoverimg)} onMouseOut={()=>over(item.name,item.img)} className={item.name}  width="100%" src={item.img} alt=""/>
                                <p style={{fontSize:"80%"}}>{item.name}</p>
                                <h3 style={{color:"#00C83D"}}>{item.price}</h3>
                            </Link>
                            )
                        }
                </div>
            </div>
        </div>
    )
}

export default Marval
