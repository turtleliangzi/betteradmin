'use strict';

var betterlife = angular.module("betterlife", ['ui.router']);

betterlife.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("", "/app/dashboard");
    $stateProvider
        .state("app", {
            url: "/app",
            views: {
                "": {
                    templateUrl: "views/layout.html"   
                },
                aside: {
                    templateUrl: "views/partials/aside.nav.uikit.html"
                }

            }
        })
    .state("app.dashboard", {
        url: "/dashboard",
        templateUrl: "views/pages/dashboard.html"   
    })

    .state("user", {
        url: "/user",
        views: {
            "": {
                templateUrl: "views/layout.html"
            },
            aside: {
                templateUrl: "views/partials/aside.nav.uikit.html"
            }
        }     
    })
    .state("user.userlist", {
        url: "/userlist",
        templateUrl: "views/ui/user/userlist.html",
        controller: 'UserlistCtrl'   
    })
    .state("user.adminlist", {
        url: "/adminlist",
        templateUrl: "views/ui/user/adminlist.html",
        controller: "AdminlistCtrl"   
    })
    .state("user.addadmin", {
        url: "/addadmin",
        templateUrl: "views/ui/user/addadmin.html",
        controller: 'AddadminCtrl'   
    })

    .state("usergroup", {
        url: "/usergroup",
        views: {
            "": {
                templateUrl: "views/layout.html"
            },
            aside: {
                templateUrl: "views/partials/aside.nav.uikit.html"
            }
        }   
    })
    .state("usergroup.grouplist", {
        url: "/grouplist",
        templateUrl: "views/ui/usergroup/grouplist.html",
        controller: "GrouplistCtrl"   
    })

    .state("permission", {
        url: "/permission",
        views: {
            "": {
                templateUrl: "views/layout.html"
            },
            aside: {
                templateUrl: "views/partials/aside.nav.uikit.html"
            }      
        }   
    })
    .state("permission.permissionlist", {
        url: "/permissionlist",
        templateUrl: "views/ui/permission/permissionlist.html",
        controller: "PermissionlistCtrl"   
    })
    .state("permission.addpermission", {
        url: "/addpermission",
        templateUrl: "views/ui/permission/addpermission.html",
        controller: "AddpermissionCtrl"   
    })
    .state("permission.editpermission", {
        url: "/editpermission/:pid/:pname",
        templateUrl: "views/ui/permission/editpermission.html",
        controller: "EditpermissionCtrl"   
    })

    .state("sort", {
        url: "/sort",
        views: {
            "": {
                templateUrl: "views/layout.html"
            },
            aside: {
                templateUrl: "views/partials/aside.nav.uikit.html"
            }
        }   
    })
    .state("sort.sortlist", {
        url: "/sortlist",
        templateUrl: "views/ui/sort/sortlist.html",
        controller: 'SortlistCtrl'   
    })
    .state("sort.addsort", {
        url: "/addsort",
        templateUrl: "views/ui/sort/addsort.html",
        controller: 'AddsortCtrl'   
    })
    .state("sort.addsign", {
        url: "/addsign/:categoryid/:cname",
        templateUrl: "views/ui/sort/addsign.html",
        controller: 'AddsignCtrl'   
    })
    .state("sort.editsort", {
        url: "/editsort/:categoryid/:cname",
        templateUrl: "views/ui/sort/editsort.html",
        controller: 'EditsortCtrl'   
    })
    .state("sort.edtisign", {
        url: "/editsign/:signid/:signname/:categoryid",
        templateUrl: "views/ui/sort/editsign.html",
        controller: 'EditsignCtrl'   
    })
}])
