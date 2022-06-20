const developerData = require('./developerData');

let result = developerData.reduce(function(acc, curr){
    let salary = parseFloat(curr.salary.slice(1));        
            acc.push({...curr, correctedSalary : salary*10000})
        return acc;
}, [])

console.log(result);