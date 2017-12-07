// Caleb Smith-Salzberg Charles Weng
// SoftDev pd7
// HW 15-- Sequential Progress
// 2017-12-6


var fact = function(n){
  if (n < 2)
    return 1;
  return n * fact(n-1);
};

var fib = function(n){
  if (n == 0)
    return 0;
  if (n <= 2)
    return 1;
  return fib(n-1) + fib(n-2);
};

var gcd = function(a, b){
  console.log("a = " +  a);
  console.log("b = " +  b);
  if (b > a)
    return gcd(b, a);
  if (b <= 1)
    return a;
  return gcd(b, a - b);
};

list = ['Helen', 'Shakil', 'Eric', 'Jennifer Y', 'Jennifer Z', 'Arif', 'Queenie', 'Jawadul', 'Shaina', 'Vivien', 'Brian', 'Naotaka', 'Bayan', 'Adam', 'Caleb', 'Terry', 'Jason', 'Alessandro', 'Samantha', 'Carol', 'Joyce', 'Shannon', 'Charles', 'Taylor', 'Kelly', 'Leo', 'Khyber', 'Ibnul', 'Eugene', 'Yuyang', 'Karina', 'Tiffany', 'Holden', 'Michael'];

var randomStudent = function(){
  var int = Math.random() * list.length;
  return list[Math.floor(int)];
};

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
