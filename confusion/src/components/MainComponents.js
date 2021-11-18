import React, { Component } from 'react';
import MenuComponents from './MenuComponents';
// import DishDetail from './DishDetail';
import { DISHES } from '../shared/dishes'
import { COMMENTS } from '../shared/comments'
import { LEADERS } from '../shared/leaders'
import { PROMOTIONS } from '../shared/promotions'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent'
import Contact from './ContactComponent'
import { Route, Switch, Redirect } from 'react-router-dom'


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leader: LEADERS,
      // selectedDish: null
    }
  }

  // onDishSelect(dish) {
  //   this.setState({
  //     dishes: DISHES,
  //     selectedDish: dish
  //   })
  // }

  render() {
    const HomePage = () => {
      return(
        <Home 
          dish={this.state.dishes.filter((dish) => dish.featured)[0]} 
          promotion={this.state.promotions.filter((promotion) => promotion.featured)[0]}
          leader={this.state.leader.filter((leader) => leader.featured)[0]}
        />
      );
    }
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <MenuComponents dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>} />
          <Route exact path="/contactus" component={ Contact } />
          <Redirect to="/home" />
        </Switch>
        {/* <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
        <Footer />
      </div>
    );
  }
}

export default Main;