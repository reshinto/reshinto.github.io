import React from "react";
import {connect} from "react-redux";
import {capsStr} from "../../utility";
import {getPortfolios} from "../../redux/actions/portfolioAction";
import Grid from "@material-ui/core/Grid";
import Card from "../../components/Card";
import Loading from "../Loading";
import {setPage} from "../../redux/actions/menuAction";

class Projects extends React.Component {
  componentDidMount() {
    this.props.setPage(2);
    this.props.getPortfolios();
  }

  render() {
    const {portfolios} = this.props;
    let categoryArr = [];
    categoryArr = Object.keys(portfolios);
    categoryArr.sort().reverse();

    return (
      <div style={{height: "95vh", overflow: "auto"}}>
        {categoryArr.length !== 0 ? (
          categoryArr.map((cat, i) => (
            <div key={i}>
              {i > 0 ? <hr /> : ""}
              <h2 style={{textAlign: "center", color: "#CFCFCF"}}>
                {capsStr(cat)}
              </h2>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Grid container justify="center" spacing={2}>
                    {portfolios[cat].map((project, j) => (
                      <Card key={j} p={project} />
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </div>
          ))
        ) : (
          <div
            style={{
              display: "flex",
              height: "100vh",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Loading />
          </div>
        )}
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
  getPortfolios: () => getPortfolios(),
  setPage: page => setPage(page),
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
