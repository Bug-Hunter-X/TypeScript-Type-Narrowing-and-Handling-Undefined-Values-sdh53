# TypeScript Type Narrowing and Undefined Handling

This repository demonstrates a common TypeScript error related to type narrowing and handling undefined values.  The `greet` function is designed to accept a string or null, but it throws an error if passed `undefined` because TypeScript's type narrowing doesn't automatically handle undefined in this union type.

The `bug.ts` file shows the original code exhibiting the error. The `bugSolution.ts` file provides two solutions: adding undefined to the union type or using optional chaining to handle it gracefully.