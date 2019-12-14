import React from "react";
import Button from "@material-ui/core/Button";
import MessengerCustomerChat from 'react-messenger-customer-chat';
import MessengerPlugin from "react-messenger-plugin"

let i = 0;

class Aboutme extends React.Component {
  state = {
    text: ["Software Engineer", "Full-Stack Developer"],
    count: 0,
    show: "",
    isDeleting: false,
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.update(), 250);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  update() {
    const {isDeleting, show} = this.state;
    const counter = this.state.count;
    const letter = this.state.text[i].charAt(counter);
    const textlength = this.state.text[i].length;

    if (counter <= textlength && isDeleting === false) {
      this.setState({
        show: show + letter,
        count: this.state.count + 1,
      });
    } else {
      if (show.length === 0) {
        this.setState({
          isDeleting: false,
          count: 0,
        });
        i++;
      } else {
        this.setState({
          isDeleting: true,
          show: show.slice(0, show.length - 1),
          count: 0,
        });
      }
      if (i === this.state.text.length) {
        i = 0;
      }
    }
  }

  activate = () => {
    // let s, ss = ["http://kathack.com/js/kh.js","http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js"];
    // for (let i=0; i!=ss.length; i++) {
    //   s = document.createElement("script");
    //   s.src = ss[i];
    //   document.body.appendChild(s);
    // }
    // void(0);
    const s = document.createElement("script");
    s.type = "text/javascript";
    document.body.appendChild(s);
    s.src = "//hi.kickassapp.com/kickass.js";
    void 0;
  };

  render() {
    return (
      <div style={{margin: "2rem", textAlign: "center", color: "#CFCFCF"}}>
        <h1 style={{fontSize: "3rem"}}>Hey! I am Terence Kong</h1>
        <h2 style={{fontSize: "2.5rem"}}>
          I am a {this.state.show}
          <span ref="word" className="blink">
            |
          </span>
        </h2>
        <p style={{margin: "2rem 4rem", fontSize: "1rem"}}>
          Self-taught software engineer who is passionate about devising elegant
          problem-solving methods on top of learning new technologies and tools.
        </p>
        <h3 style={{fontSize: "2rem"}}>How it all began.</h3>
        <p style={{margin: "2rem 4rem", fontSize: "1rem"}}>
          Software engineering has always been an interest of mine. I wrote my
          first line of code in C++ during polytechnic (High School equivalent)
          and had graduated with a Diploma in Electronics, Computer, and
          Communications Engineering.
        </p>
        <p style={{margin: "2rem 4rem", fontSize: "1rem"}}>
          After that, I wanted to acquire a broad and varied knowledge of the
          arts and sciences, which led me to pursue an International Liberal
          Arts Degree.
        </p>
        <p style={{margin: "2rem 4rem", fontSize: "1rem"}}>
          During my job experience, I had witnessed the usefulness of
          programming, especially in the area of workflow automation. Wanting to
          know more, I delve into expanding my understanding of software
          engineering, which led me to discover new technologies such as mobile,
          data science, web, VR / AR, and many more.
        </p>
        <p style={{margin: "2rem 4rem", fontSize: "1rem"}}>
          In all the experiences I went through have cemented my interest in
          craving the ability to create applications of my own.
        </p>
        <Button variant="contained" color="secondary" onClick={this.activate}>
          Destroy website!
        </Button>
          <react-messenger-plugin
            pageId="105385870961919"
            appId=""
          />
      </div>
    );
  }
}

export default Aboutme;
