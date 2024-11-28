import React from "react";
import SuggestionVideoCard from "./SuggestionVideoCard";

const WatchVideoSuggestionsContainer = () => {
  return (
    <section className="video-suggestion-container w-[35%] flex flex-col gap-3">
      <SuggestionVideoCard />
    </section>
  );
};

export default WatchVideoSuggestionsContainer;
