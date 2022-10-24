import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      System developed and maintained by Thimphu TechPark Limited 
      {' Copyright © '}
      <Link color="primary" href="https://thimphutechpark.bt/">
        Thimphu Techpark Limited
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(4),
    padding: theme.spacing(4, 0),
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <footer className={classes.footer} >
      {/* <Container maxWidth="lg"> */}
        {/* <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          {description}
        </Typography> */}
        <Copyright />
      {/* </Container> */}
    </footer>
  );
}

// Footer.propTypes = {
//   description: PropTypes.string,
//   title: PropTypes.string,
// };