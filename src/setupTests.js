// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// to make sure that every test file that runs within your Jest environment
// has access to this mocked version of IntersectionObserver.

// Whenever a component that uses IntersectionObserver (directly or indirectly) is tested,
//the mock ensures that the component behaves as if it were in a browser environment.

// setupTests.js
console.log("Setup Tests Running..");

// Global mock for IntersectionObserver in Jest
global.IntersectionObserver = class {
  constructor() {
    this.observe = jest.fn();
    this.unobserve = jest.fn();
    this.disconnect = jest.fn();
  }
};

// Global mock for ResizeObserver in Jest
// Reason - jest is running in a Node environment, which doesn’t have native browser APIs like ResizeObserver. Since react-use-measure relies on ResizeObserver, you need to mock it for Jest tests.
global.ResizeObserver = class ResizeObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe() {
    // Simulate observing
  }
  unobserve() {
    // Simulate unobserving
  }
  disconnect() {
    // Simulate disconnect
  }
};
