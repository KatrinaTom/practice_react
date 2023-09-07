import React from "react";
import ReactDOM from "react-dom";

const fName = "Katrina";
const lName = "Tom";
const luckyNumber = 2;
const currentDate = new Date();
const currentTime = currentDate.getHours();
const img = "https://picsum.photos/200";

let greeting;

const customStyle = {
  color: ""
};

if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "orange";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "blue";
} else {
  greeting = "Good Evening";
  customStyle.color = "purple";
}

ReactDOM.render(
  <div>
    <h1 className="heading">Hello {`${fName} ${lName}`}!</h1>
    <h2 className="headingTwo" style={customStyle}>
      {greeting}
    </h2>
    <p>This is a paragraph</p>
    <p>My lucky number is {luckyNumber}</p>
    <p>Your lucky number today is {Math.floor(Math.random() * 10)}</p>
    <ul>
      <li>List Item 1</li>
      <li>List Item 2</li>
      <li>List Item 3</li>
    </ul>
    <h2>Enjoy a random image</h2>
    <img src={img + "?grayscale"} alt="random" />
    <img src={img} alt="not grayscale" />
    <p>
      Copywrite © {currentDate.getFullYear()} - Created by {fName} {lName}
    </p>
  </div>,
  document.getElementById("root")
);
