import React, { useEffect, useState } from "react";
import moment from "moment-timezone";

interface ClockProps {
  name: string;
  offset: string;
  onRemove: () => void;
}

const Clock: React.FC<ClockProps> = ({ name, offset, onRemove }) => {
  const [time, setTime] = useState<string>(getCurrentTime(offset));

  function getCurrentTime(offset: string): string {
    const hoursOffset = parseInt(offset, 10);
    return moment
      .tz("Europe/Moscow")
      .add(hoursOffset, "hours")
      .format("HH:mm:ss");
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime(offset));
    }, 1000);

    return () => clearInterval(interval);
  }, [offset]);

  return (
    <div style={{ display: "flex", alignItems: "center", margin: "10px 0" }}>
      <div style={{ marginRight: "10px" }}>
        {name}: {time}
      </div>
      <button onClick={onRemove} style={{ cursor: "pointer" }}>
        ✖
      </button>
    </div>
  );
};

export default Clock;
