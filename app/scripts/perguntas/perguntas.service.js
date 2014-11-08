angular.module('inovarse.services.PerguntasService', [])
    .factory('PerguntasService', PerguntasService);

    PerguntasService.$inject = ['$http', '$q'];

    function PerguntasService($http, $q) {
        return {
            findPerguntas: findPerguntas
        };

        function findPerguntas(id) {
            var p = $q.defer();

            $http.get('http://inovarse.lab21k.com.br/temas/' + id + '/perguntas')
                    .then(function(res) {
                        if (typeof res.data === 'object') {
                            p.resolve(res.data);
                        } else {
                            p.reject('Erro');
                        }
                    });
            return p.promise;
        }
    }
