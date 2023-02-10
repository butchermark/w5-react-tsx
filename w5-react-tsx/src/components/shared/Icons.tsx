import React, { useEffect, useState } from "react";
//@ts-ignore
import Air from "../../res/air.svg";
//@ts-ignore
import Earth from "../../res/earth.svg";
//@ts-ignore
import Fire from "../../res/fire.svg";
//@ts-ignore
import Water from "../../res/water.svg";
//@ts-ignore
import Attack from "../../res/attack.svg";
//@ts-ignore
import Defense from "../../res/defense.svg";
//@ts-ignore
import ArrowLeft from "../../res/arrow-left.svg";
//@ts-ignore
import ArrowRight from "../../res/arrow-right.svg";
//@ts-ignore
import TrashCan from "../../res/trash-can.svg";

export enum IconType {
  air = "air",
  earth = "earth",
  fire = "fire",
  water = "water",
  left = "left",
  right = "right",
  attack = "attack",
  defense = "defense",
  trash = "trash",
}

export const icons = {
  air: Air,
  earth: Earth,
  fire: Fire,
  water: Water,
  left: ArrowLeft,
  right: ArrowRight,
  attack: Attack,
  defense: Defense,
  trash: TrashCan,
};

const Icon = (props: {
  iconName: IconType;
  setStyle?: object;
  onClick?: any;
}) => {
  const [iconValue, setIconValue] = useState(icons[props.iconName]);

  useEffect(() => {
    setIconValue(icons[props.iconName]);
  }, [props]);

  return (
    <div className="icon">
      <img
        src={iconValue}
        style={props.setStyle}
        onClick={props.onClick}
        alt={props.iconName}
      />
    </div>
  );
};
export default Icon;
