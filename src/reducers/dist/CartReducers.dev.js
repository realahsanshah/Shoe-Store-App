"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CartReducer = void 0;

var _ActionTypes = require("./ActionTypes");

var CartReducer = function CartReducer(state, action) {
  switch (action.type) {
    case _ActionTypes.addIntoCart:
      console.log("state is ".concat(state));
      return [state.push({
        id: action.id
      })];

    case _ActionTypes.removeFromCart:
      state = state.filter(function (dish) {
        return dish.id !== action.id;
      });
      return state;

    default:
      return state;
  }
};

exports.CartReducer = CartReducer;