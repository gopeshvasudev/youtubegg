import React from "react";

const WatchVideoContainer = ({videoId}) => {
  return (
    <section className="watch-video-container w-[65%]">
      <div className="w-full h-[80vh] bg-zinc-700 rounded-lg overflow-hidden">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}?si=pe0LKRZUH-5wHXQH`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="w-full h-full object-cover"
        ></iframe>
      </div>
    </section>
  );
};

export default WatchVideoContainer;
