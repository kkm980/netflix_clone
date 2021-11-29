
import './App.scss';
import FullMovi from './fullMovi/FullMovi';
import Carrousel from './helpers/carrousel/Carrousel';
import Featured from './helpers/featured/Featured';
import FeaturedArr from './helpers/featured/FeaturedArr';
import Home from './home/Home';
import Register from './register/Register';
import Login from './login/Login';

function App() {
  return (
    <div style={{backgroundColor:"black"}} className="App">
    {
    //    
    //  
    //   
    //   
    //  
    //  <Carrousel title="Suspenseful Movies" FeaturedArr={FeaturedArr}/>
    //  <Carrousel title="Netflix & Groove" FeaturedArr={FeaturedArr}/>
    //  <Carrousel title="Thrillers & Horror" FeaturedArr={FeaturedArr}/>
    //     <FullMovi/>
    //      <Register/>
    // <Login/>
    }
      <Home/>
      <Featured/>
      <Carrousel title="Trending Now" FeaturedArr={FeaturedArr} />
      <Carrousel title="New Released" FeaturedArr={FeaturedArr}/>
      <Carrousel title="Top Rated" FeaturedArr={FeaturedArr}/>
    </div>
  );
}

export default App;
