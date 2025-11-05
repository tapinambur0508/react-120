/**
 * - Запустити інтервал при монтуванні
 * - Розібрати чому запускається два інтервала (Strict Mode)
 * - Очистити інтервал при розмонтуванні компонента
 */

import { useState, useEffect } from "react";

// mount  setInterval > unmount clearInterval > mount setInterval

export default function Timer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("useEffect");

    const intervalId = setInterval(() => {
      console.log({ intervalId });
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <p>{time.toLocaleTimeString()}</p>;
}
