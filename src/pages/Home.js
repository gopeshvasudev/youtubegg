import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
import useFetchPopularMovies from "../hooks/useFetchPopularMovies";

const Home = () => {
  useFetchPopularMovies();
  const popularMovies = useSelector((store) => store.movies.popularMovies);

  if (!popularMovies) {
    return <h1 className="text-2xl font-bold text-white">Loading....</h1>;
  }
  
  return (
    <>
      <div className="videos-container w-full flex flex-wrap gap-5 overflow-y-auto overflow-x-hidden">
        {popularMovies?.map((movie) => (
          <MovieCard key={movie.id} data={movie} />
        ))}
      </div>
    </>
  );
};

export default Home;
