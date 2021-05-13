import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./TestimonialCard.css";

export default class TestimonialCard extends Component {
  render() {
    return (
      <div className="TestimonialCard">
        <Card style={{ width: "250px" }}>
          <CardActionArea>
            <div className="TestimonialCardImg">
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image="https://new.iselearning.ac.in/wp-content/uploads/intermediate-workshop-featured.jpg"
                title="Contemplative Reptile"
              />
            </div>
            <CardContent className="TestimonialCardDesc ">
              <Typography gutterBottom variant="h5" component="h2">
                The standard Lorem Ipsum passage, used since the
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                [...]
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <img
              src="https://secure.gravatar.com/avatar/372e5942ebc068df0f4ada74829309dc?s=60&d=mm&r=g"
              alt=""
            />
            <div> VDHS June 9th, 2020</div>
          </CardActions>
        </Card>
      </div>
    );
  }
}
