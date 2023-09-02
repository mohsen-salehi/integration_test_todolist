import React, { useContext, useState } from "react";
import { StoreContext } from "./../context/store";
import { todoAction } from "../context/actions/todoAction";
import { updateAction } from "../context/actions/updateAction";
import { removeAction } from "../context/actions/removeAction";
function Todo() {

  
  const { state, dispatch } = useContext(StoreContext);
  const [inputVal, setInputVal] = useState("");



  const addTask = () => {
    if (inputVal?.length) {
      todoAction(
        {
          id: new Date().getMilliseconds(),
          status: "active",
          title: inputVal,
        },
        dispatch
      );
    }
  };


  const statusHandler = (id) => {
    updateAction(id, dispatch);
  };


  const removeHandler = (id) => {
    removeAction(id, dispatch);
  };



  return (
    <section className="flex w-full flex-wrap">
      <div className="w-full flex justify-center bg-amber-200 p-10 rounded-b-xl">
        <h3 className="text-3xl">Todo List </h3>
      </div>
      <div className="w-full rounded-xl flex justify-between shadow-sm my-2">
        <label className="w-10/12 flex flex-wrap">
          <input
            type="text"
            defaultValue={inputVal}
            onInput={(e) => setInputVal(e?.target?.value)}
            className="p-2 rounded-xl bg-slate-100 w-full outline-none"
            placeholder="write tasks..."
          />
        </label>
        <button
          onClick={addTask}
          className="bg-green-400 rounded-xl w-2/12 shadow p-3 active:scale-95 duration-200"
        >
          Add
        </button>
      </div>
      <div className="border rounded-lg bg-stone-100 p-2 w-full overflow-y-auto">
        {state.todo.length ? (
          state.todo?.map((item, index) => (
            <div key={index} className="p-5 bg-white flex flex-wrap">
              <label className="w-1/12 flex justify-start items-center cursor-pointer">
                <input
                  onChange={() => statusHandler(item?.id)}
                  type="checkbox"
                />
              </label>
              <strong
                className={`${
                  item?.status === "done" && "line-through text-slate-400"
                } w-10/12 flex items-center text-ellipsis`}
              >
                {item?.title}
              </strong>
              <div className="w-1/12 flex justify-center">
                <button
                  onClick={() => removeHandler(item?.id)}
                  className="bg-red-400 rounded-xl w-8 h-8 flex justify-center items-center font-bold"
                >
                  X
                </button>
              </div>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </section>
  );
}

export default Todo;
