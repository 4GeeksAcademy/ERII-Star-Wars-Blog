const Card = ( { name }) => {
    return (
        <div className="card" style={{ minWidth: '18rem' }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="d-flex justify-between">
                    <a href="#" className="block btn btn-primary">Go somewhere</a>
                    <button type="button" className="ms-auto btn btn-warning">
                        <i className="fa-regular fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;

