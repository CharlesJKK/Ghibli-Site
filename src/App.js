import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homescreen from './screens/HomeScreen/HomeScreen';
import Films from './screens/FilmsScreem/Films';
import CharacterScreen from './screens/CharactersScreen/Characters';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homescreen/>}/>
        <Route path='Films' element={<Films/>}/>
        <Route path='Characters' element={<CharacterScreen/>}/>
      </Routes>
    </Router>
  );
}

export default App;