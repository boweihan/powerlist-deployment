webpackJsonp([1,4],{

/***/ 1021:
/***/ function(module, exports) {

module.exports = "@media (max-width: 992px) {\n    .vs-calendar {\n        position: relative;\n        display: block;\n        padding: 20px;\n        background-color: #f5f5f5;\n        width: 100%;\n        height: 100vh;\n    }\n}\n\n@media (min-width: 992px) {\n    .vs-calendar {\n        position: fixed;\n        top: 50px;\n        bottom: 0;\n        left: 700px;\n        display: block;\n        padding: 20px;\n        background-color: #f5f5f5;\n        width: calc(100% - 700px);\n    }\n}\n\n.vs-calendar-container {\n    height: calc(100vh - 250px);\n}"

/***/ },

/***/ 1022:
/***/ function(module, exports) {

module.exports = ".vs-footer {\n    margin: 0;\n    padding: 5px;\n    text-align: center;\n    background-color: #000F14;\n    opacity: 0.5;\n    position: fixed;\n    bottom: 0px;\n    width: 100%;\n    z-index: 1000;\n}\n\n.vs-footer > p {\n    color: white;\n    margin: 0;\n}"

/***/ },

/***/ 1023:
/***/ function(module, exports) {

module.exports = ".down {\n    position: absolute;\n    top: calc(5vh + 45.5px);\n    bottom: 50vh;\n    left: 5vw;\n    right: 5vw;\n}\n\n.graphBackground {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: whitesmoke;\n}\n\n.up {\n    position: absolute;\n    top: 52vh;\n    bottom: 10vh;\n    left: 5vw;\n    right: 5vw;\n}"

/***/ },

/***/ 1024:
/***/ function(module, exports) {

module.exports = "/* ********************** LIST CODE ********************** */\n@media (max-width: 768px) {\n    .list {\n        position: relative;\n        display: block;\n        padding: 20px;\n        background-color: white;\n        width: 100%;\n        margin: auto;\n        padding-top: 5vh;\n        height: 100vh;\n    }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n    .list {\n        position: relative;\n        display: block;\n        padding: 20px calc(10% + 20px);\n        background-color: white;\n        margin: auto;\n        padding-top: 5vh;\n        height: 100vh;\n    }\n}\n@media (min-width: 992px) {\n    .list {\n        position: fixed;\n        top: 50px;\n        bottom: 0;\n        left: 300px;\n        display: block;\n        padding: 20px;\n        background-color: white;\n        border-right: 1px solid #eee;\n        width: 400px;\n    }\n}\n.vs-list-item {\n    width: calc(100% - 100px);\n    padding: 8px 3px;\n}\n.vs-list {\n    padding: 5px;\n    margin-bottom: 150px;\n}\n.vs-task-circle {\n    margin-right: 20px;\n    border-radius: 100%;\n    width: 20px;\n    height: 20px;\n    border: 2px solid #f3f3f3;\n}\n    .vs-task-circle:hover {\n        background-color: #D84D20;\n        box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 1);\n    }\n.vs-task-description {\n    padding-bottom: 5px;\n}\n.vs-task-input {\n    position: absolute;\n    display: block;\n    width: calc(100% - 40px);\n    bottom: 125px;\n    padding: 2px 0;\n    font-size: 13px;\n    text-align: center;\n}\n.vs-task-title {\n    font-weight: 100;\n    font-size: 1em;\n}\n.vs-task-start {\n    width: 70px;\n    height: 100%;\n    font-size: 0.8em;\n    text-align: center;\n}\n.vs-edit-button {\n    height: 100%;\n    vertical-align: center;\n    font-size: 0.7em;\n}\n    .vs-edit-button:hover {\n        -webkit-transform: scale(1.3);\n                transform: scale(1.3);\n    }\n.vs-task-button {\n    position: absolute;\n    display: inline-block;\n    bottom: 55px;\n    left: 14px;\n    width: calc(100% - 38px);\n    border-radius: 0px;\n    border: none;\n    font-size: 0.8em;\n    font-weight: lighter;\n    padding: 7px;\n}\n.vs-list-table {\n    max-height: calc(100% - 190px);\n    border-bottom: 2px solid #f2f2f2;\n    overflow-y: scroll;\n}\n.vs-overdue {\n    color: red;\n    font-weight: 700;\n    padding-left: 10px;\n    font-style: italic;\n    font-size: 0.8em;\n}\n.vs-flatpickr-start {\n    position: absolute;\n    display: inline-block;\n    text-align: center;\n    width: calc(50% - 20px);\n    bottom: 89px;\n    border-right: 1px solid #f2f2f2;\n    border-top: none;\n    font-size: 13px;\n}\n.vs-flatpickr-end {\n    position: absolute;\n    display: inline-block;\n    text-align: center;\n    width: calc(50% - 20px);\n    bottom: 89px;\n    right: 18px;\n    border: none;\n    font-size: 13px;\n}\n\n/* ********************* sidebar code *********************** */\n@media (max-width: 768px) {\n    .sidebar {\n        position: relative;\n        height: calc(100vh - 50px);\n        display: block;\n        padding: 20px;\n        padding-left: 30px;\n        padding-top: 5vh;\n        overflow-x: hidden;\n        overflow-y: auto;\n        background-color: #f5f5f5;\n        border-right: 1px solid #eee;\n    }\n    .vs-category-form {\n        padding: 5px;\n        margin-top: 10px;\n    }\n    .vs-categories {\n        list-style: none;\n        width: 100%;\n        margin: auto;\n    }\n    .vs-category-inline-input {\n        padding-left: 5px;\n        width: calc(100% - 25px);\n    }\n    .vs-category-inline-container {\n        width: calc(100% - 40px);\n    }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n    .sidebar {\n        position: relative;\n        height: calc(100vh - 50px);\n        display: block;\n        padding: 20px;\n        padding-left: 30px;\n        padding-top: 5vh;\n        overflow-x: hidden;\n        overflow-y: auto;\n        background-color: #f5f5f5;\n        border-right: 1px solid #eee;\n    }\n    .vs-category-form {\n        padding: 5px;\n        margin-left: 10%;\n        margin-top: 10px;\n    }\n    .vs-categories {\n        list-style: none;\n        width: 80%;\n        margin: auto;\n    }\n    .vs-category-inline-input {\n        padding-left: 5px;\n        width: calc(100% - 20px);\n    }\n    .vs-category-inline-container {\n        width: calc(100% - 40px);\n    }\n}\n\n@media (min-width: 992px) {\n    .sidebar {\n        position: fixed;\n        top: 50px;\n        bottom: 0;\n        left: 0;\n        display: block;\n        padding: 20px;\n        padding-left: 30px;\n        overflow-x: hidden;\n        overflow-y: auto;\n        background-color: #f5f5f5;\n        border-right: 1px solid #eee;\n        width: 300px;\n    }\n    .vs-category-form {\n        padding: 5px;\n        margin-top: 10px;\n    }\n    .vs-categories {\n        list-style: none;\n    }\n    .vs-category-inline-input {\n        padding-left: 5px;\n        width: 157px;\n        box-sizing: border-box;\n        height: 1.2rem;\n    }\n}\n\n.vs-category {\n    padding: 0px;\n}\n    .sidebar .active {\n        background-color: white;\n        box-shadow: 0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);\n    }\n\n.vs-category-description {\n    font-weight: 600;\n    display: inline-block;\n    width: calc(100% - 20px);\n    padding: 5px;\n    padding-left: 15px;\n    word-wrap: break-word;\n}\n    .vs-category-description:hover {\n        background-color: white;\n        box-shadow: 0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);\n        cursor: pointer;\n    }\n\n.vs-category-add {\n    display: inline-block;\n    padding-left: 10px;\n    color: #D84D20;\n    font-weight: 100;\n    font-size: 0.8em;\n}\n\n.vs-category-input {\n    display: none;\n    margin-left: 10px;\n    width: calc(100% - 50px);\n}\n\n.vs-category-input-cancel {\n    display: none;\n    color: black;\n    margin-left: 50px;\n    font-weight: 100;\n}\n    .vs-category-input-cancel:hover {\n        text-decoration: underline;\n    }\n\n.vs-category-title {\n    text-align: left;\n    font-weight: 700;\n    padding-left: 20px;\n    padding-bottom: 20px;\n    font-size: 1.3em;\n    color: black;\n    border-bottom: 2px solid #f2f2f2;\n    margin-bottom: 0;\n}\n\n#categoryDropDownMenu:active {\n    -webkit-transform: scale(1.7);\n            transform: scale(1.7);\n}\n\n/******************************* edit in place ********************************/\n.display-none {\n    display: none !important;\n}\n.display-inline {\n    display: inline-block !important;\n}\n.display-block {\n    display: block !important;\n}"

/***/ },

/***/ 1025:
/***/ function(module, exports) {

module.exports = "canvas {\n    position: absolute;\n}\n.vs-title-block {\n    color: white;\n    margin: auto;\n    margin-top: 20vh;\n    text-align: center;\n}\n.vs-login {\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    overflow: scroll;\n}\n\n.vs-login-button {\n    display: block;\n    text-align: center;\n    margin: auto;\n    margin-top: 8vh;\n    font-weight: 300;\n    border: none;\n    border-radius: 0px;\n    background-color: white !important;\n    color: black !important;\n}\n    .vs-login-button:hover {\n        background-color: #A1FFFF !important;\n        font-weight: 700;\n    }\n\n.vs-site-description {\n    font-size: 3vh;\n    margin-top: 30px;\n    display: block;\n}"

/***/ },

/***/ 1026:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1027:
/***/ function(module, exports) {

module.exports = ".navbar {\n    padding: 5px 20vw;\n    background-color: #000F14 !important;\n    position: relative;\n    z-index: 1000;\n}\n\n.vs-nav-icon {\n    color: white;\n}\n\n.vs-toggle-icon {\n    color: white;\n    border: 0.5px solid white;\n}\n\n.vs-toggler {\n    margin-right: 5vh;\n    line-height: 28px;\n}\n.navbar.navbar-dark .breadcrumb.active, .navbar.navbar-dark .navbar-nav .nav-item.active {\n    background-color: transparent;\n}"

/***/ },

/***/ 1028:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1033:
/***/ function(module, exports) {

module.exports = "<div class=\"vs-calendar\">\n    <div class=\"vs-calendar-container\">\n        <div class=\"fullcalendar\"></div>\n    </div>\n</div>"

/***/ },

/***/ 1034:
/***/ function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-faded vs-footer\">\n    <p>Developmental Version (Web), 2017</p>\n</nav>"

/***/ },

/***/ 1035:
/***/ function(module, exports) {

module.exports = "<!-- this should be a shared component -->\n<div class=\"boop\" style='top: 0; bottom: 0; left: 0; right: 0; z-index: 1051; display: none; position: fixed;'></div>\n\n<div class='graphBackground'>\n    <div class=\"up\" id=\"graph\"></div>\n    <div class=\"down\" id=\"pie\"></div>\n</div>"

/***/ },

/***/ 1036:
/***/ function(module, exports) {

module.exports = "<!-- sidebar -->\n<div class=\"boop\" style='top: 0; bottom: 0; left: 0; right: 0; z-index: 1051; display: none; position: fixed;'></div>\n\n<div class=\"sidebar\">\n    <ul class=\"vs-categories\">\n        <li class='vs-category'>\n            <div #boundHome class=\"js-category-description vs-category-description\" (click)=\"selectCategory(boundHome, boundCategoryTitle)\" style=\"color: black;\">\n                <i class=\"fa fa-home\" aria-hidden=\"true\" style=\"padding-right: 15px; font-weight: 700;\"></i>\n                Home\n            </div>\n        </li>\n        <li class='vs-category' *ngFor=\"let category of categories\">\n            <div>\n                <div #boundCategory (click)=\"selectCategory(boundCategory, boundCategoryTitle, category)\" class='js-category-description js-category-reselect-{{category.id}} vs-category-description'>\n                    <i class=\"fa fa-location-arrow\" aria-hidden=\"true\" style=\"padding-right: 15px; line-height: 1.5em;\"></i>\n                    <p class=\"category-{{category.id}}\" style=\"display:inline-block; margin:0; padding:0;\">{{category.name}}</p>\n                    <span class=\"category-{{category.id}}-container vs-category-inline-container\" style=\"display:none;\">\n                        <input class=\"category-{{category.id}}-input vs-category-inline-input\" (keydown)=\"updateCategory($event, category.id, boundCategoryTitle);\" (click)=\"stopPropagation($event);\" type=\"text\" maxlength=\"35\"/>\n                        <i class=\"fa fa-times\" (click)=\"stopPropagation($event); editCategory(category.id)\" style=\"padding-top: 5px; box-shadow: none; background-color: transparent;\"></i>\n                    </span>\n                </div>\n                <div class=\"dropdown\" style=\"float: right; line-height: 1.5em; padding: 5px;\">\n                    <a class=\"fa fa-caret-down\" id=\"categoryDropDownMenu\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"></a>\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"categoryDropDownMenu\">\n                        <a class=\"dropdown-item\" (click)=\"selectCategory(boundCategory, boundCategoryTitle, category)\">Select</a>\n                        <a class=\"dropdown-item\" (click)=\"editCategory(category.id)\">Edit</a>\n                        <a class=\"dropdown-item\" (click)=\"deleteCategory(category);\">Delete</a>\n                    </div>\n                </div>\n            </div>\n        </li>\n    </ul>\n    <form (keydown)=\"addCategory(boundCategoryInput, $event);\" class=\"js-category-form vs-category-form\">\n        <a href=\"javascript:void(0);\">\n            <i class=\"fa fa-plus\" (click)=\"showCategoryInput();\" aria-hidden=\"true\" style='color: #D84D20; padding-left: 20px;'></i>\n        </a>\n        <a href=\"javascript:void(0);\">\n            <p class=\"js-category-label vs-category-add\" (click)=\"showCategoryInput();\">Add Category</p>\n        </a>\n        <input #boundCategoryInput type=\"text\" class=\"js-category-input vs-category-input\" maxlength=\"35\"/><br> <!-- force max length for now -->\n        <a href=\"javascript:void(0);\" class=\"js-category-input vs-category-input-cancel\" (click)=\"hideCategoryInput(boundCategoryInput);\">cancel</a>\n    </form>\n</div>\n\n<!-- list -->\n<div class=\"list\">\n    <h1 #boundCategoryTitle class=\"vs-category-title js-category-title\">Home</h1>\n    <div class=\"vs-list-table\">\n        <table style='width: 100%;height:0;'>\n            <tr style=\"border-bottom: 1px solid #f2f2f2;\" *ngFor=\"let task of tasks\">\n                <td style=\"height: 100%;\">\n                    <div class=\"vs-task-circle\" (click)=\"removeTask(task);\"></div>\n                </td>\n                <td class='vs-list-item'>\n                    <span class='vs-task-description'>\n                        <div class=\"vs-task-title task-{{task.id}}\">\n                            {{task.title}}\n                            <span class=\"vs-overdue\" *ngIf=\"task.overdue\">(overdue)</span>\n                        </div>\n                    </span>\n                </td>\n                <td class='vs-task-start'>{{task.start | date:'MMM dd'}}</td>\n                <td class='vs-edit-button' data-toggle=\"modal\" data-target=\"#listModal\" [attr.data-taskid]=\"task.id\" [attr.data-title]=\"task.title\">\n                    <i class=\"fa fa-edit\"></i>\n                </td>\n            </tr>\n        </table>\n    </div>\n    <form (keydown)=\"addTask(boundTaskInput, boundStartDateInput, boundEndDateInput, $event);\">\n        <input #boundTaskInput type=\"text\" class=\"vs-task-input\" placeholder=\"Add Task\"/>\n        <input #boundStartDateInput class=\"flatpickrStart vs-flatpickr-start vs-date-input\" placeholder=\"&#xf272;\" style=\"font-family: FontAwesome;\" type=\"datetime-local\" step=\"any\"/>\n        <input #boundEndDateInput class=\"flatpickrEnd vs-flatpickr-end vs-date-input\" placeholder=\"&#xf271;\" style=\"font-family: FontAwesome;\" type=\"datetime-local\" step=\"any\"/> <!-- NOTE: need second flatpickr to do two dates -->\n    </form>\n    <button class='vs-task-button btn btn-lg btn-primary' (click)=\"addTask(boundTaskInput, boundStartDateInput, boundEndDateInput, $event);\">\n        <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n    </button>\n</div>\n\n<!-- edit modal -->\n<div class=\"modal fade\" id=\"listModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"listModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"listModalLabel\">Edit Task</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <form>\n                    <div class=\"form-group\">\n                        <label for=\"task-title\" class=\"form-control-label\">Task:</label>\n                        <input #boundModalTitle type=\"text\" class=\"form-control\" id=\"task-title\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"start-date\" class=\"form-control-label\">Start Date:</label>\n                        <input #boundModalStart class=\"form-control flatpickrStart\" id=\"start-date\" placeholder=\"Choose Date...\" type=\"datetime-local\" step=\"any\"/>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"end-date\" class=\"form-control-label\">End Date:</label>\n                        <input #boundModalEnd class=\"form-control flatpickrEnd\" id=\"end-date\" placeholder=\"Choose Date...\" type=\"datetime-local\" step=\"any\"/>\n                    </div>\n                </form>\n            </div>\n            <div #boundHiddenId class=\"hidden-id\" style=\"display:none;\"></div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-elegant\" data-dismiss=\"modal\" (click)=\"removeModalValues(boundModalTitle, boundModalStart, boundModalEnd, boundHiddenId);\">Close</button>\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateTask(boundModalTitle, boundModalStart, boundModalEnd, boundHiddenId);\">Save</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<app-calendar></app-calendar>"

/***/ },

/***/ 1037:
/***/ function(module, exports) {

module.exports = "<canvas id='c'></canvas>\n<div class=\"vs-login\">\n  <div class=\"vs-title-block\"><span style='font-size: 10vw;'>PowerList</span><span class='vs-site-description'>A lightweight, electrifying task scheduler</span></div>\n  <button class=\"btn btn-primary btn-lg vs-login-button\" (click)=\"authService.login()\" *ngIf=\"!authService.isAuthenticated()\">Log In or Sign Up</button>\n  <button class=\"btn btn-primary btn-lg vs-login-button\" *ngIf=\"authService.isAuthenticated()\"><a style=\"text-decoration: none\" href=\"../private/(aux:list)\">Continue to PowerList</a></button>\n</div>"

/***/ },

/***/ 1038:
/***/ function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ },

