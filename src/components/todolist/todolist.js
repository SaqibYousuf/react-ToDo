import React, { useState } from "react";
import firebase from "firebase";
import { connect } from "react-redux";
import { getdata, Delete } from "./../store/middleware/middleWare";

const TodoList = (props) => {
  // console.log(props.first)
  function Edit(a,i) {
    // console.log(a)
    // props.first = a.firstName;
    props.setFirst(a.firstName);
    // props.last = a.lastName;
    props.setLast(a.lastName);
    // props.roll = a.rollNumber;
    props.setRoll(a.rollNumber);
    props.setKey(props.user.keys[i]);
    props.setedit(true);
  }
  // console.log(props.getdata);
  return props.user.data.map((a, i) => {
    return (
      <tr>
        <td>{a.firstName}</td>
        <td>{a.lastName}</td>
        <td>{a.rollNumber}</td>
        <td>
          <button
          onClick={() => Edit(a,i)}
          >
            Edit
          </button>
          <button onClick={() => props.Delete(props.user.keys[i])}>
            Delete
          </button>
        </td>
      </tr>
    );
  });
};
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    user: state.user,
  };
};
const mapDispatchToProps = { getdata, Delete };

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
