var equation = document.getElementById("equation");
var result = document.getElementById("result");
var reset = document.getElementById("reset");
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var times = document.getElementById("times");
var comma = document.getElementById("comma");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById ("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var zero = document.getElementById("zero");
var equals = document.getElementById("equals");

var equationHolder = "";

reset.addEventListener("click", function(){

  console.log("reset")
  equationHolder = "";
  equation.innerHTML = "";
  result.innerHTML = ""

})

one.addEventListener("click", function(){

  equationHolder += "1";
  equation.innerHTML += "1";

})

two.addEventListener("click", function(){

  equationHolder += "2";
  equation.innerHTML = equation.innerHTML + "2";

})

three.addEventListener("click", function(){

  equationHolder += "3";
  equation.innerHTML = equation.innerHTML + "3";

})

four.addEventListener("click", function(){

  equationHolder += "4";
  equation.innerHTML = equation.innerHTML + "4";

})

five.addEventListener("click", function(){

  equationHolder += "5";
  equation.innerHTML = equation.innerHTML + "5";

})

six.addEventListener("click", function(){

  equationHolder += "6";
  equation.innerHTML = equation.innerHTML + "6";

})

seven.addEventListener("click", function(){

  equationHolder += "7";
  equation.innerHTML = equation.innerHTML + "7";

})

eight.addEventListener("click", function(){

  equationHolder += "8";
  equation.innerHTML = equation.innerHTML + "8";

})

nine.addEventListener("click", function(){

  equationHolder += "9";
  equation.innerHTML = equation.innerHTML + "9";

})

zero.addEventListener("click", function(){

  equationHolder += "0";
  equation.innerHTML = equation.innerHTML + "0";

})

plus.addEventListener("click", function(){

  equationHolder += "+";
  equation.innerHTML += "+";

})

minus.addEventListener("click", function(){

  equationHolder += "-";
  equation.innerHTML += "-";

})

times.addEventListener("click", function(){

  equationHolder += "*";
  equation.innerHTML += "x";

})

divide.addEventListener("click", function(){

  equationHolder += "/";
  equation.innerHTML += "/";

})

comma.addEventListener("click", function(){

  equationHolder += "";
  equation.innerHTML += ",";

})

equals.addEventListener("click", function(){

  var resultt = eval(equationHolder)

  if(Number.isInteger(resultt)){
    result.innerHTML = resultt;
  }
  else{
  result.innerHTML = resultt.toPrecision(5);
  }
});




