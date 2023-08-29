
// sum function
function add(a: number, b: number): number {
  return a + b;
}
// const sum function
const short_add_function = (a: number, b: number): number => a + b;

// optional parameters
const addWithOptionalTax = (a: number, b: number, tax?: number): number => {
  if (typeof tax != 'undefined') {
    return (a + b) - tax;
  }

  return a + b;
}
console.log(addWithOptionalTax(2, 2, 1));
console.log(addWithOptionalTax(2, 2));

const applyDiscount = (price: number, percentage: number = 5): number => {
  return price - (price * (percentage / 100))
}
console.log(applyDiscount(100));

const calcTotal = (name: string, ...numbers: number[]): number => {
  let total = 0;
  numbers.forEach(num => total += num)
  return total;
}
console.log(calcTotal('Carlos', 2, 3, 5, 10));