/***/ 1039:
/***/ function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-dark bg-primary\">\n    <button class=\"navbar-toggler navbar-toggler-right vs-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span>\n            <i class=\"fa fa-bars vs-toggle-icon\" aria-hidden=\"true\"></i>\n        </span>\n    </button>\n    <a class=\"navbar-brand\" href=\"#\" style=\"color: white; font-weight: 700;\">\n        <i class=\"fa fa-plug\" aria-hidden=\"true\" style=\"margin-right: 10px;\"></i>\n        PowerList\n    </a>\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\"></ul>\n        <ul class=\"navbar-nav\">\n            <li class=\"nav-item float-xs-right\" [routerLinkActive]=\"['active']\">\n                <a class=\"nav-link\" href=\"#\" [routerLink]=\"['']\">\n                    <i class=\"fa fa-home vs-nav-icon\" aria-hidden=\"true\"></i>\n                </a>\n            </li>\n            <li class=\"nav-item float-xs-right\" [routerLinkActive]=\"['active']\">\n                <a class=\"nav-link\" href=\"#\" [routerLink]=\"[{outlets: {aux: 'graph'}}]\">\n                    <i class=\"fa fa-area-chart vs-nav-icon\" aria-hidden=\"true\"></i>\n                </a>\n            </li>\n            <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n                <a class=\"nav-link\" (click)=\"authService.logout()\" *ngIf=\"authService.isAuthenticated()\">\n                    <i class=\"fa fa-sign-out vs-nav-icon\" aria-hidden=\"true\"></i>\n                </a>\n            </li>\n        </ul>\n    </div>\n</nav>"

