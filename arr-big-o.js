// dentify the time complexity of each of these functions with a 1 sentence justification for your answer. Assume arr is an array of length n.
arr.push();

// Time complexity: O(n) Space complexity: O(n) Justification: push can be used to push multiple values. so its bog-o on n for time complexity and space complexity

// push on MDN
arr.pop();

// Time complexity: O(1) Space complexity: O(1) Justification: The pop operation is a single operation. so it has a time complexity of O(1) and the same array is edited by removing the last item. so no need for extra memory so its O(1)

// pop on MDN
arr.shift();

// Time complexity: O(n) Space complexity: O(1) Justification: The time complexity is O(n) as it needs to shift each value left after removing the first value . Space complexity is O(1) as we are using the same array for the edits.

// shift on MDN
arr.unshift();

// Time complexity: O(n) Space complexity: O(1) Justification: The time complexity is O(n) as it needs to shift each value right before placing the new value into the Array. Space complexity is O(1) as we are using the same array for the edits.

// unshift on MDN
arr.splice();

// Time complexity: O(n) Space complexity: O(1)
// Justification: The time complexity is O(n) . if the splice is used to remove the first value its same as shift same goes for space complexity.
// if we are using it to input values at the start it works like a unshift so it time complexity is O(n) and space complexity is O(1)

// splice on MDN
arr.slice();

// Time complexity: O(n) Space complexity: O(n)
// Justification: is we start from the beginning and end with the last value, it will slice all values.
// also it gives us O(n) space complexity as it gives us a new array.

// slice on MDN
arr.indexOf();

// Time complexity: O(n) Space complexity: O(1)
// Justification: if the value doesnt exists in the array, then it will loop through the array and finally throws an error.
// It just gives us back a single value and the same array exists, so its O(1)

// indexOf on MDN
arr.map();

// Time complexity: O(n) Space complexity: O(n)
// Justification: loops through each value and perform an operation
// It returns a new array . so its O(n) space complexity
// map on MDN
arr.filter();

// Time complexity: O(n) Space complexity: O(n)
// Justification: it runs function on each value and checks a condition
// space complexity is O(n) if every element satisfies the condition, it will include all the values, so it will return a new array with n values. so O(n)

// filter on MDN
arr.reduce();

// Time complexity: O(n) Space complexity: O(1)
// Justification: loops through each CSSMathValue. so O(n) for time complexity
// returnsa single vaue so needs O(1)

// reduce on MDN
arr.reverse();

// Time complexity: O(n) Space complexity: O(1)
// Justification: As it reverses each value, it needs O(n) time complexity
// As it reverses inplace, it needs only O(1) space complexity

// reverse on MDN
// [...arr]

// Time complexity: O(n) Space complexity: O(n)
// Justification: as it copies all values into a new array. O(n) is the time complexity
// It needs O(n) space complexity as a new array will be created.
// spread on MDN
