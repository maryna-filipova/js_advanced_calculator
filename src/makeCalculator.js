'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  return {
    result: 0,

    add(value) {
      this.result += value;
    },

    subtract(value) {
      this.result -= value;
    },

    multiply(value) {
      this.result *= value;
    },

    /* divide(value) {
      if (value !== 0) {
        this.result /= value;
      } else {
        console.error(error);
      }
    }, */

    reset() {
      this.result = 0;

      return this;
    },

    operate(operation, value) {
      operation.call(this, value);

      return this;
    },
  };
}

module.exports = makeCalculator;
