const SvgSelector = ({ svg }) => {
  switch (svg) {
    case "search":
      return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path
            d="M15.7233 13.8365H14.7296L14.3774 13.4969C15.6101 12.0629 16.3522 10.2013 16.3522 8.1761C16.3522 3.66038 12.6918 0 8.1761 0C3.66038 0 0 3.66038 0 8.1761C0 12.6918 3.66038 16.3522 8.1761 16.3522C10.2013 16.3522 12.0629 15.6101 13.4969 14.3774L13.8365 14.7296V15.7233L20.1258 22L22 20.1258L15.7233 13.8365ZM8.1761 13.8365C5.04402 13.8365 2.51572 11.3082 2.51572 8.1761C2.51572 5.04402 5.04402 2.51572 8.1761 2.51572C11.3082 2.51572 13.8365 5.04402 13.8365 8.1761C13.8365 11.3082 11.3082 13.8365 8.1761 13.8365Z"
            fill="white"
          />
        </svg>
      );
    case "ellipse":
      return (
        <svg width="2074" height="406" viewBox="0 0 2074 406" fill="none">
          <ellipse cx="1037" cy="203" rx="1037" ry="203" fill="black" />
        </svg>
      );
    case "slider-arrow":
      return (
        <svg width="12" height="18" viewBox="0 0 12 18" fill="none">
          <path
            d="M10.9374 1.125L3.0625 8.99993L10.9374 16.8749"
            stroke="white"
            strokeOpacity="0.8"
            strokeWidth="3"
          />
        </svg>
      );
    case "mailing":
      return (
        <svg width="21" height="18" viewBox="0 0 21 18" fill="none">
          <path
            d="M0.00999999 18L21 9L0.00999999 0L0 7L15 9L0 11L0.00999999 18Z"
            fill="white"
          />
        </svg>
      );

    default:
      return <></>;
  }
};

export default SvgSelector;
