import React from "react";
import SuggestionVideoCard from "./SuggestionVideoCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const WatchVideoSuggestionsContainer = () => {
  const popularMovies = useSelector(
    (store) => store.movies.popularMovies.movies
  );

  return (
    <section className="video-suggestion-container w-[35%] flex flex-col gap-3">
      {popularMovies?.map((movie) => (
        <Link key={movie.id} to={`/watch/${movie.id}`}>
          <SuggestionVideoCard data={movie} />
        </Link>
      ))}
    </section>
  );
};

export default WatchVideoSuggestionsContainer;
