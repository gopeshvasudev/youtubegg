import { useEffect } from "react";
import { YOUTUBE_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import {}

const Home = () => {
  const dispatch = useDispatch();

  const fetchPopularVideos = async () => {
    try {
      const res = await fetch(YOUTUBE_API);
      const data = await res.json();

      // dispatch(addPopularMovies());
    } catch (error) {
      console.log("Popular movies fetch error: ", error.message);
    }
  };

  useEffect(() => {
    fetchPopularVideos();
  }, []);

  return (
    <>
      <h1>this is Homepage</h1>
    </>
  );
};

export default Home;
