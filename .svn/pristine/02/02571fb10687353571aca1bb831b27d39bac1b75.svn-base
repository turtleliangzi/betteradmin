'use strict';

betterlife.factory("Users", function ($q, $http, ReturnService, HttpService) {
    return {
        allUser: function ($scope, currentPage, everyPage) {
            var d = $q.defer();
            var promise = d.promise;

            $http({
                method: "POST",
                url: "http://api.turtletl.com/home/user/getusers",
                data: {
                    "currentPage": currentPage,
                    "everyPage": everyPage,
                },
            })
                .success(function (data) {
                    $scope.users = data['users'];
                    var i = 1;
                    $scope.pageNumber = [];
                    for (i; i <= data['pageNumber']; i++) {
                        $scope.pageNumber.push(i);
                    }
                    d.resolve(data);
                })
                .error(function (data) {
                    d.reject(error);   
            });
            HttpService.httpPromise(promise);
        },

        allAdmins: function ($scope, currentPage, everyPage) {
            var d = $q.defer();
            var promise = d.promise;

            $http({
                method: "POST",
                url: "http://api.turtletl.com/home/user/getadmins",
                data: {
                    "currentPage": currentPage,
                    "everyPage": everyPage,
                },
            })
                .success(function (data) {
                    $scope.admins = data['admins'];
                    var i = 1;
                    $scope.pageNumber = [];
                    for (i; i <= data['pageNumber']; i++ ) {
                        $scope.pageNumber.push(i);
                    }

                    d.resolve(data);   
                })
                .error(function (data) {
                    d.reject(error);   
                });
            HttpService.httpPromise(promise);
        },

        addAdmin: function ($scope, nickname, password) {
            var d = $q.defer();
            var promise = d.promise;
            $http({
                method: "POST",
                url: "http://api.turtletl.com/home/user/addadmin",
                data: {
                    "nickname": nickname,
                    "password": password
                },
            })
                .success(function (response) { 
                    ReturnService.returnInfo(d, response, $scope, '/user/adminlist');
                });
            HttpService.httpPromise(promise);    
        }
    }   
});

betterlife.factory("Groups", function ($q, $http, HttpService) {
    return {
        groupList: function ($scope, currentPage, everyPage) {
            var d = $q.defer();
            var promise = d.promise;

            $http({
                method: "POST",
                url: "http://api.turtletl.com/home/usergroup/grouplist",
                data: {
                    "currentPage": currentPage,
                    "everyPage": everyPage,
                },
            })
                .success(function (data) {
                    $scope.grouplist = data['groupList'];
                    var i = 1;
                    $scope.pageNumber = [];
                    for (i; i <= data['pageNumber']; i++) {
                        $scope.pageNumber.push(i);
                    }
                    d.resolve(data);   
                })
                .error(function (data) {
                    d.reject(error);   
                });
            HttpService.httpPromise(promise);
        }
    }
})

betterlife.factory("Permission", function ($q, $http, HttpService, ReturnService, $location) {
    return {
        permissionList: function ($scope, currentPage, everyPage) {
            var d = $q.defer();
            var promise = d.promise;

            $http({
                method: "POST",
                url: "http://api.turtletl.com/home/permission/permissionlist",
                data: {
                    "currentPage": currentPage,
                    "everyPage": everyPage,
                },
            })
                .success(function (data) {
                    $scope.permissions = data['permissions'];
                    var i = 1;
                    $scope.pageNumber = [];
                    for (i; i <= data['pageNumber']; i++) {
                        $scope.pageNumber.push(i);
                    }
                    d.resolve(data);   
                })
                .error(function (data) {
                    d.reject(error);
                });

            HttpService.httpPromise(promise);
        },

        addPermission: function($scope, pname) {
            var d = $q.defer();
            var promise = d.promise;

            $http({
                method: "POST",
                url: "http://api.turtletl.com/home/permission/addpermission",
                data: {
                    pname: pname,
                },                 
            })
                .success(function (response) {
                    ReturnService.returnInfo(d, response, $scope, '/permission/permissionlist');
                });

            HttpService.httpPromise(promise);
        },

        editPermission: function($scope, pid, pname) {
            var d = $q.defer();
            var promise = d.promise;

            $http({
                method: "POST",
                url: "http://api.turtletl.com/home/permission/editpermission",
                data: {
                    pid: pid,
                    pname: pname,
                }
            })
                .success(function (response) {
                    ReturnService.returnInfo(d, response, $scope, '/permission/permissionlist');
                });

            HttpService.httpPromise(promise);
        },

        enablePermission: function($scope, pid) {
            var d = $q.defer();
            var promise = d.promise;

            $http({
                method: "POST",
                url: "http://api.turtletl.com/home/permission/enablepermission",
                data: {
                    pid: pid,
                }
            })
                .success(function (response) {
                    ReturnService.returnInfo(d, response, $scope, '/permission/permissionlist');   
                });

            HttpService.httpPromise(promise);
        },

        disablePermission: function($scope, pid) {
            var d = $q.defer();
            var promise = d.promise;

            $http({
                method: "POST",
                url: "http://api.turtletl.com/home/permission/disablepermission",
                data: {
                    pid: pid,
                }
            })
                .success(function (response) {
                   ReturnService.returnInfo(d, response, $scope, '/permission/permissionlist'); 
                });

            HttpService.httpPromise(promise);
        }

    }   
})

