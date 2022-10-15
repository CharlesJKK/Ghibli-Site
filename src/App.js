import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homescreen from './screens/HomeScreen/HomeScreen';
import Films from './screens/HomeScreen/FilmsScreem/Films';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homescreen/>}/>
        <Route path='Films' element={<Films/>}/>
      </Routes>
    </Router>
  );
}

export default App;