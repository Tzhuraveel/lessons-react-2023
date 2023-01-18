import {SimpsonsFamily} from "./components/Simpsons/simpsons";
import {RickAndMorty} from "./components/RickAndMorty/rick-and-morty";

import './components/Simpsons/simpsons-style.css'
import './components/RickAndMorty/rick-and-morty-style.css'


const App = () => {

  return (
    <div className="App">
      <div className='wrapper-simpsons'>
          <SimpsonsFamily />
      </div>
      <div className='wrapper-character'>
          <RickAndMorty/>
      </div>

    </div>
  );
}

export {App};
