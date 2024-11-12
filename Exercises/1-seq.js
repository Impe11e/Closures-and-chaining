'use strict';

const seq = (f) => (g) => (typeof g !== 'number' ? seq((x) => f(g(x))) : f(g));

module.exports = { seq };
