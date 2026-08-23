import { Link } from "react-router-dom";

const MovieCard = ({ id, title, description, posterURL, rating, deleteMovie }) => {
  return (
    <article className="movie-card">
      <Link className="movie-card-link" to={`/movies/${id}`}>
        <img className="movie-poster" src={posterURL} alt={title} />
        <div className="movie-info">
          <h2 className="movie-title">{title}</h2>
          <p className="movie-detail">{description}</p>
          <p className="movie-rating">⭐ {rating}</p>
        </div>
      </Link>
      <button className="movie-delete-button" onClick={() => deleteMovie(id)}>
        Delete
      </button>
    </article>
  );
};

export default MovieCard;
