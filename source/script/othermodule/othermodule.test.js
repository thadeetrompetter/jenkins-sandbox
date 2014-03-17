describe('the other module', function(){
	describe('the getOtherName method', function(){
		it('has at least one comma in the returned value', function(){
			expect(/,/g.test(otherModule.getOtherName('henk', 'de vries'))).toBe(true);
		});
		it('returns a value that consists of uppercase characters', function(){
			var ups = otherModule.getOtherName('henk', 'de vries').toUpperCase();
			expect(otherModule.getOtherName('henk', 'de vries')).toEqual(ups);
		});
	})
});