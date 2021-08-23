
//                     form 👇👇👇
// var getDate = function(){...} ===  function getDate(){...}
//
//  so ---   module.exports.getDate = getDate;
//           function getDate(){...}
//                     👇👇👇
//      module.exports.getDate = function() {...}
//                     👇👇👇

exports.getDate = function() {
  const today = new Date();
  const currentDay = today.getDay();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }

  return today.toLocaleDateString("en-US", options);
}


exports.getDay = function() {
  const today = new Date();

  const options = {
    weekday: "long",
  }

  return today.toLocaleDateString("en-US", options);
}
