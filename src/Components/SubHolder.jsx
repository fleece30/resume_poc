import React, { useRef, useState } from "react";
import Card from "./Card";

const SubHolder = ({ dataType, data }) => {
  const draggedItem = useRef();
  const dragNode = useRef();
  const [dragging, setDragging] = useState(false);

  const dragStart = (e, position, info) => {
    draggedItem.current = position;
    dragNode.current = e.target;
    dragNode.current.addEventListener("dragend", handleDragEnd);
    localStorage.setItem("draggedItem", JSON.stringify(info));
    // e.dataTransfer.setData("text/html", e.target);
    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const handleDragEnd = () => {
    setDragging(false);
    localStorage.removeItem("draggedItem");
    dragNode.current.removeEventListener("dragend", handleDragEnd);
    dragNode.current = null;
    draggedItem.current = null;
  };

  const getStyles = (index) => {
    return dragging && index === draggedItem.current
      ? "max-w-sm rounded overflow-hidden p-3 bg-black opacity-100"
      : "max-w-sm rounded overflow-hidden shadow-lg p-3 bg-slate-100";
  };

  return (
    <div>
      <div className="text-2xl font-bold mb-2">{dataType}</div>
      <div className="flex flex-col space-y-2">
        {data.map((info, index) => (
          <Card
            key={index}
            data={info}
            onDragStart={(e) => dragStart(e, index, info)}
            styles={getStyles(index)}
            draggable={true}
          />
        ))}
      </div>
    </div>
  );
};

export default SubHolder;
