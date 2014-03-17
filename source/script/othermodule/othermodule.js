var otherModule = (function () {
	var otherModule = {};

	function getOtherName(firstName, lastName){
		return [firstName, lastName].join(',').toUpperCase();
	}

	otherModule.getOtherName = getOtherName;

	return otherModule;
}());