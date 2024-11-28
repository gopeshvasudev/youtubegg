import { useParams } from "react-router-dom";
import WatchVideoContainer from "../components/WatchVideoContainer";
import WatchVideoSuggestionsContainer from "../components/WatchVideoSuggestionsContainer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { collapseSidebar } from "../store/reducers/appSlice";

const Watch = () => {
  const { videoId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(collapseSidebar());
  }, []);

  return (
    <>
      <div className="w-full flex gap-10 p-2 pr-16">
        <WatchVideoContainer videoId={videoId} />

        <WatchVideoSuggestionsContainer />
      </div>
    </>
  );
};

export default Watch;
