describe('myModule', function(){
	describe('the getConfigVar method', function(){

		it('returns a string', function(){
			expect(myModule.getConfigVar('thadee')).toBe('thadee');
		});
	});
});