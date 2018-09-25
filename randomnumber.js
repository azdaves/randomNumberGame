function getRandomNumber ( lower, upper ) {
  return Math.floor(Math.random() * (upper - lower + 1 )) + lower; 
             
}
console.log( getRandomNumber (1, 10));
 console.log( getRandomNumber (1, 100));                               
console.log( getRandomNumber (200, 700));
  console.log( getRandomNumber (4000, 10000));