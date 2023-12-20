import { Link } from "react-router-dom";

import DetailsItem from "./components/DetailsItem";

const Card = ({ uid, name, hair_color, cargo_capacity, population }) => {
    return (
        <div className="card" style={{ minWidth: '18rem' }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            
                <DetailsItem title="Population: " detail={ population } />
                <DetailsItem title="Hair color: " detail={ hair_color } />
                <DetailsItem title="Cargo: " detail={ cargo_capacity } />

                <div className="d-flex justify-between">
                    <Link to={`/${uid}`} className="block btn btn-primary">
                        See more...
                    </Link>
                    <button type="button" className="ms-auto btn btn-warning">
                        <i className="fa-regular fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;

