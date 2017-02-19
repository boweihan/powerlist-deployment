webpackJsonp([0,4],{

/***/ 1000:
/***/ function(module, exports) {

module.exports = "@media (max-width: 992px) {\n    .calendar {\n      position: relative;\n      display: block;\n      padding: 20px;\n      background-color: #f5f5f5;\n      width: 100%;\n      height: 100vh;\n    }\n}\n\n@media (min-width: 992px) {\n    .calendar {\n      position: fixed;\n      top: 50px;\n      bottom: 0;\n      left: 700px;\n      display: block;\n      padding: 20px;\n      background-color: #f5f5f5;\n      width: calc(100% - 700px);\n    }\n}"

/***/ },

/***/ 1001:
/***/ function(module, exports) {

module.exports = ".vs-footer {\n    margin: 0;\n    padding: 5px;\n    text-align: center;\n    background-color: #2c6bd6;\n    opacity: 0.5;\n    position: fixed;\n    bottom: 0px;\n    width: 100%;\n    z-index: 1000;\n}\n\n.vs-footer > p {\n    color: white;\n    margin: 0;\n}"

/***/ },

/***/ 1002:
/***/ function(module, exports) {

module.exports = "/* ********************** LIST CODE ********************** */\n@media (max-width: 768px) {\n    .list {\n      position: relative;\n      display: block;\n      padding: 20px;\n      background-color: white;\n      width: 100%;\n      margin: auto;\n      padding-top: 5vh;\n      height: 100vh;\n    }\n}\n@media (min-width: 768px) and (max-width: 992px) {\n    .list {\n      position: relative;\n      display: block;\n      padding: 20px;\n      background-color: white;\n      width: 80%;\n      margin: auto;\n      padding-top: 5vh;\n      height: 100vh;\n    }\n}\n\n@media (min-width: 992px) {\n    .list {\n      position: fixed;\n      top: 50px;\n      bottom: 0;\n      left: 300px;\n      display: block;\n      padding: 20px;\n      background-color: white;\n      border-right: 1px solid #eee;\n      width: 400px;\n    }\n}\n\n.vs-list-item {\n  width: 100%;\n  padding: 3px;\n}\n\n.vs-list {\n  padding: 5px;\n  margin-bottom: 150px;\n}\n\n.vs-task-circle {\n  margin-right: 20px;\n  border-radius: 100%;\n  width: 20px;\n  height: 20px;\n  border: 2px solid #f3f3f3;\n  display: inline-block;\n  position: relative;\n  top: 5px;\n}\n  .vs-task-circle:hover {\n    background-color: black;\n  }\n\n.vs-task-description {\n  padding-bottom: 5px;\n}\n\n.vs-task-input {\n  position: absolute;\n  display: block;\n  width: calc(100% - 40px);\n  bottom: 125px;\n  border: 1px solid #f2f2f2;\n  padding: 5px;\n  font-size: 13px;\n  text-align: center;\n}\n\n.vs-task-title {\n  font-weight: 100;\n  font-size: 0.9em;\n}\n\n.vs-task-start {\n  margin: 0;\n  font-size: 0.5em;\n  font-weight: 100;\n  display: block;\n  position: relative;\n  text-align: left;\n  margin-left: 50px;\n}\n\n.vs-task-button {\n  position: absolute;\n  display: inline-block;\n  bottom: 59px;\n  left: 20px;\n  width: calc(100% - 40px);\n  /*background-color: #2c6bd6;*/\n  background-color: #D84D20;\n  border-radius: 0px;\n  padding: 10px;\n  border: none;\n  font-size: 0.8em;\n  font-weight: lighter;\n}\n\n/* ********************* sidebar code *********************** */\n@media (max-width: 768px) {\n    .sidebar {\n        position: relative;\n        height: calc(100vh - 50px);\n        display: block;\n        padding: 20px;\n        padding-left: 30px;\n        padding-top: 5vh;\n        overflow-x: hidden;\n        overflow-y: auto;\n        background-color: #f5f5f5;\n        border-right: 1px solid #eee;\n    }\n    .vs-category-form {\n        padding: 5px;\n        margin-top: 10px;\n    }\n    .vs-categories {\n        list-style: none;\n        width: 100%;\n        margin: auto;\n    }\n}\n@media (min-width: 768px) and (max-width: 992px) {\n    .sidebar {\n        position: relative;\n        height: calc(100vh - 50px);\n        display: block;\n        padding: 20px;\n        padding-left: 30px;\n        padding-top: 5vh;\n        overflow-x: hidden;\n        overflow-y: auto;\n        background-color: #f5f5f5;\n        border-right: 1px solid #eee;\n    }\n    .vs-category-form {\n        padding: 5px;\n        margin-left: 10%;\n        margin-top: 10px;\n    }\n    .vs-categories {\n        list-style: none;\n        width: 80%;\n        margin: auto;\n    }\n}\n\n@media (min-width: 992px) {\n    .sidebar {\n        position: fixed;\n        top: 50px;\n        bottom: 0;\n        left: 0;\n        display: block;\n        padding: 20px;\n        padding-left: 30px;\n        overflow-x: hidden;\n        overflow-y: auto;\n        background-color: #f5f5f5;\n        border-right: 1px solid #eee;\n        width: 300px;\n    }\n    .vs-category-form {\n        padding: 5px;\n        margin-top: 10px;\n    }\n    .vs-categories {\n        list-style: none;\n    }\n}\n\n.vs-category {\n    padding: 0px;\n}\n    .vs-category:hover {\n        background-color: white;\n        cursor: pointer;\n    }\n    .sidebar .active {\n        background-color: white;\n    }\n\n.vs-category-description {\n    font-weight: 600;\n    display: block;\n    padding: 5px;\n}\n\n.vs-category-add {\n    display: inline-block;\n    padding-left: 10px;\n    color: #D84D20;\n    font-weight: 100;\n    font-size: 0.8em;\n}\n\n.vs-category-input {\n    display: none;\n    margin-left: 10px;\n}\n\n.vs-category-input-cancel {\n    display: none;\n    color: black;\n    margin-left: 50px;\n    font-weight: 100;\n}\n    .vs-category-input-cancel:hover {\n        text-decoration: underline;\n    }\n\n.vs-category-title {\n    text-align: left;\n    font-weight: 700;\n    padding-left: 45px;\n    padding-bottom: 20px;\n    font-size: 1.3em;\n    /*color: #D84D20;*/\n    color: black;\n    border-bottom: 2px solid #f2f2f2;\n    margin-bottom: 0;\n}\n\n.vs-list-table {\n    max-height: calc(100vh - 300px);\n    overflow: scroll;\n}\n\n.vs-overdue {\n    color: red;\n    font-weight: 700;\n    padding-left: 10px;\n    font-style: italic;\n    font-size: 0.8em;\n}"

/***/ },

/***/ 1003:
/***/ function(module, exports) {

module.exports = "@media (max-width: 768px) {\n    .vs-logo {\n        font-size: 30vw;\n        color: white;\n        margin-top: 20vh;\n        margin-left: 10vw;\n        display: inline-block;\n    }\n}\n\n@media (min-width: 768px) {\n    .vs-logo {\n        font-size: 30vw;\n        color: white;\n        margin-top: 10vh;\n        margin-left: 10vw;\n        display: inline-block;\n    }\n}\n\n.vs-login {\n    /*background-image: url('../../../assets/powerlist.jpg');*/\n    background-color: #D84D20;\n    background-repeat: no-repeat;\n    background-size: cover;\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    overflow: scroll;\n}\n\n.vs-login-button {\n    display: block;\n    text-align: center;\n    margin: auto;\n    margin-top: 5vh;\n    margin-bottom: 50px;\n    border-radius: 5px;\n    font-weight: 200;\n    border: none;\n    background-color: white;\n    color: #D84D20;\n}\n\n.vs-login-button:hover {\n    background-color: #D84D20;\n    color: white;\n    font-weight: 700;\n}\n\n.vs-site-description {\n    margin-left: 30vw;\n    font-size: 2vh;\n    display: block;\n    margin-right: 50px;\n}"

/***/ },

/***/ 1004:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1005:
/***/ function(module, exports) {

module.exports = ".navbar {\n    background-color: #2c6bd6;\n    padding: 5px 20vw;\n}\n\n.vs-nav-icon {\n    color: white;\n}\n\n.vs-toggle-icon {\n    color: white;\n    border: 0.5px solid white;\n}\n\n.vs-toggler {\n    margin-right: 5vh;\n    line-height: 28px;\n}"

/***/ },

/***/ 1006:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1008:
/***/ function(module, exports) {

module.exports = "<div class=\"calendar\">\n  <div style='height: calc(100vh - 250px);'>\n    <div class=\"fullcalendar\"></div>\n  </div>\n</div>"

/***/ },

/***/ 1009:
/***/ function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-faded vs-footer\">\n  <p>Developmental Version, 2017</p>\n</nav>"

/***/ },

/***/ 1010:
/***/ function(module, exports) {

module.exports = "<div class=\"sidebar\">\n  <ul class=\"vs-categories\">\n    <li class='vs-category'>\n      <div class=\"js-category-description vs-category-description\" (click)=\"selectCategory($event)\" style=\"color: black;\"><i class=\"fa fa-location-arrow\" aria-hidden=\"true\" style=\"padding-right: 15px;\"></i>Home</div>\n    </li>\n    <li class='vs-category' *ngFor=\"let category of categories\">\n      <div (click)=\"selectCategory($event, category)\" class='js-category-description vs-category-description'>\n        <i class=\"fa fa-location-arrow\" aria-hidden=\"true\" style=\"padding-right: 15px; line-height: 1.5em;\"></i>\n        {{category.name}}\n        <i class=\"fa fa-times\" aria-hidden=\"true\" (click)=\"deleteCategory(category, $event);\" style=\"float: right; line-height: 1.5em;\"></i>\n      </div>\n    </li>\n  </ul>\n  <form (keydown)=\"addCategory(categoryInput, $event);\" class=\"js-category-form vs-category-form\">\n    <a href=\"javascript:void(0);\"><i class=\"fa fa-plus\" (click)=\"showCategoryInput();\" aria-hidden=\"true\" style='color: #D84D20; padding-left: 20px;'></i></a>\n    <a href=\"javascript:void(0);\"><p class=\"js-category-label vs-category-add\" (click)=\"showCategoryInput();\">Add Category</p></a>\n    <input #categoryInput type=\"text\" class=\"js-category-input vs-category-input\" maxlength=\"35\"/><br> <!-- force max length for now -->\n    <a href=\"javascript:void(0);\" class=\"js-category-input vs-category-input-cancel\" (click)=\"hideCategoryInput(categoryInput);\">cancel</a>\n  </form>\n</div>\n\n<div class=\"list\">\n  <h1 class=\"vs-category-title js-category-title\">Home</h1>\n  <div class=\"vs-list-table\">\n    <tr style=\"display:block; border-bottom: 1px solid #f2f2f2;\" *ngFor=\"let task of tasks\">\n      <td style=\"height: 100%;\"><div class=\"vs-task-circle\" (click)=\"removeTask(task);\"></div></td>\n      <td class='vs-list-item'>\n        <span class='vs-task-description'>\n          <div class=\"vs-task-title\">{{task.title}}<span class=\"vs-overdue\" *ngIf=\"task.overdue\">(overdue)</span></div>\n        </span>\n        <div class=\"vs-task-start\">{{task.start | date}}</div> <!-- omg angular pipes are fucking amazing -->\n      </td>\n    </tr>\n  </div>\n  <form (keydown)=\"addTask(taskInput, startDateInput, endDateInput, $event);\">\n      <input #taskInput type=\"text\" class=\"vs-task-input\" placeholder=\"Description\"/>\n      <input #startDateInput class=\"flatpickrStart vs-flatpickr-start\" type=\"text\" placeholder=\"Start Date\"/>\n      <input #endDateInput class=\"flatpickrEnd vs-flatpickr-end\" type=\"text\" placeholder=\"End Date\"/>\n  </form>\n  <button class='vs-task-button btn btn-lg btn-primary' (click)=\"addTask(taskInput, startDateInput, endDateInput, $event);\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button>\n</div>"

/***/ },

/***/ 1011:
/***/ function(module, exports) {

module.exports = "<div class=\"vs-login\">\n  <i class=\"vs-logo fa fa-plug\" aria-hidden=\"true\"><span style='font-size: 10vw;'>PowerList</span><span class='vs-site-description'>A convenient, lightweight, scheduling tool.</span></i>\n  <button class=\"btn btn-primary btn-lg vs-login-button\" (click)=\"authService.login()\" *ngIf=\"!authService.authenticated()\">Log In or Sign Up</button>\n  <button class=\"btn btn-primary btn-lg vs-login-button\" *ngIf=\"authService.authenticated()\"><a style=\"text-decoration: none;color:white;\" href=\"../private/(aux:list)\">Continue to PowerList</a></button>\n</div>"

/***/ },

/***/ 1012:
/***/ function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ },

