import React from "react";
import SubHolder from "./SubHolder";
import { projects, accolades, experience } from "../Constants/dummyInfo";

const CardContainer = () => {
  return (
    <div className="p-4 flex flex-col space-y-3 flex-1">
      <SubHolder dataType={"Experiences"} data={experience} />
      <SubHolder dataType={"Projects"} data={projects} />
      <SubHolder dataType={"Accolades"} data={accolades} />
    </div>
  );
};

export default CardContainer;
