import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../Loader/Loader";
import "./eventForm.css";

const EventForm = ({ showDetail }) => {
  // state to store form Data
  const navigate = useNavigate();
  const [formReady, setFormReady] = useState(false);
  const [loader, setLoader] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    attending: "",
    profession: "",
  });

  const [formError, setFormError] = useState({
    name: "false",
    email: "false",
    phone: "false",
    attending: "false",
    profession: "false",
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormValidation = () => {
    const namePattern = /^[A-Za-z ]{3,20}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[6-9]d{9}$/;

    if (formData.name === "" || !namePattern.test(formData.name)) {
      setFormData({ ...formData, [name]: true });
      return false;
    }
    if (formData.email === "" || !emailPattern.test(formData.email)) {
      return false;
    }
    if (formData.phone === "" || !phonePattern.test(formData.phone)) {
      return false;
    }
    if (formData.attending === "") {
      return false;
    }
    if (formData.profession === "") {
      return false;
    }
    return true;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const isFormReady = handleFormValidation();
    if (isFormReady) {
      setLoader(true);
    }

    setTimeout(() => {
      setLoader(false);
      if (formReady) {
        navigate("/success");
      }
    }, 2000);

    // axios
    //   .post("https://analyticshala-workshop-backend.onrender.com", {
    //     ...formData,
    //   })
    //   .then((result) => {
    //     console.log("Result: ", result);
    //     setLoader(false);
    //     navigate("/success");
    //   })
    //   .catch((error) => {
    //     setLoader(false);
    //     console.log("Error while submitting data :", error);
    //   });
  };

  const handleBlur = (e) => {
    setFormError({ ...formError, [e.target.name]: "true" });
  };

  return (
    <>
      {loader && <Loader />}

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
              focused={formError.name}
            />

            <span className="input__error">
              Please provide alphabetic value with minimum 3 letters
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
              focused={formError.email}
            />
            <span className="input__error">Please provide a valid Email</span>
          </div>

          <div className="input__area">
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleFormChange}
              required
              pattern="^[6-9]\d{9}$"
              maxLength="10"
              onBlur={handleBlur}
              focused={formError.phone}
            />
            <span className="input__error">
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
              focused={formError.attending}
            >
              <option value="" hidden>
                How you'll Attend?
              </option>
              <option value="offline">Offline</option>
              <option value="online">Online</option>
            </select>
            <span className="input__error">Please select Attend Type</span>
          </div>

          <div className="input__area select">
            <select
              name="profession"
              value={formData.profession}
              onChange={handleFormChange}
              required
              onBlur={handleBlur}
              focused={formError.profession}
            >
              <option value="" hidden>
                What's your Profession?
              </option>
              <option value="student">Student</option>
              <option value="working">Working</option>
            </select>
            <span className="input__error">Please select your profession</span>
          </div>

          <button onClick={handleFormSubmit} type="submit">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default EventForm;
