import React,{useState, useEffect} from 'react'
import Header from './components/Header';
import Footer from './components/footer';


function app() {
    const lightTheme = "lightTheme";
    const darkTheme = "darkTheme";
    const [style, changeStyle] = useState(lightTheme);

    useEffect(() => {
        
    },[style])
  return (
    <div>
      <Header style={style}/>
      <Body style={style}/>
      <Footer style={style}/>
        <div style={{display: "fixed", bottom: "0", right: "0",height: "50px", width:"50px"}}>
            <button style={{height:"100%", width: "100%"}} onClick={() => changeStyle(darkTheme)}>Theme</button>
        </div>
    </div>
  )
}

export default app
