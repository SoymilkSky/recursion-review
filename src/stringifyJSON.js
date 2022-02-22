// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// I: Object
// O: String
// C:
// E:



var stringifyJSON = function(obj) {
  console.log(obj);
  // Create a result string.
  var stringifyResult = '';

  console.log(var + 'dsfsdf' + var2);

  // For static variables.
  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    stringifyResult += obj;
  }

  // Danny's implementation of string (see if this works !)
  if (typeof obj === 'string') {
    var stringifyResult = obj.filter(x => x !== '"');
  }

  // Iterate through the object parameter.
  for (var key in obj) {
    // If the object value is a function or undefined, return '{}'.
    if (typeof obj[key] === 'function' || typeof obj[key] === 'undefined') {
      return '{}';
    }
  }
  // Return result string.
  return stringifyResult;
};
