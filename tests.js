var MyPromise = require("./index.js");

// use promise in your methods !!

function doSomething(){// define
	return new MyPromise(function( resolve ){
		var fun_output;
		console.log("simulating execution delay with 3 seconds..");

		global.setTimeout(function(){
			fun_output = 42;
			resolve( fun_output );
		}, 2000);
	});
}

var pp = doSomething();


//	1. fails as callback is not initialized !!
/*
	global.setTimeout(function(){
		pp.then(function(value){// call with then
			// console.log('then:listener part called ..');
			console.log("async then : -> ", value);
		
		});
	}, 0);
*/


// 2. !!
/*
	pp.then(function(value){// call with then
		console.log("1. -> ", value);
	});

	pp.then(function(value){// call with then
		console.log("2. -> ", value);
	});
 */


// 3. chained then !!

function tenTimes( value ){
	displayValue( value );
	return value *= 10;
}

function displayValue( value ){
	console.log(' --> ', value);
}
console.log("chained then ...");
pp.then(tenTimes).then(tenTimes).then(displayValue);