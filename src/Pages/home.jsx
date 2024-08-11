
import '../styling/BurgerStyle.css'
import swanPic from '../Images/HomePage/swanlakecrop.jpg'


import HomeStyle from '../styling/App.scss';

function App() {
  console.log(window.location.pathname);
  return (
      <div style={HomeStyle} className="App">
        {/*Content*/}
        <h1>Home</h1>
        <div className="ImageBorderTop"></div>
        <img src={swanPic} alt="Swan in a lake" width='100%'/>
        <div className="ImageBorderBottom"></div>

        <div className="TextBox">
          <h2>Hello!</h2>
          <p>Thank you so much for checking out my website!
            Feel free to look around and make yourself comfortable!
            I hope you enjoy your stay.</p>
        </div>
        
      </div>
  );
}

export default App;
