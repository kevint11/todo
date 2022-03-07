import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { addTodo, editTodo, delTodo } from "../store/action/todoAction";
import React, { useState } from "react";

export default function Home() {
  
  // const [vals, setVals] = useState([]);
  const [done, setDone] = useState(0);
  const [datas, setDatas] = useState([]);
  
  const todos = useSelector((state) => state.todoReducer.todos);
  const dispatch = useDispatch();
  
  const {
    register,
    handleSubmit,
    reset,
  } = useForm({ defaultValues: { listTodo: "" } });

  const onSubmit = (data) => {
    let updatedValue = {};
    updatedValue = { title: data["listTodo"], status: 0 };
    dispatch(addTodo(updatedValue));
    reset({listTodo: ""});
    // setVals((vals) => [...vals, updatedValue]);
    // localStorage.setItem("valss", JSON.stringify(vals));
  };

  const toggleSS = (index) => {
    console.log("index: " + index);
    let newArr = [...todos];

    if(newArr[index].status === 0){
      newArr[index].status = 1
      setDone(done+1)
    } else {
      newArr[index].status = 0
      setDone(done-1)
    }
    dispatch(editTodo(newArr));
    // setVals(newArr);
  };

  const handleRemoveItem = (e) => {
    const name = e.target.getAttribute("name");
    dispatch(delTodo(name));
    // setVals(vals.filter((val) => val.title !== name));
  };

  const handleShow =  index => e => {
    const name = e.target.getAttribute("name");
    setDatas({title : name, index : index});
  }

  const handleOnChange = index => e => {
    setDatas({title : e.target.value, index : index});
  }

  const handleEdit = ()  => {
    let newArr = [...todos];
    newArr[datas.index].title = datas.title;
    dispatch(editTodo(newArr));
    setDatas([])
    // setVals(newArr);
  }
  
  // const valus = useContext(OurVals);
  // const OurVals = createContext(vals);
  // const Our = useContext(createContext(vals));
  // const rata =  JSON.parse(localStorage.getItem("valss"));
  
  console.log('REDUX :',todos);
  // console.log('VALS :',vals);
  // console.log('LOCAL :',OurVals);
  // console.log('CONTEXT :',rata);

  return (
    <main className="h-96">
      <div className="h-100 w-auto flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-grey-darkest">Todo List</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex mt-4">
                <input
                  {...register("listTodo", { required: true, maxLength: 20 })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker hover:bg-slate-300"
                  placeholder="Add Todo"
                />
                <input
                  className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal-500"
                  type="submit"
                  value="Tambah"
                />
              </div>
            </form>
            { datas.title !== undefined ? 
              <form onSubmit={(e) => e.preventDefault()}>
              <div className="flex mt-4">
                <input value={datas.title} onChange={handleOnChange(datas.index)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker hover:bg-slate-300"
                />
                <input onClick={() => handleEdit()}
                  className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal-500"
                  type="submit"
                  value="Ubah"
                />
              </div>
            </form> : null
            }
            
          </div>
          <div>
            {todos.map((val, index) => (
              <div className="flex mb-4 items-center" key={index.toString()}>
                <p
                  className={`w-full text-grey-darkest ${
                    val.status === 1 ? "line-through" : ""
                  }`}
                >
                  {" "}
                  {val.title}
                </p>
                <button
                  onClick={() => toggleSS(index)}
                  className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green-500"
                >
                  {val.status === 1 ? "Not Done" : "Done"}
                </button>
                <button disabled={val.status === 1}
                  name={val.title}
                  onClick={handleRemoveItem}
                  className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red-500"
                >
                  Remove
                </button>
                <button name={val.title} onClick={handleShow(index)} className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-yellow-500 "> Edit </button>
              </div>
            ))}

           
          </div>
          <h2> Total to do : {todos.length} </h2>
          <h2> Total done : {done}</h2>
        </div>
      </div>
    </main>
  );
}
