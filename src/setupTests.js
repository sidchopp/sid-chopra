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

global.IntersectionObserver = class {
  constructor() {
    this.observe = jest.fn();
    this.unobserve = jest.fn();
    this.disconnect = jest.fn();
  }
};
