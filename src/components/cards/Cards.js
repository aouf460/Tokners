import React from 'react'
import './Cards.css'
import Creat from '../../assets/creators.svg'
import Hold from '../../assets/holders.svg'

function Cards() {
    return (
        <div>
           <div className="cardscont">
               <div className="card2">
            <img src={Creat}/>
            <div className="card1text">
            <h1>For</h1><h2>Creators</h2>
            <p>Creators can gain independence through a decentralised digital currency system
                 that is dependent on growing and engaging with the community and also their 
                 star power. They own 10-15% of the total value of the tokens minted.</p>
               </div>
               </div>
               <div className="card2 second">
                <img src={Hold}/>
                <div className="card2text">
            <h1>For</h1><h2>Holders</h2>
            <p>Holding social tokens allows the individual to gain access to benefits including 
                unreleased content, private communities, direct access to celebrity, early- 
                access to tickets and more as well as the ability to trade with other communities in 
                order to gain access to more creator content with early token buyers being the 
                biggest winners as the value of the token increases with more buyers.</p>
            </div>
               </div>

               </div> 
        </div>
    )
}

export default Cards
