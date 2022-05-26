import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";
import {
  ALL_MEETUP_PAGE,
} from "./utils/constants";

import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";

function App() {
  const [page, setPage] = useState(ALL_MEETUP_PAGE);

  function getCurrentPageComponent() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={AllMeetupsPage} />
          <Route path="/favorites" exact component={FavoritesPage} />
          <Route path="/newMeetup" exact component={NewMeetupsPage} />
        </Switch>
      </Router>
    );
  }

  return (
    <div data-test="app">
      <MainNavigation setPage={setPage} />
      <Layout>{getCurrentPageComponent()}</Layout>
    </div>
  );
}

export default App;
