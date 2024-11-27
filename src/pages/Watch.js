import { useParams } from "react-router-dom";

const Watch = () => {
  const { videoId } = useParams();

  return (
    <>
      <h1>{videoId}</h1>
    </>
  );
};

export default Watch;
