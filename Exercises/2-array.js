'use strict';

const array = () => {
    const data = [];
    const get = (index) => data[index];
    get.pop = () => data.pop();
    get.push = (el) => data.push(el);
    return get;
};
  
module.exports = { array };