/***/ },

/***/ 1040:
/***/ function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div>\n    <app-sidebar></app-sidebar>\n    <router-outlet name=\"aux\"></router-outlet>\n<div>\n\n<app-footer></app-footer>"

/***/ },

/***/ 1421:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(605);


/***/ },

/***/ 222:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_user_service__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_app_config__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_routes__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(304);
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






var Auth0Lock = __webpack_require__(486).default; // Avoid name not found warnings
var AuthService = (function () {
    function AuthService(router, userService) {
        this.router = router;
        this.userService = userService;
        this.lock = new Auth0Lock(__WEBPACK_IMPORTED_MODULE_3__shared_app_config__["a" /* Config */].authOKey, __WEBPACK_IMPORTED_MODULE_3__shared_app_config__["a" /* Config */].authOUser, {});
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["JwtHelper"](); // TODO: what is this syntax
        this.createLockEventListeners();
    }
    AuthService.prototype.createLockEventListeners = function () {
        var _this = this;
        this.lock.on("authenticated", function (authResult) {
            _this.lock.getUserInfo(authResult.accessToken, function (error, profile) {
                if (!error) {
                    localStorage.setItem('id_token', authResult.idToken);
                    _this.initialize(profile);
                } // TODO: implement error handling
            });
        });
    };
    AuthService.prototype.initialize = function (profile) {
        var that = this;
        var username = profile.user_id;
        this.userService.getUser(username).subscribe(function (user) {
            if (user) {
                that.handleUserLogin(user);
            }
            else {
                that.userService.createUser(username).subscribe(function (user) {
                    that.handleUserLogin(user);
                });
            }
        });
    };
    AuthService.prototype.handleUserLogin = function (user) {
        localStorage.setItem("user_id", user.id);
        this.router.navigateByUrl(__WEBPACK_IMPORTED_MODULE_4__shared_routes__["a" /* AppRoutes */].main); // TODO: implement router object
    };
    AuthService.prototype.isAuthenticated = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService.prototype.login = function () {
        this.lock.show();
    };
    AuthService.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate([__WEBPACK_IMPORTED_MODULE_4__shared_routes__["a" /* AppRoutes */].login]);
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_user_service_user_service__["a" /* UserService */]) === 'function' && _b) || Object])
    ], AuthService);
    return AuthService;
    var _a, _b;
}());
//# sourceMappingURL=/Users/bowei/Documents/Development/Projects/powerlist/src/auth.service.js.map

