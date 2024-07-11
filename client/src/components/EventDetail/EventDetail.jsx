import "./eventDetail.css";

const EventDetail = () => {
  return (
    <div className="eventDetail__wrapper">
      <h2 className="event__location">
        <i className="fa-solid fa-location-dot" />
        Museo Camera, Gurgaon
      </h2>
      <div className="event__date__time">
        <span className="event__date">
          <i className="fa-regular fa-calendar-days" /> 7th July, 2024
        </span>
        <span className="event__time">
          <i className="fa-solid fa-clock" /> 11am - 2pm
        </span>
      </div>
    </div>
  );
};

export default EventDetail;
