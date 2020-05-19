var app = angular.module('bonusApp', []);

app.controller('mainCtrl', ["$scope", function ($scope) {

    $scope.ac ="ac";
    $scope.mensaje = "hello world";
    $scope.titulo = "Esto es un titulo";
    $scope.subtitulo = "Es es un subitulo en el app.js";

    $scope.mostrarAlerta = function () {
        swal($scope.mensaje);
    }

    $scope.mostrarSubtitulo = function () {
        swal("Are you sure you want to do this?", {
            buttons: ["Oh noez!", "Aww yiss!"],
        });
    }


    $scope.confirmacion = function () {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                    $scope.ac="borrado";
                    $scope.$apply();
                } else {
                    swal("Your imaginary file is safe!");
                }
            });
    }
}]);
