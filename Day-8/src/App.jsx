import { useState } from 'react'
import './App.css'
import SearchBar from "./components/SearchBar";
import Weather from "./components/Weather";

function App() {
  const [city, setCity] = useState("");

  const handleSearch = (searchCity) => {
    setCity(searchCity);
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <Weather city={city} />
    </>
  )
}

export default App
