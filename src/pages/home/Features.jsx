import React from 'react'

export const Features = () => {
  return (
    <section className="features">
      <div className="container mi">
        <div className="small-container features-container">
          <h2 className="title-color features__title">Our <span className="title-decor-color">Features</span></h2>
          <p className="desc features__desc">This very extraordinary feature, can make learning activities more efficient</p>
          <div className="features__list">
            <div className="features__item">
              <div className="features__item-info">
                <h3 className="title-color features__item-title"><span className="title-decor-color">Tools</span> For Teachers And Learners</h3>
                <p className="desc features__item-desc">Class has a dynamic set of teaching tools built to be deployed and used during class.
  Teachers can handout assignments in real-time for students to complete and submit.</p>
              </div>
              <div className="features__item-image">
                <img src="src/assets/image/features/tools_for_teachers.jpg" alt="girl" />
              </div>
            </div>
            <div className="features__item">
              <div className="features__item-info">
                <h3 className="title-color features__item-title">Assessments,<span className="title-decor-color">Quizzes</span>, Tests</h3>
                <p className="desc features__item-desc">Easily launch live assignments, quizzes, and tests.
Student results are automatically entered in the online gradebook.</p>
              </div>
              <div className="features__item-image">
                <img src="src/assets/image/features/assessments.jpg" alt="test example" />
              </div>
            </div>
            <div className="features__item">
              <div className="features__item-info">
                <h3 className="title-color features__item-title"><span className="title-decor-color">Class Management</span> Tools for Educators</h3>
                <p className="desc features__item-desc">Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.</p>
              </div>
              <div className="features__item-image">
                <img src="src/assets/image/features/class_management.jpg" alt="grade book" />
              </div>
            </div>
            <div className="features__item">
              <div className="features__item-info">
                <h3 className="title-color features__item-title">One-on-One <span className="title-decor-color">Discussions</span></h3>
                <p className="desc features__item-desc">Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.</p>
              </div>
              <div className="features__item-image">
                <img src="src/assets/image/features/discussions.jpg" alt="girl" />
              </div>
            </div>
          </div>
          <div className="features__button-more">
            <button>See more features</button>
          </div>
        </div>
      </div>
    </section>
  )
}
