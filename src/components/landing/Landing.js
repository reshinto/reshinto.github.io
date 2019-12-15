import React from "react";
import {connect} from "react-redux";
import {setPage} from "../../redux/actions/menuAction";

let i = 0;

class Landing extends React.Component {
  state = {
    text: ["Software Engineer", "Full-Stack Developer"],
    count: 0,
    show: "",
    isDeleting: false,
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.update(), 250);
    this.props.setPage(0);
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

  render() {
    return (
      <div
        style={{
          margin: "0 6rem",
          textAlign: "center",
          color: "#CFCFCF",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <h1 style={{fontSize: "4rem"}}>Hey! I'm Terence Kong.</h1>
        <h2 style={{fontSize: "2.5rem"}}>
          I'm a {this.state.show}
          <span ref="word" className="blink">
            |
          </span>
        </h2>
        <p style={{margin: "2rem 4rem", fontSize: "2rem"}}>
          who's passionate about devising elegant problem-solving methods and
          learning new technologies.
        </p>
      </div>
    );
  }
}

const mapDispatchToProps = {
  setPage: page => setPage(page),
};

export default connect(null, mapDispatchToProps)(Landing);
