'use strict';

betterlife.directive("uiNav", ["$timeout", function() {
    return {
        restrict: "AC",
        link: function(a, b) {
            b.find("a").bind("click", function() {
                var b = angular.element(this).parent();
                b.parent().find("li").removeClass("active"), b.toggleClass("active"), b.find("ul") && (a.app.asideCollapse = !1)
            })
        }

    }    
}]);

betterlife.directive("uiValidate", function() {
    return {
        restrict: "A",
        require: "ngModel",
        link: function(a, b, c, d) {
            function e(b) {
                return angular.isString(b) ? void a.$watch(b, function() {
                    angular.forEach(g, function(a) {
                        a(d.$modelValue)
                    })
                }) : angular.isArray(b) ? void angular.forEach(b, function(b) {
                    a.$watch(b, function() {
                        angular.forEach(g, function(a) {
                            a(d.$modelValue)
                        })
                    })
                }) : void(angular.isObject(b) && angular.forEach(b, function(b, c) {
                    angular.isString(b) && a.$watch(b, function() {
                        g[c](d.$modelValue)
                    }), angular.isArray(b) && angular.forEach(b, function(b) {
                        a.$watch(b, function() {
                            g[c](d.$modelValue)
                        })
                    })
                }))
            }
            var f, g = {},
            h = a.$eval(c.uiValidate);
            h && (angular.isString(h) && (h = {
                validator: h
            }), angular.forEach(h, function(b, c) {
                f = function(e) {
                    var f = a.$eval(b, {
                        $value: e
                    });
                    return angular.isObject(f) && angular.isFunction(f.then) ? (f.then(function() {
                        d.$setValidity(c, !0)
                    }, function() {
                        d.$setValidity(c, !1)
                    }), e) : f ? (d.$setValidity(c, !0), e) : (d.$setValidity(c, !1), e)
                }, g[c] = f, d.$formatters.push(f), d.$parsers.push(f)
            }), c.uiValidateWatch && e(a.$eval(c.uiValidateWatch)))
        }
    }
});

