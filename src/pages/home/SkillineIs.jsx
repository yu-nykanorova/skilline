import React from "react";
import { Link } from "react-router-dom";
import { WatchButton } from "../../shared/components/WatchButton";

export const SkillineIs = () => {
  return (
    <section className="skilline-is">
      <div className="container mi">
        <div className="small-container skilline-is-container">
          <div className="skilline-is__for-whom">
            <div className="skilline-is__for-whom-title">What is <span>Skilline?</span></div>
            <div className="skilline-is__for-whom-desc">Skilline is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</div>
            <div className="skilline-is__for-whom-list">
              <div className="skilline-is__for-whom-item">
                <img src="src/assets/image/about/for_instructors.png" alt="teacher near the board" />
                <div className="item-title">FOR INSTRUCTORS</div>
                <Link className="item-button item-button-transparent">Start a class today</Link>
              </div>
              <div className="skilline-is__for-whom-item">
                <img src="src/assets/image/about/for_students.png" alt="students" />
                <div className="item-title">FOR STUDENTS</div>
                <Link className="item-button item-button-blue">Enter access code</Link>
              </div>
            </div>
          </div>
          <div className="skilline-is__video">
            <div className="skilline-is__video-info">
              <div className="skilline-is__video-title">Everything you can do in a physical classroom, <span>you can do with Skilline</span></div>
              <div className="skilline-is__video-desc">Skilline`s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</div>
              <Link className="skilline-is__video-more">Learn more</Link>
              <div className="circle-yellow-big"></div>
              <div className="circle-yellow-small"></div>
            </div>
            <div className="skilline-is__video-box">
              <img src="src/assets/image/about/skilline-is_video-bg.jpg" alt="classroom" />
              <WatchButton className="skilline-is__watch-button" />
              <div className="square-blue"></div>
              <div className="square-yellow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
