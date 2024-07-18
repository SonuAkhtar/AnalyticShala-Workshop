import { useNavigate } from "react-router-dom";
import successImage from "./../../../assets/success.png";
import "./success.css";

const Success = () => {
  const navigate = useNavigate();
  return (
    <div className="success__container">
      <div className="success__wrapper">
        <div className="success__info">
          <h1>Thank You</h1>
          <p>You registration is successful.</p>
        </div>
        <div className="success__image">
          <img src={successImage} alt="successful" />
        </div>
        <div className="success__button">
          To Submit another form, Click{" "}
          <button onClick={() => navigate("/")}>Home</button>
        </div>
      </div>
    </div>
  );
};

export default Success;