/***/ },

/***/ 223:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Config; });
var Config = (function () {
    function Config() {
    }
    Config.baseUrl = "https://calm-inlet-47809.herokuapp.com";
    Config.authOKey = "9AX3hBcDf8Hh3tobK2G6t3CYj7T8p7pZ";
    Config.authOUser = "bhan.auth0.com";
    return Config;
}());
//# sourceMappingURL=/Users/bowei/Documents/Development/Projects/powerlist/src/app-config.js.map

/***/ },

/***/ 308:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppRoutes; });
var AppRoutes = (function () {
    function AppRoutes() {
    }
    AppRoutes.main = "/private/(aux:list)";
    AppRoutes.login = "login";
    AppRoutes.private = "private";
    AppRoutes.graph = "graph";
    return AppRoutes;
}());
//# sourceMappingURL=/Users/bowei/Documents/Development/Projects/powerlist/src/routes.js.map

/***/ },

/***/ 465:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_task_service_task_service__ = __webpack_require__(469);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return GraphComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GraphComponent = (function () {
    function GraphComponent(taskService) {
        this.taskService = taskService;
        this.dateArray = []; // TODO implement this on the server side
        this.valueArray = [];
    }
    GraphComponent.prototype.ngOnInit = function () {
        var that = this;
        this.lineChart = echarts.init(document.getElementById('graph'));
        this.pieChart = echarts.init(document.getElementById('pie'));
        this.initLoadingModal();
        this.initCharts();
        window.addEventListener('resize', this.lineChart.resize, false);
        window.addEventListener('resize', this.pieChart.resize, false);
    };
    GraphComponent.prototype.initLoadingModal = function () {
        $('.boop').loadingModal({
            position: 'fixed',
            text: '',
            color: '#fff',
            opacity: '0.7',
            backgroundColor: 'rgb(0,0,0)',
            animation: 'cubeGrid'
        });
    };
    GraphComponent.prototype.initCharts = function () {
        $('.boop').show();
        var that = this;
        this.taskService.getTasksForUser(localStorage.getItem("user_id")).subscribe(function (tasks) {
            for (var i = 0, len = tasks.length; i < len; i++) {
                var startDate = new Date(tasks[i].start);
                var endDate = new Date(tasks[i].end);
                that.addDatesToDateArray(startDate, endDate);
            }
            that.constructDatesAndValues();
            that.constructChartOptions(that.dateArray, that.valueArray);
            var pieChartData = that.constructPieObject(tasks);
            that.constructPieChartOptions(pieChartData);
            $('.boop').hide();
        }, function (err) {
            bootbox.alert("Server error, you may be disconnected from the internet");
        });
    };
    GraphComponent.prototype.constructPieObject = function (tasks) {
        var hashMap = {};
        for (var i = 0, len = tasks.length; i < len; i++) {
            if (hashMap[tasks[i].category.name] === undefined) {
                hashMap[tasks[i].category.name] = 1;
            }
            else {
                hashMap[tasks[i].category.name] = hashMap[tasks[i].category.name] + 1;
            }
        }
        return hashMap;
    };
    GraphComponent.prototype.constructPieChartOptions = function (data) {
        var legendData = [];
        var seriesData = [];
        for (var key in data) {
            legendData.push(key);
            seriesData.push({ 'value': data[key], 'name': key });
        }
        var option = {
            title: {
                text: 'Tasks by Category',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                top: '13%',
                orient: 'horizontal',
                data: legendData
            },
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                    // dataView : {
                    //     show: false,
                    //     readOnly: true,
                    //     title: 'Data'
                    // },
                    magicType: {
                        show: true,
                        type: ['pie', 'funnel'],
                        title: 'Switch Types'
                    },
                    restore: {
                        show: true,
                        title: 'reset'
                    },
                    saveAsImage: {
                        show: true,
                        title: 'download'
                    }
                },
                right: '10%',
                top: '20%'
            },
            calculable: true,
            series: [
                {
                    name: 'Tasks by Category',
                    type: 'pie',
                    radius: ['5%', '70%'],
                    center: ['50%', '65%'],
                    roseType: 'radius',
                    width: '50%',
                    max: 40,
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    },
                    data: seriesData
                }
            ]
        };
        this.pieChart.setOption(option);
    };
    GraphComponent.prototype.constructChartOptions = function (date, data) {
        var option = {
            tooltip: {
                trigger: 'axis',
                position: function (pt) {
                    return [pt[0], '10%'];
                }
            },
            title: {
                left: 'center',
                text: 'Task Timeline',
            },
            toolbox: {
                feature: {
                    dataZoom: {
                        title: {
                            zoom: 'enable zoom',
                            back: 'zoom out'
                        },
                        yAxisIndex: 'none'
                    },
                    restore: {
                        title: 'reset'
                    },
                    saveAsImage: {
                        title: 'download'
                    }
                },
                right: '10%',
                top: '10%'
            },
            backgroundColor: 'whitesmoke',
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: date,
                axisLabel: {
                    formatter: function (value, index) {
                        return value.toString().split(' ').splice(1, 3).join(' ');
                    }
                }
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%'],
                name: 'number of tasks',
                nameRotate: 90,
                nameLocation: 'middle',
                nameGap: 40
            },
            dataZoom: [{
                    type: 'inside',
                    start: 0,
                    end: 100
                }, {
                    start: 0,
                    end: 100,
                    handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                    handleSize: '100%',
                    handleStyle: {
                        color: '#fff',
                        shadowBlur: 3,
                        shadowColor: 'rgba(0, 0, 0, 0.6)',
                        shadowOffsetX: 2,
                        shadowOffsetY: 2
                    }
                }],
            series: [
                {
                    name: 'Data',
                    type: 'line',
                    smooth: true,
                    symbol: 'none',
                    sampling: 'average',
                    itemStyle: {
                        normal: {
                            color: 'rgb(255, 70, 131)'
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgb(255, 158, 68)'
                                }, {
                                    offset: 1,
                                    color: 'rgb(255, 70, 131)'
                                }])
                        }
                    },
                    data: data
                }
            ]
        };
        this.lineChart.setOption(option);
    };
    GraphComponent.prototype.addDatesToDateArray = function (startDate, stopDate) {
        var currentDate = startDate;
        while (currentDate <= stopDate) {
            currentDate.setSeconds(0);
            currentDate.setMinutes(0);
            currentDate.setHours(0);
            this.dateArray.push(currentDate);
            var currentMS = currentDate.getTime();
            currentDate.setTime(currentMS + 86400000);
        }
    };
    GraphComponent.prototype.getInnerDaysObject = function (startDate, stopDate) {
        var daysInBetween = {};
        var currentDate = startDate;
        while (currentDate <= stopDate) {
            currentDate.setSeconds(0);
            currentDate.setMinutes(0);
            currentDate.setHours(0);
            daysInBetween[currentDate] = 0;
            var currentMS = currentDate.getTime();
            currentDate = new Date(currentMS + 86400000);
        }
        return daysInBetween;
    };
    GraphComponent.prototype.constructDatesAndValues = function () {
        var newDateArray = [];
        var newValueArray = [];
        var combinedArray = [];
        this.dateArray.sort(function (date1, date2) {
            if (date1 > date2)
                return 1;
            if (date1 < date2)
                return -1;
            return 0;
        });
        var firstDate = this.dateArray[0];
        var lastDate = this.dateArray[this.dateArray.length - 1];
        var newDateObject = this.getInnerDaysObject(firstDate, lastDate);
        for (var i = 0, len = this.dateArray.length; i < len; i++) {
            newDateObject[this.dateArray[i]] = newDateObject[this.dateArray[i]] + 1;
        }
        for (var key in newDateObject) {
            combinedArray.push([new Date(key), newDateObject[key]]);
        }
        combinedArray.sort(function (date1, date2) {
            if (date1[0] > date2[0])
                return 1;
            if (date1[0] < date2[0])
                return -1;
            return 0;
        });
        this.dateArray.length = 0;
        this.valueArray.length = 0;
        for (var i = 0, len = combinedArray.length; i < len; i++) {
            this.dateArray.push(combinedArray[i][0]);
            this.valueArray.push(combinedArray[i][1]);
        }
    };
    GraphComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-graph',
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_task_service_task_service__["a" /* TaskService */]],
            template: __webpack_require__(1035),
            styles: [__webpack_require__(1023)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_task_service_task_service__["a" /* TaskService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_task_service_task_service__["a" /* TaskService */]) === 'function' && _a) || Object])
    ], GraphComponent);
    return GraphComponent;
    var _a;
}());
//# sourceMappingURL=/Users/bowei/Documents/Development/Projects/powerlist/src/graph.component.js.map

