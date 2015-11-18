var assert = require('assert');
var add = function(a,b){
	return a+b;
}
describe('add',function () {
	it('adds two numbers',function () {
		assert.equal(5,add(2,3));
	});
	it('crashes for negative numbers',function () {
		assert.equal(0,add(-1,1));
	});
});