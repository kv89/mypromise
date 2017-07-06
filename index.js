'use strict';

// var Pending = 0;
// var	Fulfilled = 1;
// var	Rejected = 2;

function MyPromise( fn ){// may be executer function !
	console.log('MyPromise called ..');
	var callback = null;
	this.then = function( cb ){
		console.log('then called ..');
		callback = cb;
	};

	function resolve(value){
		console.log('MyPromise -> resolve called ..');
		setTimeout(function(){ // next tick so that callback will get initialized !
			console.log('MyPromise -> resolve : setTimeout called ..');
			callback(value);
		}, 0);
	}

	fn(resolve);
}

// use promise in your methods !!

function doSomething(){// define
	console.log('doSomething called ..');
	return new MyPromise(function( resolve ){
		console.log('MyPromise executor called ..' );
		var fun_output = 42;
		resolve( fun_output );
	});
}

var pp = doSomething();

// fails as callback is not initialized !!
// global.setTimeout(function(){
// 	pp.then(function(value){// call with then
// 		// console.log('then:listener part called ..');
// 		console.log(" -> ", value);
	
// 	});
// }, 0);


console.log("calling then noww ...... ");
console.log("calling then noww ...... ");
console.log("calling then noww ...... ");
console.log("calling then noww ...... ");
pp.then(function(value){// call with then
	console.log('then:listener part called ..');
	console.log(" -> ", value);
});

module.exports = MyPromise;
console.log("module exported ....");