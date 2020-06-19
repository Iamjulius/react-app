import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

//action creator
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

//reducer
const reducer = (state = [], action) => {
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

//store
var store = createStore(reducer);

//presentational components
const Item = props => {
  return (
    <div>
      <div>
        Item : {props.name} | Price: {props.price}
      </div>
      <button onClick={() => props.onDelete(props.index)}>Delete</button>
    </div>
  );
};

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", price: "" };
  }
  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }
  handleChangePrice(event) {
    this.setState({ price: event.target.value });
  }
  addItem() {
    this.props.onAdd(this.state.name, this.state.price);
    this.setState({ name: "", price: "" });
  }
  render() {
    return (
      <div>
        <input
          onChange={this.handleChangeName.bind(this)}
          value={this.state.name}
        />
        <input
          onChange={this.handleChangePrice.bind(this)}
          value={this.state.price}
        />
        <button onClick={() => this.addItem()}>Add</button>
      </div>
    );
  }
}

const ItemsList = props => {
  return (
    <div>
      <Input onAdd={props.onAdd} />
      {props.items.map((item, index) => {
        return (
          <Item
            onDelete={props.onDelete}
            index={index}
            name={item.name}
            price={item.price}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    items: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAdd: (name, price) => {
      dispatch(addItem(name, price));
    },
    onDelete: id => {
      dispatch(deleteItem(id));
    }
  };
};

//container components
const ItemsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemsList);

const App = () => {
  return (
    <div>
      <ItemsListContainer />
    </div>
  );
};

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
