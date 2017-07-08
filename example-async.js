"use strict";

const examplePromise = require( "./example-promise" );

module.exports = async function example() {

    try {

        return await examplePromise();

    } catch ( error ) {

        throw error;

    }

};
