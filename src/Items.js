import React from "react";

const Items = ({ Item, index, onSelect, id, onEdit }) => {
  return (
    <div>
      <div className="flex mt-5">
        <li>
          {index + 1}
          {" ) "} {Item}
        </li>
        <button
          onClick={() => onSelect(id)}
          className="bg-purple-500 mx-5 hover:bg-red-600 rounded-full px-2"
        >
          {" "}
          X{" "}
        </button>
        <button
          onClick={() => onEdit(index)}
          className="bg-white mx-5 hover:bg-yellow-600 rounded-full px-2"
        >
          {" "}
          🖋{" "}
        </button>
      </div>
    </div>
  );
};

export default Items;
