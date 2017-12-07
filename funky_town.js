// Caleb Smith-Salzberg Charles Weng
// Team cach
// SoftDev pd7
// HW 15-- Sequential Progress
// 2017-12-6

// factorial from yesterday
var fact = function(n){
  if (n < 2)
    return 1;
  return n * fact(n-1);
};

// nth fibanachi number
var fib = function(n){
  if (n == 0)
    return 0;
  if (n <= 2)
    return 1;
  return fib(n-1) + fib(n-2);
};

// greatest common divisor of a and b
// uses euclidean algorithom
var gcd = function(a, b){
  // console.log("a = " +  a);
  // console.log("b = " +  b);
  // make sure a is always bigger than b for consistency
  if (b > a)
    return gcd(b, a);
  // base case
  if (b <= 1)
    return a;
  // do the algorithom
  return gcd(b, a - b);
};

// list of people in our class
list = ['Helen', 'Shakil', 'Eric', 'Jennifer Y', 'Jennifer Z', 'Arif', 'Queenie', 'Jawadul', 'Shaina', 'Vivien', 'Brian', 'Naotaka', 'Bayan', 'Adam', 'Caleb', 'Terry', 'Jason', 'Alessandro', 'Samantha', 'Carol', 'Joyce', 'Shannon', 'Charles', 'Taylor', 'Kelly', 'Leo', 'Khyber', 'Ibnul', 'Eugene', 'Yuyang', 'Karina', 'Tiffany', 'Holden', 'Michael'];

// random student from above list
var randomStudent = function(){
  var int = Math.random() * list.length;
  return list[Math.floor(int)];
};

// go through the list and check that each element is able to appear in randomStudent
// it will loop forever if it doesn't find one of the elements, but have a leap of faith
var check = function(){
  var i = 0;
  while(i < list.length){
    do
      var temp = randomStudent();
    while (temp != list[i]);
    i++;
  }
  return "yay";
}

// classwork
var buttonCallBack = function(e){
  console.log("here comes e ...");
  console.log(e);
  console.log("here comes 'this'");
  console.log(this);
};
var b = document.getElementById('b');
b.addEventListener('click', buttonCallBack)


// add an event listener to each button for hw 
var fib5 = document.getElementById("fib5");
var gcd2 = document.getElementById("gcdex");
var rad = document.getElementById("rad");
fib5.addEventListener('click', function(){console.log(fib(5));});
gcd2.addEventListener('click', function(){console.log(gcd(9927, 3564));});
rad.addEventListener('click', function(){console.log(randomStudent());});
