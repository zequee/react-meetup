import {
  ALL_MEETUP_PAGE,
  FAVORITES_PAGE,
  NEW_MEETUP_PAGE,
} from "./../../utils/constants";

import classes from "./MainNavigation.module.css";
import Headroom from "react-headroom";

export default function MainNavigation({ setPage }) {
  return (
    <Headroom>
      <header className={classes.header} data-test="navigation-header">
        <div className={classes.logo}>React Meetups</div>
        <nav>
          <ul>
            <li>
              <a href="#" onClick={() => setPage(ALL_MEETUP_PAGE)}>
                All Meetups
              </a>
            </li>

            <li>
              <a href="#" onClick={() => setPage(NEW_MEETUP_PAGE)}>
                Add New Meetup
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setPage(FAVORITES_PAGE)}>
                My Favorites
                <span className={classes.badge}>{0}</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </Headroom>
  );
}
