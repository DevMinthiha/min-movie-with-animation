import React, { useEffect, useState } from "react";
import Card from "./Card";
import Filter from "./Filter";
import { AnimatePresence, motion } from "framer-motion";

const App = () => {
  const [popularmovies, setPopularMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  const fetchPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=3e63f55d2e73c1a2748e2081d9834a34&language=en-US&page=1"
    );
    const movies = await data.json();
    setPopularMovies(movies.results);
    setFilteredMovies(movies.results);
  };

  useEffect(() => {
    fetchPopular();
  }, []);

  return (
    <div className="container">
      <Filter
        popularmovies={popularmovies}
        setFilteredMovies={setFilteredMovies}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div layout className="card-container">
        <AnimatePresence>
          {filteredMovies?.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default App;
