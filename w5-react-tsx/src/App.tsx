import { useEffect, useState } from "react";
import Header from "./components/Header";
import MonsterList from "./components/list/MonsterList";
import NewMonster from "./components/NewMonster";
import { IMonsterData } from "./utils/ImonsterData.interface";
import SearchPanel from "./components/SearchPanel";

function App() {
  const [monsters, setMonsters] = useState<IMonsterData[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState<IMonsterData[]>([]);
  const [isSearch, setIsSearch] = useState(false);
  const [currentInputValue, setCurrentInputValue] = useState("");

  const addMonsterHandler = (monster: IMonsterData) => {
    setMonsters((prevMonsters) => {
      return [monster, ...prevMonsters];
    });
  };

  const removeMonsterHandler = (monster: IMonsterData) => {
    setMonsters((prevMonsters) =>
      prevMonsters.filter((e) => e.name !== monster.name)
    );
  };

  const filterMonsters = (monsters: IMonsterData[]) => {
    let x: IMonsterData[] = monsters.filter((monster) => {
      monster.name.toLowerCase().includes(currentInputValue.toLowerCase());
    });
    setFilteredMonsters(x);
    setMonsters(filteredMonsters);
  };

  return (
    <div className="app">
      <Header />
      <NewMonster onAddMonster={addMonsterHandler} />
      <SearchPanel
        monstersArray={monsters}
        filterMonsters={filterMonsters}
        currentInputSetter={setCurrentInputValue}
      />
      <MonsterList monsters={monsters} deleteMonster={removeMonsterHandler} />
    </div>
  );
}

export default App;
