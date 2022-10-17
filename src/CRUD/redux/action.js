import * as types from "./actionType";
import axios from "axios";
import API from "../configs";
const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});

const userDeleted =()=>({
    type : types.DELETE_USER
})

const userAdded = () =>({
  type : types.ADD_USER
})

const userUpdated =()=>({
  type : types.UPDATE_USER
})

const getUser =(val)=>({
  type: types.GET_SINGLE_USER,
  payload:val,
})


export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get(`${API}/posts`)
      .then((resp) => {
        console.log("resp", resp)
        dispatch(getUsers(resp.data))
      })
      .catch((error) => {
        console.log(error)
      });
  };
};

export const deleteUser = (id) => {
    return function (dispatch) {
      axios
        .delete(`${API}/posts/${id}`)
        .then((resp) => {
          console.log("resp", resp.data);
          dispatch(userDeleted());
          dispatch(loadUsers())
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };

  export const updateUser = (val ,id) => {
    return function (dispatch) {
      axios
        .put(`${API}/posts/${id}`,val)
        .then((resp) => {
          console.log("resp", resp.data);
          dispatch(userUpdated());
          dispatch(loadUsers())
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };


  

  export const addUser = (user) => {
    return function (dispatch) {
      axios
        .post(`${API}/posts`,user)
        .then((resp) => {
          console.log("resp", resp.data);
          dispatch(userAdded());
          dispatch(loadUsers())
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };

  export const getSingleUser = (id) => {
    return function (dispatch) {
      axios
        .get(`${API}/posts/${id}`)
        .then((resp) => {
          console.log("resp", resp.data);
          dispatch(getUser(resp.data));
        //  dispatch(loadUsers())
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };


