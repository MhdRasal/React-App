import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import './app.css';

function App() {
  const lightTheme = "lightTheme";
  const darkTheme = "darkTheme";
  const [state, checkLogin] = useState(false);

  const toggleTheme = () => {
    changeStyle((prev) => (prev === lightTheme ? darkTheme : lightTheme));
  };
   useEffect(() => {
    document.body.className = style;   // 🔥 applies theme to <body>
  }, [style]);


  return (
    <div className={style}>
      <Header />
      <Body />
      <Footer />

      {/* Floating button */}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          height: "50px",
          width: "50px",
        }}
      >
        <button
          style={{ height: "100%", width: "100%" }}
          onClick={toggleTheme}   // ✅ fixed
        >
          Theme
        </button>
      </div>
    </div>
  );
}

export default App;
