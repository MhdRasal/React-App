import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.jsx';
import Footer from './components/footer.jsx';
import Header from './components/Header.jsx';

const data = "Rasal";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header name={data}/>
    <App name={data}/>
    <footer>
      <Footer/>
    </footer>
  </React.StrictMode>,
)
