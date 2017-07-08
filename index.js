"use strict";

/**
 * Runs a script that exports an `async` function.
 * 
 * @param {string} id 
 * @param {any[]} [args] 
 * @param {function} [cb] 
 */

async function runAsyncFile( id, args = [], cb = 0 ) {

    if ( arguments.length === 2 && typeof args === "function" ) {

        cb = args;
        args = [];

    }

    if ( ! Array.isArray( args ) ) args = [ args ];

    let result, error;
    const report = typeof cb === "function";

    try {

        result = await require( id ).apply( args );
        if ( report ) cb( void 0, result );

    } catch ( exception ) {

        error = exception;
        if ( report ) cb( error );

    }

    return { result, error };

}

module.exports = runAsyncFile;
module.exports.default = runAsyncFile;
