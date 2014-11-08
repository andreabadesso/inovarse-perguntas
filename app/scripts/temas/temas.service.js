angular.module('inovarse.services.TemasService', [])
    .factory('TemasService', TemasService);

TemasService.$inject = ['$http', '$q'];

function TemasService($http, $q) {
    return {
        findTemas: findTemas
    };

    function findTemas() {
        var p = $q.defer();

        $http.get('http://inovarse.lab21k.com.br/temas/')
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
