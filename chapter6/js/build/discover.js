"use strict";

var _Button = require("./components/Button");

var _Button2 = _interopRequireDefault(_Button);

var _Suggest = require("./components/Suggest");

var _Suggest2 = _interopRequireDefault(_Suggest);

var _Rating = require("./components/Rating");

var _Rating2 = _interopRequireDefault(_Rating);

var _FormInput = require("./components/FormInput");

var _FormInput2 = _interopRequireDefault(_FormInput);

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
  ),
  _react2.default.createElement(
    "h2",
    null,
    "Suggest"
  ),
  _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(_Suggest2.default, { options: ["eenie", "meenie", "miney", "mo"] })
  ),
  _react2.default.createElement(
    "h2",
    null,
    "Rating"
  ),
  _react2.default.createElement(
    "div",
    null,
    "\u521D\u671F\u5024\u306A\u3057: ",
    _react2.default.createElement(_Rating2.default, null)
  ),
  _react2.default.createElement(
    "div",
    null,
    "\u521D\u671F\u50244: ",
    _react2.default.createElement(_Rating2.default, { defaultValue: 4 })
  ),
  _react2.default.createElement(
    "div",
    null,
    "\u6700\u5927\u502411: ",
    _react2.default.createElement(_Rating2.default, { max: 11 })
  ),
  _react2.default.createElement(
    "div",
    null,
    "\u8AAD\u307F\u53D6\u308A\u5C02\u7528: ",
    _react2.default.createElement(_Rating2.default, { readonly: true, defaultValue: 3 })
  ),
  _react2.default.createElement(
    "h2",
    null,
    "FormInput"
  ),
  _react2.default.createElement(
    "table",
    null,
    _react2.default.createElement(
      "tbody",
      null,
      _react2.default.createElement(
        "tr",
        null,
        _react2.default.createElement(
          "td",
          null,
          "\u5358\u7D14\u306A\u5165\u529B\u30D5\u30A3\u30FC\u30EB\u30C9"
        ),
        _react2.default.createElement(
          "td",
          null,
          _react2.default.createElement(_FormInput2.default, null)
        )
      ),
      _react2.default.createElement(
        "tr",
        null,
        _react2.default.createElement(
          "td",
          null,
          "\u30C7\u30D5\u30A9\u30EB\u30C8\u5024"
        ),
        _react2.default.createElement(
          "td",
          null,
          _react2.default.createElement(_FormInput2.default, { defaultValue: "\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u3059" })
        )
      ),
      _react2.default.createElement(
        "tr",
        null,
        _react2.default.createElement(
          "td",
          null,
          "\u5E74\u306E\u5165\u529B"
        ),
        _react2.default.createElement(
          "td",
          null,
          _react2.default.createElement(_FormInput2.default, { type: "year" })
        )
      ),
      _react2.default.createElement(
        "tr",
        null,
        _react2.default.createElement(
          "td",
          null,
          "\u8A55\u4FA1"
        ),
        _react2.default.createElement(
          "td",
          null,
          _react2.default.createElement(_FormInput2.default, { type: "rating", defaultValue: 4 })
        )
      ),
      _react2.default.createElement(
        "tr",
        null,
        _react2.default.createElement(
          "td",
          null,
          "\u5165\u529B\u5019\u88DC\u306E\u63D0\u793A"
        ),
        _react2.default.createElement(
          "td",
          null,
          _react2.default.createElement(_FormInput2.default, {
            type: "suggest",
            options: ["red", "green", "blue"],
            defaultValue: "green" })
        )
      ),
      _react2.default.createElement(
        "tr",
        null,
        _react2.default.createElement(
          "td",
          null,
          "\u5358\u7D14\u306A\u30C6\u30AD\u30B9\u30C8\u30A8\u30EA\u30A2"
        ),
        _react2.default.createElement(
          "td",
          null,
          _react2.default.createElement(_FormInput2.default, { type: "text" })
        )
      )
    )
  )
), document.getElementById("pad"));