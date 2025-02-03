import './App.css'
import PersonalBio from './components/PersonalBio';

function App() {

  return (
    <>
      <h1>Personal Bio</h1>
      <PersonalBio
        name="Rajendra Jat"
        age={26}
        profession="Front-End Engineer"
        bio="Rajendra is a passionate frontend developer who loves building web applications and exploring new technologies. In his free time, he enjoys hiking and photography."
        image="https://via.placeholder.com/100"
      />
    </>
  )
}

export default App
