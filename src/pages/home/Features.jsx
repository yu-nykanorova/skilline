import React from 'react'

export const Features = () => {
  return (
    <section className="features">
      <div className="container mi">
        <div className="small-container features-container">
          <div className="title-color features__title">Our <span className="title-decor-color">Features</span></div>
          <div className="desc features__desc">This very extraordinary feature, can make learning activities more efficient</div>
          <div className="features__list">
            <div className="features__item">
              <div className="features__item-info">
                <div className="title-color features__item-title"><span className="title-decor-color">Tools</span> For Teachers And Learners</div>
                <div className="desc features__item-desc">Class has a dynamic set of teaching tools built to be deployed and used during class.
  Teachers can handout assignments in real-time for students to complete and submit.</div>
              </div>
              <div className="features__item-image">
                <img src="src/assets/image/features/tools_for_teachers.jpg" alt="girl" />
              </div>
            </div>
            <div className="features__item">
              <div className="features__item-info">
                <div className="title-color features__item-title">Assessments,<span className="title-decor-color">Quizzes</span>, Tests</div>
                <div className="desc features__item-desc">Easily launch live assignments, quizzes, and tests.
Student results are automatically entered in the online gradebook.</div>
              </div>
              <div className="features__item-image">
                <img src="src/assets/image/features/assessments.jpg" alt="test example" />
              </div>
            </div>
            <div className="features__item">
              <div className="features__item-info">
                <div className="title-color features__item-title"><span className="title-decor-color">Class Management</span> Tools for Educators</div>
                <div className="desc features__item-desc">Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.</div>
              </div>
              <div className="features__item-image">
                <img src="src/assets/image/features/class_management.jpg" alt="grade book" />
              </div>
            </div>
            <div className="features__item">
              <div className="features__item-info">
                <div className="title-color features__item-title">One-on-One <span className="title-decor-color">Discussions</span></div>
                <div className="desc features__item-desc">Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.</div>
              </div>
              <div className="features__item-image">
                <img src="src/assets/image/features/discussions.jpg" alt="girl" />
              </div>
            </div>
            <button className="features__button-more">See more features</button>
          </div>
        </div>
      </div>
    </section>
  )
}
