import React from "react";
const DataCard = (props: any) => {
  const classes = "card " + props.className;
  console.log(classes);
  return <div className={classes}>{props.children}</div>;
};
export default DataCard;
