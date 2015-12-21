'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = errorHandler;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function errorHandler(originalComponent, errorDisplay, handleError) {
  var originalRender = originalComponent.prototype.render;

  originalComponent.prototype.render = function tryRender() {
    try {
      return originalRender.apply(this, arguments);
    } catch (err) {
      if (handleError) {
        handleError.call(this, err);
      }
      return _react2.default.createElement(errorDisplay, { error: err, component: this });
    }
  };

  return originalComponent;
}
