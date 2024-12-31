import React, { useState } from "react";
import Clock from "./Clock";

interface ClockData {
  name: string;
  timezone: string;
}

const ClockApp: React.FC = () => {
  const [clocks, setClocks] = useState<ClockData[]>([]);
  const [name, setName] = useState<string>("");
  const [timezone, setTimezone] = useState<string>("");

  const addClock = () => {
    if (name && timezone) {
      setClocks([...clocks, { name, timezone }]);
      setName("");
      setTimezone("");
    }
  };

  const removeClock = (index: number) => {
    setClocks(clocks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Мировые часы</h1>
      <input
        type="text"
        placeholder="Название"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        style={{ width: "350px" }}
        type="text"
        placeholder="Временная зона (например, 'America/New_York')"
        value={timezone}
        onChange={(e) => setTimezone(e.target.value)}
      />
      <button onClick={addClock} style={{ marginLeft: "10px" }}>
        Добавить
      </button>

      <div style={{ marginTop: "20px" }}>
        {clocks.map((clock, index) => (
          <Clock
            key={index}
            name={clock.name}
            timezone={clock.timezone}
            onRemove={() => removeClock(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ClockApp;
