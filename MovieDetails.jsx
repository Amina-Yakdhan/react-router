import { Link, useParams } from "react-router-dom";

const MovieDetails = ({ movies }) => {
  const { movieId } = useParams();
  const movie = movies.find((item) => String(item.id) === movieId);

  if (!movie) {
    return (
      <section className="movie-details-page">
        <p>Movie not found.</p>
        <Link className="back-link" to="/">Back to movies</Link>
      </section>
    );
  }

  return (
    <article className="movie-details-page">
      <Link className="back-link" to="/">&larr; Back to movies</Link>
      <div className="movie-details-content">
        <img className="movie-details-poster" src={movie.posterURL} alt={movie.title} />
        <div className="movie-details-copy">
          <p className="movie-eyebrow">Movie details</p>
          <h1>{movie.title}</h1>
          <p className="movie-rating">⭐ {movie.rating}</p>
          <p className="movie-description">{movie.description || "No description available."}</p>
          {movie.trailerURL ? (
            <div className="trailer-wrapper">
              <iframe
                src={movie.trailerURL}
                title={`${movie.title} trailer`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <p className="trailer-empty">No trailer is available for this movie yet.</p>
          )}
        </div>
      </div>
    </article>
  );
};

export default MovieDetails;
