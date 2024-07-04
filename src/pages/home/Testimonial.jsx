import React from "react";
import { Link } from "react-router-dom";
import { TextBox } from "../../shared/components/TextBox";

export const Testimonial = () => {
  const comments = [
    {
      image: "src/assets/image/testimonials/testimonial_smiling_girl.jpg",
      text: '"Thank you so much for your help. It`s exactly what I`ve been looking for. You won`t regret it. It really saves me time and effort. Skilline is exactly what our business has been lacking."',
      name: "Gloria Rose",
      reviews: 12
    },
    {
      image: "src/assets/image/testimonials/testimonial_smiling_girl.jpg",
      text: '"Thank you so much for your help. It`s exactly what I`ve been looking for. You won`t regret it. It really saves me time and effort. Skilline is exactly what our business has been lacking."',
      name: "Veronica Stain",
      reviews: 7
    }
  ];
  
  return (
    <section className="testimonial">
      <div className="container mi">
        <div className="small-container testimonial-container">
          <div className="testimonial__info">
            <div className="testimonial__label">
              <div className="testimonial__label-line"></div>
              <p className="testimonial__label-text">TESTIMONIAL</p>
            </div>
            <h2 className="title-color testimonial__title">What They Say?</h2>
            <div className="desc testimonial__desc">
              <p>Skilline has got more than 100k positive ratings from our users around the world.</p>
              <p>Some of the students and teachers were greatly helped by the Skilline.</p>
              <p>Are you too? Please give your assessment</p>
            </div>
            <div className="testimonial__button">
              <div className="testimonial__button-title">Write your assessment</div>
              <Link className="testimonial__button-arrow">
                <svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.7071 8.70711C26.0976 8.31658 26.0976 7.68342 25.7071 7.2929L19.3431 0.928934C18.9526 0.53841 18.3195 0.538409 17.9289 0.928934C17.5384 1.31946 17.5384 1.95262 17.9289 2.34315L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.70711ZM-8.74228e-08 9L25 9L25 7L8.74228e-08 7L-8.74228e-08 9Z" fill="#F48C06" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="testimonial__box">
            {comments.map((comment, index) => (
              <div key={index} className="testimonial__item">
                <div className="testimonial__image">
                  <img src={comment.image} alt="smilimg girl with books" />
                </div>
                <TextBox className="testimonial__text-box" text={comment.text} name={comment.name} reviews={comment.reviews} />
                <div className="testimonial__right-arrow">ARROW</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
