
export const Burger = ({ className = "", onClick }) => {
  return (
    <div className={`burger-box ${className}`} onClick={onClick}>
        <div className="burger-menu"><span></span></div>
    </div>
  )
}
