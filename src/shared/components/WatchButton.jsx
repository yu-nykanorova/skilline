import PropTypes from "prop-types";


export const WatchButton = ({ className }) => {
  return (
    <div className={`watch-button ${className}`}>
        <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.5751 12.8097C23.2212 13.1983 23.2212 14.135 22.5751 14.5236L1.51538 27.1891C0.848878 27.5899 5.91205e-07 27.1099 6.25202e-07 26.3321L1.73245e-06 1.00123C1.76645e-06 0.223477 0.848877 -0.256572 1.51538 0.14427L22.5751 12.8097Z" fill="#23BDEE" />
        </svg>
    </div>
  )
}

WatchButton.propTypes = {
  className: PropTypes.string
}
