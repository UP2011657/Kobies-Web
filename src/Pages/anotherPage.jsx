import '../styling/BurgerStyle.css'

import '../styling/disco.scss';
import dancer from '../Images/Disco/Dancer.gif'
import song from '../Audio/song.mp3'

function AudioSetup(){
  const audio = new Audio(song);
  audio.loop = true;
  audio.play();
}

function App() {

  return (
      <div >
        {/*Content*/}
        {AudioSetup()}
        <div className="Red"></div>
        <div className="Orange"></div>
        <div className="Yellow"></div>
        <div className="Green"></div>
        <div className="Blue"></div>
        <div className="Indigo"></div>
        <img src={dancer} className="Amogus"/>
      </div>
  );
}

export default App;