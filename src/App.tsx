// import { useState } from 'react'

import { useState } from "react";
import "./App.css";
import { Box, Loader, Main, Error } from "./components/Main";
import { NavBar, NumResults } from "./components/NavBar";
import { Search } from "./components/Search";
import { MovieList } from "./components/Movie";
import { useMovies } from "./data/Movies";
// import { useLocalStorageState } from './functions';

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { movies, isLoading, error } = useMovies(query);
  // const [watched, setWatched] = useLocalStorageState([], "watched");

  function handleSelectMovie(id: string) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  // function handleCloseMovie() {
  //   setSelectedId(null);
  // }

  // function handleAddWatched(movie: Movie) {
  //   setWatched((watched) => [...watched, movie]);
  // }

  // function handleDeleteWatched(id: string) {
  //   setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  // }

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {error && (
            <Error message={error} />
          )}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
        </Box>

        <Box>
          {selectedId ? <h2>{selectedId}</h2> : <h2>nothing to see</h2>}
          {/* {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )} */}
        </Box>
      </Main>
    </>
  );
}
