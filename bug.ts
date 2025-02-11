function greet(name: string | null): string {
  if (name === null) {
    return "Hello, world!";
  }
  return `Hello, ${name}!`;
}

console.log(greet(null)); // Output: Hello, world!
console.log(greet("Alice")); // Output: Hello, Alice!

//Error Case
console.log(greet(undefined)); //Output: error TS2345: Argument of type 'undefined' is not assignable to parameter of type 'string | null'.