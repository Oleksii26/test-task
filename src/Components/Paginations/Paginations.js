import { Link } from 'react-router-dom'
import './Paginations.css'


export const Paginations = ({usersPurPages, users, paginate}) => {
    
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(users.length / usersPurPages); i++) {
        pageNumbers.push(i)
    }

    return (
        <ul className='listPagination'>
            {
                pageNumbers.map(number => <li className='itemPagination' key={number}>
                    <Link className='linkPagination' onClick={() => paginate(number)}>{number}</Link>
                </li>)
            }
        </ul>
    )
}
