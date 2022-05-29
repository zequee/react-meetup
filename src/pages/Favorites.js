import FavoriteMeetup from "../components/meetups/FavoriteMeetup";
import classes from "./../components/meetups/MeetupList.module.css";

export default function FavoritesPage() {
  return (
    <section>
      <h1 className={classes.h1}>Favorites Page</h1>
      <FavoriteMeetup />
    </section>
  );
}
