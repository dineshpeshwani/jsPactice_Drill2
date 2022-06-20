const developerData = require('./developerData');

const result = developerData.reduce(function(acc, curr){
    const salary = parseFloat(curr.salary.slice(1))
   acc.push({...curr, salary})
   return acc
}, [])
console.log(result);

