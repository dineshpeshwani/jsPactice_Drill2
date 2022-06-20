const developerData = require('./developerData');
const result = developerData.reduce(function(acc, curr){
    let salarySum = parseFloat(curr.salary.slice(1)); 
    if(acc[curr['location']]){
        acc[curr['location']] =   (acc[curr['location']] + salarySum)/2;
    }
    else{
        acc[curr['location']] = salarySum;
    }
  return acc;
}, [])
console.log(result);
