(function(){

    angular.module('lunchJudge', [])
    .controller('lunchController', ['$scope',function($scope){
        $scope.name       = ""
        $scope.displayMsg = ""

        $scope.splitName = function () {
            var split = $scope.name.split(",")
            if ($scope.name.length === 0){
                $scope.displayMsg = "Please enter data first"
                $scope.color      = "Red"
                return
            }
            else if (split.length > 0 && split.length <= 3) {
                $scope.displayMsg = "Enjoy!";
            } else {
                $scope.displayMsg = "Too much!";
            }
            $scope.color      = "Green"
        }
    }]);

})();