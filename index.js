var Pending = 0;
var	Fulfilled = 1;
var	Rejected = 2;

function MyPromise( fn ){// may be executer function !
	var callback = null;
	this.then = function( cb ){
		callback = cb;
	}

	function resolve(value){
		setTimeout(function(){
			callback(value);
		}, 0);
	}

	fn(resolve);
}

// use promise in your methods !!

// function doSomething(){// define
// 	return new Promise(function( resolve ){
// 		setTimeout(function(){
// 			var fun_output = 42;
// 			resolve( fun_output );
// 		}, 3000);
// 	});
// }

// var pp = doSomething();

// pp.then(function(value){// call with then
// 	console.log(" -> ", value);
// });
