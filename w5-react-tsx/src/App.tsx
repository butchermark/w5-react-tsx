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

  useEffect(() => {
    if (filteredMonsters.length > 0) {
      setIsSearch(true);
    } else {
      setIsSearch(false);
    }
  }, [filteredMonsters]);

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

  return (
    <div className="app">
      <Header />
      <NewMonster onAddMonster={addMonsterHandler} />
      <SearchPanel
        monstersArray={monsters}
        setFilteredMonsters={setFilteredMonsters}
      />
      <MonsterList
        monsters={isSearch ? filteredMonsters : monsters}
        deleteMonster={removeMonsterHandler}
      />
    </div>
  );
}

export default App;
