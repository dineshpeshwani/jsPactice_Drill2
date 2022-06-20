const developerData = require('./developerData');

let result = developerData.reduce(function(acc, curr)
{
    if(curr.job.includes("Web Developer")){
       acc.push(curr);
    }
    return acc;
},[])

console.log(result);