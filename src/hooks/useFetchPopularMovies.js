import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_API } from "../utils/constants";
import { addPopularMovies } from "../store/reducers/moviesSlice";
import { useEffect } from "react";

const useFetchPopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const fetchPopularVideos = async () => {
    try {
      const res = await fetch(YOUTUBE_API);
      const data = await res.json();

      dispatch(addPopularMovies(data.items));
    } catch (error) {
      console.log("Popular movies fetch error: ", error.message);
    }
  };

  useEffect(() => {
    !popularMovies && fetchPopularVideos();
  }, []);
};

export default useFetchPopularMovies;
