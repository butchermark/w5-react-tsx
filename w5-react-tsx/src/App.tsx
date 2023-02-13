import { useState } from "react";
import Header from "./components/Header";
import MonsterList from "./components/list/MonsterList";
import NewMonster from "./components/NewMonster";
import { IMonsterData } from "./utils/ImonsterData.interface";
import SearchPanel from "./components/SearchPanel";

function App() {
  const [monsters, setMonsters] = useState<IMonsterData[]>([]);

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
      <SearchPanel monstersArray={monsters} />
      <MonsterList monsters={monsters} deleteMonster={removeMonsterHandler} />
    </div>
  );
}

export default App;
