
import './App.css';
import Nav from './Nav';
import{ Routes, Route} from 'react-router-dom'
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Nav/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="Signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
