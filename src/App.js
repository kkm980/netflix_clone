
import './App.scss';
import Carrousel from './helpers/carrousel/Carrousel';
import Featured from './helpers/featured/Featured';
import Home from './home/Home';

function App() {
  return (
    <div style={{backgroundColor:"black"}} className="App">
      <Home/>
      <Featured/>
      <Carrousel title="Trending Now"/>
      <Carrousel title="New Released"/>
      <Carrousel title="Top Rated"/>
      <Carrousel title="Suspenseful Movies"/>
      <Carrousel title="Netflix & Groove"/>
      <Carrousel title="Thrillers & Horror"/>
    </div>
  );
}

export default App;
