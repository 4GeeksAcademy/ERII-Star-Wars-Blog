import React from "react";
import { Link } from "react-router-dom";

import useAppContext from "../../contexts/AppContext.jsx";

import PeopleDetails from "./components/PeopleDetails.jsx";
import PlanetsDetails from "./components/PlanetsDetails.jsx";
import StarshipsDetails from "./components/StarshipsDetails.jsx";

const Card = ({
  uid,
  name,
  resourceType,
  gender,
  birth_year,
  gravity,
  population,
  model,
  starship_class,
}) => {
  const {
    store: { favorites },
    actions: { addToFavorites, removeFromFavorites },
  } = useAppContext();
  const isFavorite = favorites.some((items) => items.uid === uid);
  return (
    <div
      className="card text-bg-light border-light"
      style={{ minWidth: "18rem" }}
    >
      {resourceType === "people" && (
        <img
          src="https://lumiere-a.akamaihd.net/v1/images/obi-wan-kenobi-main_3286c63c.jpeg?region=0%2C0%2C1280%2C721"
          className="card-img-top object-fit-cover"
          style={{ minWidth: "17rem", height: 200 }}
          alt="..."
        />
      )}
      {resourceType === "planets" && (
        <img
          src="https://static.wikia.nocookie.net/starwars/images/e/e9/AlderaanSystem-TCWAssassin.png/revision/latest?cb=20130513020535"
          className="card-img-top object-fit-cover"
          style={{ minWidth: "17rem", height: 200 }}
          alt="..."
        />
      )}
      {resourceType === "starships" && (
        <img
          src="https://cdn.europosters.eu/image/1300/canvas-print-solo-a-star-wars-story-millennium-falcon-i111310.jpg"
          className="card-img-top object-fit-cover"
          style={{ minWidth: "17rem", height: 200 }}
          alt="..."
        />
      )}
      <div className="card-body">
        <h5 className="card-title fw-bold">{name}</h5>
        {resourceType === "people" && (
          <PeopleDetails gender={gender} birth_year={birth_year} />
        )}
        {resourceType === "planets" && (
          <PlanetsDetails population={population} gravity={gravity} />
        )}
        {resourceType === "starships" && (
          <StarshipsDetails model={model} starship_class={starship_class} />
        )}
        <div className="d-flex justify-between">
          <Link to={`/${uid}`} className="btn btn-outline-dark">
            Learn more
          </Link>
          <button
            type="button"
            className="btn btn-outline-danger ms-auto"
            onClick={
              isFavorite
                ? () => removeFromFavorites(uid)
                : () => addToFavorites(uid, name)
            }
          >
            {isFavorite ? (
              <i className="fa-solid fa-heart"></i>
            ) : (
              <i className="fa-regular fa-heart"></i>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
