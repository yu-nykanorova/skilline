import React from "react";
import { Link } from "react-router-dom";

export const Logo = ({ isFilled, isWhite }) => {
  return (
    <Link className="logo-container" to="/">
        <svg width="79" height="79" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M35.2574 2.24264C37.6005 -0.100501 41.3995 -0.100505 43.7426 2.24264L76.7574 35.2574C79.1005 37.6005 79.1005 41.3995 76.7574 43.7426L43.7426 76.7574C41.3995 79.1005 37.6005 79.1005 35.2574 76.7574L2.24264 43.7426C-0.100501 41.3995 -0.100505 37.6005 2.24264 35.2574L35.2574 2.24264Z" fill={isFilled ? "#65DAFF" : "none"} stroke={isFilled ? "none" : "#26c1f2"} strokeWidth={isFilled ? "" : "2"} />
        </svg>
        <p className={isWhite ? "logo-name-white" : "logo-name"}>Skilline</p>
    </Link>
  )
}