/***/ 1013:
/***/ function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\">\n  <button class=\"navbar-toggler navbar-toggler-right vs-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span><i class=\"fa fa-bars vs-toggle-icon\" aria-hidden=\"true\"></i></span>\n  </button>\n  <a class=\"navbar-brand\" href=\"#\" style=\"color: white; font-weight: 700;\"><i class=\"fa fa-plug\" aria-hidden=\"true\" style=\"margin-right: 10px;\"></i>PowerList</a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n    </ul>\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item float-xs-right\" [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link\" href=\"#\" [routerLink]=\"['']\"><i class=\"fa fa-home vs-nav-icon\" aria-hidden=\"true\"></i></a>\n      </li>\n      <!-- <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link\" href=\"#\" [routerLink]=\"['../private', {outlets: {'aux':['list']}}]\"><i class=\"fa fa-book vs-nav-icon\" aria-hidden=\"true\"></i></a>\n      </li>\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link\" href=\"#\" [routerLink]=\"['']\"><i class=\"fa fa-calendar-check-o vs-nav-icon\" aria-hidden=\"true\"></i></a>\n      </li> -->\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link\" (click)=\"authService.logout()\" *ngIf=\"authService.authenticated()\"><i class=\"fa fa-sign-out vs-nav-icon\" aria-hidden=\"true\"></i></a>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ },

