import React from "react";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import {setPage} from "../../redux/actions/menuAction";

class Aboutme extends React.Component {
  componentDidMount() {
    this.props.setPage(1);
  }

  activate = () => {
    const s = document.createElement("script");
    s.type = "text/javascript";
    document.body.appendChild(s);
    s.src = "//hi.kickassapp.com/kickass.js";
    void 0;
  };

  render() {
    return (
      <>
      <div
        style={{
          margin: "2rem 3rem",
          textAlign: "center",
          color: "#CFCFCF",
          height: "90vh",
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center"
        }}
      >
        <h3 style={{fontSize: "3rem", width: "50vw"}}>My Story</h3>
        <p style={{margin: "2rem 4rem", fontSize: "1.5rem"}}>
          Software engineering has always had a place in my life. My first
          experience with code was back in Singapore polytechnic (High School
          equivalent), where I wrote my first line of code in C++. The feeling I
          got from that of being able to create something out of nothing was
          just mind-blowing. I would graduate from the course with a diploma in
          Electronics, Computer, and Communications Engineering.
        </p>
        <p style={{margin: "2rem 4rem", fontSize: "1.5rem"}}>
          Wanting to acquire a broader and varied knowledge of the arts and
          sciences, I travelled to Japan to pursue an International Liberal Arts
          Degree at Waseda University instead of a STEM degree in Singapore.
          Over there, I gained the ability to recognize the political, social,
          historical, and philosophical implications of contemporary experience,
          which is critical to life-long learning.
        </p>
        <p style={{margin: "2rem 4rem", fontSize: "1.5rem"}}>
          My most recent job post was at Relo Excel International, a Japanese
          company providing real estate and travel support related work. During
          my time there, I witnessed the usefulness of programming in automating
          workflow. My curiosity led me to into the world of software
          engineering, which, in turn, exposed me to new technologies such as
          mobile, data science, web, VR / AR, and much more.
        </p>
        <p style={{margin: "2rem 4rem", fontSize: "1.5rem"}}>
          My experiences with coding / programming / software-engineering thus
          far has inspired me to create applications of my own, which you’ll get
          a taste of by clicking the arrow on on your right.
        </p>
        {window.innerWidth > 1200 ? (
          <Button
            style={{margin: "5rem", fontSize: "1.5rem"}}
            variant="contained"
            color="secondary"
            onClick={this.activate}
          >
            Destroy this lengthy website!
          </Button>
        ) : (
          ""
        )}
      </div>
      </>
    );
  }
}

const mapDispatchToProps = {
  setPage: page => setPage(page),
};

export default connect(null, mapDispatchToProps)(Aboutme);
