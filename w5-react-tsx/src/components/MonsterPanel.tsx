import React, { useEffect } from "react";
import { useState } from "react";
import DataCard from "./shared/DataCard";
import Icon from "./shared/Icons";
import { IconType } from "./shared/Icons";

const MonsterPanel = (props: any) => {
  const iconValueArray = Object.values(IconType);
  const [elemental, setElemental] = useState<IconType>(iconValueArray[0]);
  const [monsterName, setMonsterName] = useState("");
  const [monsterAttack, setMonsterAttack] = useState("");
  const [monsterDefense, setMonsterDefense] = useState("");
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
  const MAX_MONSTER_ICON_INDEX = 4;

  useEffect(() => {
    setElemental(iconValueArray[currentIconIndex]);
  }, [currentIconIndex]);

  const elementalChangeBackward = (event: {
    target: { iconName: React.SetStateAction<string> };
  }) => {
    // @ts-ignore
    setElemental(changeElementalIndexHandler(false));
  };

  const elementalChangeForward = (event: {
    target: { iconName: React.SetStateAction<string> };
  }) => {
    // @ts-ignore
    setElemental(changeElementalIndexHandler(true));
  };

  const changeElementalIndexHandler = (isForwardStep: boolean) => {
    if (isForwardStep) {
      currentIconIndex + 1 === MAX_MONSTER_ICON_INDEX
        ? setCurrentIconIndex(0)
        : setCurrentIconIndex(currentIconIndex + 1);
    }
    if (!isForwardStep) {
      currentIconIndex === 0
        ? setCurrentIconIndex(MAX_MONSTER_ICON_INDEX - 1)
        : setCurrentIconIndex(currentIconIndex - 1);
    }
  };

  const nameChangeHandler = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    console.log(event.target.value);
    setMonsterName(event.target.value);
  };
  const attackChangeHandler = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setMonsterAttack(event.target.value);
  };
  const defenseChangeHandler = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setMonsterDefense(event.target.value);
  };

  const submitHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (monsterName === "") {
      alert("You've given an undefined name. ");
    }
    const monsterData = {
      elemental: elemental,
      name: monsterName,
      attack: monsterAttack,
      defense: monsterDefense,
    };
    props.onSaveMonsterData(monsterData);
    setElemental(IconType.air);
    setMonsterName("");
    setMonsterAttack("");
    setMonsterDefense("");
  };

  return (
    <div className="create-monster">
      <h2>Create a Monster:</h2>
      <DataCard className="create-monster__card">
        <form onSubmit={submitHandler}>
          <div className="create-monster-form__element-chooser">
            <Icon iconName={IconType.left} onClick={elementalChangeBackward} />
            <Icon iconName={elemental} />
            <Icon iconName={IconType.right} onClick={elementalChangeForward} />
          </div>
          <input
            type="text"
            placeholder="Name"
            value={monsterName}
            onChange={nameChangeHandler}
          />
          <div className="create-monster-form__stat-chooser">
            <Icon iconName={IconType.attack} />
            <input
              type="number"
              min="1"
              max="99"
              step="1"
              value={monsterAttack}
              onChange={attackChangeHandler}
            ></input>
            <Icon iconName={IconType.defense} />
            <input
              type="number"
              min="1"
              max="99"
              step="1"
              value={monsterDefense}
              onChange={defenseChangeHandler}
            ></input>
          </div>
          <button type="submit">Add</button>
        </form>
      </DataCard>
    </div>
  );
};
export default MonsterPanel;
