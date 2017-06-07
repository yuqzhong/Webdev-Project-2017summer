// These code snippets use an open-source library. http://unirest.io/nodejs

// const app = require('../../express');



// app.post('https://bmi.p.mashape.com/', testApi);
//
// function testApi(req, res) {
    // var weight = req.body.weight;
    // var height = req.body.height;
    // var sex = req.body.sex;
    // var age = req.body.age;
    // var waist = req.body.waist;
    // var hip = req.body.hip;


// }
(function () {
    angular
        .module('WAM')
        .service('testService', testService);

    function testService($http) {

        this.countBmi = countBmi;

        var unirest = require('unirest');

        function countBmi() {
            unirest.post("https://bmi.p.mashape.com/")
                .header("X-Mashape-Key", "XW5gPJqz7PmshypQe1SzDbLzDIxvp1Bf6F7jsntRZbPSjSpS2V")
                .header("Content-Type", "application/json")
                .header("Accept", "application/json")
                .send({"weight":{"value":"85.00","unit":"kg"},"height":{"value":"170.00","unit":"cm"},"sex":"m","age":"24","waist":"34.00","hip":"40.00"})
                .end(function (result) {
                    console.log(result.status, result.headers, result.body);
                });
        }



        // this.searchPhotos = searchPhotos;
        // var key = "58680d9bb2d407d0d31f21c5fccf48b1";
        // var secret = "46e1a219c1e4307b";
        // var urlBase = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT";
        //
        // function searchPhotos(searchTerm) {
        //     var url = urlBase
        //         .replace("API_KEY", key)
        //         .replace("TEXT", searchTerm);
        //     return $http.get(url);
        // }

    }
})();
