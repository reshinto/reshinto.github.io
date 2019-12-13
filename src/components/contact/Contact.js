import React from "react";
import {connect} from "react-redux";
import {sendEmail} from "../../redux/actions/portfolioAction";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import {withStyles} from "@material-ui/styles";
import {MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const theme = createMuiTheme({
  // For Underline Color After Click
  palette: {
    primary: {main: "#CFCFCF"},
  },
  // For Underline Hover Color
  overrides: {
    MuiInput: {
      underline: {
        borderBottom: "1px solid #CFCFCF",
        "&:hover:not($disabled):before": {
          //underline color when hovered
          borderBottom: "1px solid #CFCFCF",
        },
      },
    },
  },
});

const styles = theme => ({
  text: {
    color: "#CFCFCF",
  },
});

class Contact extends React.Component {
  state = {
    email: "",
    subject: "",
    name: "",
    message: "",
    emailError: false,
    nameError: false,
    subjectError: false,
    messageError: false,
  };

  handleSubmit = e => {
    e.preventDefault();
    const {email, name, subject, message} = this.state;
    if (email === "") this.setState({emailError: true});
    else this.setState({emailError: false});
    if (name === "") this.setState({nameError: true});
    else this.setState({nameError: false});
    if (subject === "") this.setState({subjectError: true});
    else this.setState({subjectError: false});
    if (message === "") this.setState({messageError: true});
    else this.setState({messageError: false});
    if (email !== "" && name !== "" && subject !== "" && message !== "") {
      const msg = message.replace(/\r?\n/g, "<br />");
      let newSubject = `by: ${name}, sub: ${subject}`
      this.props.sendEmail(email, newSubject, msg);
      this.setState({
        emailError: false,
        nameError: false,
        subjectError: false,
        messageError: false,
        email: "",
        name: "",
        subject: "",
        message: ""
      });
      alert(`message has been sent successfully!`);
    }
  };

  onChange = prop => e => this.setState({[prop]: e.target.value});

  render() {
    const {
      email,
      name,
      subject,
      message,
      emailError,
      nameError,
      subjectError,
      messageError
    } = this.state;
    const {classes} = this.props;

    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <h1 style={{textAlign: "center", color: "#CFCFCF"}}>Drop me an email</h1>
          <form style={{width: "80vw"}} onSubmit={this.handleSubmit}>
            <DialogContent>
              <TextField
                InputProps={{
                  className: classes.text,
                }}
                InputLabelProps={{
                  className: classes.text,
                }}
                type="email"
                name="email"
                value={email}
                onChange={this.onChange("email")}
                autoFocus
                margin="dense"
                label="Your Email Address"
                error={emailError}
                helperText={emailError ? "Email cannot be empty!" : ""}
                fullWidth
              />
            </DialogContent>
            <DialogContent>
              <TextField
                InputProps={{
                  className: classes.text,
                }}
                InputLabelProps={{
                  className: classes.text,
                }}
                type="text"
                name="name"
                value={name}
                onChange={this.onChange("name")}
                margin="dense"
                label="Your name"
                error={nameError}
                helperText={nameError ? "Subject cannot be empty!" : ""}
                fullWidth
              />
            </DialogContent>
            <DialogContent>
              <TextField
                InputProps={{
                  className: classes.text,
                }}
                InputLabelProps={{
                  className: classes.text,
                }}
                type="text"
                name="subject"
                value={subject}
                onChange={this.onChange("subject")}
                margin="dense"
                label="Subject"
                error={subjectError}
                helperText={subjectError ? "Subject cannot be empty!" : ""}
                fullWidth
              />
            </DialogContent>
            <DialogContent>
              <TextField
                InputProps={{
                  className: classes.text,
                }}
                InputLabelProps={{
                  className: classes.text,
                }}
                type="text"
                name="message"
                value={message}
                onChange={this.onChange("message")}
                margin="dense"
                label="Message: press enter to go to the next line"
                multiline={true}
                rows="4"
                error={messageError}
                helperText={messageError ? "Email cannot be empty!" : ""}
                fullWidth
              />
            </DialogContent>

            <DialogActions
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button color="primary" type="submit">
                Send email
              </Button>
            </DialogActions>
          </form>
        </MuiThemeProvider>
        <div style={{display: "flex", justifyContent: "center", margin: "2rem auto"}}>
          <Button
            style={{backgroundColor: "#036BA2"}}
            color="primary"
            target="_blank"
            href="https://www.linkedin.com/in/terence-kong/"
          >
            <LinkedInIcon />&nbsp;LINKEDIN
          </Button>
          <Button
            style={{backgroundColor: "#4F4F4F", marginLeft: "1rem"}}
            color="primary"
            target="_blank"
            href="https://github.com/reshinto"
          >
              <GitHubIcon />&nbsp;GitHub
          </Button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  sendEmail: (email, subject, message) => sendEmail(email, subject, message),
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(Contact));
