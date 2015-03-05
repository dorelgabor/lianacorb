'use strict';

/**
 * @ngdoc function
 * @name lianacorbApp.controller:GalerieCtrl
 * @description
 * # GalerieCtrl
 * Controller of the lianacorbApp
 */
angular.module('lianacorbApp').controller('GalerieCtrl', function ( $window ) {
	var vm = this;

	vm.fullscreen = false;

	vm.exitFullscreen = function() {
		vm.fullscreen = false;
	};

	vm.goFullscreen = function( imgUrl ) {
		$window.scrollTo(0,0);
		vm.activeImg = imgUrl;
		vm.fullscreen = true;
	};

	vm.loadNext = function() {
		for (var i = 0; i < vm.images.length; i++) {
			if ( vm.activeImg === vm.images[i].url )
			{
				if ( i === vm.images.length - 1 )
				{
					vm.activeImg = vm.images[ 0 ].url;
					break;
				}
				else
				{
					vm.activeImg = vm.images[i + 1].url;
					break;
				}
			}
		}
	};

	vm.loadPrevious = function() {
		for (var i = 0; i < vm.images.length; i++) {
			if ( vm.activeImg === vm.images[i].url )
			{
				if ( i === 0 )
				{
					vm.activeImg = vm.images[ vm.images.length - 1 ].url;
					break;
				}
				else
				{
					vm.activeImg = vm.images[i - 1].url;
					break;
				}
			}
		}
	};

	vm.keyPress = function( ev ) {
            vm.pressed = ev.which;
        if ( ev.which === 37 ) 
        {
            vm.loadPrevious();
        }
        else if ( ev.which === 39 )
        {
            vm.loadNext();
        }
        else if ( ev.which === 27 )
        {
            vm.exitFullscreen();
        }
    };

    vm.imageNames = [ '1', '2', '3', '4', '5', '6', '7', '10',
			'11', '12', '14', '15', '19', '20', '21', '22',
			'23', '24', '25', '27', '29', '30', '31', '32',
			'33', '34', '35', '36', '37', '38', '39', '40',
			'41', '42' ];

    vm.images = [];

    for (var i in vm.imageNames) {
    	vm.images.push(
    		{
	      		'url': '../../images/gallery/' + vm.imageNames[i] + '.jpg',
	     	 	'thumbnail': '../../images/gallery/thumbnails/' + vm.imageNames[i] + '.jpg'
	    	}
	    );
    }
});
