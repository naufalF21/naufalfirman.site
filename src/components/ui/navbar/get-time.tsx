"use client";

import { format } from "date-fns";
import { useEffect, useState } from "react";

const GetTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return format(time, "HH:mm");
};

export { GetTime };
