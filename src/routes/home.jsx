import { useForm } from "react-hook-form";
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
  const[input, setInput] = useState();
  
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    let updatedValue = {};
    updatedValue = { title: data["addTodo"], status: 1 };
    setInput('');
    setVals((vals) => [...vals, updatedValue]);
  };

  console.log(vals);
  return (
    <main>
      <h2 className="text-3xl font-bold">Home</h2>
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-grey-darkest">Todo List</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex mt-4">
                <input value={input}
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
            {vals.map((val) => (
              <div className="flex mb-4 items-center" key={val.title}>
                <p className="w-full text-grey-darkest"> {val.title}</p>
                <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">
                  Done
                </button>
                <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">
                  Remove
                </button>
              </div>
            ))}

            <div className="flex mb-4 items-center">
              <p className="w-full line-through text-green">
                Submit Todo App Component to Tailwind Components
              </p>
              <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey hover:bg-grey">
                Not Done
              </button>
              <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
