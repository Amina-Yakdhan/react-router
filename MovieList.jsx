import MovieCard from "./MovieCard";

const MovieList = ({ movies, deleteMovie }) => {
  return (
    <section className="movie-list-section">
      <h2>Movie List</h2>
      <div className="movie-cards">
        {movies.length > 0?  (
          movies.map((movie) => (
            <MovieCard key={movie.id} {...movie} deleteMovie={deleteMovie} />
          ))
        ) : (
          <p>No movies match the current filter.</p>
        )}
      </div>
    </section>
  );
};

export default MovieList;
