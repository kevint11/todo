import { useForm, useFieldArray, Controller } from "react-hook-form";
import React, { useState } from "react";

export default function Home() {
  // const [vals, setVals] = useState({
  //   name: "",
  // });

  // const handleChange = (event) => {
  //   setVals({ ...vals, [event.target.name]: event.target.value });
  // };
  // const handleSubmit = (event) => {
  //   // prevents the submit button from refreshing the page
  //   event.preventDefault();
  //   console.log(vals);
  // };

  const [vals, setVals] = useState([]);
  // const[message, setMessage] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm({ defaultValues: { addTodo: "" } });

  const onSubmit = (data) => {
    let updatedValue = {};
    updatedValue = { title: data["addTodo"], status: 0 };
    setVals((vals) => [...vals, updatedValue]);
    reset({ addTodo: "" });
  };

  const [done, setDone] = useState(0);
  const toggleSS = (index) => {
    console.log("index: " + index);
    let newArr = [...vals];
    newArr[index].status == 0
      ? (newArr[index].status = 1)
      : (newArr[index].status = 0);
      
    newArr[index].status == 0 ? 
    (setDone(done-1))
    : (setDone(done+1));
    setVals(newArr);
  };

  const handleRemoveItem = (e) => {
    const name = e.target.getAttribute("name");
    setVals(vals.filter((val) => val.title !== name));
  };

  return (
    <main className="h-96">
      <div className="h-100 w-auto flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-grey-darkest">Todo List</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex mt-4">
                <input
                  {...register("addTodo", { required: true, maxLength: 20 })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                  placeholder="Add Todo"
                />
                <input
                  className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
                  type="submit"
                  value="Tambah"
                />
              </div>
            </form>
          </div>
          <div>
            {vals.map((val, index) => (
              <div className="flex mb-4 items-center" key={index.toString()}>
                <p
                  className={`w-full text-grey-darkest ${
                    val.status == 1 ? "line-through" : ""
                  }`}
                >
                  {" "}
                  {val.title}
                </p>
                <button
                  onClick={() => toggleSS(index)}
                  className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green"
                >
                  {val.status == 1 ? "Not Done" : "Done"}
                </button>
                <button disabled={val.status == 1}
                  name={val.title}
                  onClick={handleRemoveItem}
                  className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red"
                >
                  Remove
                </button>
                <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red"> Edit </button>
              </div>
            ))}

           
          </div>
          <h2> Total to do : {vals.length} </h2>
          <h2> Done : {done}</h2>
        </div>
      </div>
    </main>
  );
}
