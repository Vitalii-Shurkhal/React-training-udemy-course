import React, { useCallback, useEffect, useState } from 'react';
import AddMovie from './components/AddMovie'

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null)

    
   const  fetchMoviesHandler = useCallback(async() => {
    setIsLoading(true);
    setError(null)

        await fetch('https://react-http-7b1e6-default-rtdb.europe-west1.firebasedatabase.app/movies.json')
        .then(response => {
          if (!response.ok){
            throw new Error('something went wrong')
          }
          return response.json()
        })
        .then(data => {
          
          const loadedMovies = []; 

          for (const key in data) {
            loadedMovies.push({
              id: key,
              title: data[key].title,
              openingText: data[key].openingText,
              release: data[key].releaseDate
            })
          }
          setMovies(loadedMovies);
          setIsLoading(false)
        })
        .catch(error => {
          setIsLoading(false)
          setError(error)
          
        })
  }, [])

  useEffect(() => {
    fetchMoviesHandler()
  },[fetchMoviesHandler])

 async function addMovieHadler (movie) {
    const response = await fetch('https://react-http-7b1e6-default-rtdb.europe-west1.firebasedatabase.app/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data)
  }


  let content = <p>No Movies Found</p>;
    
    if (movies.length > 0) {
      content = <MoviesList movies={movies} />
    } 

    if (error) {
      content = <p>{error.message}</p>
    }

    if (isLoading){
      content = <p>Loading...</p>
    }
  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie = {addMovieHadler}/>
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
