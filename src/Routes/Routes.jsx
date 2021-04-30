import React from 'react'
import {Switch,Route} from "react-router-dom"
import Cart from '../Components/Cart/Cart'
import Dc from '../Components/Dc/Dc'
import DcInditems from '../Components/Dc/DcItems'
import Footer from '../Components/Footer/Footer'
import Friends from '../Components/Friends/Friends'
import FriendItems from '../Components/Friends/FriendsItem'
import HomeInditems from '../Components/Home/HomeInditems'
import HomePage from '../Components/Home/HomePage'
import MarvalInditems from '../Components/Marval/IndvMarval'
import Marval from '../Components/Marval/Marval'
import NavBar from '../Components/Navbar/NavBar'

function Routes() {
    return (
        <>
            <NavBar/>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route exact path="/marval"> 
                    <Marval/>
                </Route>
                <Route exact path="/dc">
                    <Dc/>
                </Route>
                <Route exact path="/friends">
                    <Friends/>
                </Route>
                <Route exact path="/cart">
                    <Cart/>
                </Route>
                <Route exact path="/:name"> 
                    <HomeInditems/>
                </Route>
                <Route exact path="/marval/:name">
                    <MarvalInditems/>
                </Route>
                <Route exact path="/dc/:name">
                    <DcInditems/>
                </Route>
                <Route exact path="/friends/:name">
                    <FriendItems/>
                </Route>
            </Switch>
            <Footer/>
        </>
    )
}

export default Routes
