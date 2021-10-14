import React from 'react'
import './Coming.css'
import Q1 from '../../assets/q1.svg'
import Q2 from '../../assets/q2.svg'
import Q3 from '../../assets/q3.svg'
import Q4 from '../../assets/q4.svg'
import Log from '../../assets/log.svg'
import Wom from '../../assets/wom.svg'

function Coming() {
    return (
        <div className="comingcont">
            <div className="qcont">
        <div className="q1">
<img src={Q1} />
<h1>2021</h1>
<h2>01</h2><h3>Team set-up</h3>
<h2>02</h2><h3>Launch of informational website</h3>
 </div>
 <div className="q2">
        <img src={Q2} />
        <h1>2021</h1>
        <h2>01</h2><h3>Presale and exchange listings </h3>
<h2>02</h2><h3>Blockchain development and launch </h3>
<h2>03</h2><h3>Launch of our MVP </h3>
<h2>04</h2><h3>Influencer agency partnerships</h3>
<h2>05</h2><h3>Marketing and promotion</h3>
 </div>
   <div className="q3">
   <img src={Q3} />
   <h1>2021</h1>
   <h2>01</h2><h3>Celebrity, Creator and Influencer </h3><br/>
   <h3>partnerships</h3>
<h2>02</h2><h3>Expansion of creator communities </h3><br/>
<h3>on our platform </h3>
<h2>03</h2><h3>More Marketing and promotion</h3>
        </div>
        <div className="q4">
        <img src={Q4} />
        <h1>2021</h1>
        <h2>01</h2><h3>Mainstream partnerships </h3>
<h2>02</h2><h3>500 active creator communities </h3>
<h2>03</h2><h3>2Million active community members </h3>
<h2>04</h2><h3>More Marketing and promotion</h3>
 </div>
</div>
<div className="textimg">
<div className="textcont">
    <img src={Log}/><h1>Tokner is coming</h1><br/>
    <h2>Cryptocurrency adoption is at less than 1% of the global world population with
    some countries and entities actively fighting against its mass adoption and the
    smartest developers and nerds holding the fort.
    </h2><br/>

    <h3>Bitcoin was the first, and it has since grown to thousands of tokens launched all
    aiming to fix one problem or the other with some quite simply FOMOing the
    moment. Our goal is to bring mass adoption to the cryptocurrency space by
    dumbing it down. How far down? So down that even a celebrity can explain it in
    simple words to their followers and have them download an app, buy into the
    social currency of their favourite person and watch their investment as is with
    other crypto currency project. <br/></h3><br/>
    <h3>We are trying to do to this space what investment apps did for the "nonexistent
    retail investors". We are gamefying digital currency, bringing in popular faces
    instead of hard to understand projects to make it the norm and inadvertently
    being the "gateway drug" for a lot of people to finally give this space a real look.</h3><br/>
    <h2>A new digital economy is coming. People would be just as powerful as countries
    and creators would be paid beyond the peanuts that conventional social media
    platforms can offer. <br/></h2><br/>
    <h3>There would be new markets and advertisers with little to offer would not find home 
    there. Like Kanye said,<br/></h3>
    <h4>"</h4><h5>Personalities would become the new currency, and services would be built on top of them".<br/></h5>
    <h3>Well, Kanye didn't exactly say that, but it sounds like something we hope he
    would say. <br/><br/>
    Currency is digital, it has been that way for a while now, but this time there would
    be no dead presidents on the money, there would people like you on the money,
    and you would own it because it would make the most sense in the world.
</h3>
<div className="read">
                        <button>Read more</button>
                    </div>
    </div>
    <div className="wom-bg">
    <img src={Wom} className="wom"/>
    </div>
    </div>
    
    </div>
    )
}

export default Coming;
