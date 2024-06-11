const TodayMessage = () => {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <>
      Hope you are enjoying <i>{days[new Date().getDay()]} !</i>
    </>
  );
};

export { TodayMessage };
