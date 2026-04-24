import React, { useState, useEffect } from "react";

const DateTime = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };
  const formattedDate = now
    .toLocaleString("en-US", options)
    .toLowerCase()
    .replace(",", "");
  return <div>{formattedDate}</div>;
};

export default DateTime;
