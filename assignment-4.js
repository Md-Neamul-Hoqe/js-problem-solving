function cubeNumber(number) {
  if (typeof number !== "number") return "Please give a valid (number) input.";
  let result = Math.pow(number, 3);
  return result;
}

function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string")
    return "Please give a valid (string) input";
  let bool = string1.includes(string2);
  return bool;
}

function sortMaker(arr) {
  if (arr[0] > 0 && arr[1] > 0) {
    if (arr[1] > arr[0]) {
      [arr[1], arr[0]] = [arr[0], arr[1]];
      return arr;
    } else if (arr[0] === arr[1]) {
      return "equal";
    } else {
      return arr;
    }
  } else {
    return "Invalid Input";
  }
}

function findAddress(obj) {
  const street = obj.street || "__",
    house = obj.house || "__",
    society = obj.society || "__";
  const result = street + "," + house + "," + society;
  return result;
}

function canPay(changeArray, totalDue) {
  if (!Array.isArray(changeArray) || !changeArray.length)
    return "Please give an array at least with a petty cash.";
  let sum = changeArray.reduce(
    (total, currentElement) => total + currentElement,
    0
  );
  return sum >= totalDue;
}

// console.log(cubeNumber(3));
// console.log(cubeNumber('cube'));
// console.log(matchFinder("John Doe", "ohn"));
// console.log(matchFinder("Peter Parker", "Pen"));
// console.log(matchFinder("Peter Parker","pet"));
// console.log(sortMaker([2, 2]));
// console.log(sortMaker([4,-2]));
// console.log(sortMaker([4, 2]));
// console.log(sortMaker([2, 3]));
// const obj = { street: 10, house: "15A", society: "Earth Perfect" };
// const obj = { street: 10, society: "Earth Perfect" };
// const obj = { street: 10 };
// console.log(findAddress(obj));
// console.log(canPay([1,2,5], 10));
// console.log(canPay([1, 5, 5], 10));
// console.log(canPay([], 10));
