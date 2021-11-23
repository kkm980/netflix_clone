
import './App.scss';
import FullMovi from './fullMovi/FullMovi';
import Carrousel from './helpers/carrousel/Carrousel';
import Featured from './helpers/featured/Featured';
import FeaturedArr from './helpers/featured/FeaturedArr';
import Home from './home/Home';
import Register from './register/Register';

function App() {
  return (
    <div style={{backgroundColor:"black"}} className="App">
    {
      // <Home/>
    //  <Featured/>
    //   <Carrousel title="Trending Now" FeaturedArr={FeaturedArr} />
    //   <Carrousel title="New Released" FeaturedArr={FeaturedArr}/>
    //   <Carrousel title="Top Rated" FeaturedArr={FeaturedArr}/>
    //   <Carrousel title="Suspenseful Movies" FeaturedArr={FeaturedArr}/>
    //   <Carrousel title="Netflix & Groove" FeaturedArr={FeaturedArr}/>
    //   <Carrousel title="Thrillers & Horror" FeaturedArr={FeaturedArr}/>
        //  <FullMovi/>
    }
      <Register/>
      
    </div>
  );
}

export default App;
