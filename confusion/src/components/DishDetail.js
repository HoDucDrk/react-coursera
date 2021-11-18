import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

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

  
const RenderComment = ( {dish} ) => {
  if(dish != null) {
    return (
      <div>
        <h3>Comment</h3>
        <div>{dish.comments.map((d) => {
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
        <div className="col-12 col-md-5 md-1">
          <RenderDish dish={props.dish} />
        </div>
        <div className="col-12 col-md-5 md-1">
          <RenderComment dish={props.dish} />
        </div>
      </div>
    </div>
  );
}

export default DishDetail;