import React from "react";
import MonsterPanel from "./MonsterPanel";
interface INewMonster {
  id: string;
  enteredMonsterData: string;
  monsterData: string;
}
interface INewMonsterProps {
  onAddMonster: any;
}

const NewMonster = (props: INewMonsterProps) => {
  const saveMonsterDataHandler = (enteredMonsterData: INewMonster) => {
    const monsterData: INewMonster = {
      ...enteredMonsterData,
      id: Math.random().toString(),
    };

    props.onAddMonster(monsterData);
  };
  return (
    <div className="new-monster">
      <MonsterPanel onSaveMonsterData={saveMonsterDataHandler} />
    </div>
  );
};
export default NewMonster;
