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
var getElementsByClassName = function(className
) {
  var results = [];
  var body = document.body;

  console.log(body);
  console.log(body.classList);


  var nameChecker = function(elements) {
    if (elements.classList !== undefined && elements.classList.contains(className) === true) {
      results.push(elements);
    }

    console.log(elements.childNodes);
    if(elements.hasChildNodes() === true) {

      var childArray = element.childNodes;
      console.log(childArray)
      //nameChecker()
    }

  }

  nameChecker(body);

  console.log(results);

  return results;
};
