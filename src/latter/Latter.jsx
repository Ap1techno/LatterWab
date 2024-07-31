import React, { useState } from 'react'
import { useSearchParams } from "react-router-dom"; 

function Latter() {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [urlParam] = useSearchParams();
  
  const name = urlParam.get("name");
  const message = urlParam.get("message");

  const decodedName = name ? decodeURIComponent(atob(name)) : "";
  const decodedMessage = message ? decodeURIComponent(atob(message)) : "";

  return (
    <div className="container">
      <div className={`envelope-wrapper ${isCardVisible && 'flap'}`}>
        <div className="envelope">
          <div className="letter ">
            <div className="text">
              <strong>Dear {decodedName}.</strong>
              <p>{decodedMessage}</p>
            </div>
          </div>
        </div>
        <div className="heart" onClick={() => setIsCardVisible(prev => !prev)}></div>
      </div>
    </div>
  );
}

export default Latter;
