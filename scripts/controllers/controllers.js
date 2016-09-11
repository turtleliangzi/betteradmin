'use strict';
/*全局控制器*/
betterlife.controller('MainCtrl', ["$scope",  "$window", function(a, d) {
    var f = !!navigator.userAgent.match(/MSIE/i) || !!navigator.userAgent.match(/Trident.*rv:11\./);
    f && angular.element(d.document.body).addClass("ie") && angular.element(d.document.body).addClass("smart"), a.app = {
        name: "BetterLife",
        version: "1.0",
        color: {
            primary: "#155abb",
            info: "#2772ee",
            success: "#4bb622",
            warning: "#f88311",
            danger: "#e11144",
            inverse: "#a66bee",
            light: "#f1f2f3",
            dark: "#202a3a"
        },
        settings: {
            headerColor: "bg-primary",
            headerFixed: !0,
            headerShadow: !0,
            asideColor: "bg-dark lt",
            asideTop: !0
        }
    }, a.options = {
        headerColor: ["bg-primary lt", "bg-primary ", "bg-primary dk", "bg-info lt", "bg-info", "bg-info dk", "bg-success lt", "bg-success ", "bg-success dk", "bg-inverse lt", "bg-inverse ", "bg-inverse dk", "bg-dark lt", "bg-dark", "bg-dark dk ", "bg-black ", "bg-black dk", "bg-white box-shadow-md"],
        asideColor: ["bg-primary dk", "bg-info dk", "bg-success dk", "bg-dark lt", "bg-dark", "bg-dark dk", "bg-black lt", "bg-black", "bg-black dk", "bg-white", "bg-light", "bg-light dk"]
    }

}]);

/*用户控制器*/
betterlife.controller("UserlistCtrl", ["$scope",  "Users", function($scope,  Users) {
    $scope.title = "用户列表";
    //$http通信
    $scope.everyPage = 1;
    Users.allUser($scope, 1, $scope.everyPage);
    $scope.active = [];
    $scope.active[1] = "active";
    $scope.everyPageChange = function () {
        $scope.everyPage = parseInt($scope.everyPage);
        Users.allUser($scope, 1, $scope.everyPage);
        $scope.active = [];
        $scope.active[1] = "active";
    }
    $scope.toPage = function (currentPage) {
        Users.allUser($scope, currentPage, $scope.everyPage);
        $scope.active = [];
        $scope.active[currentPage] = "active";
    }
}]);
betterlife.controller("AdminlistCtrl", ["$scope", "Users", function($scope, Users) {
    $scope.title = "管理员列表";
    $scope.everyPage = 4; 
    Users.allAdmins($scope, 1, $scope.everyPage);
    $scope.active = [];
    $scope.active[1] = "active";
    $scope.everyPageChange = function () {
        $scope.everyPage = parseInt($scope.everyPage);
        Users.allAdmins($scope, 1, $scope.everyPage);
        $scope.active = [];
        $scope.active[1] = "active";
    }
    $scope.toPage = function(currentPage) {
        Users.allAdmins($scope, currentPage, $scope.everyPage);
        $scope.active = [];
        $scope.active[currentPage] ="active";
    }


}]);
betterlife.controller("AddadminCtrl", ["$scope", "Users", function($scope, Users) {
    $scope.title = "添加管理员";

    $scope.addadmin = function () {

        Users.addAdmin($scope, $scope.admin.nickname, $scope.admin.password);

    }
}]);


/*用户组控制器*/
betterlife.controller("GrouplistCtrl", ["$scope", "Groups", function($scope, Groups) {
    $scope.title = "用户组列表";

    $scope.everyPage = 4; 
    Groups.groupList($scope, 1, $scope.everyPage);
    $scope.active = [];
    $scope.active[1] = "active";
    $scope.everyPageChange = function () {
        $scope.everyPage = parseInt($scope.everyPage);
        Groups.groupList($scope, 1, $scope.everyPage);
        $scope.active = [];
        $scope.active[1] = "active";
    }
    $scope.toPage = function(currentPage) {
        Groups.groupList($scope, currentPage, $scope.everyPage);
        $scope.active = [];
        $scope.active[currentPage] ="active";
    }
}]);

