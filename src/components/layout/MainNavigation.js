import {
  ALL_MEETUP_PAGE,
  FAVORITES_PAGE,
  NEW_MEETUP_PAGE,
} from "./../../utils/constants";

import classes from "./MainNavigation.module.css";
import Headroom from "react-headroom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function MainNavigation(props, { setPage }) {
  return (
    <Headroom>
      <header className={classes.header} data-test="navigation-header">
        <div className={classes.logo}>React Meetups</div>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <button onClick={() => setPage(ALL_MEETUP_PAGE)}>
                  All Meetups
                </button>
              </Link>
            </li>
            <li>
              <Link to="/newMeetup">
                <button onClick={() => setPage(NEW_MEETUP_PAGE)}>
                  Add New Meetup
                </button>
              </Link>
            </li>
            <li>
              <Link to="/favorites">
                <button onClick={() => setPage(FAVORITES_PAGE)}>
                  My Favorites
                  <span className={classes.badge}>{props.counter}</span>
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </Headroom>
  );
}

const mapStateToProps = (state) => ({
  counter: state.meetupItem.counter,
});

export default connect(mapStateToProps, null)(MainNavigation);
