import './App.css';
import './index';
import BreakingBadHeader from "./components/BreakingBadHeader"
import Series from "./components/Series"


function App() {
  return (
    <div>
      <div className="characterPhoto">
        <img style={{maxWidth: "500px"}} 
            src="https://i.pinimg.com/736x/39/9d/71/399d7189faab2601b0e2dd60a143207e.jpg" 
            alt="https://i.pinimg.com/736x/39/9d/71/399d7189faab2601b0e2dd60a143207e.jpg"
        />
        <Series seriesName="Breaking+Bad"/>
      </div>
      <div className="characterPhoto" >
        <img style={{maxWidth: "500px"}}
            src="https://vistapointe.net/images/better-call-saul-wallpaper-2.jpg" 
            alt="https://vistapointe.net/images/better-call-saul-wallpaper-2.jpg"
        />   
        <Series seriesName="Better+Call+Saul"/>
      </div>
    </div>
  )
}

export default App;