/*权限控制器*/
betterlife.controller("PermissionlistCtrl", ["$scope", "Permission", '$location', function($scope, Permission, $location) {
    $scope.title = "权限列表";
    $scope.everyPage = 4;  
    Permission.permissionList($scope, 1, $scope.everyPage);
    $scope.active = []; 
    $scope.active[1] = "active";
    $scope.everyPageChange = function () {
        $scope.everyPage = parseInt($scope.everyPage);
        Permission.permissionList($scope, 1, $scope.everyPage);
        $scope.active = []; 
        $scope.active[1] = "active";
    }   
    $scope.toPage = function(currentPage) {
        Permission.permissionList($scope, currentPage, $scope.everyPage);
        $scope.active = []; 
        $scope.active[currentPage] ="active";
    }   
    $scope.isAble = function(pid, pstatus) {
        if (pstatus == 1) {
            Permission.disablePermission($scope, pid);
        } else {
            Permission.enablePermission($scope, pid);
        }
    }
    $scope.editPermission = function(pid, pname) {
        $location.path('/permission/editpermission/'+pid+'/'+pname);
    }

}]);
betterlife.controller("AddpermissionCtrl", ["$scope", 'Permission', '$stateParams', function($scope, Permission, $stateParams) {
    $scope.title = "添加权限";     

    $scope.addpermission = function () {
        Permission.addPermission($scope, $scope.pname);
    }
}]);
betterlife.controller("EditpermissionCtrl", ["$scope", 'Permission', '$stateParams', '$location', function($scope, Permission, $stateParams, $location) {
    $scope.title = "编辑权限";
    $scope.pid = $stateParams.pid;
    $scope.pname = $stateParams.pname;

    $scope.editpermission = function() {
        Permission.editPermission($scope, $scope.pid, $scope.pname);
    }
}]);

/*分类管理*/
betterlife.controller("SortlistCtrl", ["$scope", 'Category', '$location', function($scope, Category, $location) {
    $scope.title = "分类列表";

    $scope.everyPage = 4;
    Category.categoryList($scope, 1, $scope.everyPage);
    $scope.active = [];
    $scope.active[1] = "active";
    $scope.everyPageChange = function () {
        $scope.everyPage = parseInt($scope.everyPage);
        Category.categoryList($scope, 1, $scope.everyPage);
        $scope.active = [];
        $scope.active[1] = "active";
    }
    $scope.toPage = function(currentPage) {
        Category.categoryList($scope, currentPage, $scope.everyPage);
        $scope.active = [];
        $scope.active[currentPage] ="active";
    }

    $scope.showType = [];
    $scope.isShow = [];
    $scope.showTags = function (index) {
        if ($scope.isShow[index]) {
            $scope.isShow[index] = false;
            $scope.showType[index] = 'plus';      
        } else {
            $scope.isShow[index] = true;
            $scope.showType[index] = 'minus';
        }
    }

    $scope.addSign = function(categoryid, cname) {
        $location.path('/sort/addsign/'+ categoryid + '/'+ cname );           
    }
    $scope.editSort = function(categoryid, cname) {
        $location.path('/sort/editsort/'+ categoryid + '/' + cname);
    }
    $scope.editSign = function(signid, signname, categoryid) {
        $location.path('/sort/editsign/'+ signid + '/' + signname + '/' + categoryid);
    }
    $scope.isCategoryAble = function(categoryid, cstatus) {
        if (cstatus == 1) {
            Category.disableCategory($scope, categoryid);
        } else {
            Category.enableCategory($scope, categoryid);
        }
    }
    $scope.isSignAble = function(signid, sstatus) {
        if (sstatus == 1) {
            Category.disableSign($scope, signid);
        } else {
            Category.enableSign($scope, signid);
        }
    }
}]);
betterlife.controller("AddsortCtrl", ["$scope", "Category", function($scope, Category) {
    $scope.title = "添加分类";

    $scope.addcategory = function () {
        Category.addCategory($scope, $scope.cname);    
    }
}]);
betterlife.controller("AddsignCtrl", ["$scope", "Category", '$stateParams', function($scope, Category, $stateParams) {
    $scope.title = "添加标签";

    $scope.categoryid = $stateParams.categoryid;
    $scope.cname = $stateParams.cname;
    $scope.addsign = function () { 
        Category.addSign($scope, $scope.categoryid, $scope.signname);
    }
}]);
betterlife.controller("EditsortCtrl", ["$scope", "Category", "$stateParams", function($scope, Category, $stateParams) {
    $scope.title = "编辑分类";
    $scope.categoryid = $stateParams.categoryid;
    $scope.cname = $stateParams.cname;
    $scope.editSort = function () {
        Category.editSort($scope, $scope.categoryid, $scope.cname);
    }
}]);
betterlife.controller("EditsignCtrl", ["$scope", "Category", "$stateParams", function($scope, Category, $stateParams) {
    $scope.title = "编辑标签";
    $scope.signid = $stateParams.signid;
    $scope.signname = $stateParams.signname;
    $scope.categoryid = $stateParams.categoryid;
    $scope.editSign = function () {
        Category.editSign($scope, $scope.signid, $scope.signname, $scope.categoryid);   
    }
}])
