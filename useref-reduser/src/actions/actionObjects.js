import {
  ADD_SQUARE,
  ADD_USERS,
  DECREMENT,
  INCREMENT,
  SORT_A_Z,
  SORT_Z_A,
} from "../constants/constants";

export const incrementFunction = () => {
  return {
    type: INCREMENT,
  };
};
export const decrementFunction = () => {
  return {
    type: DECREMENT,
  };
};
export const addMultipleSquares = (inputValue) => {
  return {
    type: ADD_SQUARE,
    payload: inputValue,
  };
};
export const getAllUsers = (usersList) => {
  return {
    type: ADD_USERS,
    payload: usersList,
  };
};
export const lowerSort = () => {
  return {
    type: SORT_A_Z,
  };
};
export const highSort = () => {
  return {
    type: SORT_Z_A,
  };
};
