import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Row } from "react-bootstrap";
import { Link, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    maxWidth: "100%",
    flexDirection: "column",
  },
  main: {
    display: "flex",
    flexDirection: "row-reverse",
  },
  media: {
    height: "200px !important",
    width: "100%",
    maxWidth: "250px",
    flex: "1 0 150px",
  },
});
function BlogCard(props) {
  const classes = useStyles();
  if (props.blog) {
    return (
      <Row className="pt-2 pb-2">
        <Link
          href={"/blog/" + props.blog.id}
          style={{ textDecoration: "none" }}
        >
          <Card className={classes.root} href={"/blog/" + props.blog.id}>
            <CardActionArea className={classes.main}>
              <CardMedia className={classes.media} image={props.blog.imgUrl} />
              <CardContent href={"/blog/" + props.blog.id}>
                <Typography gutterBottom variant="h5" component="h2">
                  {props.blog.header}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  {props.blog.name}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  {props.blog.date}
                </Typography>
                <br />

                <Typography variant="body2" color="textSecondary" component="p">
                  {props.blog.desc.substring(0, 150) + "..."}
                </Typography>
              </CardContent>
            </CardActionArea>
            <Button size="small" color="primary">
              Read full Blog
            </Button>
          </Card>
        </Link>
      </Row>
    );
  } else return <div></div>;
}

export default BlogCard;
