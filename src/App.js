import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";

class App extends Component {
  render() {
    let content = null;
    content = (
      <React.Fragment>
        <div>
          <Router>
            <MainNavigation />
            <Layout />
            <Switch>
              <Route path="/" exact component={AllMeetupsPage} />
              <Route path="/newMeetup" exact component={NewMeetupsPage} />
              <Route path="/favorites" exact component={FavoritesPage} />
            </Switch>
          </Router>
        </div>
      </React.Fragment>
    );
    return content;
  }
}

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps)(App);
