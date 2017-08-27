"use strict";

const promiseExample = require( "./promise" );

module.exports = async function asyncExample() {

    try {

        return await promiseExample();

    } catch ( error ) {

        throw error;

    }

};
