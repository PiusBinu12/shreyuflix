import React, { useEffect, useState } from "react";
import "./ShreyuflixIntro.css";

const ShreyuflixIntro = ({ onFinish }) => {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowLogo(true), 1000);       // Delay before showing SHREYUFLIX
    setTimeout(() => onFinish(), 4000);              // Total intro time ~4 sec
  }, [onFinish]);

  return (
    <div className="intro-container">
      <div className="s-ripple">S</div>
      {showLogo && <h1 className="shreyuflix-title">SHREYUFLIX</h1>}
    </div>
  );
};

export default ShreyuflixIntro;
