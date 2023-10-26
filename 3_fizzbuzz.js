// Fizz Buzz
for(let i = 1; i < 101; i++)
{
  let s = "";
  if(i%3 === 0) s += "Fizz"; 
  if(i%5 === 0) s += "Buzz";
  if(s.length > 0) console.log(s);
  else console.log(i);
}
