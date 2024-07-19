import "./eventDetail.css";
import speakerImage from "./../../../assets/event-speaker.webp";
import Social from "../Social/Social";

const EventDetail = ({ showDetail }) => {
  return (
    <div className={`eventDetail__wrapper ${showDetail && "active"}`}>
      <h1 className="event__location">
        <i className="fa-solid fa-location-dot" />
        <span>Museo Camera, Gurgaon</span>
      </h1>

      <div className="event__main">
        <div className="event__date__time">
          <span className="event__date">
            <i className="fa-regular fa-calendar-days" /> 7th July, 2024
          </span>
          <span className="event__time">
            <i className="fa-solid fa-clock" /> 11am - 2pm
          </span>
        </div>

        <div className="event__speaker">
          <div className="speaker__image">
            <img src={speakerImage} alt="speaker image" />
          </div>
          <div className="speaker__info">
            <span className="speaker__name">Faizan Ansari</span>
            <span className="speaker__exp">
              6+ years of experience in Data Science
            </span>
          </div>
        </div>
      </div>

      <Social active={showDetail} />
    </div>
  );
};

export default EventDetail;
