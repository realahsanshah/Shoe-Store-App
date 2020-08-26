"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CartReducer = void 0;

var _ActionTypes = require("./ActionTypes");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var CartReducer = function CartReducer(state, action) {
  switch (action.type) {
    case _ActionTypes.addIntoCart:
      console.log("state is ".concat(state, " and action ").concat(action.productId));
      return [].concat(_toConsumableArray(state), [action.productId]);

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