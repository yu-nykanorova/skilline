import React from "react";
import { IconStar } from "./IconStar";

export const TextBox = ({ text, name, reviews, className }) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(<IconStar key={i} />);
    }
  return (
    <div className={`text-box ${className}`}>
        <div className="comment-text">
            {text}
        </div>
        <div className="comment-data">
            <div className="comment-name">{name}</div>
            <div className="comment-rating">
                <div className="comment-stars">
                    {stars}
                </div>
                <div className="comment-reviews">{reviews} reviews at Yelp</div>
            </div>
        </div>
    </div>
  )
}
