import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
import useFetchPopularMovies from "../hooks/useFetchPopularMovies";
import { Link } from "react-router-dom";

const Home = () => {
  useFetchPopularMovies();
  const popularMovies = useSelector(
    (store) => store.movies.popularMovies.movies
  );

  if (!popularMovies) {
    return <h1 className="text-2xl font-bold text-white">Loading....</h1>;
  }

  return (
    <>
      <div className="videos-container w-full flex flex-wrap gap-5 overflow-y-auto overflow-x-hidden">
        {popularMovies?.map((movie) => (
          <Link to={`/watch/${movie.id}`} key={movie.id}>
            <MovieCard data={movie} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
