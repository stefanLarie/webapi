angular.module('app').controller('InportCtrl', ['$scope','$http','$state', function($scope,$http,$state) {
 var $inport=this;
 var vehicleInfo={};
 $scope.output='hello';
$inport.onClick =function(){

    $http({method:'get',url:'https://codepen.io/jobs.json'}).then(function(res){
        console.warn("status:" + res);
        $scope.vehicleInfo=res;
      // $scope.information=$scope.input
        $scope.output=res.plateNumber;
       // $state.go('app.home')

})
.catch (function(error){

    console.log("error");
})
.finally(function(){
    console.log("finnaly");
})

 }  
}]);