/***/ },

/***/ 466:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_task__ = __webpack_require__(748);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_category__ = __webpack_require__(747);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_calendar_service_calendar_service__ = __webpack_require__(749);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_task_service_task_service__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_category_service_category_service__ = __webpack_require__(750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_app_colors__ = __webpack_require__(751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service_auth_service__ = __webpack_require__(222);
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
    function ListComponent(calendarService, taskService, categoryService, authService) {
        this.calendarService = calendarService;
        this.taskService = taskService;
        this.categoryService = categoryService;
        this.authService = authService;
        this.tasks = [];
        this.categories = [];
        this.selectedCategoryId = null;
        this.colors = [__WEBPACK_IMPORTED_MODULE_6__shared_app_colors__["a" /* Colors */].lightPink, __WEBPACK_IMPORTED_MODULE_6__shared_app_colors__["a" /* Colors */].lightBlue, __WEBPACK_IMPORTED_MODULE_6__shared_app_colors__["a" /* Colors */].lightGreen, __WEBPACK_IMPORTED_MODULE_6__shared_app_colors__["a" /* Colors */].lightYellow];
    }
    ListComponent.prototype.ngOnInit = function () {
        if (this.authService.isAuthenticated()) {
            this.initLoadingModal();
            this.initializeUI();
            this.initializeCategories();
            this.fetchTasks(true, null, null);
        }
    };
    ListComponent.prototype.initializeUI = function () {
        flatpickr('.flatpickrStart', { utc: true, enableTime: true });
        flatpickr('.flatpickrEnd', { utc: true, enableTime: true });
        $('.js-category-description').toggleClass('active');
        $('#listModal').on('show.bs.modal', function (event) {
            var button = $(event.relatedTarget); // Button that triggered the modal
            var taskId = button.data('taskid'); // Extract info from data-* attributes
            var title = button.data('title'); // Extract info from data-* attributes
            var modal = $(this);
            modal.find('.modal-body #task-title').val(title);
            modal.find('.hidden-id').val(taskId);
        });
    };
    ListComponent.prototype.fetchTasks = function (firstLoad, boundCategoryTitle, category) {
        if (!this.selectedCategoryId) {
            this.fetchHomeTasks(firstLoad, boundCategoryTitle);
        }
        else {
            var that_1 = this;
            this.taskService.getCategoryTasks(this.selectedCategoryId).subscribe(function (tasks) {
                that_1.tasks = []; // javascript garbage collects
                for (var i = 0; i < tasks.length; i++) {
                    that_1.insertIntoTasksObject(tasks[i]);
                }
                if (boundCategoryTitle) {
                    boundCategoryTitle.textContent = category;
                }
                $('.boop').hide();
            }, function (err) {
                bootbox.alert("Server error, you may be disconnected from the internet");
            });
            this.showLoadingModalAfterTimeout();
        }
    };
    ListComponent.prototype.fetchHomeTasks = function (firstLoad, boundCategoryTitle) {
        var that = this;
        this.taskService.getTasksForUser(localStorage.getItem("user_id")).subscribe(function (tasks) {
            that.tasks = [];
            for (var i = 0; i < tasks.length; i++) {
                that.insertIntoTasksObject(tasks[i]);
                if (firstLoad) {
                    that.calendarService.appendTaskToCalendar(tasks[i]);
                }
                if (boundCategoryTitle) {
                    boundCategoryTitle.textContent = "Home";
                }
                $('.boop').hide();
            }
        }, function (err) {
            bootbox.alert("Server error, you may be disconnected from the internet");
        });
        this.showLoadingModalAfterTimeout();
    };
    ListComponent.prototype.addTask = function (taskInput, startDateInput, endDateInput, event) {
        var that = this;
        if (!(event.keyCode == 13 || event.type === "click")) {
            return;
        }
        if (!(taskInput.value && startDateInput.value && endDateInput.value)) {
            bootbox.alert('Please fill out all form fields.');
            return;
        }
        if (Date.parse(startDateInput.value) > Date.parse(endDateInput.value)) {
            bootbox.alert("Task start date can't be after the end date!");
            return;
        }
        var task = new __WEBPACK_IMPORTED_MODULE_1__models_task__["a" /* Task */](null, taskInput.value, taskInput.value, startDateInput.value, endDateInput.value, null, parseInt(this.selectedCategoryId), parseInt(localStorage.getItem("user_id")), this.colors[Math.floor(Math.random() * 4)], false);
        this.taskService.createTask(task).subscribe(function (task) {
            that.insertIntoTasksObject(task);
            that.calendarService.appendTaskToCalendar(task); // this passes the task ID as the fullcalendarID
            taskInput.value = startDateInput.value = endDateInput.value = null; // clear values
        });
    };
    ListComponent.prototype.insertIntoTasksObject = function (task) {
        var afterPrevious, beforeNext, numTasks = this.tasks.length;
        task = this.addTagIfOverdue(task);
        for (var i = 0; i <= numTasks; i++) {
            if (this.tasks[i]) {
                afterPrevious = Date.parse(this.tasks[i].end) > Date.parse(task.end);
            }
            if (this.tasks[i + 1]) {
                beforeNext = Date.parse(this.tasks[i + 1].end) > Date.parse(task.end);
            }
            if ((afterPrevious || i === this.tasks.length) && (beforeNext || i === this.tasks.length)) {
                this.tasks.splice(i, 0, task);
                break;
            }
        }
    };
    ListComponent.prototype.addTagIfOverdue = function (task) {
        var date = new Date();
        var offsetInMillis = date.getTimezoneOffset() * 60000;
        if (Date.parse(task.end) < (date.getTime() - offsetInMillis)) {
            task.overdue = true;
        }
        return task;
    };
    ListComponent.prototype.removeTask = function (task) {
        var _this = this;
        this.taskService.deleteTask(task.id).subscribe(function (callback) {
            for (var i = 0; i < _this.tasks.length; i++) {
                if (_this.tasks[i] === task) {
                    _this.tasks.splice(i, 1);
                }
            }
            _this.calendarService.removeTaskFromCalendar(task);
        });
    };
    ListComponent.prototype.initializeCategories = function () {
        var that = this;
        this.categoryService.getCategoriesForUser(localStorage.getItem("user_id")).subscribe(function (categories) {
            for (var i = 0; i < categories.length; i++) {
                that.categories.push(categories[i]);
            }
        });
    };
    ListComponent.prototype.addCategory = function (categoryInput, event) {
        var that = this;
        if (!(event.keyCode == 13 || event.type === "click")) {
            return;
        }
        if (!categoryInput.value) {
            bootbox.alert('Please enter a category.');
            return;
        }
        var category = new __WEBPACK_IMPORTED_MODULE_2__models_category__["a" /* Category */](null, categoryInput.value, parseInt(localStorage.getItem("user_id")));
        this.categoryService.createCategory(category).subscribe(function (category) {
            that.categories.push(category);
            that.hideCategoryInput(category); // TODO: replace this with in-place edit library
            categoryInput.value = null;
        });
    };
    ListComponent.prototype.selectCategory = function (boundCategory, boundCategoryTitle, category) {
        if (!category) {
            this.selectedCategoryId = null;
            this.fetchHomeTasks(false, boundCategoryTitle);
        }
        else {
            this.selectedCategoryId = category.id;
            this.fetchTasks(false, boundCategoryTitle, category.name);
        }
        this.setActiveCategory(boundCategory);
    };
    ListComponent.prototype.setActiveCategory = function (element) {
        // use jquery to process multiple elements of same class
        var categoryElements = $('.js-category-description');
        for (var i = 0; i < categoryElements.length; i++) {
            if ($(categoryElements[i]).hasClass('active')) {
                $(categoryElements[i]).removeClass('active');
            }
        }
        $(element).addClass('active');
    };
    ListComponent.prototype.editCategory = function (id) {
        var name, container, input;
        name = $(".category-" + id);
        container = $(".category-" + id + "-container");
        input = $(".category-" + id + "-input");
        name.toggleClass('display-none');
        container.toggleClass('display-none');
        container.toggleClass('display-inline');
        if (container.hasClass('display-inline')) {
            input.val(name.text()).focus();
        }
    };
    ListComponent.prototype.updateCategory = function (event, categoryId, boundCategoryTitle) {
        var _this = this;
        if (event.keyCode != 13) {
            return;
        }
        if ($(event.currentTarget).val()) {
            var updatedName = $(event.currentTarget).val();
            var params = {
                'name': updatedName
            };
            this.categoryService.updateCategory(categoryId, params).subscribe(function (category) {
                _this.editCategory(category.id); // toggle inline edit back
                _this.updateCategorySuperficially(category, boundCategoryTitle);
            });
        }
        else {
            bootbox.alert('Category name must not be empty.');
        }
    };
    ListComponent.prototype.updateCategorySuperficially = function (category, boundCategoryTitle) {
        for (var i = 0; i < this.categories.length; i++) {
            if (this.categories[i].id === category.id) {
                this.categories[i].name = category.name; // this has to be a shallow object copy to avoid async re-rendering so category can stay selected
                if (this.selectedCategoryId === category.id) {
                    boundCategoryTitle.textContent = category.name;
                    var newCategory = document.getElementsByClassName('js-category-reselect-' + category.id);
                    this.setActiveCategory(newCategory);
                }
                return;
            }
        }
    };
    ListComponent.prototype.updateTask = function (boundTitle, boundStart, boundEnd, boundHiddenId) {
        var _this = this;
        var title = $(boundTitle).val();
        var start = $(boundStart).val();
        var end = $(boundEnd).val();
        var id = parseInt($(boundHiddenId).val());
        if (title || start || end || id) {
            var params = {};
            if (title) {
                params['title'] = title;
            }
            if (start) {
                params['start'] = start;
            }
            if (end) {
                params['end'] = end;
            }
            this.taskService.updateTask(id, params).subscribe(function (task) {
                _this.updateTaskSuperficially(task);
                $('#listModal').modal('hide');
            }, function (err) {
                bootbox.alert('Something went wrong :(');
            });
        }
        else {
            bootbox.alert('Please fill in at least 1 edit field.');
        }
    };
    ListComponent.prototype.updateTaskSuperficially = function (task) {
        for (var i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].id === task.id) {
                this.tasks[i] = task;
                this.calendarService.removeTaskFromCalendar(task);
                this.calendarService.appendTaskToCalendar(task); // update calendar after changing task
                return;
            }
        }
    };
    ListComponent.prototype.deleteCategory = function (category) {
        var that = this;
        bootbox.confirm("Delete category: " + category.name + "?", function (response) {
            if (response) {
                if (category.id === that.selectedCategoryId) {
                    that.selectedCategoryId = null;
                }
                that.categoryService.deleteCategory(category.id).subscribe(function (callback) {
                    for (var i = 0; i < that.categories.length; i++) {
                        if (that.categories[i] === category) {
                            that.categories.splice(i, 1);
                        }
                    }
                    that.fetchTasks(false, null, null); // this will cause category tasks to load twice
                }, function (err) {
                    bootbox.alert('Unable to delete category that has tasks associated with it.');
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
    ListComponent.prototype.stopPropagation = function (event) {
        event.stopPropagation();
    };
    ListComponent.prototype.removeModalValues = function (dom1, dom2, dom3, dom4) {
        dom1.value = dom2.value = dom3.value = dom4.value = null; // NOTE: lol
    };
    ListComponent.prototype.initLoadingModal = function () {
        $('.boop').loadingModal({
            position: 'fixed',
            text: '',
            color: '#fff',
            opacity: '0.7',
            backgroundColor: 'rgb(0,0,0)',
            animation: 'cubeGrid'
        });
    };
    ListComponent.prototype.showLoadingModal = function () {
        if (this.tasks.length === 0) {
            $('.boop').show();
        }
    };
    ListComponent.prototype.showLoadingModalAfterTimeout = function () {
        setTimeout(this.showLoadingModal(), 500);
    };
    ListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-list',
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_calendar_service_calendar_service__["a" /* CalendarService */], __WEBPACK_IMPORTED_MODULE_4__services_task_service_task_service__["a" /* TaskService */], __WEBPACK_IMPORTED_MODULE_5__services_category_service_category_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_7__services_auth_service_auth_service__["a" /* AuthService */]],
            template: __webpack_require__(1036),
            styles: [__webpack_require__(1024)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_calendar_service_calendar_service__["a" /* CalendarService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_calendar_service_calendar_service__["a" /* CalendarService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_task_service_task_service__["a" /* TaskService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_task_service_task_service__["a" /* TaskService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_category_service_category_service__["a" /* CategoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_category_service_category_service__["a" /* CategoryService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__services_auth_service_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__services_auth_service_auth_service__["a" /* AuthService */]) === 'function' && _d) || Object])
    ], ListComponent);
    return ListComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/bowei/Documents/Development/Projects/powerlist/src/list.component.js.map

