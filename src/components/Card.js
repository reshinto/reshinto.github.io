import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    margin: theme.spacing(2),
    backgroundColor: "#2C2C2C"
  },
  media: {
    height: 190,
  },
  title: {
    color: "#CFCFCF"
  },
  text: {
    color: "#6F6F6F"
  }
}));

function Media(props) {
  const { loading = false, p } = props;
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.title}
        title={loading ? (
          <Skeleton
            height={10} width="80%" style={{marginBottom: 6 }} />
        ) : p.projectName}
        subheader={loading ? (
          <Skeleton height={10} width="40%" />
        ) : (
          <span className={classes.text}>Built with {p.tech}</span>
        )}
      />
      {loading ? (
        <Skeleton variant="rect" className={classes.media} />
      ) : (
        <CardMedia
          className={classes.media}
          image={p.imgURL}
          title={p.projectName}
        />
      )}

      <CardContent>
        {loading ? (
          <React.Fragment>
            <Skeleton height={10} style={{ marginBottom: 6 }} />
            <Skeleton height={10} width="80%" />
          </React.Fragment>
        ) : (
          <>
            <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
              {p.projectDescription}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: "10px"
                }}
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={p.projectURL}
                style={{color: "#6F6F6F"}}
              >
                <GitHubIcon />
              </a>
              {p.deployedURL !== "" ? (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={p.deployedURL}
                  style={{color: "#6F6F6F"}}
                >
                  <LanguageIcon />
                </a>
              ) : ""}
            </Typography>
          </>
        )}
      </CardContent>
    </Card>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function CardComponent(props) {
  const {p} = props;
  return (
    <div>
      <Media p={p}/>
    </div>
  );
}