/***/ 1014:
/***/ function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div>\n  <app-sidebar></app-sidebar>\n  <router-outlet name=\"aux\"></router-outlet>\n<div>\n\n<app-calendar></app-calendar>\n\n<app-footer></app-footer>"

/***/ },

/***/ 1372:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(594);


/***/ },

/***/ 305:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(162);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Avoid name not found warnings
var Auth0Lock = __webpack_require__(480).default;
var AuthService = (function () {
    function AuthService(router, http) {
        var _this = this;
        this.router = router;
        this.http = http;
        // Configure Auth0
        this.lock = new Auth0Lock('9AX3hBcDf8Hh3tobK2G6t3CYj7T8p7pZ', 'bhan.auth0.com', {});
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["JwtHelper"]();
        // set lock event listener in constructor
        this.lock.on("authenticated", function (authResult) {
            _this.lock.getUserInfo(authResult.accessToken, function (error, profile) {
                if (error) {
                    console.log("error on authentication");
                }
                localStorage.setItem('id_token', authResult.idToken);
                _this.getOrCreateUser(profile);
            });
        });
    }
    AuthService.prototype.getOrCreateUser = function (profile) {
        var that = this;
        $.when(this.getUser(profile.user_id)).done(function (response) {
            if (response._body === "null") {
                $.when(that.createUser(profile.user_id)).done(function (response) {
                    localStorage.setItem("user_id", JSON.parse(response._body).id);
                    that.router.navigateByUrl('/private/(aux:list)');
                });
            }
            else {
                localStorage.setItem("user_id", JSON.parse(response._body).id);
                that.router.navigateByUrl('/private/(aux:list)');
            }
        });
    };
    AuthService.prototype.login = function () {
        // Call the show method to display the widget.
        this.lock.show();
    };
    AuthService.prototype.authenticated = function () {
        // Check if there's an unexpired JWT
        // This searches for an item in localStorage with key == 'id_token'
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('id_token');
        localStorage.removeItem('user_id');
        localStorage.removeItem('selectedCategoryId');
        this.router.navigate(['login']);
    };
    AuthService.prototype.getUser = function (username) {
        return this.http
            .get("https://calm-inlet-47809.herokuapp.com/find_user?username=" + username)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    AuthService.prototype.createUser = function (username) {
        return this.http
            .post("https://calm-inlet-47809.herokuapp.com/users", { username: username })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    AuthService.prototype.getTasks = function () {
        return this.http
            .get("https://calm-inlet-47809.herokuapp.com/users")
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    AuthService.prototype.extractData = function (res) {
        return res;
    };
    AuthService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_3__angular_http__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]) === 'function' && _b) || Object])
    ], AuthService);
    return AuthService;
    var _a, _b;
}());
//# sourceMappingURL=/Users/bowei/Documents/Development/Projects/powerlist/src/auth.service.js.map

