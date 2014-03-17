var myModule = (function () {
	var myModule = {};
	var myConfigVar = 'some configuration';

	function getConfigVar(someValue){
		return someValue ? someValue : myConfigVar;
	}
	myModule.getConfigVar = getConfigVar;
	return myModule;
}());

var hallo = function(name){
	return name;
}