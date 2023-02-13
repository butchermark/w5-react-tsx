import React, { useState } from "react";
import { IMonsterData } from "../utils/ImonsterData.interface";

interface Props {
  monstersArray: IMonsterData[];
}

const SearchPanel: React.FC<Props> = ({ monstersArray }) => {
  const [input, setInput] = useState("");

  const handleChange = (e: any) => {
    setInput(e.target.value);
    monstersArray.filter((monster) => {
      return monster.name.toLowerCase().includes(input.toLowerCase());
    });
  };

  return (
    <div className="search-panel">
      <input type="text" placeholder="Search monster" onChange={handleChange} />
    </div>
  );
};

export default SearchPanel;
