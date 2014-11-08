'use strict';

angular.module('inovarse', [
        'inovarse.controllers.MainCtrl',
        'inovarse.controllers.TemasCtrl',
        'inovarse.controllers.PerguntasCtrl',
        'ngMaterial',
        'ui.router'
    ])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('temas', {
                    url: '/',
                    templateUrl: 'app/scripts/temas/temas.html',
                    controller: 'TemasCtrl'
            })
            .state('perguntas', {
                    url: '/perguntas/:id',
                    templateUrl: 'app/scripts/perguntas/perguntas.html',
                    controller: 'PerguntasCtrl'
            });
        $urlRouterProvider.otherwise('/');
    });
