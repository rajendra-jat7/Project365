import PropTypes from "prop-types";

const Alert = ({ alert }) => {
  if (!alert) return null;
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle" />{' '}
        {alert.msg}
      </div>
    )
  );
};

Alert.propTypes = {
  alert: PropTypes.string.isRequired, // Define 'alert' as a required string
};


export default Alert;
