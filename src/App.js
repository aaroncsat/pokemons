import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Logo from './assets/poke.png';
import AllPoke from './components/AllPoke';
import SearchPoke from './components/SearchPoke';


function App() {
  return (


    <BrowserRouter>

      <Link to="/"><img src={Logo} alt="logo" id="logo" /></Link>

      <div className="links">

        <Link to="/allpoke" > Összes pokémon</Link>

        <Link to="/searchpoke" > Pokémon keresése</Link>

      </div>

      <Routes>

        <Route path="/allpoke" element={<AllPoke />} />

        <Route path="/searchpoke" element={<SearchPoke />} />


      </Routes>

    </BrowserRouter>


  );
}

export default App;
