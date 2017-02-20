const billingCycle = require('./billingCycle');

billingCycle.methods(['get', 'post', 'put', 'delete']);

module.exports = billingCycle;