import { Button } from '../../Components/button/Button';
import { useSelector, useDispatch } from 'react-redux'
import './Tweets.css'
import { Link } from 'react-router-dom';
import { Loader } from '../../helpers/Spiner';
import { fetchFollow, fetchUsers } from '../../redux/operation';
import { useEffect, useState } from 'react';
import { Paginations } from '../Paginations/Paginations';

export const Tweets = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const [usersPurPages] = useState(9)
    const users = useSelector(state => state.follow.users)

    // const pageNumbers = []
    // for (let i = 1; i <= Math.ceil(users.length / usersPurPages); i++) {
    //     pageNumbers.push(i)
    // }

    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.follow.isLoading)

    const lastUserIndex = currentPage * usersPurPages
    const firstUserIndex = lastUserIndex - usersPurPages
    const currentUsers = users.slice(firstUserIndex, lastUserIndex)

    const paginate = pageNumber => setCurrentPage(pageNumber)

    useEffect(() => {
        dispatch(fetchUsers())

    }, [dispatch])


    return (<div className='box'>
        <Link to='/' className='link'>&#11013; Back</Link>
        <div className='container'>

            {isLoading && <Loader />}
            {currentUsers && <ul className='list'>
                {currentUsers.map((user, i) => <li key={user.id}>
                    <div className='card'>
                        <img className='img' alt='img' src={user.avatar} />
                        <p className='name'>{user.user}</p>
                        <p className='tweets'>{user.tweets} TWEETS</p>
                        <p className='followers'>{user.followers} FOLLOWERS</p>
                        {user.follow ?
                            <Button className='btnF' onClick={() => dispatch(fetchFollow(user))}>FOLLOWING</Button> :
                            <Button onClick={() => dispatch(fetchFollow(user))} >FOLLOW</Button>
                        }
                    </div>
                </li>)}
            </ul>}
        </div>
        <Paginations usersPurPages={usersPurPages} users={users} paginate={paginate} />
    </div>
    )
}



