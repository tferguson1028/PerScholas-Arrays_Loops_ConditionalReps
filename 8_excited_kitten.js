// Excited Kitten
for(let i = 0; i < 21; i++)
{
  let s = "Love me, pet me! HSSSSSS!";
  if(i%2 === 0)
    s += " " + returnRandomSay();  
  console.log(s);
}

function returnRandomSay()
{
  switch(Math.floor(Math.random()*3))
  {
    case 0: return "...human...why you taking pictures of me?...";
    case 1: return "...the catnip made me do it..."
    case 2: return "...why does the red dot always get away...";
  }
}
