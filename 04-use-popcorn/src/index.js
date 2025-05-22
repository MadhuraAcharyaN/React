import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <>
      <StarRating
        maxRating={5}
        messages={["terrible", "bad", "okay", "good", "amazing"]}
        defultRating={3}
        color='blue'
        onSetRating={(rating) => setMovieRating(rating)}
      />
      <p>{movieRating}</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Test />
    {/* <App /> */}
  </React.StrictMode>
);
