import { useFetch } from "./../../util-hooks/useFetch";
import { connect } from "react-redux";
import { addFavorites } from "../../store/Actions/meetupItem";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import "../../index";

function MeetupItem(props) {
  const { data } = useFetch({
    url: "/data.json",
  });

  if (!data) return <p>Loading...</p>;
  let array = [];

  const handleClickAdd = (dat) => {
    const aux = array.find((x) => x.id === dat.id);

    if (!aux) {
      array.push(dat);
      props.addFavorites(array);
    } else {
      alert("Ya se Encuentra agregado a Favoritos");
    }
  };
  return (
    <>
      <li className={classes.item} data-test="meet-up-item">
        {data.map((dat) => (
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
              <button onClick={() => handleClickAdd(dat)}>
                Add to favorites
              </button>
            </div>
          </Card>
        ))}
      </li>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addFavorites: (dat) => dispatch(addFavorites(dat)),
});

export default connect(null, mapDispatchToProps)(MeetupItem);
