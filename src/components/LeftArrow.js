import React from "react";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import {setPage} from "../redux/actions/menuAction";
import {pagesArr} from "../utility";
import Tooltip from "@material-ui/core/Tooltip";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

class LeftArrow extends React.Component {
  handleClick = () => {
    let page = this.props.page;
    if (page > 0) page--;
    this.props.setPage(page);
  };

  render() {
    let page = this.props.page;
    return (
      <div>
        {page > 0 ? (
          <Tooltip title={`${pagesArr[page - 1]}`} aria-label="left arrow">
            <Button
              onClick={this.handleClick}
              style={{
                position: "fixed",
                height: "20rem",
                width: "5rem",
                left: 5,
                top: "40vh",
                color: "#CFCFCF",
                fontSize: "5rem",
                fontWeight: 100,
              }}
            >
              <ArrowBackIosIcon />
            </Button>
          </Tooltip>
        ) : (
          ""
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    page: state.menuReducer.page,
  };
};

const mapDispatchToProps = {
  setPage: page => setPage(page),
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftArrow);
