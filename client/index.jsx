
import React, {useEffect, useState} from "react";
import {MOVIES_API} from "./api/movies_api";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('app'));

function MoviesList() {
    const [movies, setMovies] = useState([]);

    useEffect(()=> {
        async function fetchMovies() {
            setMovies(await MOVIES_API.listMovies());
        }

        fetchMovies();
    });

    return (
        <div>
            {
                movies.map(movie =>
                    <div key={movie.title}>
                        <label>{movie.title}</label>
                    </div>
                )
            }
        </div>
    );
}

function App() {
  return (
    <div className="App">
        <h1>Welcome to the movie app!</h1>
        <MoviesList></MoviesList>
    </div>
  );
}
export default App;


root.render(
    <App/>
);

/*
* React naming convention
* class => className
* for => htmlFor
* onclick => onClick
* tabindex => tabIndex
* */
