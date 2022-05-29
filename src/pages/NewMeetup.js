import NewMeetupForm from "../components/meetups/NewMeetupForm";
import classes from "./../components/meetups/MeetupList.module.css";

export default function NewMeetupsPage() {
  return (
    <section>
      <h1 className={classes.h1}>Add New Meetup</h1>
      <NewMeetupForm />
    </section>
  );
}
