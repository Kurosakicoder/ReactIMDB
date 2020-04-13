import React from 'react';

const MovieInfo = ({ image, title, plot, released, genre, rating, boxoffice, actor, director, language, country }) => {
    return (
        <div className="card mb-3" style={{ maxWidth: '1920px' }}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={image} width='300' className="card-img" alt="movieImage" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h2 className="card-title"><b>{title}</b></h2>
                        <p className="card-text"><small className="text-muted">IMDB: {rating}</small></p>
                        <p className="card-text">{plot}</p>
                        <br></br>
                        <div><span style={{ fontSize: '18px' }}><strong>Director:</strong></span> {director}</div>
                        <p className="card-text"><span style={{ fontSize: '18px' }}><strong>Cast:</strong></span> {actor}</p>

                        {/* <hr></hr> */}
                        {/* <h4>Plot</h4>
                        <p className="card-text">{plot}</p> */}
                        <br></br>
                        <h5>Details</h5>
                        <hr></hr>
                        <p className="card-text mb-2 text-muted"><span style={{ fontSize: '18px' }}><strong>Released Date:</strong></span> {released}</p>
                        <p className="card-text mb-2 text-muted"><span style={{ fontSize: '18px' }}><strong>Genre:</strong></span> {genre}  </p>
                        <p className="card-text mb-2 text-muted"><span style={{ fontSize: '18px' }}><strong>Language:</strong></span> {language}</p>
                        <p className="card-text mb-2 text-muted"><span style={{ fontSize: '18px' }}><strong>Country:</strong></span> {country}</p>
                        <p className="card-text mb-2 text-muted"><span style={{ fontSize: '18px' }}><strong>Rating:</strong></span> {rating}</p>
                        <p className="card-text mb-2 text-muted"><span style={{ fontSize: '18px' }}><strong>BoxOffice:</strong></span> {boxoffice}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieInfo