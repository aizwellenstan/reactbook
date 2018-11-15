"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Button = require("./Button");

var _Button2 = _interopRequireDefault(_Button);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dialog = function (_Component) {
  _inherits(Dialog, _Component);

  function Dialog() {
    _classCallCheck(this, Dialog);

    return _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).apply(this, arguments));
  }

  _createClass(Dialog, [{
    key: "conponentWillUnmount",
    value: function conponentWillUnmount() {
      document.body.classList.remove("DialogModalOpen");
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.modal) {
        document.body.classList.add("DialogModalOpen");
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: this.props.modal ? "Dialog DialogModal" : "Dialog" },
        _react2.default.createElement(
          "div",
          { className: this.props.modal ? "DialogModalWrap" : null },
          _react2.default.createElement(
            "div",
            { className: "DialogHeader" },
            this.props.header
          ),
          _react2.default.createElement(
            "div",
            { className: "DialogBody" },
            this.props.children
          ),
          _react2.default.createElement(
            "div",
            { className: "DialogFooter" },
            this.props.hasCancel ? _react2.default.createElement(
              "span",
              {
                className: "DialogDismiss",
                onClick: this.props.onAction.bind(this, "dismiss") },
              "\u30AD\u30E3\u30F3\u30BB\u30EB"
            ) : null,
            _react2.default.createElement(
              _Button2.default,
              { onClick: this.props.onAction.bind(this, this.props.hasCancel ? "confirm" : "dismiss") },
              this.props.confirmLabel
            )
          )
        )
      );
    }
  }]);

  return Dialog;
}(_react.Component);

Dialog.propTypes = {
  header: _propTypes2.default.string.isRequired,
  confirmLabel: _propTypes2.default.string,
  modal: _propTypes2.default.bool,
  onAction: _propTypes2.default.func,
  hasCancel: _propTypes2.default.bool
};

Dialog.defaultProps = {
  confirmLabel: "OK",
  modal: false,
  onAction: function onAction() {},
  hasCancel: true
};

exports.default = Dialog;