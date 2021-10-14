import React from 'react'
import  './presale.css'
import O1 from '../../assets/01.svg'
import O2 from '../../assets/02.svg'
import O3 from '../../assets/03.svg'
import Back from '../../assets/presaleback.svg'
function Presale() {
    return (
        <div className="presalecont">
            
            <div className="pretext">
            Presale Details
            </div>
            <div className="phases">
                
                <div className="phase1">
                    <img src={O1}/>
                    <h1>phase 1</h1><br/>
                    <h2>0/04/2021 - 16/04/2021</h2><br/><br/><br/>
                    <h3>1 BNB = 100000 WNTR</h3><br/>
                    <h4>Soft cap: </h4><h5>5000 BNB</h5>
                    <h4>Hard cap: </h4><h5>10000 BNB</h5>
                </div>
                <div className="phase2">
                <img src={O2}/>
                <h1>phase 2</h1><br/>
                <h2>0/04/2021 - 16/04/2021</h2><br/><br/><br/>
                <h3>1 BNB = 100000 WNTR</h3><br/>
                    <h4>Soft cap: </h4><h5>5000 BNB</h5>
                    <h4>Hard cap: </h4><h5>10000 BNB</h5>
                </div>
                <div className="phase3">
                    <img src={O3}/>
                    <h1>phase 3</h1><br/>
                    <h2>0/04/2021 - 16/04/2021</h2><br/><br/><br/>
                    <h3>1 BNB = 100000 WNTR</h3><br/>
                    <h4>Soft cap: </h4><h5>5000 BNB</h5>
                    <h4>Hard cap: </h4><h5>10000 BNB</h5>
                </div>
                {/* <input type="radio" name="position"  />
  <input type="radio" name="position"checked />
  <input type="radio" name="position" />
  
  <main id="carousel">
  
    <div class="item">
      <div className="phase1">
        <img src={O1}/>
        <h1>phase 1</h1><br/>
        <h2>0/04/2021 - 16/04/2021</h2><br/><br/><br/>
        <h3>1 BNB = 100000 WNTR</h3><br/>
        <h4>Soft cap: </h4><h5>5000 BNB</h5>
        <h4>Hard cap: </h4><h5>10000 BNB</h5>
    </div>
    </div>
    <div class="item">
      <div className="phase2">
        <img src={O2}/>
        <h1>phase 2</h1><br/>
        <h2>0/04/2021 - 16/04/2021</h2><br/><br/><br/>
        <h3>1 BNB = 100000 WNTR</h3><br/>
            <h4>Soft cap: </h4><h5>5000 BNB</h5>
            <h4>Hard cap: </h4><h5>10000 BNB</h5>
        </div>
    </div>
    <div class="item">
      <div className="phase3">
        <img src={O3}/>
        <h1>phase 3</h1><br/>
        <h2>0/04/2021 - 16/04/2021</h2><br/><br/><br/>
        <h3>1 BNB = 100000 WNTR</h3><br/>
        <h4>Soft cap: </h4><h5>5000 BNB</h5>
        <h4>Hard cap: </h4><h5>10000 BNB</h5>

    </div>
    </div>
   
</main> */}
            </div>
        </div>
    )
}

export default Presale
