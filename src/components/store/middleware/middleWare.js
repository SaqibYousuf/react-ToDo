import React, {useState} from 'react'
import {
  addUser,
  deleteUser,
  updateUser,
  getUser,
} from "./../Action/userAction";
import firebase from "firebase";
import { db } from "./../../../config";
import { firebaseConfig } from "./../../../config";
import { useDispatch } from "react-redux";
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export function getdata() {
  return (dispatch) => {
    firebase
    .database()
    .ref("students")
    .on("value", (data) => {
      // setList(Object.values(data.val()))
      if (data.val()) {
        // console.log(data.val());
        dispatch(
          getUser({
            data: Object.values(data.val()),
            keys: Object.keys(data.val()),
          })
          );
        } else {
          dispatch(getUser({ data: [] }));
        }
      });
    };
  }
  export function Update(payload) {
    //   obj.key = keyupd;
    return (dispatch) => {
      firebase.database().ref("students").child(payload.key).set(payload)
      .then(()=>updateUser(payload));
    };
    //   firstFn("");
    //   lastFn("");
    //   rollFn("");
    //   setedit(false);
    
    // console.log(payload);
  }
  export function Delete(payload) {
    // console.log(payload);
    return (dispatch) => {
      firebase.database().ref("students").child(payload).remove();
    };
  }
  export function Add(payload) {
    let key = firebase.database().ref("students").push().key;
    return (dispatch) => {
      firebase
      .database()
      .ref("students/" + key)
      .set(payload)
      .then(() => {
        dispatch(() => addUser(payload));
      });
  };
}
export function DeleteAll(payload) {
  return (dispatch)=>{
    // console.log("runnnn")
    firebase.database().ref("students").remove();
  }
}
