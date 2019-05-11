angular.module('app').controller('ModalCtrl', ['$scope','$timeout', function($scope,$timeout) {

    $('#Modal').on('shown.bs.modal', function (e) {
        console.log("am afisat modal")
        
       $timeout(function(){
           
        $scope.informationBoddy  =   $scope.input
        console.log($scope.input)      
    },100)
      })

    console.log("@salut")
}]);
