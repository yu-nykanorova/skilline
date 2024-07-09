import PropTypes from "prop-types";

export const ContainerWhite = ({ className, children }) => {
  return (
    <div className={`container-white ${className}`}>
        {children}
    </div>
  )
}

ContainerWhite.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}


