import React from "react";

import "./styles.css";
// import Tiger from "./Tiger";
import Dragon from "./Dragon";

const seal = "龙";

const message = {
  title: "謹賀新年",
  seal,
};

const chineseMessage = {
  title: "恭贺新年",
  seal,
};

function getMsg(lang = "") {
  if (lang === "chinese") {
    return chineseMessage;
  }
  return message;
}

function CardCover() {
  const lang = "chinese";
  const msg = getMsg(lang);

  return (
    <div className="card">
      <h1 className="card-title">{msg.title}</h1>
      <div className="card-seal">{msg.seal}</div>
      {/* <Tiger /> */}
      <Dragon />
      <div className="card-flower-1">
        <div className="card-flower-petal petal-1" />
        <div className="card-flower-petal petal-2" />
        <div className="card-flower-petal petal-3" />
        <div className="card-flower-petal petal-4" />
        <div className="card-flower-petal petal-5" />
        <div className="card-flower-pollen pollen-1" />
        <div className="card-flower-pollen pollen-2" />
        <div className="card-flower-pollen pollen-3" />
        <div className="card-flower-pollen pollen-4" />
        <div className="card-flower-pollen pollen-5" />
      </div>
      <div className="card-flower-2">
        <div className="card-flower-petal petal-1" />
        <div className="card-flower-petal petal-2" />
        <div className="card-flower-petal petal-3" />
        <div className="card-flower-petal petal-4" />
        <div className="card-flower-petal petal-5" />
        <div className="card-flower-pollen pollen-1" />
        <div className="card-flower-pollen pollen-2" />
        <div className="card-flower-pollen pollen-3" />
        <div className="card-flower-pollen pollen-4" />
        <div className="card-flower-pollen pollen-5" />
      </div>
      <div className="card-flower-3">
        <div className="card-flower-petal petal-1" />
        <div className="card-flower-petal petal-2" />
        <div className="card-flower-petal petal-3" />
        <div className="card-flower-petal petal-4" />
        <div className="card-flower-petal petal-5" />
        <div className="card-flower-pollen pollen-1" />
        <div className="card-flower-pollen pollen-2" />
        <div className="card-flower-pollen pollen-3" />
        <div className="card-flower-pollen pollen-4" />
        <div className="card-flower-pollen pollen-5" />
      </div>
      <div className="card-hill hill-1">
        <div className="card-hill-star star-1" />
        <div className="card-hill-star star-2" />
        <div className="card-hill-star star-3" />
      </div>
      <div className="card-hill hill-2">
        <div className="card-hill-circle-1">
          <div className="hill-circle circle-1" />
          <div className="hill-circle circle-2" />
          <div className="hill-circle circle-3" />
          <div className="hill-circle circle-4" />
          <div className="hill-circle circle-5" />
        </div>
        <div className="card-hill-circle-2">
          <div className="hill-circle circle-1" />
          <div className="hill-circle circle-2" />
          <div className="hill-circle circle-3" />
          <div className="hill-circle circle-4" />
          <div className="hill-circle circle-5" />
        </div>
        <div className="card-hill-circle-3">
          <div className="hill-circle circle-1" />
          <div className="hill-circle circle-2" />
          <div className="hill-circle circle-3" />
          <div className="hill-circle circle-4" />
          <div className="hill-circle circle-5" />
        </div>
        <div className="card-hill-circle-4">
          <div className="hill-circle circle-1" />
          <div className="hill-circle circle-2" />
          <div className="hill-circle circle-3" />
          <div className="hill-circle circle-4" />
          <div className="hill-circle circle-5" />
        </div>
        <div className="card-hill-circle-5">
          <div className="hill-circle circle-1" />
          <div className="hill-circle circle-2" />
          <div className="hill-circle circle-3" />
          <div className="hill-circle circle-4" />
          <div className="hill-circle circle-5" />
        </div>
      </div>
      <div className="card-hill hill-3">
        <div className="card-hill-border-1">
          <div className="border-1" />
          <div className="border-2" />
        </div>
        <div className="card-hill-border-2">
          <div className="border-1" />
          <div className="border-2" />
        </div>
        <div className="card-hill-border-3">
          <div className="border-1" />
          <div className="border-2" />
        </div>
      </div>
    </div>
  );
}

export default CardCover;
