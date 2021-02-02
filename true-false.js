// Falsy values
/* "", 0, null, undefined, NaN */

// Truthy values
/**
 * '0'
 * ' '
 *  []
 *
 */

const name = NaN;

if (name.length) {
  console.log("the condition is true");
} else {
  console.log("the condition is not true");
}
