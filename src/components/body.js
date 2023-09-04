import React, { useEffect, useState } from "react";
import "./style.css";
import image from "./update.jpeg";

export default function Body() {
  const search = {
    textAlign: "center",
    width: "300px",
    height: "45px",
    borderRadius: "50px",
    border: "2px solid black",
  };

  const mydiv = {
    textAlign: "center",
    padding: "5px",
    borderRadius: "5px",
    marginTop: "5px",
  };

  const getLocalItems = () => {
    let list = localStorage.getItem("tasks");
    if (list) {
      return JSON.parse(localStorage.getItem("tasks"));
    } else {
      return [];
    }
  };

  const [text, change] = useState("");
  const [items, addItem] = useState(getLocalItems());
  const [showimg, setimg] = useState(false);
  const [edit, setedit] = useState(null);
  const [flag, setflag] = useState(false);
  const [sitems, setsitems] = useState([]);

  useEffect(() => {
    if (!items) {
    } else {
      localStorage.setItem("tasks", JSON.stringify(items));
    }
  }, [items]); // The useeffect will be executed whenever the items array will be changed

  const div = {
    textAlign: "center",
  };

  function mysearch(event) {
    if (event.target.value === "") {
      setflag(false);
    } else {
      setflag(true);
    }
    console.log(event.target.value);
    let item = items.filter((i) => {
      return String(i.name.toLowerCase()).startsWith(
        event.target.value.toLowerCase()
      );
    });
    console.log(item);
    setsitems(item);
  }

  function Add() {
    if (!text) {
      // alert("Enter any task");
      let div = document.getElementById("alert");
      div.innerHTML += `<div class="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>Failure!</strong> Please enter some task
    </div>`;
      setTimeout(() => {
        div.innerHTML = "";
      }, 3000);
    } else if (text && showimg) {
      addItem(
        items.map((ele) => {
          if (ele.id === edit) {
            return { name: text, id: ele.id };
          }
          return ele;
        })
      );
      console.log(edit);
      setimg(false);
      change("");
    } else {
      const updateAllItems = {
        id: new Date().getTime().toString(),
        name: text,
      };
      addItem([...items, updateAllItems]);
      change("");
    }
  }
  function takeTask(event) {
    change(event.target.value);
  }
  function deleteTask(index) {
    const updatedItems = items.filter((element) => {
      return index !== element.id;
    });
    localStorage.removeItem(items[index]);
    addItem(updatedItems);
  }
  function update(item) {
    let newEditItem = items.find((ele) => {
      return item.id === ele.id;
    });
    setimg(true);
    change(newEditItem.name);
    setedit(item.id);
  }

  return (
    <>
      <div id="alert" style={{ height: "60px" }}></div>
      <div className="headingDiv">
        <h1 className="heading">To Do App</h1>
      </div>
      <div className="search mt-5" style={mydiv}>
        <i className="search-icon fas fa-search"></i>
        <input
          type="text"
          style={search}
          placeholder="Search:"
          onChange={mysearch}
        ></input>
      </div>

      <div className="container mb-5" style={div}>
        <div className="inpdiv">
          <input
            type="text"
            className="form-control mt-5 input"
            placeholder="Enter your task"
            onChange={takeTask}
            value={text}
          ></input>
          {showimg ? (
            <img src={image} className="img" onClick={Add} alt="update icon" />
          ) : (
            ""
          )}
        </div>
        <button className="btn btn-info mt-4 mybtn" onClick={Add}>
          Add
        </button>

        <div id="tasks">
          <h1 className="mt-5 task">Tasks</h1>
          <div id="items">
            {flag
              ? sitems.map((task) => {
                  return (
                    <div className="card mt-4 card" key={task.id}>
                      <div className="card-body">
                        <p
                          className="card-text"
                          style={{
                            color: "white",
                            fontWeight: "bold",
                            fontSize: "20px",
                          }}
                        >
                          {task.name}
                        </p>
                        <button
                          className="btn up"
                          onClick={() => {
                            update(task);
                          }}
                        >
                          Update
                        </button>
                        <button
                          className="btn btn-danger ms-4"
                          style={{
                            fontWeight: "bold",
                            border: "2px solid black",
                          }}
                          onClick={() => {
                            deleteTask(task.id);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  );
                })
              : items.map((task) => {
                  return (
                    <div className="card mt-4 card" key={task.id}>
                      <div className="card-body">
                        <p
                          className="card-text"
                          style={{
                            color: "white",
                            fontWeight: "bold",
                            fontSize: "20px",
                          }}
                        >
                          {task.name}
                        </p>
                        <button
                          className="btn up"
                          onClick={() => {
                            update(task);
                          }}
                        >
                          Update
                        </button>
                        <button
                          className="btn btn-danger ms-4"
                          style={{
                            fontWeight: "bold",
                            border: "2px solid black",
                          }}
                          onClick={() => {
                            deleteTask(task.id);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </>
  );
}
