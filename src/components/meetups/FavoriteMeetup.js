import { connect } from "react-redux";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { deleteFavorites } from "../../store/Actions/meetupItem";

function FavoriteMeetup(props) {
  let array = [];
  const handleClickDelete = (dat) => {
    const aux = props.favorite.find((x) => x.id === dat.id);

    if (aux) {
      array = props.favorite.filter((x) => x.id !== dat.id);
      props.deleteFavorites(array);
    }
  };

  return (
    <li className={classes.item} data-test="meet-up-item">
      {props.favorite.map((dat) => (
        <Card key={dat.id}>
          <div className={classes.image}>
            <img src={dat.image} alt={dat.title} />
          </div>
          <div className={classes.content}>
            <h3>{dat.title}</h3>
            <address>{dat.address}</address>
            <p>{dat.description}</p>
          </div>
          <div className={classes.actions}>
            <button onClick={() => handleClickDelete(dat)}>
              Delete from favorites
            </button>
          </div>
        </Card>
      ))}
    </li>
  );
}

const mapStateToProps = (state) => ({
  favorite: state.meetupItem.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  deleteFavorites: (value) => dispatch(deleteFavorites(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteMeetup);
