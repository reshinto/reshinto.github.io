import React from "react";
import Button from "@material-ui/core/Button";

let i = 0;

class Aboutme extends React.Component {
  activate = () => {
    let s,
      ss = [
        "http://kathack.com/js/kh.js",
        "http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js",
      ];
    for (let i = 0; i != ss.length; i++) {
      s = document.createElement("script");
      s.src = ss[i];
      document.body.appendChild(s);
    }
    void 0;
    // const s = document.createElement("script");
    // s.type = "text/javascript";
    // document.body.appendChild(s);
    // s.src = "//hi.kickassapp.com/kickass.js";
    // void 0;
  };

  render() {
    return (
      <div style={{margin: "2.5rem", textAlign: "center", color: "#CFCFCF"}}>
        <h3 style={{fontSize: "2.5rem"}}>My Story ...</h3>
        <p style={{margin: "2.5rem 4rem", fontSize: "1.5rem"}}>
          Software engineering has always had a place in my life. My first
          experience with code was back in Singapore polytechnic (High School
          equivalent), where I wrote my first line of code in C++. The feeling I
          got from that of being able to create something out of nothing was
          just mind-blowing. I would graduate from the course with a diploma in
          Electronics, Computer, and Communications Engineering.
        </p>
        <p style={{margin: "2.5rem 4rem", fontSize: "1.5rem"}}>
          Wanting to acquire a broader and varied knowledge of the arts and
          sciences, I travelled to Japan to pursue an International Liberal Arts
          Degree at Waseda University instead of a STEM degree in Singapore.
          Over there, I gained the ability to recognize the political, social,
          historical, and philosophical implications of contemporary experience,
          which is critical to life-long learning.
        </p>
        <p style={{margin: "2.5rem 4rem", fontSize: "1.5rem"}}>
          My most recent job post was at Relo Excel International, a Japanese
          company providing real estate and travel support related work. During
          my time there, I witnessed the usefulness of programming in automating
          workflow. My curiosity led me to into the world of software
          engineering, which, in turn, exposed me to new technologies such as
          mobile, data science, web, VR / AR, and much more.
        </p>
        <p style={{margin: "2.5rem 4rem", fontSize: "1.5rem"}}>
          My experiences with coding/programming/software-engineering thus far
          has inspired me to create applications of my own, which you’ll get a
          taste of by clicking the arrow on on your right.
        </p>
        <Button
          style={{marginTop: "3rem", fontSize: "1.5rem"}}
          variant="contained"
          color="secondary"
          onClick={this.activate}
        >
          Destroy this lengthy website! (PC only)
        </Button>
      </div>
    );
  }
}

export default Aboutme;
