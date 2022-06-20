const developerData = require('./developerData');

let result = developerData.reduce(function(acc, curr){
    acc += parseFloat(curr.salary.slice(1));        
      return acc;
}, 0)
console.log(result);