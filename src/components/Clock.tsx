import React, { useEffect, useState } from "react";
import moment from "moment-timezone";

interface ClockProps {
  name: string;
  timezone: string;
  onRemove: () => void;
}

const Clock: React.FC<ClockProps> = ({ name, timezone, onRemove }) => {
  const [time, setTime] = useState<string>(
    moment.tz(timezone).format("HH:mm:ss")
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment.tz(timezone).format("HH:mm:ss"));
    }, 1000);

    return () => clearInterval(interval); 
  }, [timezone]);

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
