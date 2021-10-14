import React from 'react'
import './Ads.css'
import Colors from '../../assets/colors.png'
function Ads() {
    return (
        <div className="adcont">
            

        <div className="ad1">
        <img src={Colors} />
        
        </div>

        <div className="ad2">

        <h3>What makes us different?</h3>
        <h4>We would only launch tokens with the express permission of the creators.</h4>
        <p>There are several thousand celebrities and creators on twitter, tiktok,<br/>
             Instagram and YouTube with followings in the millions who we would be<br/>
              actively engaging before we go viral.<br/>
               We would get them on our platform and they would see the opportunity<br/>
                to create a fan driven digital economy where their digital content can be<br/>
                 traded as NFTs and their most loyal fans can have the monetary value of<br/>
                  their creator's currency increase significantly as they promote their digital<br/>
                   currency across their channels while our native token holders benefit from <br/>
                   the Weentar popularity.</p>
        </div>

        </div>
    )
}

export default Ads
