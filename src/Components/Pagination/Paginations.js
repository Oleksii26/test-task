import { Link } from "react-router-dom"
import './Paginations.css'
import { useSelector } from "react-redux/es/exports"

export const Paginations = ({ usersPurPages, totalUsers }) => {
    const pageNumbers = [1, 2, 3, 5]
    const users = useSelector(state => state.follow.users)


    for (let i = 1; i <= Math.ceil(totalUsers / usersPurPages); i++) {
        pageNumbers.push(i)
    }

    console.log(pageNumbers);
    return (<div style={{display: 'block'}}>
        <ul className="list">
            {pageNumbers.map(number => {
                <li key={number}>
                    <Link>{number}</Link>
                </li>
            })}
        </ul>
    </div>
    )
}
