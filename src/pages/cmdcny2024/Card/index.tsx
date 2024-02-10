import React from "react";
import CardCover from "../CardCover";

import "./styles.css";

function Card() {
  return (
    <div className="container">
      <div className="new-year-card">
        <div className="imgBox">
          <CardCover />
        </div>
        <div className="content">
          <h2>程梦蝶，</h2>
          <br />
          <p className="new-year-message">
            <span>新年快乐!这两月里，</span>
            <br />
            <span>虽然长距离的爱情给我们带来诸多挑战，</span>
            <br />
            <span>但你给我的快乐和满足，远超过了距离带来的困难。</span>
            <br />
            <span>你是我生命中最珍贵的相遇。</span>
          </p>
          <br />
          <p className="new-year-message">
            <span>在这个特别的日子里，我希望我们的爱情能够像龙年一样，</span>
            <br />
            <span>充满力量和希望。</span>
            <br />
            <span>愿我们的关系更加深厚，克服一切挑战。</span>
          </p>
          <br />
          <p className="new-year-message">
            <span>提前祝情人节快乐，</span>
            <br />
            <span>愿我们的爱如同春日阳光，温暖而明媚!</span>
            <br />
            <span>龙年快乐，愿爱随我们翱翔!</span>
          </p>
          <p className="bottom-text">
            <span>二〇二四年</span>
            <br />
            <br />
            <span>康泽恩</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
