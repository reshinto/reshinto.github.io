import React from "react";
import {connect} from "react-redux";
import {addProject} from "../redux/actions/portfolioAction";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";

class New extends React.Component {
  state = {
    category: "",
    projectName: "",
    projectDescription: "",
    projectURL: "",
    tech: [],
    imgURL: "",
    deployedURL: "",
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      category,
      projectName,
      projectDescription,
      projectURL,
      tech,
      imgURL,
      deployedURL,
    } = this.state;
    const {portfolios} = this.props;
    let projectsArr;

    if (portfolios[category] === undefined) {
      projectsArr = [];
    } else {
      projectsArr = portfolios[category];
    }
    const newProject = {
      projectName,
      projectDescription,
      projectURL,
      tech,
      imgURL,
      deployedURL,
    };
    console.log(projectsArr);
    projectsArr.push(newProject);
    this.props.addProject(category, projectsArr);
    alert(`${projectName} has been added successfully!`);
  };

  onChange = prop => e => this.setState({[prop]: e.target.value});

  render() {
    const {
      category,
      projectName,
      projectDescription,
      projectURL,
      tech,
      imgURL,
      deployedURL,
    } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <DialogContent>
            <TextField
              type="text"
              name="category"
              value={category}
              onChange={this.onChange("category")}
              autoFocus
              margin="dense"
              label="category"
              fullWidth
            />
          </DialogContent>
          <DialogContent>
            <TextField
              type="text"
              name="projectName"
              value={projectName}
              onChange={this.onChange("projectName")}
              margin="dense"
              label="project name"
              fullWidth
            />
          </DialogContent>
          <DialogContent>
            <TextField
              type="text"
              name="projectDescription"
              value={projectDescription}
              onChange={this.onChange("projectDescription")}
              margin="dense"
              label="project description"
              fullWidth
            />
          </DialogContent>
          <DialogContent>
            <TextField
              type="text"
              name="projectURL"
              value={projectURL}
              onChange={this.onChange("projectURL")}
              margin="dense"
              label="project url"
              fullWidth
            />
          </DialogContent>
          <DialogContent>
            <TextField
              type="text"
              name="imgURL"
              value={imgURL}
              onChange={this.onChange("imgURL")}
              margin="dense"
              label="image url"
              fullWidth
            />
          </DialogContent>
          <DialogContent>
            <TextField
              type="text"
              name="deployedURL"
              value={deployedURL}
              onChange={this.onChange("deployedURL")}
              margin="dense"
              label="deployed url"
              fullWidth
            />
          </DialogContent>
          <DialogContent>
            <TextField
              type="text"
              name="tech"
              value={tech}
              onChange={this.onChange("tech")}
              margin="dense"
              label="technologies used"
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
              Add Project
            </Button>
          </DialogActions>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    portfolios: state.portfolioReducer.portfolios,
  };
};

const mapDispatchToProps = {
  addProject: (category, projectsArr) => addProject(category, projectsArr),
};

export default connect(mapStateToProps, mapDispatchToProps)(New);
