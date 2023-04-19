import './index.css'
import { NavLink, Routes, Route } from 'react-router-dom'
import { Home } from './Components/home/Home';
import { Tweets } from './Components/tweets/Tweets';


function App() {

  return (
    <div>
      <nav className='nav'>
        <NavLink className='navLink' to='/'>Home</NavLink>
        <NavLink className='navLink' to='/tweets'>Tweets</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tweets' element={<Tweets />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </div >
  );
}

export default App;
