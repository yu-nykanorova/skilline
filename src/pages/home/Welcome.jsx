import { Link } from "react-router-dom";
import { WatchButton } from "../../shared/components/WatchButton";
import { IconRating } from "../../shared/components/IconRating";
import { ContainerWhite } from "../../shared/components/ContainerWhite";
import { IconCalendarBlue } from "../../shared/components/IconCalendarBlue";
import { IconEnvelopeOrange } from "../../shared/components/IconEnvelopeOrange";
import { IconUser } from "../../shared/components/IconUser";
import { IconChecked } from "../../shared/components/IconChecked";
import welcomeImage from "../../assets/image/lovely-teenage-girl.png";

export const Welcome = () => {
  return (
    <section className="welcome">
      <div className="container mi welcome-container">
        <div className="welcome__info">
          <h1 className="title-color welcome__title"><span className="title-decor-color">Studying</span> Online is now much easier</h1>
          <p className="welcome__desc">Skilline is an interesting platform that will teach you in more an interactive way</p>
          <div className="link welcome__buttons">
            <div className="welcome__join-button">Join for free</div>
            <div className="welcome__watch-button-box">
              <WatchButton className="welcome__watch-button" />
              <div className="welcome__watch-button-desc">Watch how it works</div>
            </div>
          </div>
        </div>
        <div className="welcome__image">
          <img src={ welcomeImage } alt="welcome teenage girl" />
          <IconRating className="icon-rating" />
          <ContainerWhite className="container-white-calendar">
            <div className="container-white-content">
              <IconCalendarBlue />
              <div className="container-white-comment">
                <div className="container-white-title">250k</div>
                <div className="container-white-desc">Assisted Student</div>
              </div>
            </div>
          </ContainerWhite>
          <ContainerWhite className="container-white-mail">
            <div className="container-white-content">
              <IconEnvelopeOrange />
              <div className="container-white-comment">
                <div className="container-white-title">Congratulations</div>
                <div className="container-white-desc">Your admission completed</div>
              </div>
              <IconChecked className="icon-checked" />
            </div>  
          </ContainerWhite>
          <ContainerWhite className="container-white-join">
            <div className="container-white-content">
              <IconUser />
              <div className="container-white-comment">
                <div className="container-white-title">Congratulations</div>
                <div className="container-white-desc">Your admission completed</div>
              </div>
            </div>
            <Link className="container-white-button" to="/"> Join Now</Link>
          </ContainerWhite>
        </div>
      </div>
    </section>
  )
}
