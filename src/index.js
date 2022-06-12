import React from 'react';
import ReactDOM from 'react-dom/client';
import './styling/index.scss';
import Home from './Pages/home.jsx';
import AnotherPage from './Pages/anotherPage.jsx';
import ThreePage from './Pages/threePage.jsx';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar.jsx';

//Update this for new pages
function getPage(){
  if(window.location.pathname == '/'){
    console.log("Going to Home Page");
    return(
      <Home />
    )
  }
  else if (window.location.pathname == '/anotherPage'){
    console.log("going to Another Page");
    return(
      <AnotherPage />
    )
  }
  else if (window.location.pathname == '/threePage'){
    console.log("Going to Three Page");
    return(
      <ThreePage />
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <div id="outer-container">
    <Navbar />
    <main id="page-wrap">
      {getPage()}
    </main>
    </div>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
