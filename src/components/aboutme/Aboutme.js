import React from "react";

let i = 0;

class Aboutme extends React.Component {
  state = {
    text: ["Software Engineer", "Full-Stack Developer"],
    count: 0,
    show: "",
    isDeleting: false
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.update(),
      250
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }


  update(){
    const {isDeleting, show} = this.state;
    const counter = this.state.count;
    const letter = this.state.text[i].charAt(counter);
    const textlength = this.state.text[i].length;

    if(counter <= textlength && isDeleting === false){
      this.setState({
        show: show + letter,
        count: this.state.count + 1,
      });
    }else{
      if (show.length === 0) {
        this.setState({
          isDeleting: false,
          count: 0,
        });
        i++;
      } else {
        this.setState({
          isDeleting: true,
          show: show.slice(0, show.length-1),
          count: 0,
        });
      }
      if (i === this.state.text.length) {
        i = 0;
      }
    }
  }


  render() {
    return (
      <div style={{margin: "50px"}}>
        <h1 style={{textAlign: "center", color: "#CFCFCF"}}>
          Hey! I am Terence Kong
        </h1>
        <h2 style={{textAlign: "center", color: "#CFCFCF"}}>I am a {this.state.show}<span ref="word" className="blink">|</span></h2>
        <p style={{textAlign: "justify", color: "#CFCFCF", margin: "2rem 4rem"}}>
          Self-taught software engineer who is passionate about devising elegant problem-solving methods on top of learning new technologies and tools.
        </p>
        <h3 style={{textAlign: "center", color: "#CFCFCF"}}>
          How it all began.
        </h3>
        <p style={{textAlign: "justify", color: "#CFCFCF", margin: "2rem 4rem"}}>
          Software engineering has always been an interest of mine. I wrote my first line of code in C++ during polytechnic (High School equivalent) and had graduated with a Diploma in Electronics, Computer, and Communications Engineering.
        </p>
        <p style={{textAlign: "justify", color: "#CFCFCF", margin: "2rem 4rem"}}>
          After that, I wanted to acquire a broad and varied knowledge of the arts and sciences, which led me to pursue an International Liberal Arts Degree.
        </p>
        <p style={{textAlign: "justify", color: "#CFCFCF", margin: "2rem 4rem"}}>
          During my job experience, I had witnessed the usefulness of programming, especially in the area of workflow automation. Wanting to know more, I delve into expanding my understanding of software engineering, which led me to discover new technologies such as mobile, data science, web, VR / AR, and many more.
        </p>
        <p style={{textAlign: "justify", color: "#CFCFCF", margin: "2rem 4rem"}}>
          In all the experiences I went through have cemented my interest in craving the ability to create applications of my own.
        </p>
      </div>
    );
  }
}

function animate() {
  const words = ["CSS3.", "HTML5.", "javascript."];
  let i = 0;
  let timer;

  function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function() {
      if (word.length > 0) {
        document.getElementById('word').innerHTML += word.shift();
      } else {
        deletingEffect();
        return false;
      };
      timer = setTimeout(loopTyping, 500);
    };
    loopTyping();
  };

  function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function() {
      if (word.length > 0) {
        word.pop();
        document.getElementById('word').innerHTML = word.join("");
      } else {
        if (words.length > (i + 1)) {
          i++;
        } else {
          i = 0;
        };
        typingEffect();
        return false;
      };
      timer = setTimeout(loopDeleting, 200);
    };
    loopDeleting();
  };

  typingEffect();
}

export default Aboutme;
