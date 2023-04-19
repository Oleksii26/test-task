import './Button.css'

export const Button = ({ children, onClick, className }) => {
    return (
        <button className={className} type='button' onClick={onClick}>{children}</button>
    )
}
