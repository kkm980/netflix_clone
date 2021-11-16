
import './App.scss';
import Carrousel from './helpers/carrousel/Carrousel';
import Featured from './helpers/featured/Featured';
import FeaturedArr from './helpers/featured/FeaturedArr';
import Home from './home/Home';

function App() {
  return (
    <div style={{backgroundColor:"black"}} className="App">
      <Home/>
      <Featured/>
      <Carrousel title="Trending Now" FeaturedArr={FeaturedArr} />
      <Carrousel title="New Released" FeaturedArr={FeaturedArr}/>
      <Carrousel title="Top Rated" FeaturedArr={FeaturedArr}/>
      <Carrousel title="Suspenseful Movies" FeaturedArr={FeaturedArr}/>
      <Carrousel title="Netflix & Groove" FeaturedArr={FeaturedArr}/>
      <Carrousel title="Thrillers & Horror" FeaturedArr={FeaturedArr}/>
    </div>
  );
}

export default App;
