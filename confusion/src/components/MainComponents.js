import React, { Component } from 'react';
import MenuComponents from './MenuComponents';
import { DISHES } from '../shared/dishes'
import { COMMENTS } from '../shared/comments'
import { LEADERS } from '../shared/leaders'
import { PROMOTIONS } from '../shared/promotions'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent'
import Contact from './ContactComponent'
import DishDetail from './DishDetail';
import About from './AboutComponent'
import { Route, Switch, Redirect } from 'react-router-dom'


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leader: LEADERS
    }
  }

  render() {
    const HomePage = () => {
      return(
        <div>
          <Home 
            dish={this.state.dishes.filter((dish) => dish.featured)[0]} 
            promotion={this.state.promotions.filter((promotion) => promotion.featured)[0]}
            leader={this.state.leader.filter((leader) => leader.featured)[0]}
          />
        </div>
      );
    }

    const DishWithId = ({ match }) => {
      return(
        <div>
          <DishDetail dish={ this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0] } 
          comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}/>
        </div>
      );
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <MenuComponents dishes={this.state.dishes}/>} />
          <Route path="/menu/:dishId" component={ DishWithId } />
          <Route exact path="/contactus" component={ Contact } />
          <Route path="/aboutus" component={() => <About leaders={this.state.leader} /> }/>
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;