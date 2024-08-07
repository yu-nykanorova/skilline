import PropTypes from "prop-types";

export const IconChecked = ({ className }) => {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="10" fill="#4EE381"/>
        <path d="M6 10.6944L8.88679 14L15 7" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

IconChecked.propTypes = {
  className: PropTypes.string
}