/***/ },

/***/ 467:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service_auth_service__ = __webpack_require__(222);
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
    function LoginComponent(authService) {
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnChanges = function () { };
    LoginComponent.prototype.ngOnInit = function () {
        this.initElectricity();
    };
    LoginComponent.prototype.initElectricity = function () {
        var electricity = new Electricity();
        electricity.init();
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_auth_service_auth_service__["a" /* AuthService */]],
            template: __webpack_require__(1037),
            styles: [__webpack_require__(1025)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a;
}());
//# sourceMappingURL=/Users/bowei/Documents/Development/Projects/powerlist/src/login.component.js.map

/***/ },

/***/ 468:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service_auth_service__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_routes__ = __webpack_require__(308);
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
        if (!this.authService.isAuthenticated()) {
            this.router.navigate([__WEBPACK_IMPORTED_MODULE_3__shared_routes__["a" /* AppRoutes */].login]);
        }
    };
    PrivateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-private',
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_auth_service_auth_service__["a" /* AuthService */]],
            template: __webpack_require__(1040),
            styles: [__webpack_require__(1028)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], PrivateComponent);
    return PrivateComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/bowei/Documents/Development/Projects/powerlist/src/private.component.js.map

/***/ },

/***/ 469:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_app_config__ = __webpack_require__(223);
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
        delete Task["id"]; // server doesn't like id property
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__shared_app_config__["a" /* Config */].baseUrl + "/tasks", Task)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'createTask error'); });
    };
    TaskService.prototype.getTasks = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__shared_app_config__["a" /* Config */].baseUrl + "/tasks")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'getTasks error'); });
    };
    TaskService.prototype.getTasksForUser = function (userId) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__shared_app_config__["a" /* Config */].baseUrl + "/find_user_tasks?user_id=" + userId)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'getTasksForUser error'); });
    };
    TaskService.prototype.deleteTask = function (taskId) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_3__shared_app_config__["a" /* Config */].baseUrl + "/tasks/" + taskId)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'deleteTask error'); });
    };
    TaskService.prototype.updateTask = function (taskId, params) {
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_3__shared_app_config__["a" /* Config */].baseUrl + "/tasks/" + taskId, params)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'updateTask error'); });
    };
    TaskService.prototype.getCategoryTasks = function (categoryId) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__shared_app_config__["a" /* Config */].baseUrl + "/get_category_tasks?category_id=" + categoryId)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'getCategoryTasks error'); });
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

