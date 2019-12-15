import React from "react";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import {setPage} from "../redux/actions/menuAction";
import {pagesArr} from "../utility";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Tooltip from "@material-ui/core/Tooltip";

class RightArrow extends React.Component {
  handleClick = () => {
    let page = this.props.page;
    if (page < 3) page++;
    this.props.setPage(page);
  };

  render() {
    let page = this.props.page;
    return (
      <div>
        {page < 3 ? (
          <Tooltip title={`${pagesArr[page + 1]}`} aria-label="right arrow">
            <Button
              onClick={this.handleClick}
              style={{
                position: "fixed",
                right: 5,
                height: "20rem",
                width: "5rem",
                top: "40vh",
                color: "#CFCFCF",
                fontSize: "5rem",
                fontWeight: 100,
              }}
            >
              <ArrowForwardIosIcon />
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

export default connect(mapStateToProps, mapDispatchToProps)(RightArrow);
