
import '../styling/BurgerStyle.css'
import swanPic from '../Images/HomePage/swanlakecrop.jpg'


import '../styling/App.scss';

function App() {
  return (
      <div className="App">
        {/*Content*/}
        <h1>Home</h1>
        <img src={swanPic} alt="Swan in a lake" width='100%'/>

        <div className="TextBox">
          <h2>Hello!</h2>
          <p>Thank you so much for checking out my website! Feel free to look around and make yourself comfrotable! I hope you enjoy your stay.</p>
        </div>
        
      </div>
  );
}

export default App;
