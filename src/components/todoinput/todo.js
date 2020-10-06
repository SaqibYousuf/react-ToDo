import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  Add,
  Update,
  getdata,
  DeleteAll,
} from "./../store/middleware/middleWare";
// import {user} from "./../store/reducer/user"

const Todo = (props) => {
  let { edit } = props;

  let [data2, setData] = useState([]);

  // let key = firebase.database().ref("students").push().key;

  var Student = {
    firstName: props.first,
    lastName: props.last,
    rollNumber: props.roll,
  };
  var updStudent = {
    firstName: props.first,
    lastName: props.last,
    rollNumber: props.roll,
    key: props.keyupd,
  };

  return (
    <div className="todo-page">
      <div class="todo">
        <div class="todoFields">
          <div class="firstName">
            <label for="">First Name:</label>
            <input
              id="firstName"
              placeholder="Enter Your First Name"
              onChange={(event) => {
                props.setFirst(event.target.value);
              }}
              // value={first ? first : props.first ? props.first : ""}
              value={props.first}
            />
          </div>
          <div class="lastName">
            <label for="">Last Name:</label>
            <input
              id="lastName"
              placeholder="Enter Your Last Name"
              onChange={(event) => {
                props.setLast(event.target.value);
              }}
              // value={last ? last : props.last ? props.last : ""}
              value={props.last}
            />
          </div>
          <div class="rollNumber">
            <label for="">Roll Number:</label>
            <input
              id="roll"
              placeholder="Enter Your Roll Number"
              onChange={(event) => {
                props.setRoll(event.target.value);
              }}
              // value={roll ? roll : props.roll ? props.roll : ""}
              value={props.roll}
            />
          </div>
          {!props.edit ? (
            <div id="Action" class="Action">
              <button
                id="add"
                onClick={() => [
                  props.Add(Student),
                  props.setFirst(""),
                  props.setRoll(""),
                  props.setLast(""),
                ]}
              >
                ADD
              </button>
              <button
                id="delete"
                onClick={() => [
                  props.DeleteAll(),
                  // props.setedit(false),
                ]}
              >
                DELETE
              </button>
            </div>
          ) : (
            <div id="Action" class="Action">
              <button
                id="update"
                onClick={() => [
                  props.Update(updStudent),
                  props.setedit(false),
                  props.setFirst(""),
                  ,
                  props.setRoll(""),
                  props.setLast(""),
                ]}
              >
                Update
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    user: state.user,
  };
};
const mapDispatchToProps = { Add, Update, getdata, DeleteAll };

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
