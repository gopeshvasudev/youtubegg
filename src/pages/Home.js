import useFetchPopularMovies from "../hooks/useFetchPopularMovies";

const Home = () => {
  useFetchPopularMovies();

  return (
    <>
      <div className="videos-container w-full flex flex-wrap overflow-y-auto overflow-x-hidden"></div>
    </>
  );
};

export default Home;
