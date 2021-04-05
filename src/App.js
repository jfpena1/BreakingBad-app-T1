import logo from './logo.svg';
import './App.css';
import List from "./components/List"
import BreakingBadHeader from "./components/BreakingBadHeader"


function App() {
  return (
    <div>
      <div>
        <header>
          <BreakingBadHeader />
        </header>
      </div>
      <div>
        <div className="characterPhoto" >
          <img 
              src="https://i.pinimg.com/736x/39/9d/71/399d7189faab2601b0e2dd60a143207e.jpg" 
              alt="https://i.pinimg.com/736x/39/9d/71/399d7189faab2601b0e2dd60a143207e.jpg"
          />
        </div>
        <div className="characterInfo">
          <List list={["1", "2", "3"]} 
          seriesName="Breaking Bad"
          listType="seasons"
          />
        </div>
      </div>
      
      <div>
        <img className="characterPhoto" 
            src="https://vistapointe.net/images/better-call-saul-wallpaper-2.jpg" 
            alt="https://vistapointe.net/images/better-call-saul-wallpaper-2.jpg"
        />
        <div className="characterInfo">
          <List list={["1", "2", "3"]} 
          seriesName="Better Call Saul"
          listType="seasons"
          />
        </div>
      </div>
    </div>
  )
}

export default App;
