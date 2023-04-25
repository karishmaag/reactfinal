import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './components/Home';
import Main from './components/Main';
import Contact from './components/Contact';
import Final from './components/Final';
import Skills from './components/Skills';
import Field from './components/Field';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/'element={<Home/>}></Route>
          <Route path='/Main' element={<Main/>}></Route>
          <Route path='/contact'element={<Contact/>}></Route>
          <Route path='/final'element={<Final/>}></Route>
          <Route path='/skils'element={<Skills/>}></Route>
          <Route path='/field'element={<Field/>}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
