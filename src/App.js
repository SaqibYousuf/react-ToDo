import React, { useState, useEffect } from "react";
import Todo from "./components/todoinput/todo";
import "./components/todo.scss";
import firebase from "firebase";
import { firebaseConfig } from "./config";
import TodoList from "./components/todolist/todolist";
import { connect } from "react-redux";
import { getdata } from "./components/store/middleware/middleWare";

// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const App = (props) => {
  let [keyupd, setKey] = useState("");
  let [edit, setedit] = useState(false);
  let [first, setFirst] = useState("");
  let [last, setLast] = useState("");
  let [roll, setRoll] = useState("");
  let [todoData,setTodoData] =useState("")
  // console.log(keyupd)



  useEffect(() => {
    props.getdata();
  }, []);
  useEffect(() => {
    // console.log(props.z);
  }, [props.user, props]);
  return (
    <div>
      <Todo setedit={setedit} todoData={todoData} keyupd={keyupd} setFirst={setFirst} first={first} setLast={setLast} last={last} setRoll={setRoll} roll={roll} edit={edit} />
      <div class="todo-head">
        <h2>YOUR RECORD</h2>
      </div>
      <table id="table">
        <thead>
          <td>First Name</td>
          <td>Second Name</td>
          <td>Roll Number</td>
          <td>Action</td>
        </thead>
        <tbody>{props.user.data.length ? <TodoList setKey={setKey} setTodoData={setTodoData}  setFirst={setFirst} first={first} setLast={setLast} last={last} setRoll={setRoll} roll={roll} setedit={setedit} /> : null}</tbody>
      </table>
    </div>
  );
};
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    user: state.user,
  };
};
const mapDispatchToProps = { getdata };

export default connect(mapStateToProps, mapDispatchToProps)(App);
