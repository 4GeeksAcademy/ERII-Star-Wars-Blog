import React from "react";
import { useParams, Link } from "react-router-dom";

import useAppContext from "../contexts/AppContext.jsx";

import classes from "./HomePage.module.css";

const DetailPage = () => {
  const params = useParams();
  const { store } = useAppContext();
  const { people, planets, starships, isLoading } = store;
  const allResources = [...people, ...planets, ...starships];
  const targetResource = allResources.find((items) => items.uid == params.uid);

  if (isLoading) {
    return <div className={classes.loader}></div>;
  }

  const propertyNames = Object.keys(targetResource);
  const excludedProperties = [
    "created",
    "edited",
    "name",
    "homeworld",
    "url",
    "pilots",
    "uid",
  ];

  const transformPropertyName = (name) => {
    return name.toUpperCase().replace(/_/g, " ");
  };
  const filteredPropertyNames = propertyNames.filter(
    (propertyName) => !excludedProperties.includes(propertyName)
  );

  let resourceType;
  let resourceImage = "";
  if (people.find((person) => person.uid == params.uid)) {
    resourceType = "people";
    resourceImage =
      "https://lumiere-a.akamaihd.net/v1/images/obi-wan-kenobi-main_3286c63c.jpeg?region=0%2C0%2C1280%2C721";
  } else if (planets.find((planet) => planet.uid == params.uid)) {
    resourceType = "planets";
    resourceImage = "https://static.wikia.nocookie.net/starwars/images/e/e9/AlderaanSystem-TCWAssassin.png/revision/latest?cb=20130513020535";
  } else {
    resourceType = "starships";
    resourceImage =
      "https://cdn.europosters.eu/image/1300/canvas-print-solo-a-star-wars-story-millennium-falcon-i111310.jpg";
  }

  return (
    <div className="w-100 h-100">
      <div className="container">
        <div className="row row-col-md-2 rows-cols-2 my-5 p-3 border border-dark-subtle rounded">
          <div className="col m-5 text-center">
            <img
              src={resourceImage}
              className="img-fluid"
              style={{ maxWidth: 600 }}
              alt={resourceType}
            />
          </div>
          <div className="col text-start m-5">
            <h1 className="text-center text-black">{targetResource.name}</h1>
            <p className="mt-5 me-2 text-black">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae sapiente id impedit velit quos cumque molestias blanditiis? Nemo aspernatur excepturi sapiente.
            </p>
          </div>
          <div className="container table-sm table-responsive-lg">
            <table className="table table-dark">
              <thead>
                <tr>
                  {filteredPropertyNames.map((propertyName) => (
                    <th
                      key={propertyName}
                      className="text-white text-center align-middle"
                    >
                      <p>{transformPropertyName(propertyName)}</p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {filteredPropertyNames.map((propertyName) => (
                    <td key={propertyName} className="text-center text-white">
                      {targetResource[propertyName]}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <Link to="/">
          <button type="button" className="btn btn-outline-dark m-5">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DetailPage;