/***/ },

/***/ 462:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_task__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_category__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_calendar_service_calendar_service__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_task_service_task_service__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_category_service_category_service__ = __webpack_require__(732);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListComponent = (function () {
    function ListComponent(calendarService, taskService, categoryService) {
        this.calendarService = calendarService;
        this.taskService = taskService;
        this.categoryService = categoryService;
        this.tasks = [];
        this.categories = [];
        this.selectedCategoryId = null;
        this.colors = ['#f5cbbc', '#ccccff', '#b3ffb3', '#ffffb3'];
    }
    ListComponent.prototype.ngOnInit = function () {
        flatpickr('.flatpickrStart', { utc: true, enableTime: true });
        flatpickr('.flatpickrEnd', { utc: true, enableTime: true });
        $('.js-category-description').toggleClass('active'); // activate home category
        this.initializeCategories();
        this.initializeCategoryTasks(true);
    };
    ListComponent.prototype.initializeCategoryTasks = function (firstLoad) {
        if (!this.selectedCategoryId) {
            this.initializeAllTasks(firstLoad);
        }
        else {
            var that = this;
            $.when(this.categoryService.getCategoryTasks(this.selectedCategoryId)).done(function (response) {
                that.tasks.length = 0;
                var tasks = JSON.parse(response._body);
                for (var i = 0; i < tasks.length; i++) {
                    if (Date.parse(tasks[i].end) < new Date().getTime()) {
                        tasks[i].overdue = true;
                    }
                    that.insertIntoTasksObject(tasks[i]);
                }
            });
        }
    };
    ListComponent.prototype.initializeAllTasks = function (firstLoad) {
        var that = this;
        $.when(this.taskService.getTasksForUser(localStorage.getItem("user_id"))).done(function (response) {
            var tasks = JSON.parse(response._body);
            that.tasks.length = 0;
            for (var i = 0; i < tasks.length; i++) {
                if (Date.parse(tasks[i].end) < new Date().getTime()) {
                    tasks[i].overdue = true;
                }
                that.insertIntoTasksObject(tasks[i]);
                if (firstLoad) {
                    that.calendarService.appendTaskToCalendar(tasks[i]);
                }
            }
        });
    };
    ListComponent.prototype.addTask = function (taskInput, startDateInput, endDateInput, event) {
        if (event.keyCode == 13 || event.type === "click") {
            if (taskInput.value && startDateInput.value && endDateInput.value) {
                if (Date.parse(startDateInput.value) < Date.parse(endDateInput.value)) {
                    var that = this;
                    var backgroundColor = this.colors[Math.floor(Math.random() * 4)];
                    var url = null; // placeholder
                    var task = new __WEBPACK_IMPORTED_MODULE_1__models_task__["a" /* Task */](null, taskInput.value, taskInput.value, startDateInput.value, endDateInput.value, url, parseInt(this.selectedCategoryId), parseInt(localStorage.getItem("user_id")), backgroundColor, false); // gotta change this to category id
                    $.when(this.taskService.createTask(task)).done(function (response) {
                        var realTask = JSON.parse(response._body);
                        if (Date.parse(realTask.end) < new Date().getTime()) {
                            realTask.overdue = true;
                        }
                        that.insertIntoTasksObject(realTask);
                        that.calendarService.appendTaskToCalendar(realTask); // this passes the task ID as the fullcalendarID
                        taskInput.value = startDateInput.value = endDateInput.value = null;
                    });
                }
                else {
                    bootbox.alert("Task start date can't be after the end date!");
                }
            }
            else {
                bootbox.alert('Please fill out all form fields.');
            }
        }
    };
    ListComponent.prototype.insertIntoTasksObject = function (task) {
        var afterPrevious, beforeNext;
        var currentNumTasks = this.tasks.length;
        for (var i = 0; i <= currentNumTasks; i++) {
            if (this.tasks[i]) {
                afterPrevious = Date.parse(this.tasks[i].end) > Date.parse(task.end);
            }
            if (this.tasks[i + 1]) {
                beforeNext = Date.parse(this.tasks[i + 1].end) > Date.parse(task.end);
            }
            if ((afterPrevious || i === this.tasks.length) && (beforeNext || i === this.tasks.length)) {
                this.tasks.splice(i, 0, task);
                break; // only insert 1 task
            }
        }
    };
    ListComponent.prototype.removeTask = function (task) {
        this.taskService.deleteTask(task.id); // race condition here between ui and db, maybe change?
        this.calendarService.removeTaskFromCalendar(task);
        for (var i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i] === task) {
                this.tasks.splice(i, 1);
            }
        }
    };
    // category logic
    ListComponent.prototype.initializeCategories = function () {
        var that = this;
        $.when(this.categoryService.getCategoriesForUser(localStorage.getItem("user_id"))).done(function (response) {
            var categories = JSON.parse(response._body);
            for (var i = 0; i < categories.length; i++) {
                that.categories.push(categories[i]);
            }
        });
    };
    ListComponent.prototype.addCategory = function (categoryInput, event) {
        if (event.keyCode == 13 || event.type === "click") {
            if (categoryInput.value) {
                var that_1 = this;
                var category = new __WEBPACK_IMPORTED_MODULE_2__models_category__["a" /* Category */](null, categoryInput.value, parseInt(localStorage.getItem("user_id")));
                $.when(this.categoryService.createCategory(category)).done(function (response) {
                    var realCategory = JSON.parse(response._body);
                    that_1.categories.push(realCategory);
                    that_1.hideCategoryInput(realCategory);
                    categoryInput.value = null;
                });
            }
            else {
                bootbox.alert('Please enter a category.');
            }
        }
    };
    ListComponent.prototype.selectCategory = function (event, category) {
        if (!category) {
            this.initializeAllTasks(false);
            this.selectedCategoryId = null;
            $('.js-category-title').text('Home'); // don't hardcode strings, refactor
        }
        else {
            this.selectedCategoryId = category.id;
            this.initializeCategoryTasks(false);
            $('.js-category-title').text(category.name);
        }
        // toggle active css
        this.clearActiveCategories();
        $(event.currentTarget).addClass('active');
    };
    ListComponent.prototype.deleteCategory = function (category, event) {
        event.stopPropagation(); // click event propagation was killing me
        var that = this;
        bootbox.confirm("Are you sure you want to delete category: " + category.name + "?", function (response) {
            if (response) {
                if (category.id === that.selectedCategoryId) {
                    that.selectedCategoryId = null;
                } // if you delete current category
                $.when(that.categoryService.deleteCategory(category.id)).done(function (response) {
                    for (var i = 0; i < that.categories.length; i++) {
                        if (that.categories[i] === category) {
                            that.categories.splice(i, 1);
                        }
                    }
                    that.initializeCategoryTasks(false);
                });
            }
        });
    };
    ListComponent.prototype.showCategoryInput = function () {
        $('.js-category-label').hide();
        $('.js-category-input').show();
        $('input.js-category-input').focus();
    };
    ListComponent.prototype.hideCategoryInput = function (categoryInput) {
        categoryInput.value = null;
        $('.js-category-input').hide();
        $('.js-category-label').show();
    };
    ListComponent.prototype.clearActiveCategories = function () {
        var categoryElements = $('.js-category-description');
        for (var i = 0; i < categoryElements.length; i++) {
            if ($(categoryElements[i]).hasClass('active')) {
                $(categoryElements[i]).removeClass('active');
            }
        }
    };
    ListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-list',
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_calendar_service_calendar_service__["a" /* CalendarService */], __WEBPACK_IMPORTED_MODULE_4__services_task_service_task_service__["a" /* TaskService */], __WEBPACK_IMPORTED_MODULE_5__services_category_service_category_service__["a" /* CategoryService */]],
            template: __webpack_require__(1010),
            styles: [__webpack_require__(1002)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_calendar_service_calendar_service__["a" /* CalendarService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_calendar_service_calendar_service__["a" /* CalendarService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_task_service_task_service__["a" /* TaskService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_task_service_task_service__["a" /* TaskService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_category_service_category_service__["a" /* CategoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_category_service_category_service__["a" /* CategoryService */]) === 'function' && _c) || Object])
    ], ListComponent);
    return ListComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/bowei/Documents/Development/Projects/powerlist/src/list.component.js.map

