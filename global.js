// console.log('hello world')

setTimeout(() => {
  console.log('hello world');
  clearInterval(int);
}, 5000);

const int = setInterval(() => {
  console.log('hello world');
}, 1000);

console.log(_dirname);
console.log(_filename);