/***/ 470:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_app_config__ = __webpack_require__(223);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUser = function (username) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__shared_app_config__["a" /* Config */].baseUrl + "/find_user?username=" + username)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'getUser error'); });
    };
    UserService.prototype.createUser = function (username) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__shared_app_config__["a" /* Config */].baseUrl + "/users", { username: username })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'createUser error'); });
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], UserService);
    return UserService;
    var _a;
}());
//# sourceMappingURL=/Users/bowei/Documents/Development/Projects/powerlist/src/user.service.js.map

/***/ },

/***/ 604:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 604;


/***/ },

/***/ 605:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(753);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(742);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/bowei/Documents/Development/Projects/powerlist/src/main.js.map

/***/ },

/***/ 741:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_list_list_component__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_graph_graph_component__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_private_private_component__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_routes__ = __webpack_require__(308);
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
        redirectTo: __WEBPACK_IMPORTED_MODULE_6__shared_routes__["a" /* AppRoutes */].main,
        pathMatch: 'full'
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_6__shared_routes__["a" /* AppRoutes */].login,
        component: __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__["a" /* LoginComponent */],
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_6__shared_routes__["a" /* AppRoutes */].private,
        component: __WEBPACK_IMPORTED_MODULE_5__components_private_private_component__["a" /* PrivateComponent */],
        children: [
            { path: 'list', component: __WEBPACK_IMPORTED_MODULE_2__components_list_list_component__["a" /* ListComponent */], outlet: 'aux' },
            { path: 'graph', component: __WEBPACK_IMPORTED_MODULE_3__components_graph_graph_component__["a" /* GraphComponent */], outlet: 'aux' }
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

/***/ 742:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__(741);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_main_app_component__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__(746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_footer_footer_component__ = __webpack_require__(744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_list_list_component__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_calendar_calendar_component__ = __webpack_require__(743);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_private_private_component__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_graph_graph_component__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_Rx__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_rxjs_Rx__);
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
                __WEBPACK_IMPORTED_MODULE_9__components_list_list_component__["a" /* ListComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_calendar_calendar_component__["a" /* CalendarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_private_private_component__["a" /* PrivateComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_graph_graph_component__["a" /* GraphComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AllergyClientRoutingModule */]
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

/***/ 743:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
    function CalendarComponent() {
    }
    CalendarComponent.prototype.ngOnInit = function () {
        $('.fullcalendar').fullCalendar({
            header: {
                center: 'listDay, listWeek, month'
            },
            editable: false,
            buttonText: {
                month: 'Month', listWeek: 'Week', listDay: 'Day'
            },
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
            providers: [],
            template: __webpack_require__(1033),
            styles: [__webpack_require__(1021)]
        }), 
        __metadata('design:paramtypes', [])
    ], CalendarComponent);
    return CalendarComponent;
}());
//# sourceMappingURL=/Users/bowei/Documents/Development/Projects/powerlist/src/calendar.component.js.map

