import React from 'react'
import './Footer.css'
import {data,image,carrer} from '../../Utils/footerdata'
function Footer() {
    return (
        <div className="fullbody">
            <div className="headings">EXCHANGE OR FULL REFUND IN 15 DAYS • NO QUESTIONS ASKED</div>
            <div className="subjects">
                <div className="content">
                    <div className="newsletter">
                        <div className="Nhead">
                            THE TEESTORY NEWSLETTER
                        </div>
                        <p className="lettertext"> Sign up to get amazing discounts & promotions, exclusively for our Newsletter
                            subscribers.</p>
                        <input type="text" className="Ninput" placeholder="Enter your email id here" />
                        <button className="Nbutton">SIGN UP</button>
                    </div>
                    <div className="collection">
                        <div className="Nhead">
                            COLLECTIONS
                        </div>
                        {data.map((el)=> <div className="colldiv">{el}</div>)}

                    </div>
                    <div className="payments">
                        <div className="Nhead">
                            100% SECURE PAYMENTS
                        </div>
                        <p>TeeStory.in uses the best SSL certificate so you will be able to buy safely and securely. Also we are using the most trusted payment gateways - PayU & PayTM. Buy with confidence.</p>
                    <div>{image.map(item=><img src={item} alt="logo"/>)}</div>  
                    </div>
                    <div className="question">
                        <div className="Nhead">
                            GOT A QUESTION?
                        </div>
                        <h2>+91 8342094808</h2>
                        <p>Available Mon-Fri (11am - 4pm) <br/>
                        <strong> Please Note:</strong>  Due to the ongoing covid situation we have limited bandwidth. Kindly drop us an email for first time queries and we will make sure you receive a resolution within 24 hrs.</p>
                        <h2>care@teestory.in</h2>
                        {carrer.map(item=><span>{item}</span>)}
                    </div>
                </div>
            </div>
            <div className="Ffooter">
                © 2020 TeeStory.in (A unit of Mersey Eventures Private Limited.) All Rights Reserved. 
            </div>
        </div>
    )
}

export default Footer