const useFormatVideoDuration = (publishedAt) => {
  function timeAgo(timestamp) {
    const now = new Date();
    const time = new Date(timestamp);
    const difference = now - time; // Difference in milliseconds

    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30); // Approximation
    const years = Math.floor(days / 365); // Approximation

    if (seconds < 60) return `${seconds} seconds ago`;
    if (minutes < 60) return `${minutes} minutes ago`;
    if (hours < 24) return `${hours} hours ago`;
    if (days < 7) return `${days} days ago`;
    if (weeks < 4) return `${weeks} weeks ago`;
    if (months < 12) return `${months} months ago`;
    return `${years} years ago`;
  }

  // Example usage
  const videoUploadedTime = timeAgo(publishedAt);
  return videoUploadedTime;
};

export default useFormatVideoDuration;
