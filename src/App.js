import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homescreen from './screens/HomeScreen/HomeScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homescreen/>}/>
      </Routes>
    </Router>
  );
}

export default App;