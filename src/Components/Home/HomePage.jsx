import React, { useEffect, useState } from 'react'
import homeStyle from "./home.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { productDetails } from '../../ReduxFiles/action'
import { Link } from 'react-router-dom'



function HomePage() {
    const data = useSelector(state=>state.data.details)
    const dispatch = useDispatch()
    const [temp,setTemp] =useState(0)
    // console.log(temp)
    useEffect(()=>{
        let x =setInterval(()=>{
            if(temp===2){
                setTemp(pre=>pre=0)
            }else if(temp<2){
                setTemp(pre=>pre+1)       
            }
        },3000)
        return(()=>clearInterval(x))
    },[temp])
    const over=(name,img)=>{
        document.getElementsByClassName(name)[0].src=img
    }
    useEffect(()=>{
        dispatch(productDetails())
    },[])

    return (
        <div>
            <div className={homeStyle.slider}>
               <img width="100%" height="450vh" src={data?.homepage.sliderimg[temp].img} alt=""></img>
            </div>
            <div>
                <div className={homeStyle.featurebtn}>
                    <h3>Featured</h3>
                </div>
                <div className={homeStyle.homeproddiv}>
                    {
                        data?.homepage.products.map((item)=>
                        <Link to={`/${item.name}`} className={homeStyle.proddiv} key={item.id}>
                            <img onMouseOver={()=>over(item.name,item.hoverimg)} onMouseOut={()=>over(item.name,item.img)} className={item.name}  width="100%" src={item.img} alt=""/>
                            <p style={{fontSize:"80%"}}>{item.name}</p>
                            <h3 style={{color:"#00C83D"}}>{item.price}</h3>
                        </Link>
                        )
                    }
                </div>
            </div>
            <div>
                <h1>Popular Collection</h1>
            </div>
            <div className={homeStyle.catagory}>
                <div className={homeStyle.catagoryItem}>
                    <Link to={"/marval"}>
                        <img height="100%" width="100%" className={homeStyle.catagoryItemImg} src="https://www.teestory.in/image/cache/catalog/category tiles/category-tile-marvel-480x480.jpg" alt="" />
                    </Link>
                </div>
                <div className={homeStyle.catagoryItem}>
                    <Link to={"/dc"}>
                        <img height="100%" width="100%" className={homeStyle.catagoryItemImg} src="https://www.teestory.in/image/cache/catalog/category tiles/dc_catTile-480x480.jpg" alt="" />
                    </Link>
                </div>
                <div className={homeStyle.catagoryItem}>
                    <Link to={"/friends"}>
                        <img height="100%" width="100%" className={homeStyle.catagoryItemImg} src="https://www.teestory.in/image/cache/catalog/category tiles/friends-CATEGORY-TILE-480x480.jpg" alt="" />
                    </Link>
                </div>
                <div className={homeStyle.catagoryItem}>
                    <img height="100%" width="100%" className={homeStyle.catagoryItemImg} src="https://www.teestory.in/image/cache/catalog/category tiles/CATEGORY-TILE-disney-480x480.jpg" alt="" />
                </div>
                <div className={homeStyle.catagoryItem}>
                    <img height="100%" width="100%" className={homeStyle.catagoryItemImg} src="https://www.teestory.in/image/cache/catalog/category tiles/cat_tile-480x480.jpg" alt="" />
                </div>
                <div className={homeStyle.catagoryItem}>
                    <img height="100%" width="100%" className={homeStyle.catagoryItemImg} src="https://www.teestory.in/image/cache/catalog/category tiles/Garfield-square-category-banner-480x480.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default HomePage

{/* style={{"&:hover":{backgroundUrl:`${item.hoverimg}`}}}// <img src={item.hoverimg} alt=""/> */}