betterlife.factory("Category", function ($q, $http, HttpService, ReturnService) {
    return {
        categoryList: function($scope, currentPage, everyPage) {
            var d = $q.defer();
            var promise = d.promise;
            
            $http({
                method: "POST",
                url: "http://api.turtletl.com/home/category/categorylist",
                data: {
                    "currentPage": currentPage,
                    "everyPage": everyPage,
                },
            })

                .success(function (data) {
                    $scope.categorylist = data['categorylist'];
                    var i = 1;
                    $scope.pageNumber = [];
                    for (i; i <= data['pageNumber']; i++) {
                        $scope.pageNumber.push(i);
                    }
                    d.resolve(data);
                })            
                
                .error(function (data) {
                    d.reject(data);
                });

            HttpService.httpPromise(promise);
        },

        addCategory: function($scope, cname) {
            var d = $q.defer();
            var promise = d.promise;

            $http({
                method: "POST",
                url: "http://api.turtletl.com/home/category/addcategory",
                data: {
                    cname: cname,
                },
            })
                 .success(function (response) {
                     ReturnService.returnInfo(d, response, $scope, 'sort/sortlist');
                });
            HttpService.httpPromise(promise);
        },

        addSign: function($scope, categoryid, signname) {
            var d = $q.defer();
            var promise = d.promise;

            $http({
                method: "POST",
                url: "http://api.turtletl.com/home/category/addsign",
                data: {
                    categoryid: categoryid,
                    signname: signname,
                },
            })
                .success(function (response) {
                    ReturnService.returnInfo(d, response, $scope, '/sort/sortlist');
                });
            HttpService.httpPromise(promise);
        },
        editSort: function($scope, categoryid, cname) {
            var d = $q.defer();
            var promise = d.promise;

            $http({
                method: "POST",
                url: "http://api.turtletl.com/home/category/editcategory",
                data: {
                    categoryid: categoryid,
                    cname: cname,
                }
            })
                .success(function (response) {
                    ReturnService.returnInfo(d, response, $scope, '/sort/sortlist');   
                });

            HttpService.httpPromise(promise);
        },
        editSign: function($scope, signid, signname, categoryid) {
            var d = $q.defer();
            var promise = d.promise;

            $http({
                method: "POST",
                url: "http://api.turtletl.com/home/category/editsign",
                data: {
                    signid: signid,
                    signname: signname,
                    category: categoryid
                }
            })
                .success(function (response) {
                    ReturnService.returnInfo(d, response, $scope, '/sort/sortlist');
                });

            HttpService.httpPromise(promise);
        },
        enableCategory: function($scope, categoryid) {
            var d = $q.defer();
            var promise = d.promise;

            $http({
                method: "POST",
                url: "http://api.turtletl.com/home/category/enablecategory",
                data: {
                    categoryid: categoryid,
                }
            })
                .success(function (response) {
                       
                });

            HttpService.httpPromise(promise);
        },
        disableCategory: function($scope, categoryid) {
            var d = $q.defer();
            var promise = d.promise;

            $http({
                method: "POST",
                url: "http://api.turtletl.com/home/category/disablecategory",
                data: {
                    categoryid: categoryid,
                }
            })
                .success(function (response) {
                    
                });

            HttpService.httpPromise(promise);
        },
        enableSign: function($scope, signid) {
            var d = $q.defer();
            var promise = d.promise;

            $http({
                method: "POST",
                url: "http://api.turtletl.com/home/category/enablesign",
                data: {
                    signid: signid,
                }
            })
                .success(function (response) {
                    if (response['status'] != 1) {
                        ReturnService.returnInfo(d, response, $scope, '/sort/sortlist');
                    }
                });
            HttpService.httpPromise(promise);
        },
        disableSign: function($scope, signid) {
            var d = $q.defer();
            var promise = d.promise;

            $http({
                method: "POST",
                url: "http://api.turtletl.com/home/category/disablesign",
                data: {
                    signid: signid
                }
            })
                .success(function (response) {
                    if (response['status'] != 1) {
                        ReturnService.returnInfo(d, response, $scope, '/sort/sortlist');
                    }   
                });
            HttpService.httpPromise(promise);
        }   
    }   
})

betterlife.service("AlertService", function ($timeout, $location) {
    return {
        alertInfo: function ($scope, response, type, href) {
            $scope.alert = [];
            $scope.alert.push({content: response['message'], type: type});
            $timeout(function () {
                $scope.alert.splice(0, 1); 
                if (response['status'] == 1)
                    $location.path(href);
            }, 2000);
        }

    }   
})

betterlife.service("HttpService", function () {
    return {
        httpPromise: function (promise) {
            promise.success = function (fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function (fn) {
                promise.then(null, fn);
                return promise;
            }

            return promise;

        }
    }   
})

betterlife.service("ReturnService", function (AlertService) {
    return {
        returnInfo: function (d, response, $scope, href) {
            
            if (response['status'] == 1) {
                AlertService.alertInfo($scope, response, 'success', href);
                d.resolve(response['message']);
            } else if (response['status'] == 0) {
                AlertService.alertInfo($scope, response, 'warning', href);
                d.reject(response['message']);
            } else {
                AlertService.alertInfo($scope, response, 'danger', href);
                d.reject(response['message']);
            }
        }
    }   
})

