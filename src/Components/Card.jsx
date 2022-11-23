import React from "react";

const Card = ({ data, onDragStart, styles, draggable }) => {
  return (
    <div
      className={styles}
      onDragStart={onDragStart}
      onDragOver={(e) => {
        e.preventDefault();
      }}
      // onDragEnd={}
      draggable={draggable}
    >
      <div className="font-bold">{data.title}</div>
      <div>{data.desc}</div>
    </div>
  );
};

export default Card;
