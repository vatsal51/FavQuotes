import { useState } from 'react'
import './App.css'
import axios from "axios";

import RandomQuote from './components/RandomQuotes'
import Login from './components/Login';
import FavoriteQuotes from './components/FavoriteQuotes';
function App(){
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const handleLogin = (userInfo) => {
    setUser(userInfo);
    setIsLoggedIn(true);
  };

  const [quoteData, setQuoteData] = useState("");

  const fetchRandomQuote = () => {
    axios
      .get(
        "https://api.api-ninjas.com/v1/quotes?X-Api-Key=vc/uJ88eDrcHC3bnaYu3Cg==uFbh3HKklh4Xwr9D&category=fitness"
      )
      .then((response) => {
        console.log(response.data[0])
        setQuoteData(response.data[0]);
      })
      .catch((error) => {
        console.error("Error fetching quote:", error);
      });
  };

  function addToFav(fav) {
setFavorites((prev)=>[...prev,fav])
    console.log("fav");
  }
console.log("favrouties",favorites);
  return (
    <div className="App">
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div>
          <p>Welcome, !</p>
          <RandomQuote user={user} quoteData={quoteData} addToFav={addToFav} />

      <button onClick={fetchRandomQuote}>Get Random Quote</button>
          <FavoriteQuotes user={user} favorites={favorites}/>
        </div>
      )}
    </div>
  );
};

export default App
