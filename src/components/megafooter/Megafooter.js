import React from 'react'
import './Megafooter.css'
import Green from '../../assets/greenarrow.svg'
import Yellow from '../../assets/yellowarrow.svg'
import Tweet from '../../assets/tweet.svg'
import Tele from '../../assets/telegram.svg'
import Med from '../../assets/med.svg'
import Reddit from '../../assets/reddit.svg'
import Github from '../../assets/github.svg'
import Instagram from '../../assets/instagram.svg'
import Logg from '../../assets/logg.svg'
function megafooter() {
    return (
        <div className="footcont">
          <div className="titl">
              How to buy
          </div>
          <div className="steps">
             <div className="step1">
             First Connect your Metamask <br/>
             or TrustWallet to the "Connect <br/>
             Wallet" on the Homepage.<br/>
             <img src={Green}/>
                 </div> 
                 <div className="step2">
                 Then send minimum of 0.1 <br/>
                 BNB or maximum of 10 BNB <br/>
                 to the Presale wallet<br/>
                 <img src={Yellow}/>
                 </div>
                 <div className="step3">
                 Then after you will received <br/>
                 your $WNTR to your address <br/>
                 within 24hours. <br/>
                 </div>
          </div>
          <div className="footnav">
              <a href="#">OUR TEAM</a><h1>/</h1>
              <a href="#">TOKENS</a><h1>/</h1>
              <a href="#">CONNECT WALLET</a><h1>/</h1>
              <a href="#">LIGHT PAPER</a>
          </div>
          <div className="footnavcont">

          <div className="logg">
              <img src={Logg}/>
          </div>
          <div className="social">
              <img src={Tweet}/>
              <img src={Tele}/>
              <img src={Instagram}/>
              <img src={Med}/>
              <img src={Github}/>
              <img src={Reddit}/>
          </div>
          
          <div className="copy">
         <h1> &copy;2021 Tokners. All rights reserved.</h1>
          </div>
          </div>
        </div>
    )
}

export default megafooter
