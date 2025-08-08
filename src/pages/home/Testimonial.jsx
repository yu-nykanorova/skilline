
import { Link } from "react-router-dom";
import { TextBox } from "../../shared/components/TextBox";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import commentAvatarFirst from '../../assets/image/testimonials/testimonial_smiling_girl.jpg';
import commentAvatarSecond from '../../assets/image/testimonials/testimonial_writing_girl.jpg';


export const Testimonial = () => {
  const comments = [
    {
      image: commentAvatarFirst,
      text: '"Thank you so much for your help. It`s exactly what I`ve been looking for. You won`t regret it. It really saves me time and effort. Skilline is exactly what our business has been lacking."',
      name: "Gloria Rose",
      reviews: 12
    },
    {
      image: commentAvatarSecond,
      text: '"Thank you so much for your help. It`s exactly what I`ve been looking for. You won`t regret it. It really saves me time and effort. Skilline is exactly what our business has been lacking."',
      name: "Veronica Stain",
      reviews: 7
    }
  ];

  const swiperRef = useRef(null);
  
  return (
    <section className="testimonial">
      <div className="container mi">
        <div className="testimonial-container">
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
              <Link className="testimonial__button-arrow" to="/testimonials">
                <svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.7071 8.70711C26.0976 8.31658 26.0976 7.68342 25.7071 7.2929L19.3431 0.928934C18.9526 0.53841 18.3195 0.538409 17.9289 0.928934C17.5384 1.31946 17.5384 1.95262 17.9289 2.34315L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.70711ZM-8.74228e-08 9L25 9L25 7L8.74228e-08 7L-8.74228e-08 9Z" fill="#F48C06" />
                </svg>
              </Link>
            </div>
          </div>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            className="testimonial__box"
          >
            {comments.map((comment, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial__item">
                  <div className="testimonial__image">
                    <img src={comment.image} alt="smiling girl with books" />
                  </div>
                  <TextBox className="testimonial__text-box" text={comment.text} name={comment.name} reviews={comment.reviews} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="testimonial__right-arrow" onClick={() => swiperRef.current?.slideNext()}>
            <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2L14 12L2 22" stroke="#1EA4CE" strokeWidth="4" />
            </svg>  
          </div>
        </div>
      </div>
    </section>
  )
}
