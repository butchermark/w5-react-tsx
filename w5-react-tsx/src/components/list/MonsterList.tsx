import { IMonsterData } from "../../utils/ImonsterData.interface";
import Monster from "./Monster";
import "./MonsterList.css";

interface IMonsterListProps {
  monsters: IMonsterData[];
  deleteMonster: (monster: IMonsterData) => void;
}

const MonsterList = (props: IMonsterListProps) => {
  if (props.monsters.length === 0) {
    return (
      <div className="monster-list-outer-h2-nodata">
        <h2>No monsters</h2>
      </div>
    );
  }

  const deleteMonster = (name: string) => {
    const foundToDelete = props.monsters.find((e) => e.name === name);

    if (foundToDelete) {
      props.deleteMonster(foundToDelete);
    }
  };

  return (
    <div className="monster-list-outer">
      <h2 className="monster-list-outer-h2">Monsters:</h2>
      <ul>
        {props.monsters.map((monster: IMonsterData) => (
          <Monster
            monster={monster}
            deleteHandler={deleteMonster}
            key={monster.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default MonsterList;
