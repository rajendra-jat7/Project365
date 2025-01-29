import './PersonalBio.css';
import PropTypes from 'prop-types';
import Profile from '../assets/Profile.jpg'

const PersonalBio = ({ name, age, profession, bio }) => {
  return (
    <div className="bio-card">
      <img src={Profile} alt="Profile" className="bio-image" />
      <h2 className="bio-name">{name}</h2>
      <p className="bio-detail"><strong>Age:</strong> {age}</p>
      <p className="bio-detail"><strong>Profession:</strong> {profession}</p>
      <p className="bio-description">{bio}</p>
    </div>
  );
  
};

PersonalBio.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  profession: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  image: PropTypes.string, // Optional prop
};

// ✅ Default props (Optional)
PersonalBio.defaultProps = {
  name: "Unknown",
  age: 18,
  profession: "Unemployed",
  bio: "This person prefers to stay mysterious.",
  image: Profile,
};

export default PersonalBio;
