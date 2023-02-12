import DataCard from "../shared/DataCard";
import Icon from "../shared/Icons";
import { IMonsterData } from "../../utils/ImonsterData.interface";
import { IconType } from "../shared/Icons";
import "./Monster.css";

interface MonsterProps {
  monster: IMonsterData;
  deleteHandler: (name: string) => void;
}

const Monster = (props: MonsterProps) => {
  const elementIconStyle = { height: "50px", width: "50px" };
  const trashIconStyle = { height: "30px", width: "30px" };
  const statIconStyle = { height: "15px", width: "15px" };

  return (
    <DataCard className="list-item-wrapper">
      <li className="list-item">
        <Icon iconName={props.monster.elemental} setStyle={elementIconStyle} />
        <div className="list-item__name-stats">
          <p>{props.monster.name}</p>
          <div className="list-item-name-stats__stats">
            <Icon iconName={IconType.attack} setStyle={statIconStyle} />
            <p>{props.monster.attack}</p>
            <Icon iconName={IconType.defense} setStyle={statIconStyle} />
            <p>{props.monster.defense}</p>
          </div>
        </div>
        <div className="list-item-name-trash">
          <Icon
            iconName={IconType.trash}
            setStyle={trashIconStyle}
            onClick={() => props.deleteHandler(props.monster.name)}
          />
        </div>
      </li>
    </DataCard>
  );
};

export default Monster;
