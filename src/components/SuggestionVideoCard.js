import React from "react";
import useFormatViews from "../hooks/useFormatViews";
import useFormatVideoDuration from "../hooks/useFormatVideoDuration";

const SuggestionVideoCard = ({ data }) => {
  const { channelTitle, thumbnails, title, publishedAt } = data?.snippet;

  const formatedViews = useFormatViews(data?.statistics.viewCount);
  const formatedVideoDuration = useFormatVideoDuration(publishedAt);

  return (
    <div className="w-full rounded-lg flex flex-col sm:flex-row gap-5">
      <div className="thumbnail w-full sm:w-[40%] lg:w-[50%] h-56 sm:h-28 md:h-36 lg:h-24 rounded-lg overflow-hidden bg-zinc-700">
        <img
          src={thumbnails.medium.url}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full md:w-[60%]">
        <h2 className="text-base font-semibold line-clamp-2 leading-[1.2] mb-2">
          {title}
        </h2>

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
  );
};

export default SuggestionVideoCard;
