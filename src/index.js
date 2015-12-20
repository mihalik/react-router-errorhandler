import React from 'react';

export default function errorHandler(originalComponent, errorDisplay, handleError) {
  const originalRender = originalComponent.prototype.render;

  originalComponent.prototype.render = function tryRender() {
    try {
      return originalRender.apply(this, arguments);
    } catch (err) {
      if (handleError) {
        handleError.call(this, err);
      }
      return React.createElement(errorDisplay, {error: err, component: this});
    }
  };

  return originalComponent;
}
