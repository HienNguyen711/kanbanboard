(function(){
    'use strict'

    angular
        .module('scrumboard.demo')
        .service('Login', ['$http', '$location', Login]);

    function Login($http, $location ){
        //
        this.login = login;
        this.isLoggedIn = isLoggedIn;
        this.logout = logout;
        this.redirectIfNotLoggedIn = redirectIfNotLoggedIn;
        
        function login(creds){
            return $http.post('http://localhost:8000/auth_api/login/',creds)
                .then((res) => {
                    localStorage.currentUser = JSON.stringify(res.data)
                });
        }

        function isLoggedIn(){
            return !!localStorage.currentUser
        }

        function logout(){
            delete localStorage.currentUser;
            $http.get('http://localhost:8000/auth_api/logout/').then(() => {
                $location.url('/login');
            });
        }

        function redirectIfNotLoggedIn(){
            if(!isLoggedIn()){
                $location.url('/login')
            }
        }










    }

})