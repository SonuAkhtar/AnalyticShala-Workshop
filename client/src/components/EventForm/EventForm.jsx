//React imports
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// External imports
import axios from "axios";

// Component imports
import Loader from "../Loader/Loader";
import Input from "../Input/Input";
import Select from "../Select/Select";

// Css import
import "./eventForm.css";

const EventForm = ({ showDetail }) => {
  // state to store form Data
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [formReady, setFormReady] = useState(false);
  const [errorName, setErrorName] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    attending: "",
    profession: "",
  });

  // Method: handle form inputs change
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Method: handle form inputs validations
  const handleFormValidation = () => {
    const namePattern = /^[A-Za-z ]{3,20}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[6-9]\d{9}$/;

    if (formData.name === "" || !namePattern.test(formData.name)) {
      setErrorName("name");
    } else if (formData.email === "" || !emailPattern.test(formData.email)) {
      setErrorName("email");
    } else if (formData.phone === "" || !phonePattern.test(formData.phone)) {
      setErrorName("phone");
    } else if (formData.attending === "") {
      setErrorName("attending");
    } else if (formData.profession === "") {
      setErrorName("profession");
    } else {
      setErrorName("");
      setFormReady(true);
    }
  };

  // Method: run form validation on values change
  useEffect(() => {
    handleFormValidation();
  }, [formData]);

  // Method: handle form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (formReady) {
      setLoader(true);

      axios
        .post("https://analyticshala-workshop-backend.onrender.com", {
          ...formData,
        })
        .then((result) => {
          console.log("Result: ", result);
          setLoader(false);
          navigate("/success");
        })
        .catch((error) => {
          setLoader(false);
          console.log("Error while submitting data :", error);
        });
    }
  };

  return (
    <>
      {loader && <Loader />}

      <div className={`event__container ${!showDetail && "active"}`}>
        <h2 className="event__title">
          Data Warehouse <span>Workshop</span>
        </h2>
        <form onSubmit={handleFormSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleFormChange}
            maxLength="20"
            errorName={errorName}
            errorText="Name should have minimum 3 letters"
          />

          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleFormChange}
            errorName={errorName}
            errorText="Please provide a valid Email"
          />

          <Input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleFormChange}
            maxLength="10"
            errorName={errorName}
            errorText="Please provide a valid Phone Number"
          />

          <Select
            name="attending"
            value={formData.attending}
            onChange={handleFormChange}
            defaultOption="How you'll Attend?"
            options={[
              { id: 1, value: "offline", text: "Offline" },
              { id: 2, value: "online", text: "Online" },
            ]}
            errorName={errorName}
            errorText="Please select Attend Type"
          />

          <Select
            name="profession"
            value={formData.profession}
            onChange={handleFormChange}
            defaultOption="What's your Profession?"
            options={[
              { id: 1, value: "student", text: "Student" },
              { id: 2, value: "working", text: "Working" },
            ]}
            errorName={errorName}
            errorText="Please select your profession"
          />

          <button onClick={handleFormSubmit} type="submit">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default EventForm;
