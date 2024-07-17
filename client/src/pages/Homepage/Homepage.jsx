import { useState } from "react";
import EventDetail from "../../components/EventDetail/EventDetail";
import EventForm from "../../components/EventForm/EventForm";
import "./homepage.css";

const Homepage = () => {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <div className={`homepage__container ${showDetail && "show__detail"}`}>
      <div className="show__detail-bg"></div>

      <div className="home__buttons">
        <button className="detail" onClick={() => setShowDetail(true)}>
          <span>Details</span>
          <i className="fa-solid fa-arrow-right" />
        </button>

        <button className="form" onClick={() => setShowDetail(false)}>
          <i className="fa-solid fa-arrow-left"></i>
          <span>Form</span>
        </button>
      </div>
      <EventDetail showDetail={showDetail} />
      <EventForm showDetail={showDetail} />
    </div>
  );
};

export default Homepage;
