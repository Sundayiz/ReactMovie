import MovieList from "./components/MovieList";
import MovieFilter from "./components/MovieFilter";
import movies from "./Moviess";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import AddMovie from "./components/AddMovie";

function App() {
  const [originalMovies, setOriginalMovies] = useState(movies);
  const [filteredMovies, setFilteredMovies] = useState(originalMovies);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);

  useEffect(() => {
    const filtered = originalMovies.filter((eachMovie) => {
      const matchesTitle = filterTitle
        ? eachMovie.title.toLowerCase().includes(filterTitle.toLowerCase())
        : true;
      const matchesRating = filterRating
        ? eachMovie.rating === filterRating
        : true;
      return matchesTitle && matchesRating;
    });

    setFilteredMovies(filtered);
  }, [originalMovies, filterTitle, filterRating]);

  const titleChangeHandler = (title) => {
    title ? setFilterTitle(title) : setFilterTitle("");
  };

  const ratingChangeHandler = (rating) => {
    rating ? setFilterRating(Number(rating)) : setFilterRating(0);
  };
  const addNewMovie = (newMovie) => {
    setOriginalMovies([...originalMovies, newMovie]);
  };

  return (
    <Container>
      <AddMovie onAddMovie={addNewMovie} />
      <MovieFilter
        onTitleChange={titleChangeHandler}
        onRatingChange={ratingChangeHandler}
      />
      <MovieList movies={filteredMovies} />
    </Container>
  );
}

export default App;
