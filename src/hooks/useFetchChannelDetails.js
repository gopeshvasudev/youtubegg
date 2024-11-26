import { useEffect } from "react";
import { googleApiKey } from "../utils/constants";

const useFetchChannelDetails = (channelId) => {
  const fetchChannelDetails = async () => {
    try {
      const res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${googleApiKey}`
      );

      const data = await res.json();
      console.log(data.items[0].snippet.thumbnails.medium.url);
    } catch (error) {
      console.log("Fetch channel details error", error.message);
    }
  };

  useEffect(() => {
    fetchChannelDetails();
  }, []);
};

export default useFetchChannelDetails;
