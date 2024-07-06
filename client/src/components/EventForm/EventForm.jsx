import { useState } from "react";
import axios from "axios";
import "./eventForm.css";

const EventForm = () => {
  // state to store form Data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    attending: "",
    profession: "",
    excited: "",
    expect: "",
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/register", { ...formData })
      .then((result) => {
        console.log("Result: ", result);
      })
      .catch((error) => {
        console.log("Error while submitting data :", error);
      });
  };

  return (
    <div className="event__container">
      <h1 className="event__title">
        Data Warehouse <span>Workshop</span>
      </h1>

      <div className="event__location__date">
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

      <form onSubmit={handleFormSubmit}>
        <div className="input__area">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
          />
          <label htmlFor="name">Name</label>
        </div>

        <div className="input__area">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleFormChange}
          />
          <label htmlFor="email">Email</label>
        </div>

        <div className="input__area">
          <input
            type="number"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleFormChange}
          />
          <label htmlFor="phone">Phone</label>
        </div>

        <div className="input__area">
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleFormChange}
          />
          <label htmlFor="city">City</label>
        </div>

        <div className="input__area select">
          <select
            id="attend"
            name="attending"
            value={formData.attending}
            onChange={handleFormChange}
          >
            <option value="" hidden>
              Attending
            </option>
            <option value="offline">Offline</option>
            <option value="online">Online</option>
          </select>
        </div>

        <div className="input__area select">
          <select
            id="profession"
            name="profession"
            value={formData.profession}
            onChange={handleFormChange}
          >
            <option value="" hidden>
              Profession
            </option>
            <option value="student">Student</option>
            <option value="working">Working</option>
          </select>
        </div>

        <div className="input__area textarea">
          <textarea
            id="excited"
            name="excited"
            value={formData.excited}
            onChange={handleFormChange}
          />
          <label htmlFor="excited">What's in your mind?</label>
        </div>

        <div className="input__area textarea">
          <textarea
            id="expect"
            name="expect"
            value={formData.expect}
            onChange={handleFormChange}
          />
          <label htmlFor="expect">Wanna become better?</label>
        </div>

        <button onClick={handleFormSubmit} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EventForm;
