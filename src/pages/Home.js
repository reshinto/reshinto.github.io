import React from "react";
import { connect } from "react-redux";
import { getPortfolios } from "../redux/actions/portfolioAction";
import {capsStr} from "../utility";
import Grid from '@material-ui/core/Grid';
import Card from "../components/Card";

class Home extends React.Component {
  componentDidMount() {
    this.props.getPortfolios();
  }

  render() {
    const {portfolios} = this.props;
    let categoryArr = [];
    categoryArr = Object.keys(portfolios);
    return (
      <div>
        {categoryArr.length !== 0 ? (
          categoryArr.map((cat, i) => (
            <div key={i}>
              <h2 style={{textAlign: "center"}}>{capsStr(cat)}</h2>
              <hr />
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
        ) : "loading..."}
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
  getPortfolios: () => getPortfolios()
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
