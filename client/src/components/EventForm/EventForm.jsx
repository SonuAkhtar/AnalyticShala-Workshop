import { useState } from "react";
import axios from "axios";
import "./eventForm.css";

const EventForm = () => {
  // state to store form Data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    attending: "",
    profession: "",
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
      <h2 className="event__title">
        Data Warehouse <span>Workshop</span>
      </h2>

      <form onSubmit={handleFormSubmit}>
        <div className="input__area">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleFormChange}
          />
        </div>

        <div className="input__area">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleFormChange}
          />
        </div>

        <div className="input__area">
          <input
            type="number"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleFormChange}
          />
        </div>

        <div className="input__area select">
          <select
            name="attending"
            value={formData.attending}
            onChange={handleFormChange}
          >
            <option value="" hidden>
              How you'll Attend?
            </option>
            <option value="offline">Offline</option>
            <option value="online">Online</option>
          </select>
        </div>

        <div className="input__area select">
          <select
            name="profession"
            value={formData.profession}
            onChange={handleFormChange}
          >
            <option value="" hidden>
              What's your Profession?
            </option>
            <option value="student">Student</option>
            <option value="working">Working</option>
          </select>
        </div>

        <button onClick={handleFormSubmit} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default EventForm;
