import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import MovieDetails from "./components/MovieDetails";

const initialMovies = [
  {
    id: 1,
    title: "The Dark Knight",
    description: "Batman faces the Joker, a criminal mastermind who wants to create chaos in Gotham City.",
    posterURL: "https://cdn.shopify.com/s/files/1/0867/6392/9944/files/TDK.jpg?v=1756448765",
    rating: 9.0,
    trailerURL: "https://youtu.be/EXeTwQWrcwY?si=qwK3QQCuvdhiKXZ9",
  },
  {
    id: 2,
    title: "Avatar",
    description: "A former Marine joins the Na'vi people on the alien world of Pandora.",
    posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH9rar0PA2SEiyNUL-XwQc4dc-c2vDfydYzUDZXPmLrg&s=10",
    rating: 7.9,
    trailerURL: "https://youtu.be/Ml27ZX3f8GQJ3W0g7F_YJHG2yzy",
  },
 {
    id: 3,
    title: "Jurassic Park",
    description:
      "A group of visitors must survive when genetically engineered dinosaurs escape from a theme park.",
    posterURL:
      "https://d3tvwjfge35btc.cloudfront.net/Assets/25/820/L_p0093882025.jpg",
    rating: 8.2,
    trailerURL: "https://youtu.be/RFinNxS5KN4nz4wS40OtJ5ZManb",
  },
  {
    id: 4,
    title: "The Lion King",
    description:
      "A young lion must overcome loss and take his place as the king of the Pride Lands.",
    posterURL:
      "https://www.egypttoday.com/siteimages/Larg/64559.jpg",
    rating: 8.5,
    trailerURL: "https://youtu.be/7TavVZMewpYT-d26NVxTOn1Ru6z",
  },
]

function MovieHome({ movies, setMovies }) {
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");
  const [newMovie, setNewMovie] = useState({ title: "", description: "", posterURL: "", rating: "", trailerURL: "" });

  const addMovie = (e) => {
    e.preventDefault();
    if (!newMovie.title || !newMovie.rating) return;

    setMovies([
      ...movies,
      {
        ...newMovie,
        id: Date.now(),
        rating: Number(newMovie.rating),
      },
    ]);

    setNewMovie({ title: "", description: "", posterURL: "", rating: "", trailerURL: "" });
  };

  const deleteMovie = (id) => setMovies(movies.filter((movie) => movie.id !== id));

  const filteredMovies = movies.filter((movie) => {
    const matchTitle = movie.title.toLowerCase().includes(titleFilter.toLowerCase());
    const matchRating = ratingFilter === "" || movie.rating >= Number(ratingFilter);
    return matchTitle && matchRating;
  });

  return (
    <div className="app-container">
      <h1> MovieZone 🍿 </h1>
     

      <Filter
        titleFilter={titleFilter}
        setTitleFilter={setTitleFilter}
        ratingFilter={ratingFilter}
        setRatingFilter={setRatingFilter}
      />

      <section className="add-movie-section">
        <h2>Add a Movie</h2>
        <form onSubmit={addMovie} className="movie-form">
          <input
            type="text"
            placeholder="Title"
            value={newMovie.title}
            onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Description"
            value={newMovie.description}
            onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
          />
          <input
            type="text"
            placeholder="Poster URL"
            value={newMovie.posterURL}
            onChange={(e) => setNewMovie({ ...newMovie, posterURL: e.target.value })}
          />
          <input
            type="url"
            placeholder="Trailer embed URL"
            value={newMovie.trailerURL}
            onChange={(e) => setNewMovie({ ...newMovie, trailerURL: e.target.value })}
          />
          <input
            type="number"
            min="0"
            max="10"
            step="0.1"
            placeholder="Rating"
            value={newMovie.rating}
            onChange={(e) => setNewMovie({ ...newMovie, rating: e.target.value })}
          />
          <button type="submit">Add Movie</button>
        </form>
      </section>

      <MovieList movies={filteredMovies} deleteMovie={deleteMovie} />
    </div>
  );
}

function App() {
  const [movies, setMovies] = useState(initialMovies);

  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<MovieHome movies={movies} setMovies={setMovies} />} />
          <Route path="/movies/:movieId" element={<MovieDetails movies={movies} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
