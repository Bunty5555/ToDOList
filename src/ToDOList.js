import React, { useState } from "react";
import Items from "./Items";

const ToDOList = () => {
  const [addItemTOList, setAddItemTOList] = useState("");
  const [storeItem, setStoreItem] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addItem = (event) => {
    setAddItemTOList(event.target.value);
  };

  const handleAdd = () => {
    setStoreItem((oldItem) => {
      return [...oldItem, addItemTOList];
    });
    setAddItemTOList("");
  };

  const handleDelete = (id) => {
    // storeItem.splice(index, 1);

    setStoreItem((oldItem) => {
      return oldItem.filter((Element, index) => {
        return index !== id;
      });
    });
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setAddItemTOList(storeItem[index]);
  };

  const handleSaveEdit = () => {
    const updatedItems = [...storeItem];
    updatedItems[editIndex] = addItemTOList; // Update the item at the specified index
    setStoreItem(updatedItems);
    setAddItemTOList(""); // Clear the input field
    setEditIndex(null); // Reset the editIndex
  };

  return (
    <div className="flex justify-center p-10">
      <div className="bg-[#282c34] p-20">
        <h1 className="font-bold text-orange-600 justify-center flex text-4xl">
          To Do List
        </h1>
        <br />
        <div>
          <form className="flex " onSubmit={(event) => event.preventDefault()}>
            {" "}
            <input
              className="border block"
              type="text"
              placeholder="        Add Items"
              onChange={addItem}
              value={addItemTOList}
            />
            {editIndex === null ? (
              <button
                className="text-white bg-green-500 mx-2 px-2 rounded-full hover:bg-green-700"
                onClick={handleAdd}
              >
                +
              </button>
            ) : (
              <button
                className="text-white bg-yellow-500 mx-2 px-2 rounded-full hover:bg-green-700"
                onClick={handleSaveEdit}
              >
                Save
              </button>
            )}
          </form>
        </div>
        <div className="bg-[#282c34] text-white">
          <ol>
            {/* <li>{addItemTOList}</li> */}
            {storeItem.map((Item, index) => {
              return (
                <Items
                  key={index}
                  id={index}
                  index={index}
                  Item={Item}
                  storeItem={storeItem}
                  onSelect={handleDelete}
                  onEdit={handleEdit}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ToDOList;
