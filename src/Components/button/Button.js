import './Button.css'

export const Button = ({ children, onClick, className }) => {
    return (
        <button className={className} type='btn' onClick={onClick}>{children}</button>
    )
}
