var app = angular.module('chatApp', ['firebase']);

var 
app.controller('ChatController', function($scope, $firebaseArray) {
    var ref = firebase.database().ref().child('messages');
    var ref1 = firebase.database().ref().child('name');
    $scope.messages = $firebaseArray(ref);
    $scope.name1 = $firebaseArray(ref);

    $scope.send = function() {
        $scope.messages.$add({
            message: $scope.messageText,
            date: Date.now(),
            name1: $scope.Username
        })
    }

})
