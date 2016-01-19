var app = angular.module('Analyzer', []);



app.controller('myCtrl', function($scope, $http) {
    $scope.funcao = function(){
        $http.get($scope.url).success(function(data) {
            $scope.myData = data;

            //$scope.asdf = $.parseHTML('<html><body><div class="class0"><h4>data1</h4><p class="class1">data2</p><div id="mydivid"><p>data3</p></div></div></body></html>');
            $scope.asdf = $.parseHTML(data);
            var doctypeObj = data.document.doctype;
            console.log(doctypeObj);

        }).error(function(data, status){
            $scope.status = status;
        });
    };

});
