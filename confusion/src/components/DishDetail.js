import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom'

function RenderDish( {dish} ) {
  if(dish != null) {
    return(
      <Card>
        <CardImg top src={dish.image} alt="dish.name" />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  } else {
    return (
      <div></div>
    );
  }
}

  
const RenderComment = ( {comments} ) => {
  if(comments != null) {
    return (
      <div>
        <h3>Comment</h3>
        <div>{comments.map((d) => {
          return(
            <ul className="list-unstyled" key={d.id}>
              <li>{d.comment}</li>
              <li>
                {d.author} ,{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'long', day: '2-digit'}).format(new Date(d.date))}
              </li>
            </ul>
          );
        })}</div>
      </div>
    );
  } else {
    return (
      <div></div>
    );
  }
}


function DishDetail(props) {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
          <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.dish.name}</h3>
          {console.log("Duc")}
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-5 md-1">
          <RenderDish dish={props.dish} />
        </div>
        <div className="col-12 col-md-5 md-1">
          <RenderComment comments={props.comments} />
        </div>
      </div>
    </div>
  );
}

export default DishDetail;