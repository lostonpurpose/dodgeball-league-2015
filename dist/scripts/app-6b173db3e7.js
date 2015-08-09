/******/!function(t){function e(a){if(n[a])return n[a].exports;var o=n[a]={exports:{},id:a,loaded:!1};return t[a].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}// webpackBootstrap
/******/
var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}var o=n(1),r=a(o),i=n(2),l=a(i),s=n(3),u=a(s),c=n(4),d=a(c),m=n(5),p=a(m),f=n(6),g=a(f),h=n(7),b=a(h),v=n(8),y=a(v);angular.module("dodgeballLeague2015",["ngAnimate","ngCookies","ngTouch","ngSanitize","restangular","ui.router","md.data.table","ngMaterial","smoothScroll"]).constant("malarkey",malarkey).constant("toastr",toastr).constant("moment",moment).config(r["default"]).config(l["default"]).run(u["default"]).service("githubContributor",p["default"]).service("webDevTec",g["default"]).controller("MainController",d["default"]).directive("acmeNavbar",function(){return new b["default"]}).directive("acmeMalarkey",function(){return new y["default"](malarkey)})},function(t,e){"use strict";function n(t,e,n){"ngInject";e.debugEnabled(!0),n.options.timeOut=3e3,n.options.positionClass="toast-top-right",n.options.preventDuplicates=!0,n.options.progressBar=!0,t.theme("default").primaryPalette("yellow").accentPalette("red")}Object.defineProperty(e,"__esModule",{value:!0}),n.$inject=["$mdThemingProvider","$logProvider","toastr"],e["default"]=n,t.exports=e["default"]},function(t,e){"use strict";function n(t,e){"ngInject";t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),e.otherwise("/")}Object.defineProperty(e,"__esModule",{value:!0}),n.$inject=["$stateProvider","$urlRouterProvider"],e["default"]=n,t.exports=e["default"]},function(t,e){"use strict";function n(t){"ngInject";t.debug("runBlock end")}Object.defineProperty(e,"__esModule",{value:!0}),n.$inject=["$log"],e["default"]=n,t.exports=e["default"]},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function o(t){"ngInject";var e=this;n(this,o),t.get("assets/data.json").then(function(t){e.data=t.data})};a.$inject=["$http"],e["default"]=a,t.exports=e["default"]},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),o=function(){function t(e,a){"ngInject";n(this,t),this.$http=a,this.apiHost="https://api.github.com/repos/Swiip/generator-gulp-angular"}return t.$inject=["$log","$http"],a(t,[{key:"getContributors",value:function(t){var e=this;return t||(t=30),this.$http.get(this.apiHost+"/contributors?per_page="+t).then(function(t){return t.data})["catch"](function(t){e.$log.error("XHR Failed for getContributors.\n"+angular.toJson(t.data,!0))})}}]),t}();e["default"]=o,t.exports=e["default"]},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),o=function(){function t(){"ngInject";n(this,t),this.data=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Angular Material Design",url:"https://material.angularjs.org/#/",description:"The Angular reference implementation of the Google's Material Design specification.",logo:"angular-material.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"},{title:"ES6 (Babel formerly 6to5)",url:"https://babeljs.io/",description:"Turns ES6+ code into vanilla ES5, so you can use next generation features today.",logo:"babel.png"},{key:"jade",title:"Jade",url:"http://jade-lang.com/",description:"Jade is a high performance template engine heavily influenced by Haml and implemented with JavaScript for node.",logo:"jade.png"}]}return a(t,[{key:"getTec",value:function(){return this.data}}]),t}();e["default"]=o,t.exports=e["default"]},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function r(){"ngInject";n(this,r);var t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:o,controllerAs:"vm",bindToController:!0};return t},o=function i(t){"ngInject";n(this,i),this.relativeDate=t(this.creationDate).fromNow()};o.$inject=["moment"],e["default"]=a,t.exports=e["default"]},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),o=function i(t){"ngInject";function e(e,n,a,o){var r=void 0,i=t(n[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});n.addClass("acme-malarkey"),angular.forEach(e.extraValues,function(t){i.type(t).pause()["delete"]()}),r=e.$watch("vm.contributors",function(){angular.forEach(o.contributors,function(t){i.type(t.login).pause()["delete"]()})}),e.$on("$destroy",function(){r()})}n(this,i);var a={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:e,controller:r,controllerAs:"vm"};return a};o.$inject=["malarkey"];var r=function(){function t(e,a){"ngInject";n(this,t),this.$log=e,this.contributors=[],this.activate(a)}return t.$inject=["$log","githubContributor"],a(t,[{key:"activate",value:function(t){var e=this;return this.getContributors(t).then(function(){e.$log.info("Activated Contributors View")})}},{key:"getContributors",value:function(t){var e=this;return t.getContributors(10).then(function(t){return e.contributors=t,e.contributors})}}]),t}();e["default"]=o,t.exports=e["default"]}]),angular.module("dodgeballLeague2015").run(["$templateCache",function(t){t.put("app/components/navbar/navbar.html",'<md-toolbar layout="row" layout-align="center center"><md-button href="https://github.com/Swiip/generator-gulp-angular">Gulp Angular</md-button><section flex="" layout="row" layout-align="left center"><md-button href="#" class="md-raised">Home</md-button><md-button href="#" class="md-raised">About</md-button><md-button href="#" class="md-raised">Contact</md-button></section><md-button class="acme-navbar-text">Application was created {{ vm.relativeDate }}.</md-button></md-toolbar>'),t.put("app/main/main.html",'<md-content><section class="jumbotron"><div class="text"><h1>Tokyo dodgeball league 2015!</h1></div></section><md-toolbar layout="row" layout-align="space-around center"><section flex="" layout="row" layout-align="space-around center"><md-button href="#" scroll-to="league" class="md-raised md-accent">League</md-button><md-button href="#" scroll-to="schedule" class="md-raised md-accent">Schedule</md-button></section></md-toolbar><md-content layout-fill=""><section id="league" class="md-whiteframe-z1 content"><md-toolbar class="md-primary md-default-theme"><div class="md-toolbar-tools"><h3>League</h3></div></md-toolbar><md-subheader class="md-accent">Current Standings</md-subheader><md-content layout="" layout-align="center center" class="content"><md-data-table-container><table md-data-table=""><thead><tr><th name="Team"></th><th numeric="" name="Points"></th></tr></thead><tbody><tr ng-repeat="team in main.data.league | orderBy: \'- points\'"><td>{{team.name}}</td><td>{{team.points}}</td></tr></tbody></table></md-data-table-container></md-content></section><section id="schedule" class="md-whiteframe-z1 content"><md-toolbar class="md-primary md-default-theme"><div class="md-toolbar-tools"><h3>Schedule</h3></div></md-toolbar><md-subheader class="md-accent">Matches</md-subheader><md-content layout="" layout-padding="" layout-align="center center" class="content"><md-data-table-container class="schedule"><table md-data-table=""><thead></thead><tbody><tr ng-repeat="match in main.data.schedule"><td>{{match.date}}</td><td>{{match.first}}</td><td><span class="versus">VS</span></td><td>{{match.second}}</td></tr></tbody></table></md-data-table-container></md-content></section></md-content></md-content>')}]);