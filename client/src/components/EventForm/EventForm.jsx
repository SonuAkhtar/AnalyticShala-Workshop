import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./eventForm.css";

const EventForm = ({ showDetail }) => {
  // state to store form Data
  const navigate = useNavigate();
  const [focused, setFocused] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    attending: "",
    profession: "",
  });

  const [formError, setFormError] = useState({
    name: false,
    email: false,
    phone: false,
    attending: false,
    profession: false,
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://analyticshala-workshop-backend.onrender.com", {
        ...formData,
      })
      .then((result) => {
        console.log("Result: ", result);
        navigate("/success");
      })
      .catch((error) => {
        console.log("Error while submitting data :", error);
      });
  };

  const handleBlur = (e) => {};

  return (
    <div className={`event__container ${!showDetail && "active"}`}>
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
            required
            pattern="^[A-Za-z ]{3,20}$"
            maxLength="20"
            onBlur={handleBlur}
            focused={focused.toString()}
          />

          <span className={`input__error ${formError.name && "error"}`}>
            Please provide a valid Name
          </span>
        </div>

        <div className="input__area">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleFormChange}
            required
            onBlur={handleBlur}
            focused={focused.toString()}
          />
          <span className={`input__error ${formError.email && "error"}`}>
            Please provide a valid Email
          </span>
        </div>

        <div className="input__area">
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleFormChange}
            required
            pattern="^[0-9]{10}$"
            maxLength="10"
            onBlur={handleBlur}
            focused={focused.toString()}
          />
          <span className={`input__error ${formError.phone && "error"}`}>
            Please provide a valid Phone Number
          </span>
        </div>

        <div className="input__area select">
          <select
            name="attending"
            value={formData.attending}
            onChange={handleFormChange}
            required
            onBlur={handleBlur}
            focused={focused.toString()}
          >
            <option value="" hidden>
              How you'll Attend?
            </option>
            <option value="offline">Offline</option>
            <option value="online">Online</option>
          </select>
          <span className={`input__error ${formError.attending && "error"}`}>
            Please select Attend Type
          </span>
        </div>

        <div className="input__area select">
          <select
            name="profession"
            value={formData.profession}
            onChange={handleFormChange}
            required
            onBlur={handleBlur}
            focused={focused.toString()}
          >
            <option value="" hidden>
              What's your Profession?
            </option>
            <option value="student">Student</option>
            <option value="working">Working</option>
          </select>
          <span className={`input__error ${formError.profession && "error"}`}>
            Please select your profession
          </span>
        </div>

        <button onClick={handleFormSubmit} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default EventForm;