/***/ },

/***/ 463:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service_auth_service__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(221);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnChanges = function () { };
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_auth_service_auth_service__["a" /* AuthService */]],
            template: __webpack_require__(1011),
            styles: [__webpack_require__(1003)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/bowei/Documents/Development/Projects/powerlist/src/login.component.js.map

/***/ },

/***/ 464:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service_auth_service__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(221);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PrivateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrivateComponent = (function () {
    function PrivateComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    PrivateComponent.prototype.ngOnChanges = function () {
    };
    PrivateComponent.prototype.ngOnInit = function () {
        if (!this.authService.authenticated()) {
            this.router.navigate(['login']);
        }
    };
    PrivateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-private',
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_auth_service_auth_service__["a" /* AuthService */]],
            template: __webpack_require__(1014),
            styles: [__webpack_require__(1006)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], PrivateComponent);
    return PrivateComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/bowei/Documents/Development/Projects/powerlist/src/private.component.js.map

/***/ },

/***/ 593:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 593;


/***/ },

/***/ 594:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(724);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/bowei/Documents/Development/Projects/powerlist/src/main.js.map

/***/ },

/***/ 723:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_list_list_component__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_private_private_component__ = __webpack_require__(464);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AllergyClientRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var routes = [
    {
        path: '',
        redirectTo: '/private/(aux:list)',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__["a" /* LoginComponent */],
    },
    {
        path: 'private',
        component: __WEBPACK_IMPORTED_MODULE_4__components_private_private_component__["a" /* PrivateComponent */],
        children: [
            { path: 'list', component: __WEBPACK_IMPORTED_MODULE_2__components_list_list_component__["a" /* ListComponent */], outlet: 'aux' }
        ]
    }
];
var AllergyClientRoutingModule = (function () {
    function AllergyClientRoutingModule() {
    }
    AllergyClientRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AllergyClientRoutingModule);
    return AllergyClientRoutingModule;
}());
//# sourceMappingURL=/Users/bowei/Documents/Development/Projects/powerlist/src/app-routing.module.js.map

