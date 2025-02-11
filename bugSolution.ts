function greet(name: string | null | undefined): string {
  if (name === null || name === undefined) {
    return "Hello, world!";
  }
  return `Hello, ${name}!`;
}

console.log(greet(null)); // Output: Hello, world!
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet(undefined)); // Output: Hello, world!

//Alternative solution using optional chaining
function greet2(name?: string): string {
  return `Hello, ${name ?? 'world'}!`;
}
console.log(greet2('Bob')); // Hello, Bob!
console.log(greet2()); // Hello, world!