// Methods, Revisited
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log(favMovies.indexOf("Titanic"));
favMovies.sort(); // This will change the array since it's mutable
// console.log(favMovies);
favMovies.pop();
favMovies.push("Guardians of the Galaxy");
favMovies.reverse(); // This will change the array since it's mutable
// console.log(favMovies);
favMovies.shift();
favMovies.unshift(); //Returns undefined always, this is for adding...
favMovies.splice(favMovies.indexOf("Django Unchained", 0, "Avatar")); // Yes this permanently alters the array.
favMovies.slice(favMovies.length/2); // No this does not permanently alters the array. It returns an array of two arrays.
// console.log(favMovies);

console.log(favMovies);

console.log(favMovies.indexOf("Fast and Furious")); // Should return -1 since it was removed;

// Answering last question.
/*
  Array variables are not internally arrays, they are references to
  an array made in memory. Because of this, we can change the array since the array itself isn't
  declared to be constant, the reference to the array is.
  
  The variable will always point to the array's position in memory.
*/
