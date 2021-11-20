import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'

function Contact(props) {
  return(
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
          <BreadcrumbItem active>Contact</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Contact</h3>
          <hr />
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12 col-md-12">
          <h3>Location Information</h3>
        </div>
        <div className="col-12 col-sm-4 offset-sm-1">
          <h5>Our Address</h5>
          <address style={{fontSize: '100%'}}>
            121, Clear Water Bay Road<br />
            Clear Water Bay, Kowloon<br />
            HONG KONG<br />
            <i className="fa fa-phone" />: +852 1234 5678<br />
            <i className="fa fa-fax" />: +852 8765 4321<br />
            <i className="fa fa-envelope" />:
            <a href="mailto:confusion@food.net">confusion@food.net</a>
          </address>
        </div>
        <div className="col-12 col-sm-6 offset-sm-1">
          <h5>Map of our Location</h5>
        </div>
        <div className="col-12 col-sm-11 offset-sm-1">
          <div className="btn-group">
            <a role="button" className="btn btn-primary" href="tel:+84584620859"><i className="fa fa-phone" /> Call</a>
            <a role="button" className="btn btn-info" href><i className="fa fa-skype" /> Skype</a>
            <a role="button" className="btn btn-success" href="mailto:hoduccity@gmail.com"><i className="fa fa-envelope-o" /> Mail</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;