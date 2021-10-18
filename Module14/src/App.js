import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
	const [movies, setMovies] = useState([]);
	const [isFetching, setisFetching] = useState(false);
  const [error, setError] = useState(null);

	async function fetchMoviesHandler() {
    setMovies([])
		setisFetching(true);
    setError(null);
    try{
      const response = await fetch('https://swapi.dev/api/films/');
      if(!response.ok){
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      
      const transformedMovies = data.results.map((movie) => {
        return {
          id: movie.episode_id,
          title: movie.title,
          openingText: movie.opening_crawl,
          releaseDate: movie.release_date,
        };
      });
      setMovies(transformedMovies);
    }
    catch(error){
      setError(error.message);
    }
		setisFetching(false);
	}

	return (
		<React.Fragment>
			<section>
				<button onClick={fetchMoviesHandler}>{isFetching ? "Fetching" : "Fetch Movies"}</button>
			</section>
			<section>
				{!error && <MoviesList movies={movies} />}
        {error && error}
			</section>
		</React.Fragment>
	);
}

export default App;
