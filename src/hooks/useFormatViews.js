const useFormatViews = (viewCount) => {
  function formatNumberToShort(value) {
    if (value >= 1_000_000_000) {
      return (value / 1_000_000_000).toFixed(1) + "B"; // Billion
    } else if (value >= 1_000_000) {
      return (value / 1_000_000).toFixed(1) + "M"; // Million
    } else if (value >= 1_000) {
      return (value / 1_000).toFixed(1) + "K"; // Thousand
    } else {
      return value.toString(); // Less than thousand
    }
  }

  const formattedViewCount = formatNumberToShort(viewCount);
  return formattedViewCount;
};

export default useFormatViews;
