import React from "react";
import useFormatViews from "../hooks/useFormatViews";
import useFormatVideoDuration from "../hooks/useFormatVideoDuration";

const MovieCard = ({ data }) => {
  const { channelTitle, thumbnails, title, publishedAt } = data?.snippet;

  const formatedViews = useFormatViews(data?.statistics.viewCount);
  const formatedVideoDuration = useFormatVideoDuration(publishedAt);

  return (
    <div className="movie-card flex flex-col gap-3 p-2 w-[365px]">
      <figure className="thumbnail w-full h-52 rounded-xl overflow-hidden bg-red-200">
        <img
          src={thumbnails.medium.url}
          alt="video name"
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="video-info flex gap-3">
        <div>
          <div className="avatar w-[35px] h-[35px] rounded-full overflow-hidden bg-zinc-700">
            <img src={""} alt="avatar" className="w-full h-full object-cover" />
          </div>
        </div>

        <div>
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
