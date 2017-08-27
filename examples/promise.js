"use strict";

const fs = require( "fs" );
const path = require( "path" );

module.exports = function example() {

    const filename = path.join( __dirname, "..", "package.json" );
    return new Promise( ( resolve, reject ) => {

        fs.stat( filename, err => {

            const pkg = require( filename );

            err ? reject( err )
                : resolve( pkg.name + " " + pkg.version );

        } );

    } );

};
