import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  fullName = function ($scope: { firstName: string; lastName: string; }) {
    return $scope.firstName + " " + $scope.lastName};
    
  myUrl = function ($scope: { myUrl: string; }, $location: { absUrl: () => any; }, $timeout: (arg0: () => void, arg1: number) => void) {
    $scope.myUrl = $location.absUrl();
    $timeout(function () {
      $scope.myUrl = "is that ok?";
    }, 2000);}
}