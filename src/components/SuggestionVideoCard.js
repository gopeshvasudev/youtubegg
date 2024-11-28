import React from "react";

const SuggestionVideoCard = () => {
  const channelTitle = "Sheryians coding school";
  const formatedViews = "10M";
  const formatedVideoDuration = "7 days ego";

  return (
    <div className="w-full rounded-lg flex gap-5">
      <div className="thumbnail w-[40%] h-24 rounded-lg bg-zinc-700">
        <img src="" alt="" />
      </div>

      <div className="w-[60%]">
        <h2 className="text-lg font-semibold">Some title of good boy</h2>

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
