import { Button } from '../../Components/button/Button';
import { useSelector, useDispatch } from 'react-redux'
import './Tweets.css'
import { Link } from 'react-router-dom';
import { Loader } from '../../helpers/Spiner';
import { fetchUsers } from '../../redux/operation';
import { useEffect } from 'react';

export const Tweets = () => {

    const dispatch = useDispatch()
    const users = useSelector(state => state.follow.users)
    const isLoading = useSelector(state => state.follow.isLoading)

    console.log(users.length);

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch]);

    return (<div >
        <Link to='/' className='link'>&#11013; Back</Link>
        <div className='container'>
            {isLoading && <Loader />}
            {users && <ul className='list'>
                {users.map(e => <li key={e.id}>
                    <div className='card'>
                        <img className='img' alt='img' src={e.avatar} />
                        <p className='name'>{e.user}</p>
                        <p className='tweets'>{e.tweets} TWEETS</p>
                        <p className='followers'>{e.followers} FOLOWERS</p>
                        {e.follow ?
                            <Button className='btnF' /* onClick={dispatch(follow(1))} */>FOLLOWING</Button> :
                            <Button /* onClick={dispatch(unFollow(1))} */>FOLLOW</Button>
                        }
                    </div>
                </li>)}
            </ul>}
        </div>
        {(users.length >= 9) && <Link className='loadMore'>Load More</Link>}
        {/* <Link className='loadMore'>Load More</Link> */}


    </div>
    )
}
