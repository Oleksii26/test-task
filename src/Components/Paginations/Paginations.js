
export const Paginations = ({usersPurPages, users, paginate}) => {
    
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(users.length / usersPurPages); i++) {
        pageNumbers.push(i)
    }

    return (
        <ul className='listPagination'>
            {
                pageNumbers.map(number => <li className='itemPagination' key={number}>
                    <span className='linkPagination' href='!#' onClick={() => paginate(number)}>{number}</span>
                </li>)
            }
        </ul>
    )
}
