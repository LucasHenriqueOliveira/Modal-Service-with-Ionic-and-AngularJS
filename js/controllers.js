(function () {
'use strict';

	angular
		.module('App.controllers')
		.controller('ModalCtrl', [ '$scope', appModalService, ModalCtrl 
	]);
	
	function ModalCtrl($scope, appModalService){
		
		$scope.openModal = function(parameter) {		
			appModalService
				.show('templates/modal.html', 'ModalCtrl', parameter)
				.then(function(result) {
				     // result from modal controller: $scope.closeModal(result) or <as name here>.closeModal(result) [Only on template]
				}, function(err) {
				     // error
				});
		}
		
	});
})();