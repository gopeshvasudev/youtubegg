import useFormatViews from "../hooks/useFormatViews";
import useFormatVideoDuration from "../hooks/useFormatVideoDuration";
import { useSelector } from "react-redux";

const MovieCard = ({ data }) => {
  const { channelTitle, thumbnails, title, publishedAt } = data?.snippet;

  const formatedViews = useFormatViews(data?.statistics.viewCount);
  const formatedVideoDuration = useFormatVideoDuration(publishedAt);

  const isSidebarVisible = useSelector((store) => store.app.isSidebarVisible);

  return (
    <div
      className={`movie-card flex flex-col gap-3 p-2 w-[365px] ${
        !isSidebarVisible && "w-[410px]"
      } duration-300`}
    >
      <figure
        className={`thumbnail w-full h-52 rounded-xl overflow-hidden bg-red-200 ${
          !isSidebarVisible && "h-56"
        }`}
      >
        <img
          src={thumbnails.medium.url}
          alt="video name"
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="video-info flex gap-3">
        <div className="pl-1">
          <h2 className="text-lg font-semibold leading-[1.2] mb-2">{title}</h2>

          <div>
            <h3 className="text-base font-medium text-zinc-300">
              {channelTitle}
            </h3>
            <h6 className="text-sm text-zinc-300">
              {formatedViews} . {formatedVideoDuration}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
