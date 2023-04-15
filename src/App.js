import './App.css'
import { Button } from './Components/Button';
import { useSelector, useDispatch } from 'react-redux'
import { follow, unFollow } from './redux/followSlice'


function App() {

  const value = useSelector(state => state.follow.value)
  const isFollow = useSelector(state => state.follow.isFollow)
  const dispatch = useDispatch()

  return (
    <div className="card">
      <p className='tweets'>777 TWEETS</p>
      <p className='followers'>{value} FOLOWERS</p>
      {isFollow ?
        <Button className='btnF' onClick={() => dispatch(follow(1))}>FOLLOWING</Button> :
        <Button onClick={() => dispatch(unFollow(1))}>FOLLOW</Button>
      }
    </div>
  );
}

export default App;
