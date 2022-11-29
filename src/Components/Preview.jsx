import React from "react";
import { useSelector } from "react-redux";

const Preview = () => {
  const { groups } = useSelector((state) => state.groups);
  return (
    <div className="flex-1 bg-white sticky h-2 h-52 top-10">
      {JSON.stringify(groups)}
    </div>
  );
};

export default Preview;