/***/ },

/***/ 744:
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
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(1034),
            styles: [__webpack_require__(1022)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=/Users/bowei/Documents/Development/Projects/powerlist/src/footer.component.js.map

/***/ },

/***/ 745:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_service_user_service__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
/* main is only used as an entry point, for bootstrapping the application.
some service classes get PROVIDED here if needed in other service classes */
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-root',
            providers: [__WEBPACK_IMPORTED_MODULE_0__services_user_service_user_service__["a" /* UserService */]],
            template: __webpack_require__(1038),
            styles: [__webpack_require__(1026)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/bowei/Documents/Development/Projects/powerlist/src/app.component.js.map

/***/ },

/***/ 746:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service_auth_service__ = __webpack_require__(222);
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
    NavbarComponent.prototype.ngOnInit = function () { };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_auth_service_auth_service__["a" /* AuthService */]],
            template: __webpack_require__(1039),
            styles: [__webpack_require__(1027)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a;
}());
//# sourceMappingURL=/Users/bowei/Documents/Development/Projects/powerlist/src/navbar.component.js.map

/***/ },

/***/ 747:
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

/***/ 748:
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

/***/ 749:
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

/***/ 750:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_app_config__ = __webpack_require__(223);
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
    CategoryService.prototype.createCategory = function (Category) {
        delete Category["id"]; // server doesn't like seeing id property
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__shared_app_config__["a" /* Config */].baseUrl + "/categories", Category)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'createCategory error'); });
    };
    CategoryService.prototype.getCategoryByName = function (name) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__shared_app_config__["a" /* Config */].baseUrl + "/find_category?name=" + name)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'getCategoryByName error'); });
    };
    CategoryService.prototype.getCategories = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__shared_app_config__["a" /* Config */].baseUrl + "/categories")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'getCategories error'); });
    };
    CategoryService.prototype.getCategoriesForUser = function (userId) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__shared_app_config__["a" /* Config */].baseUrl + "/find_user_categories?user_id=" + userId)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'getCategoriesForUser error'); });
    };
    CategoryService.prototype.deleteCategory = function (categoryId) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_3__shared_app_config__["a" /* Config */].baseUrl + "/categories/" + categoryId)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'deleteCategory error'); });
    };
    CategoryService.prototype.updateCategory = function (categoryId, params) {
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_3__shared_app_config__["a" /* Config */].baseUrl + "/categories/" + categoryId, params)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'updateCategory error'); });
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

/***/ 751:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Colors; });
var Colors = (function () {
    function Colors() {
    }
    Colors.lightPink = "#f5cbbc";
    Colors.lightBlue = "#ccccff";
    Colors.lightGreen = "#b3ffb3";
    Colors.lightYellow = "#ffffb3";
    return Colors;
}());
//# sourceMappingURL=/Users/bowei/Documents/Development/Projects/powerlist/src/app-colors.js.map

/***/ },

/***/ 752:
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

/***/ 753:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(837);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(830);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(826);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(832);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(831);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(829);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(828);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(836);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(825);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(824);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(834);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(827);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(835);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(833);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(838);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/bowei/Documents/Development/Projects/powerlist/src/polyfills.js.map

/***/ }

},[1421]);
//# sourceMappingURL=main.bundle.map