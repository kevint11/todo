import React, {useState} from "react";

export default function Home() {
  const [vals, setVals] = useState({
    name: "",
    email: "",
    phonenumber: "",
  });

  const handleChange = (event) => {
    setVals({ ...vals, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    // prevents the submit button from refreshing the page
    event.preventDefault();
    console.log(vals);
  };

    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Home</h2>
        <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Input..."/> &nbsp;
        <input type="submit" value="Tambah"></input>
        </form>

      </main>
    );
  }