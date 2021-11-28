import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalBody, ModalHeader, Label, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'
import { LocalForm, Control, Errors } from 'react-redux-form'

const required = val => val && val.length
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);

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


class DishDetail extends Component{
  constructor(props) {
    super(props);

    this.state = {
      modal: false
    }

    this.toggle = this.toggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    })
  }

  handleSubmit(value) {
    const info = JSON.stringify(value);
    console.log(info);
    alert(info);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{this.props.dish.name}</h3>
            {console.log("Duc")}
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 md-1">
            <RenderDish dish={this.props.dish} />
          </div>
          <div className="col-12 col-md-5 md-1">
            <RenderComment comments={this.props.comments} />
            <Button outline color="secondary" onClick={ this.toggle } >Submit Comment</Button>
          </div>
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggle}  >
          <ModalHeader toggle={this.toggle}>
            Submit Commit
          </ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(value) => this.handleSubmit(value)}>
              <Row className="form-group">
                <Label md={12}>Rating</Label>
                <Col>
                  <Control type="number" model=".rating" id="rating" name="rating" className="form-control" placeholder="Rating" min="1" max="5" list="defautNumber" />
                  <datalist id="defautNumber">
                    <option value="1"/>
                    <option value="2"/>
                    <option value="3"/>
                    <option value="4"/>
                    <option value="5"/>
                  </datalist>
                </Col>
              </Row>
              <Row className="form-group">
                <Label md={12}>Your Name</Label>
                <Col>
                  <Control.text model=".yourname" name="yourname" id="yourname" placeholder="Your Name" className="form-control" validators={{
                    required, minLength: minLength(2), maxLength: maxLength(15)
                  }} />
                  <Errors className="text-danger" model=".yourname" show="touched" 
                  messages={{
                    required: "Required",
                    minLength: "Must be greater than 2 characters",
                    maxLength: "Must be 15 characters or less"
                  }}
                  >

                  </Errors>
                </Col>
              </Row>
              <Row className="form-group">
                <Label md={12}>Comment</Label>
                <Col>
                  <Control.textarea model=".comment" name="comment" id="comment" className="form-control" rows="6" placeholder="Comment" />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={12}>
                  <Button color="primary" >Submit</Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default DishDetail;