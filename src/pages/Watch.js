import { useParams } from "react-router-dom";

const Watch = () => {
  const { videoId } = useParams();

  return (
    <>
      <div className="w-full flex">
        <section className="watch-video-container w-[75%]">
          <div className="w-full"></div>
        </section>
      </div>
    </>
  );
};

export default Watch;
