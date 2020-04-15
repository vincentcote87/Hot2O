import React, {useState} from 'react';
import Header from "./components/header";
import SubHeader from "./components/SubHeader";
import MainContent from "./components/MainContent";
import Disclaimer from "./components/Disclaimer";

function App() {
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  const handleClick = () => {
    setShowDisclaimer(false);
  };

  const toggleDisclaimer = () => {
    setShowDisclaimer(true);
  }

  return (
    <div>
      {showDisclaimer && <Disclaimer clicked={handleClick}/>}
      <Header clicked={toggleDisclaimer}/>
      <hr/>
      <SubHeader clicked={toggleDisclaimer}/>
      <hr/>
      <MainContent clicked={toggleDisclaimer}/>
    </div>
  )
}

export default App;
