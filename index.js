'use strict';

function MyPromise( fn ){// executer function !
	var state = "pending";
	var deferred;
	var value;

	this.then = function( onResolved ){// this to return a promise now !!
		// handle( onResolved );

		return new MyPromise(function( resolve ){
			handle({// this def / implementation has changed now !!
				onResolved: onResolved,
				resolve: resolve
			});
		});
	};

	function resolve( newValue ){
		value = newValue;
		state = "resolved";
		// console.log("on resolved state - ", state);

		if( deferred ) { // here, if deferred == null, means then is not called by user, if deferred != null then it is equal to callback - ie. onResolved, ... 
			handle( deferred );// deferred != null, so it has callback assigned, so execute it... as state is resolved !!
		}
	}

	function handle( handler ){
		// console.log("state - ", state);
		if( state === 'pending' ) {
			deferred = handler;
			return;
		}

		if(!handler.onResolved) {
			handler.resolve( value );// value is ready but 1st then not yet called, so executing 1st then's promise ... brain it.. :)
			return; // don't forget this !!
		}

		var retVal = handler.onResolved( value );
		handler.resolve( retVal );// inception, the movie!!  might help here  :D

		// callback( value );
	}

	fn(resolve);
}

module.exports = MyPromise;