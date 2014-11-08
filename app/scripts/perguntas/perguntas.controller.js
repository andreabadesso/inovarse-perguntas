angular.module('inovarse.controllers.PerguntasCtrl', [
        'ngMaterial',
        'inovarse.services.PerguntasService'
])
            .controller('PerguntasCtrl', PerguntasCtrl);

PerguntasCtrl.$inject = ['$scope', '$stateParams', 'PerguntasService'];

function PerguntasCtrl($scope, $stateParams, PerguntasService) {
    var id = parseInt($stateParams.id, 10);

    PerguntasService.findPerguntas(id)
                    .then(function(perguntas) {
                        $scope.perguntas = perguntas;
                    });

    setInterval(function() {
            PerguntasService.findPerguntas(id)
                                .then(function(perguntas) {
                                    $scope.perguntas = perguntas;
                                });
    }, 5000);
}
