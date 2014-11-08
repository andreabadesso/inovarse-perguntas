angular.module('inovarse.controllers.TemasCtrl', [
        'ngMaterial',
        'inovarse.services.TemasService'
])
            .controller('TemasCtrl', TemasCtrl);

TemasCtrl.$inject = ['$scope', '$http', '$stateParams', 'TemasService'];

function TemasCtrl($scope, $http, TemasService) {
    $http.get('http://inovarse.lab21k.com.br/temas/')
            .then(function(res) {
                if (typeof res.data === 'object') {
                    $scope.temas = res.data;
                } else {
                }
            });

    setInterval(function() {
        $http.get('http://inovarse.lab21k.com.br/temas/')
                .then(function(res) {
                    if (typeof res.data === 'object') {
                        $scope.temas = res.data;
                    } else {
                    }
                });
    }, 5000);
}
