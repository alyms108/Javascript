// if(false){
// 	alert("this is true.");
// }else{
// 	alert("no");
// }
// var x = 1;
/*while(x < 10){
	console.log(x);
	x = x + 1;
}*/

/*for (var x = 1; x < 10; x++) {
	console.log("Hello");
	console.log("Number:" + x);
};*/

/*var arr = [];
console.log(arr);
arr.push("John");
arr.push(3);
console.log(arr);
arr.pop();
console.log(arr);

function sayHello(){
	console.log("Hello there!");
	console.log(15);
	console.log(arr);
}
sayHello();*/

/*var addition = function(a,b){
	return a+b;
}
console.log(addition(3,4));*/

//Objects
/*var user = {
	first_name: "Joe",
	last_name: "Smith",
	sayHello: function(){console.log("Hello")}
};
console.log(user.first_name);
user.sayHello();*/

//Prototypes
/*var User = function(first_name,last_name){
	this.f_name = first_name;
	this.l_name = last_name;
}
var me = new User('Anna','King');
console.log(me.f_name);*/

//Add function to User prototype on the fly
/*User.prototype.sayHello = function(){
	console.log("hi there!");
}

var sam = new User('Sam','Jorden');
sam.sayHello();*/

//Targeting HTML elements
// var h = document.getElementById('main-heading');

/* NOTE: javascript can be executed like this in
* a separate file, but must be 'sourced' after the
* other elements on the page have been loaded */
// var h = document.getElementById("main-heading");

// AJAX and jQuery
/*var h = document.querySelector('h1');
var addRedClass = function(){
	h.className = h.className + " red-text";
}
h.addEventListener('mouseover', addRedClass);*/

// jQuery selectors
/*var h = $('#main-heading');

$('p').on('click', function(){
	$('p').addClass('red-text');
});*/

<<<<<<< HEAD
// $('p').click(function(){
// 	$(this).addClass('red-text');
// });
// $('h1').click(function(){
// 	$(this).addClass('border-text');
// });

//Make sure code gets executed
//AFTER document has loaded
// $(document).ready(function(){
// 	$('p').click(function(){
// 		$(this).addClass('red-text');
// 	});
// 	$('h1').click(function(){
// 		$(this).addClass('border-text');
// 	});
// });

//jQuery effects
$(document).ready(function(){
	$('p').click(function(){
		$(this).hide();
	});
});
=======
$('p').hover(function(){
	$(this).addClass('red-text');
});
$('h1').click(function(){
	$(this).addClass('border-text');
});
>>>>>>> 1a1735d4e9f2c2b15033e717d2daad255a447793
