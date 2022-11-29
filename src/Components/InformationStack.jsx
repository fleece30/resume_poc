import React from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { addGroup, addItemToGroup } from "../Redux/groups";

const InformationStack = () => {
  // const [groups, setGroups] = useState([]);
  const { groups } = useSelector((state) => state.groups);
  const dispatch = useDispatch();

  const addNewGroup = () => {
    let groupTitle = window.prompt("Enter group title");
    // setGroups([...groups, { title: groupTitle, cards: [] }]);
    dispatch(addGroup({ title: groupTitle, cards: [] }));
  };

  return (
    <div className="flex-1 flex flex-col items-center">
      <button
        onClick={() => addNewGroup()}
        className="bg-button px-4 py-3 rounded mb-5 font-bold"
      >
        Add group
      </button>
      {groups.map((group, index) => {
        return (
          <div
            key={index}
            className="bg-black max-w-sm p-4 mb-5 flex flex-col space-y-2 text-slate-300 w-full"
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => dispatch(addItemToGroup(group))}
          >
            <span className="mb-2">{group.title}</span>
            {group.cards.map((card, index) => (
              <Card
                key={index}
                data={card}
                styles="max-w-sm rounded overflow-hidden shadow-lg p-3 bg-slate-100 text-black"
                draggable={false}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default InformationStack;