/***/ },

/***/ 724:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_main_app_component__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_footer_footer_component__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_list_list_component__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_calendar_calendar_component__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_private_private_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_Rx__ = __webpack_require__(1100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_rxjs_Rx__);
/* unused harmony export authHttpServiceFactory */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














function authHttpServiceFactory(http, options) {
    return new __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["AuthHttp"](new __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["AuthConfig"]({}), http, options);
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__components_main_app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_footer_footer_component__["a" /* FooterComponent */],
                // SidebarComponent,
                __WEBPACK_IMPORTED_MODULE_9__components_list_list_component__["a" /* ListComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_calendar_calendar_component__["a" /* CalendarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_private_private_component__["a" /* PrivateComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AllergyClientRoutingModule */],
            ],
            schemas: [
                __WEBPACK_IMPORTED_MODULE_3__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]
            ],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["AuthHttp"],
                    useFactory: authHttpServiceFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]]
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__components_main_app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/bowei/Documents/Development/Projects/powerlist/src/app.module.js.map

/***/ },

/***/ 725:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_gmail_service_gmail_service__ = __webpack_require__(733);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CalendarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalendarComponent = (function () {
    function CalendarComponent(gmailService) {
        this.gmailService = gmailService;
    }
    CalendarComponent.prototype.ngOnInit = function () {
        // this.gmailService.checkAuth();
        $('.fullcalendar').fullCalendar({
            header: { center: 'listDay, listWeek, month' },
            editable: false,
            buttonText: { month: 'Month', listWeek: 'Week', listDay: 'Day' },
            eventColor: '#f5f5f5',
            height: "parent",
            eventAfterRender: function (event, element, view) {
                element.attr('data-toggle', 'tooltip');
                element.attr('title', event.tip);
                element.tooltip();
            }
        });
    };
    CalendarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-calendar',
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_gmail_service_gmail_service__["a" /* GmailService */]],
            template: __webpack_require__(1008),
            styles: [__webpack_require__(1000)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_gmail_service_gmail_service__["a" /* GmailService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_gmail_service_gmail_service__["a" /* GmailService */]) === 'function' && _a) || Object])
    ], CalendarComponent);
    return CalendarComponent;
    var _a;
}());
//# sourceMappingURL=/Users/bowei/Documents/Development/Projects/powerlist/src/calendar.component.js.map

