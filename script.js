// task 1

function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}
console.log(sumTo(4)); // 10
console.log(sumTo(3)); // 6

// task 2

function findShort(string) {
  return string.split(" ").reduce((a, b) => (b.length < a.length ? b : a));
}

const sentance = "Lorem ipsum dolor sit amet";

console.log(findShort(sentance)); // sit
console.log(findShort("Hello world")); // Hello
console.log(findShort("Hi")); // Hi
console.log(findShort("She is David's sister")); // is
