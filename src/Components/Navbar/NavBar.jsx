import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import navstyle from "./nav.module.css"
function NavBar() {
    const [search,setSearch]= useState("")
    return (
        <div >
            <div className={navstyle.navicons}>
                <div>
                    <Link to={"/"}>
                        <img src="https://i.imgur.com/Z84o08R.png" alt=""/>
                    </Link>
                </div>
                <div className={navstyle.inpdiv}>
                    <input className={navstyle.navsearchbox} type="text" onChange={(e)=>setSearch(e.target.value)} placeholder="Search" />
                </div>
                <div>
                    <img className={navstyle.sizeoficons} src="https://img.icons8.com/fluent-systems-filled/2x/edit-user.png" alt=""/>
                    <Link to={"/cart"}>
                        <img className={navstyle.sizeoficons} src="https://img.icons8.com/ios-glyphs/2x/shopping-cart.png" alt=""/>
                    </Link>
                </div>
            </div>
            <div className={navstyle.buttonsdiv}>
                <div className={navstyle.dropdown }>
                    <div className={navstyle.dropdownbtn}>
                        TSHIRT
                    </div>
                    <div className={navstyle.dropdowncontent}>
                        <div>Full Sleeve T-Shirt</div>
                        <div>Swag</div>
                        <div>Pop Culture</div>
                        <div>Life Style</div>
                        <div>Movie</div>
                        <div>TV</div>
                        <div>Plus Size</div>
                    </div>
                </div>
                <div className={navstyle.dropdown }>
                    <div className={navstyle.dropdownbtn}>
                        OTHER PRODUCTS
                    </div>
                    <div className={navstyle.dropdowncontent}>
                        <div>Sweat Shirts</div>
                        <div>Hoodies</div>
                        <div>Bedges</div>
                        <div>Stickers</div>
                    </div>
                </div>
                <div className={navstyle.dropdown }>
                    <div className={navstyle.dropdownbtn}>
                        OFFICIAL MERCHANDISE
                    </div>
                    <div className={navstyle.dropdowncontent}>
                        <div><Link to={"/marval"}>MARVEL™</Link></div>
                        <div><Link to={"/dc"}>DC COMICS™</Link></div>
                        <div><Link to={"/friends"}>F.R.I.E.N.D.S™</Link></div>
                        <div><Link>Looney Tunes™</Link></div>
                        <div><Link>Harry Potter™</Link></div>
                        <div><Link>Game of Thrones™</Link></div>
                        <div><Link>Cartoon Network</Link></div>
                        <div><Link>Disney™</Link></div>
                        <div><Link>Garfield™</Link></div>
                        <div><Link>Tinkle™</Link></div>
                        <div><Link>The Big Bang Theory™</Link></div>
                    </div>
                </div>
                <Link className={navstyle.button} to={"/marval"}><div>MARVEL™</div></Link>
                <Link className={navstyle.button} to={"/dc"}><div>DC COMICS™</div></Link>
                <Link className={navstyle.button} to={"/friends"}><div>F.R.I.E.N.D.S™</div></Link>
                <Link className={navstyle.button}><div>Cartoon Network</div></Link>
                <Link className={navstyle.button}><div>Disney™</div></Link>
            </div>
        </div>
    )
}

export default NavBar
