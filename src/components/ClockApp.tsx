import React, { useState } from "react";
import Clock from "./Clock";

interface ClockData {
  name: string;
  offset: string; 
}

const ClockApp: React.FC = () => {
  const [clocks, setClocks] = useState<ClockData[]>([]);
  const [name, setName] = useState<string>("");
  const [offset, setOffset] = useState<string>(""); 

  const addClock = () => {
    if (name && offset) {
      setClocks([...clocks, { name, offset }]);
      setName("");
      setOffset("");
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
        style={{ width: "350px", marginLeft: "10px" }}
        type="text"
        placeholder="Разница во времени (например, '-5' или '+3')"
        value={offset}
        onChange={(e) => setOffset(e.target.value)}
      />
      <button onClick={addClock} style={{ marginLeft: "10px" }}>
        Добавить
      </button>

      <div style={{ marginTop: "20px" }}>
        {clocks.map((clock, index) => (
          <Clock
            key={index}
            name={clock.name}
            offset={clock.offset} 
            onRemove={() => removeClock(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ClockApp;
