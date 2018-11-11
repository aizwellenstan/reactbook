"use strict";

var _Button = require("./components/Button");

var _Button2 = _interopRequireDefault(_Button);

var _Logo = require("./components/Logo");

var _Logo2 = _interopRequireDefault(_Logo);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
  "div",
  { style: { padding: "20px" } },
  _react2.default.createElement(
    "h1",
    null,
    "\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u4E00\u89A7"
  ),
  _react2.default.createElement(
    "h2",
    null,
    "Logo"
  ),
  _react2.default.createElement(
    "div",
    { style: { display: "inline-block", background: "purple" } },
    _react2.default.createElement(_Logo2.default, null)
  ),
  _react2.default.createElement(
    "h2",
    null,
    "Button"
  ),
  _react2.default.createElement(
    "div",
    null,
    "onClick\u304C\u6307\u5B9A\u3055\u308C\u305FButton: ",
    _react2.default.createElement(
      _Button2.default,
      { onClick: function onClick() {
          return alert("クリックされました");
        } },
      "\u30AF\u30EA\u30C3\u30AF"
    )
  ),
  _react2.default.createElement(
    "div",
    null,
    "href\u304C\u6307\u5B9A\u3055\u308C\u305FButton: ",
    _react2.default.createElement(
      _Button2.default,
      { href: "http://reactjs.com" },
      "\u30D5\u30A9\u30ED\u30FC\u3059\u308B"
    )
  ),
  _react2.default.createElement(
    "div",
    null,
    "\u30AF\u30E9\u30B9\u540D\u304C\u6307\u5B9A\u3055\u308C\u305FButton: ",
    _react2.default.createElement(
      _Button2.default,
      { className: "custom" },
      "\u4F55\u3082\u3057\u307E\u305B\u3093"
    )
  )
), document.getElementById("pad"));