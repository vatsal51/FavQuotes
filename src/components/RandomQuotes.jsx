import React, { useState } from "react";
import axios from "axios";

function RandomQuote({ user, quoteData,addToFav }) {
  const handleAddToFav = () => {
    addToFav(quoteData); // Pass the entire quoteData object to addToFav
  };
  console.log("quote", quoteData);
  return (
    <div>
      <h2>Random Quote</h2>
      {quoteData.quote ? (
        <>
          <blockquote>
            <p>
              {quoteData.quote}
              <span onClick={handleAddToFav} className="favourites">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                  width="15px"
                  height="15px"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </span>
            </p>
          </blockquote>
          <p>— {quoteData.author}</p>
        </>
      ) : <><p>Please click on generate quotes to get your daily dose of quotes</p></>}
    </div>
  );
}

export default RandomQuote;
