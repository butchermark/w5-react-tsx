import React, {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { IMonsterData } from "../utils/ImonsterData.interface";
import "./SearchPanel.css";

interface SearchPanelProps {
  monstersArray: IMonsterData[];
  setFilteredMonsters: Dispatch<SetStateAction<IMonsterData[]>>;
}

const SearchPanel: FunctionComponent<SearchPanelProps> = ({
  monstersArray,
  setFilteredMonsters,
}) => {
  const [input, setInput] = useState("");

  const handleChange = (e: any) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    if (input !== "") {
      let filteredMonsters: IMonsterData[] = monstersArray.filter((monster) => {
        return monster.name.toLowerCase().includes(input.toLowerCase());
      });

      setFilteredMonsters(filteredMonsters);
    } else {
      setFilteredMonsters([]);
    }
  }, [input]);

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
