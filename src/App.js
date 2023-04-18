import './index.css'
// import { Button } from './Components/button/Button';
// import { useSelector, useDispatch } from 'react-redux'
// import { follow, unFollow } from './redux/followSlice'
import { NavLink, Routes, Route } from 'react-router-dom'
import { Home } from './Components/home/Home';
import { Tweets } from './Components/tweets/Tweets';


function App() {

  // const value = useSelector(state => state.follow.value)
  // const isFollow = useSelector(state => state.follow.isFollow)
  // const dispatch = useDispatch()

  return (
    <div>
      <nav className='nav'>
        <NavLink className='navLink' to='/'>Home</NavLink>
        <NavLink className='navLink' to='/tweets'>Tweets</NavLink>
      </nav>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/tweets' element={<Tweets />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </div >
  );
}

export default App;
