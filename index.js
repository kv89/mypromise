'use strict';

function MyPromise( fn ){// executer function !
	var state = "pending";
	var deferred;
	var value;

	this.then = function( onResolved ){
		handle( onResolved );
	};

	function resolve( newValue ){
		value = newValue;
		state = "resolved";
		// console.log("on resolved state - ", state);

		if( deferred ) { // here, if deferred == null, means then is not called by user, if deferred != null then it is equal to callback - ie. onResolved, ... 
			handle( deferred );// deferred != null, so it has callback assigned, so execute it... as state is resolved !!
		}
	}

	function handle( callback ){// callback can hold __null__ ie, deferred or __onResolved__ function
		// console.log("state - ", state);
		if( state === 'pending' ) {
			deferred = callback;
			return;
		}
		callback( value );
	}

	fn(resolve);
}

module.exports = MyPromise;