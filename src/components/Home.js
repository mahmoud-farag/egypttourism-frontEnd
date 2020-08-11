import React from 'react';
import Logo from '../assets/Img/graduation_logo.png';


function Home() {
  
    return (
  <div className="homeBackground">
       
       <img  className="homeLogo"  src={Logo} />
      <p className="homeCenter1">!إستمتع معنا في زيارة مصر </p>
      <p className="homeCenter2">.في أي مكانٍ تحب</p>
     
  </div>
    

);

}

export default Home;
