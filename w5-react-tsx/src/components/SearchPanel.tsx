import React, { useState } from "react";
import { IMonsterData } from "../utils/ImonsterData.interface";
import "./SearchPanel.css";

interface Props {
  monstersArray: IMonsterData[];
  filterMonsters: (monsters: IMonsterData[]) => void;
  currentInputSetter: React.Dispatch<React.SetStateAction<string>>;
}

const SearchPanel: React.FC<Props> = ({
  monstersArray,
  filterMonsters,
  currentInputSetter,
}) => {
  const [input, setInput] = useState("");

  const handleChange = (e: any) => {
    setInput(e.target.value);
    filterMonsters(monstersArray);
    currentInputSetter(input);
  };

  return (
    <div className="search-panel">
      <input
        type="text"
        placeholder="Search monster by name"
        onChange={handleChange}
        value={input}
      />
    </div>
  );
};

export default SearchPanel;
