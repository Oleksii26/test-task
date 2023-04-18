import './Button.css'

export const Button = ({ children, onClick, className }) => {
    return (
        <button className={className} type='submit' onClick={onClick}>{children}</button>
    )
}
