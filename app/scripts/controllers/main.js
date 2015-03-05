'use strict';

/**
 * @ngdoc function
 * @name lianacorbApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lianacorbApp
 */
angular.module('lianacorbApp').controller('MainCtrl', function ( ) {
	var vm = this;

	vm.activePage = 'home';

	vm.imageNames = [ '1', '2', '3', '4', '5', '6', '7', '10',
			'11', '12' ];

    vm.images = [];

    for (var i in vm.imageNames) {
    	vm.images.push(
    		{
	      		'url': '../../images/gallery/' + vm.imageNames[i] + '.jpg',
	    	}
	    );
    }
});