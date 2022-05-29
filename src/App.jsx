
import './stying/BurgerStyle.css'
import Navbar from './components/Navbar.jsx';

import './stying/App.scss';

function App() {
  return (
    <div id="outer-container">
      <Navbar />
      <main id="page-wrap">
      <div className="App">
        {/*Content*/}
        <h1>Home</h1>
        <p>Filler text to go on the front page of the website to look cool</p>
      </div>
      </main>
    </div>
  );
}

export default App;