/***/ },

/***/ 726:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(1009),
            styles: [__webpack_require__(1001)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=/Users/bowei/Documents/Development/Projects/powerlist/src/footer.component.js.map

/***/ },

/***/ 727:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
// main is only used as an entry point, for bootstrapping the application.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(1012),
            styles: [__webpack_require__(1004)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/bowei/Documents/Development/Projects/powerlist/src/app.component.js.map

/***/ },

/***/ 728:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service_auth_service__ = __webpack_require__(305);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(authService) {
        this.authService = authService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_auth_service_auth_service__["a" /* AuthService */]],
            template: __webpack_require__(1013),
            styles: [__webpack_require__(1005)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a;
}());
//# sourceMappingURL=/Users/bowei/Documents/Development/Projects/powerlist/src/navbar.component.js.map

/***/ },

/***/ 729:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Category; });
var Category = (function () {
    function Category(id, name, user_id) {
        this.id = id;
        this.name = name;
        this.user_id = user_id;
    }
    return Category;
}());
//# sourceMappingURL=/Users/bowei/Documents/Development/Projects/powerlist/src/category.js.map

/***/ },

/***/ 730:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Task; });
var Task = (function () {
    function Task(id, title, tip, start, end, url, category_id, user_id, backgroundColor, overdue) {
        this.id = id;
        this.title = title;
        this.tip = tip;
        this.start = start;
        this.end = end;
        this.url = url;
        this.category_id = category_id;
        this.user_id = user_id;
        this.backgroundColor = backgroundColor;
        this.overdue = overdue;
    }
    return Task;
}());
//# sourceMappingURL=/Users/bowei/Documents/Development/Projects/powerlist/src/task.js.map

/***/ },

/***/ 731:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CalendarService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalendarService = (function () {
    function CalendarService() {
    }
    CalendarService.prototype.appendTaskToCalendar = function (task) {
        $('.fullcalendar').fullCalendar('renderEvent', task, true);
    };
    CalendarService.prototype.removeTaskFromCalendar = function (task) {
        $('.fullcalendar').fullCalendar('removeEvents', task.id);
    };
    CalendarService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], CalendarService);
    return CalendarService;
}());
//# sourceMappingURL=/Users/bowei/Documents/Development/Projects/powerlist/src/calendar.service.js.map

/***/ },

