(function() {
	var home = angular.module('myApp.index', []);

	home.controller('TabController', function(){
    this.tab = 1;

    this.setTab = function(newValue){
      this.tab = newValue;
      console.log("selected tab is " + newValue);
    };

    this.isSet = function(tabName){
      return this.tab === tabName;
    };
  });
})();

