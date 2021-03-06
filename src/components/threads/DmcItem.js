import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Inventory from "../Inventory";

const DmcItem = props => {
  const useStyles = makeStyles({
    root: {
      maxWidth: 300,
      marginLeft: "30px",
      marginTop: "25px",
      border: "solid grey 1px"
    },
    media: {
      height: 250,
      width: 250
    }
  });

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Typography
          style={{
            textAlign: "center",
            padding: "15px",
            color: "rgb(56,64,88)"
          }}
          variant="h4"
          component="h4"
        >
          {props.dmc}
        </Typography>
        <CardMedia
          className={classes.media}
          image={`https://static1.dmc.com/cache/1/1/117mc_e_${props.dmc}_swatch_150x150.jpg`}
          title="dmc threads"
        />
        <CardContent
          style={{
            textAlign: "center",
            height: "150px",
            width: "250px",
            backgroundColor: "rgb(56,64,88, .2)"
          }}
        >

          <Typography
            style={{ padding: "20px", color: "rgb(56,64,88)" }}
            variant="h5"
            component="h5"
          >
            {props.color}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Inventory />
      </CardActions>
    </Card>
  );
};

export default DmcItem;
