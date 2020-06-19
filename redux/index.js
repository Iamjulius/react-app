import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";

//action creator
const addItem = item => {
  return {
    type: "ADD_ITEM",
    item: item
  };
};

//reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.item];
    default:
      return state;
  }
};

var store = createStore(reducer);

console.log(store.dispatch(addItem("a")));
console.log(store.getState());
console.log(store.dispatch(addItem("b")));
console.log(store.getState());
console.log(store.dispatch(addItem("c")));
console.log(store.getState());

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
/*
Advanced Reducers
https://courses.edx.org/courses/course-v1:Microsoft+DEV282x+1T2019a/courseware/2c10650d-396e-a5b3-d696-636e935a4445/db96a6fe-81ff-1a0f-4b59-6897cbdf7887/?child=first


import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";

//action creators
const addItem = (name, price) => {
  return {
    type: "ADD_ITEM",
    item: {
      name: name,
      price: price
    }
  };
};

const deleteItem = index => {
  return {
    type: "DELETE_ITEM",
    index: index
  };
};

const setFilter = filter => {
  return {
    type: "SET_FILTER",
    filter: filter
  };
};
const setDiscount = discount => {
  return {
    type: "SET_DISCOUNT",
    discount: discount
  };
};

//reducer
var initialState = {
  items: [],
  filter: "none",
  discount: 0
};

const giantReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return Object.assign({}, state, { items: [...state.items, action.item] });
    case "DELETE_ITEM":
      return Object.assign({}, state, {
        items: [
          ...state.slice(0, action.index),
          ...state.slice(action.index + 1)
        ]
      });
    case "SET_FILTER":
      return Object.assign({}, state, {
        filter: action.filter
      });
    case "SET_DISCOUNT":
      return Object.assign({}, state, {
        discount: action.discount
      });
  }
};

//store
//var store = createStore(giantReducer);

//items reducer

const items = (state = [], action) => {
  //notice default state is now an array
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.item];
    case "DELETE_ITEM":
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];

    default:
      return state;
  }
};

const filter = (state = "none", action) => {
  switch (action.type) {
    case "SET_FILTER":
      return action.filter;
    default:
      return state;
  }
};

const discount = (state = 0, action) => {
  switch (action.type) {
    case "SET_DISCOUNT":
      return action.discount;
    default:
      return state;
  }
};

const giantReducer2 = (state = initialState, action) => {
  //don't need an initial state anymore if the child reducers all have initial states
  return {
    items: items(state.items, action),
    filter: filter(state.filter, action),
    discount: discount(state.discount, action)
  };
};

var reducer = combineReducers({ items, filter, discount });
var store = createStore(reducer);

// var store = createStore(reducer);

console.log(store.dispatch(addItem("apple", 1)));
console.log(store.dispatch(addItem("banana", 2)));
console.log(store.dispatch(addItem("carrot", 3)));
console.log(store.dispatch(setFilter("alphabetical")));
console.log(store.dispatch(setDiscount(20)));

//dispatching actions
console.log(store.getState());

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


*/