/***/ 732:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(162);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CategoryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryService = (function () {
    function CategoryService(http) {
        this.http = http;
    }
    CategoryService.prototype.getCategoryTasks = function (categoryId) {
        return this.http
            .get("https://calm-inlet-47809.herokuapp.com/get_category_tasks?category_id=" + categoryId)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    CategoryService.prototype.createCategory = function (Category) {
        delete Category["id"];
        return this.http
            .post("https://calm-inlet-47809.herokuapp.com/categories", Category)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    CategoryService.prototype.getCategoryByName = function (name) {
        return this.http
            .get("https://calm-inlet-47809.herokuapp.com/find_category?name=" + name)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    CategoryService.prototype.getCategories = function () {
        return this.http
            .get("https://calm-inlet-47809.herokuapp.com/categories")
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    CategoryService.prototype.getCategoriesForUser = function (user_id) {
        return this.http
            .get("https://calm-inlet-47809.herokuapp.com/find_user_categories?user_id=" + user_id)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    CategoryService.prototype.deleteCategory = function (category_id) {
        return this.http
            .delete("https://calm-inlet-47809.herokuapp.com/categories/" + category_id)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    CategoryService.prototype.extractData = function (res) {
        return res;
    };
    CategoryService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    CategoryService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], CategoryService);
    return CategoryService;
    var _a;
}());
//# sourceMappingURL=/Users/bowei/Documents/Development/Projects/powerlist/src/category.service.js.map

/***/ },

/***/ 733:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return GmailService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GmailService = (function () {
    function GmailService() {
        this.CLIENT_ID = '817440850730-2huvkm08okd84sqi22kvcnri5kt0f2it.apps.googleusercontent.com';
        this.SCOPES = ["https://www.googleapis.com/auth/calendar"];
    }
    GmailService.prototype.checkAuth = function () {
        gapi.auth.authorize({
            'client_id': this.CLIENT_ID,
            'scope': this.SCOPES.join(' '),
            'immediate': true
        }, this.handleAuthResult);
    };
    GmailService.prototype.handleAuthResult = function (authResult) {
        var authorizeDiv = document.getElementById('authorize-div');
        if (authResult && !authResult.error) {
            authorizeDiv.style.display = 'none';
            loadCalendarApi();
        }
        else {
            authorizeDiv.style.display = 'inline';
        }
        function loadCalendarApi() {
            gapi.client.load('calendar', 'v3', loadAndInsertCalendar);
        }
        var resource = {
            "summary": "Sample Event " + Math.floor((Math.random() * 10) + 1),
            "start": {
                "dateTime": new Date()
            },
            "end": {
                "dateTime": new Date(new Date().getTime() + (2 * 1000 * 60 * 60))
            }
        };
        function loadAndInsertCalendar() {
            var calendarId = null;
            var timeZone = null;
            var request = gapi.client.calendar.calendarList.list();
            request.execute(function (resp) {
                calendarId = resp.items[0].id;
                timeZone = resp.items[0].timeZone;
                $('.fullcalendar').fullCalendar({
                    googleCalendarApiKey: 'AIzaSyD_xVYDDVajctT7RpKR85VQAEERuPJAANc',
                    events: {
                        googleCalendarId: calendarId,
                        className: 'gcal-event',
                        allDay: true,
                        endParam: new Date(new Date().getTime() + (365 * 24 * 1000 * 3600))
                    }
                });
            });
        }
        function createCalendarEvent() {
            var request = gapi.client.calendar.events.insert({
                'calendarId': 'primary',
                "resource": resource
            });
            request.execute(function (resp) {
                if (resp.status == 'confirmed') {
                    document.getElementById('output').innerHTML = "Event created successfully. View it <a href='" + resp.htmlLink + "'>online here</a>.";
                }
                else {
                    document.getElementById('output').innerHTML = "There was a problem. Reload page and try again.";
                }
                console.log(resp);
            });
        }
        function listUpcomingEvents() {
            var request = gapi.client.calendar.events.list({
                'calendarId': 'primary',
                'timeMin': (new Date()).toISOString(),
                'showDeleted': false,
                'singleEvents': true,
                'maxResults': 10,
                'orderBy': 'startTime'
            });
            request.execute(function (resp) {
                var events = resp.items;
                appendPre('Upcoming events:');
                if (events.length > 0) {
                    for (var i = 0; i < events.length; i++) {
                        var event = events[i];
                        var when = event.start.dateTime;
                        if (!when) {
                            when = event.start.date;
                        }
                        appendPre(event.summary + ' (' + when + ')');
                    }
                }
                else {
                    appendPre('No upcoming events found.');
                }
            });
        }
        function appendPre(message) {
            var pre = document.getElementById('output');
            var textContent = document.createTextNode(message + '\n');
            pre.appendChild(textContent);
        }
    };
    GmailService.prototype.handleAuthClick = function () {
        gapi.auth.authorize({ client_id: this.CLIENT_ID, scope: this.SCOPES, immediate: false }, this.handleAuthResult);
        return false;
    };
    GmailService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], GmailService);
    return GmailService;
}());
//# sourceMappingURL=/Users/bowei/Documents/Development/Projects/powerlist/src/gmail.service.js.map

/***/ },

/***/ 734:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(162);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TaskService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskService = (function () {
    function TaskService(http) {
        this.http = http;
    }
    TaskService.prototype.createTask = function (Task) {
        delete Task["id"];
        return this.http
            .post("https://calm-inlet-47809.herokuapp.com/tasks", Task)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    TaskService.prototype.getTasks = function () {
        return this.http
            .get("https://calm-inlet-47809.herokuapp.com/tasks")
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    TaskService.prototype.getTasksForUser = function (user_id) {
        return this.http
            .get("https://calm-inlet-47809.herokuapp.com/find_user_tasks?user_id=" + user_id)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    TaskService.prototype.deleteTask = function (task_id) {
        return this.http
            .delete("https://calm-inlet-47809.herokuapp.com/tasks/" + task_id)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    TaskService.prototype.extractData = function (res) {
        return res;
    };
    TaskService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    TaskService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], TaskService);
    return TaskService;
    var _a;
}());
//# sourceMappingURL=/Users/bowei/Documents/Development/Projects/powerlist/src/task.service.js.map

/***/ },

/***/ 735:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/bowei/Documents/Development/Projects/powerlist/src/environment.js.map

/***/ },

/***/ 736:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(820);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(809);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(815);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(812);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(811);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(819);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(808);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(807);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(817);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(810);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(818);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(816);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(821);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/bowei/Documents/Development/Projects/powerlist/src/polyfills.js.map

/***/ }

},[1372]);
//# sourceMappingURL=main.bundle.map