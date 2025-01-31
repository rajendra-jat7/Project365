import PropTypes from "prop-types";
import "./WeatherCard.css";

const WeatherCard = ({ title, data }) => {
  return (
    <div className="container">
      <div className="card">
        <h3>{title}</h3>
        <p>{data} </p>
      </div>
    </div>
  );
};

WeatherCard.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
  };

export default WeatherCard;
