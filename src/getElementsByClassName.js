// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   console.log(document.body);
//   return document.getElementsByClassName(className);
// };



// I: String (example: document.getElementsByClassName('test'))
// O: Array-like object [{}]
// C:
// E:
// iterate through document classNames (going to be a function that we call)
// check document classNames vs parameter input
// if className is found in the document's list -> push into the results array

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var results = [];
  var body = document.body;

  var nameChecker = function(elements) {
    if (elements.classList !== undefined && elements.classList.contains(className) === true) {
      results.push(elements);
    }

    if(elements.hasChildNodes() === true) {
      var childArray = elements.childNodes;
      for (var i = 0; i < childArray.length; i++) {
        nameChecker(childArray[i]);
      }
    }
  }

  nameChecker(body);

  return results;
};
