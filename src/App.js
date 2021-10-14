import './App.css';
import Navbar from './components/navbar/Navbar';
import Mob from '././assets/img.png'
import Mobbg from './assets/mobilesbg1.svg'
import Op from '././assets/bg.svg'
import Cards from './components/cards/Cards';
import Ads from './components/ads/Ads';
import Coming from './components/coming/Coming';
import Presale from './components/presale/Presale';
import Megafooter from './components/megafooter/Megafooter';
function App() {
  return (
    <div className="App">
      {/* <div className="bg">
    
      </div> */}
      <Navbar/>

      
<div className="contmain">
  <div className="desc">
<h1>At Tokners we are</h1>
<h2>Reimagining social<br/> media through the<br/> power of the blockchain.</h2>
<p>We are creating social media 3.0 with influencers, celebrities and<br/> 
creators being able to launch their own digital currency by simply<br/> 
creating a profile with media content posted as Non fungible<br/> 
Tokens that can be owned and traded on the Tknrs network</p>
<button className="more">Learn More</button>
  </div>
  <div className="mob">

    <img src={Mob}/>
  </div>
</div>

<Cards/>
<Ads/>
<Coming/>
<Presale/>
<Megafooter/>
    </div>
  );
}

export default App;
