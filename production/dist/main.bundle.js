webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up_sign_up_component__ = __webpack_require__("../../../../../src/app/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__team_list_team_list_component__ = __webpack_require__("../../../../../src/app/team-list/team-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__game_list_game_list_component__ = __webpack_require__("../../../../../src/app/game-list/game-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__game_detail_game_detail_component__ = __webpack_require__("../../../../../src/app/game-detail/game-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__team_detail_team_detail_component__ = __webpack_require__("../../../../../src/app/team-detail/team-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'contact',
        component: __WEBPACK_IMPORTED_MODULE_6__contact_contact_component__["a" /* ContactComponent */]
    },
    {
        path: 'games',
        component: __WEBPACK_IMPORTED_MODULE_5__game_list_game_list_component__["a" /* GameListComponent */]
    },
    {
        path: 'teams',
        component: __WEBPACK_IMPORTED_MODULE_4__team_list_team_list_component__["a" /* TeamListComponent */]
    },
    {
        path: 'signup',
        component: __WEBPACK_IMPORTED_MODULE_2__sign_up_sign_up_component__["a" /* SignUpComponent */]
    },
    {
        path: 'games/details',
        component: __WEBPACK_IMPORTED_MODULE_7__game_detail_game_detail_component__["a" /* GameDetailComponent */]
    },
    {
        path: 'teams/details',
        component: __WEBPACK_IMPORTED_MODULE_8__team_detail_team_detail_component__["a" /* TeamDetailComponent */]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <img src=\"/assets/logo.svg\" class=\"navbar-icon title-image\" width=\"50px\" alt=\"Icon\" />\r\n  <a class=\"navbar-brand\" [routerLink]=\"['/']\">E-Sports</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarContent\" aria-controls=\"navbarContent\"\r\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/home']\" routerLinkActive=\"active\">Start</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/teams']\" routerLinkActive=\"active\">Teams</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/games']\" routerLinkActive=\"active\">Games</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/signup']\" routerLinkActive=\"active\">Anmeldung</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/contact']\" routerLinkActive=\"active\">Kontakt</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title-image {\n  margin: 5px 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sign_up_sign_up_component__ = __webpack_require__("../../../../../src/app/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__team_list_team_list_component__ = __webpack_require__("../../../../../src/app/team-list/team-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__game_list_game_list_component__ = __webpack_require__("../../../../../src/app/game-list/game-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__game_detail_game_detail_component__ = __webpack_require__("../../../../../src/app/game-detail/game-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__team_detail_team_detail_component__ = __webpack_require__("../../../../../src/app/team-detail/team-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__content_card_content_card_component__ = __webpack_require__("../../../../../src/app/content-card/content-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__sign_up_sign_up_component__["a" /* SignUpComponent */],
                __WEBPACK_IMPORTED_MODULE_7__team_list_team_list_component__["a" /* TeamListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__game_list_game_list_component__["a" /* GameListComponent */],
                __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_10__game_detail_game_detail_component__["a" /* GameDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_11__team_detail_team_detail_component__["a" /* TeamDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_12__content_card_content_card_component__["a" /* ContentCardComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* CarouselModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__data_service__["a" /* DataService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<app-content-card title=\"Kontakt\">\r\n    <div class=\"contact-content\">\r\n        <div class=\"card-body main-content contact-content-container\">\r\n            <div class=\"contact-sub\">\r\n                <p>Call us at\r\n                    <a href=\"tel: +41 79 881 90 05\">+41 79 881 90 05</a>\r\n                </p>\r\n                <input type=\"email\" class=\"form-control\" placeholder=\"Enter email\">\r\n                <textarea class=\"form-control\" placeholder=\"Text text\"></textarea>\r\n                <select class=\"form-control\">\r\n                    <option disabled selected>Reason</option>\r\n                    <option>1</option>\r\n                    <option>2</option>\r\n                    <option>3</option>\r\n                </select>\r\n                <div class=\"row\">\r\n                    <div class=\"col\">\r\n                        <button type=\"submit\" class=\"btn btn-primary col-12\">Send</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"contact-sub\">\r\n                <h2 id=\"map-title\">Where to find us</h2>\r\n                <iframe src=\"https://www.google.com/maps/embed\" frameborder=\"0\"></iframe>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</app-content-card>"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contact-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n.contact-content-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\niframe {\n  border: 0;\n  width: 100%;\n  height: 100%; }\n\n.contact-sub {\n  width: 50%;\n  padding: 10px; }\n\n#map-title {\n  display: none; }\n\ninput, textarea, button, a {\n  margin: 0 1em 1em 0; }\n\nbutton {\n  margin: 1em 1em 1em 0; }\n\n@media screen and (max-width: 768px) {\n  .contact-content {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .contact-content-container {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n  .contact-sub {\n    width: 100% !important; }\n  #map-title {\n    display: inline-block; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/content-card/content-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-container {\r\n    width: 75%;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .main-container {\r\n        width: 95%;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/content-card/content-card.component.html":
/***/ (function(module, exports) {

module.exports = "<br />\r\n<div class=\"container main-container\">\r\n  <h1>{{title}}</h1>\r\n\r\n  <div [ngClass]=\"cardless ? '' : 'card'\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/content-card/content-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentCardComponent = /** @class */ (function () {
    function ContentCardComponent() {
        this._cardless = false;
    }
    ContentCardComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ContentCardComponent.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            this._title = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentCardComponent.prototype, "cardless", {
        get: function () {
            return this._cardless;
        },
        set: function (value) {
            this._cardless = value;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ContentCardComponent.prototype, "title", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ContentCardComponent.prototype, "cardless", null);
    ContentCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-content-card',
            template: __webpack_require__("../../../../../src/app/content-card/content-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/content-card/content-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentCardComponent);
    return ContentCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DataService = /** @class */ (function () {
    function DataService() {
    }
    DataService.prototype.getGames = function () {
        return [
            {
                img: '/assets/ben10.png',
                title: 'Ben 10 Hero Time',
                caption: 'A game!',
                tags: ['Foo', 'Bar', 'Stuff'],
                description: 'Billy Billions has stolen the Rustbucket! Help Ben to use the power of the Omnitrix to jump, run and smash in this exciting platform adventure',
                video: '/assets/video/video.mp4',
                subtitles: [
                    {
                        src: '/assets/video/subtitles/english.vtt',
                        label: 'English',
                        srclang: 'en'
                    },
                    {
                        src: '/assets/video/subtitles/german.vtt',
                        label: 'Deutsch',
                        srclang: 'de'
                    }
                ]
            }, {
                img: '/assets/mc.png',
                title: 'Minecraft',
                caption: 'Another game!',
                tags: ['DoesThings', 'Interesting', 'Shooter'],
                description: 'Foo... Bar.',
                video: '/assets/video/video.mp4',
                subtitles: [
                    {
                        src: '/assets/video/subtitles/english.vtt',
                        label: 'English',
                        srclang: 'en'
                    },
                    {
                        src: '/assets/video/subtitles/german.vtt',
                        label: 'Deutsch',
                        srclang: 'de'
                    }
                ]
            }
        ];
    };
    DataService.prototype.getTeams = function () {
        return [
            {
                img: '/assets/reds.png',
                title: 'Helsinki REDS',
                caption: 'Helsinki, Finnland',
                members: [
                    "Thomas Gassmann",
                    "Micha Frei",
                    "Simon Baumeler"
                ],
                description: 'The original Helsinki REDS Overwatch team was assembled by team manager Christer Kasurinen and the first team captain Roope “Ruape” Kurkela. During the fall of 2016, they gathered a tight-knit group of players committed to working hard and growing together to become a team that is competitive in Overwatch on an international level. In the fall of 2017, the Helsinki REDS announced an expansion into Dota 2 with our first roster for the game.'
            }, {
                img: '/assets/renegades.png',
                title: 'Detroit Renegades',
                caption: 'Detroit, USA',
                members: [
                    "Simon Gander",
                    "Marvin Setz",
                    "Till Kottmann"
                ],
                description: 'The Renegades, also known as the Detroit Renegades and previously LA Renegades, is a professional eSports organization that fields teams in Counter-Strike: Global Offensive, Overwatch, Paladins, Rocket League, Vainglory, and Super Smash Bros.'
            }
        ];
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/game-detail/game-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<app-content-card title=\"{{game.title}}\">\n  <div class=\"row row-game-detail\">\n    <div class=\"col-md-6\">\n      <div class=\"card-block\">\n        <h5>2017-01-01</h5>\n        <span *ngFor=\"let tag of game.tags\" class=\"badge badge-pill badge-primary\">{{tag}}</span>\n        <p class=\"card-text\">{{game.description}}</p>\n      </div>\n    </div>\n    <div class=\"col-md-6 bottom-content\">\n      <video class=\"game-video\" controls>\n          <source src=\"{{ game.video }}\" type=\"video/mp4\">\n          Your browser does not support the video tag.\n          <track *ngFor=\"let track of game.subtitles\" kind=\"subtitles\" srclang=\"{{ track.srclang }}\" src=\"{{ track.src }}\" default>\n      </video>\n      <ul class=\"list-group\">\n        <li *ngFor=\"let team of teams\" class=\"list-group-item\">\n          <img src=\"/assets/logo.svg\">\n          {{team.title}}\n        </li>\n      </ul>\n    </div>\n  </div>\n</app-content-card>"

/***/ }),

/***/ "../../../../../src/app/game-detail/game-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".game-video {\n  max-width: 100%; }\n\n.row-game-detail {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  padding: 10px; }\n\n@media screen and (max-width: 768px) {\n  .bottom-content {\n    margin-top: 1em; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/game-detail/game-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameDetailComponent = /** @class */ (function () {
    function GameDetailComponent(_dataService) {
        this._dataService = _dataService;
    }
    GameDetailComponent.prototype.ngOnInit = function () {
        this._game = this._dataService.getGames()[0];
        this._teams = this._dataService.getTeams();
    };
    Object.defineProperty(GameDetailComponent.prototype, "game", {
        get: function () {
            return this._game;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameDetailComponent.prototype, "teams", {
        get: function () {
            return this._teams;
        },
        enumerable: true,
        configurable: true
    });
    GameDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-game-detail',
            template: __webpack_require__("../../../../../src/app/game-detail/game-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/game-detail/game-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], GameDetailComponent);
    return GameDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/game-list/game-list.component.html":
/***/ (function(module, exports) {

module.exports = "<app-content-card title=\"Games\" cardless=\"true\">\n    <section *ngFor=\"let game of games\">\n        <div class=\"container\">\n            <div class=\"card\">\n                <div class=\"row game-container\">\n                    <div class=\"col-md-6\">\n                        <video controls>\n                            <source src=\"{{ game.video }}\" type=\"video/mp4\">\n                            Your browser does not support the video tag.\n                            <track *ngFor=\"let track of game.subtitles\" kind=\"subtitles\" srclang=\"{{ track.srclang }}\" src=\"{{ track.src }}\" default>\n                        </video>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"card-block\">\n                            <h4 class=\"card-title\">{{ game.title }}</h4>\n                            <p class=\"card-text\">{{ game.description }}</p>\n                            <a [routerLink]=\"['/games/details']\" class=\"btn btn-primary float-right read-more\">Details</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n</app-content-card>"

/***/ }),

/***/ "../../../../../src/app/game-list/game-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section {\n  margin: 1em; }\n\nsection .container .card {\n  padding: 1em; }\n\nsection .container {\n  position: relative; }\n\n.read-more {\n  position: absolute;\n  bottom: 0;\n  right: 0; }\n\n.game-container {\n  padding: 1em; }\n\nvideo {\n  max-width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/game-list/game-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameListComponent = /** @class */ (function () {
    function GameListComponent(_dataService) {
        this._dataService = _dataService;
    }
    GameListComponent.prototype.ngOnInit = function () {
        this._games = this._dataService.getGames();
    };
    Object.defineProperty(GameListComponent.prototype, "games", {
        get: function () {
            return this._games;
        },
        enumerable: true,
        configurable: true
    });
    GameListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-game-list',
            template: __webpack_require__("../../../../../src/app/game-list/game-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/game-list/game-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], GameListComponent);
    return GameListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-content-card title=\"\" cardless=\"true\">\r\n    <div class=\"container text-center\">\r\n        <h2 class=\"display-5\">2\r\n            <small class=\"text-muted\">Tage</small> 5\r\n            <small class=\"text-muted\">Stunden</small> 4\r\n            <small class=\"text-muted\">Minuten</small>\r\n        </h2>\r\n    </div>\r\n    <div class=\"container text-center\">\r\n        Listen to our podcast!\r\n        <br />\r\n        <audio controls>\r\n            <source src=\"/assets/audio/audio.ogg\" type=\"audio/ogg\" />\r\n            <source src=\"/assets/audio/audio.aac\" type=\"audio/aac\" />\r\n            <source src=\"/assets/audio/audio.mp3\" type=\"audio/mp3\" />\r\n            Your browser does not support the audio tag.\r\n        </audio>\r\n    </div>\r\n    <carousel>\r\n        <slide *ngFor=\"let team of teams\">\r\n            <a [routerLink]=\"['/teams/details']\">\r\n                <img [src]=\"team.img\" alt=\"{{ team.title }}\" class=\"detail-image\">\r\n                <div class=\"carousel-caption\">\r\n                    <h3>{{ team.title }}</h3>\r\n                    <p class=\"d-none d-md-block\">{{ team.caption }}</p>\r\n                </div>\r\n            </a>\r\n        </slide>\r\n    </carousel>\r\n    <br />\r\n    <carousel>\r\n        <slide *ngFor=\"let game of games\">\r\n            <a [routerLink]=\"['/games/details']\">\r\n                <img [src]=\"game.img\" alt=\"{{ game.title }}\" class=\"detail-image\">\r\n                <div class=\"carousel-caption\">\r\n                    <h3>{{ game.title }}</h3>\r\n                    <p class=\"d-none d-md-block\">{{ game.caption }}</p>\r\n                </div>\r\n            </a>\r\n        </slide>\r\n    </carousel>\r\n</app-content-card>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".carousel-caption {\n  background-color: rgba(33, 33, 33, 0.712); }\n\n.detail-image {\n  display: block;\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(dataService) {
        this._teams = dataService.getTeams();
        this._games = dataService.getGames();
    }
    Object.defineProperty(HomeComponent.prototype, "games", {
        get: function () {
            return this._games;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeComponent.prototype, "teams", {
        get: function () {
            return this._teams;
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sign-up/sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "<app-content-card title=\"Anmeldung\">\r\n    <div class=\"signup-content\">\r\n        <img class=\"signup-image\" src=\"/assets/optic.png\" alt=\"Icon\">\r\n        <div class=\"card-body main-content\">\r\n            <div class=\"signup-input-group form-group\">\r\n                <h5 class=\"card-title\">Informationen</h5>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Vorname\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Nachname\">\r\n                <input type=\"email\" class=\"form-control\" placeholder=\"Enter email\">\r\n            </div>\r\n            <div class=\"signup-input-group form-group\">\r\n                <h5 class=\"card-title\">Spieler</h5>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Spieler 1\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Spieler 2\">\r\n                <div class=\"row\">\r\n                    <div class=\"col\">\r\n                        <button class=\"btn btn-secondary col-12\">Spieler hinzufügen</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <button type=\"submit\" class=\"btn btn-primary col-12\">Anmelden</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</app-content-card>"

/***/ }),

/***/ "../../../../../src/app/sign-up/sign-up.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".signup-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n.signup-image {\n  margin: 1em;\n  width: 90%;\n  max-width: 300px;\n  -ms-flex-item-align: start;\n      align-self: flex-start;\n  -o-object-fit: contain;\n     object-fit: contain; }\n\n.main-content {\n  width: 100%; }\n\n.signup-input-group {\n  border: 1px solid black;\n  border-radius: 0.5em;\n  padding: 1em; }\n\nbutton {\n  width: 100%; }\n\ninput {\n  margin: 0 1em 1em 0; }\n\n@media screen and (max-width: 768px) {\n  .signup-content {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .signup-image {\n    -ms-flex-item-align: initial;\n        -ms-grid-row-align: initial;\n        align-self: initial; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sign-up/sign-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignUpComponent = /** @class */ (function () {
    function SignUpComponent() {
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sign-up',
            template: __webpack_require__("../../../../../src/app/sign-up/sign-up.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sign-up/sign-up.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/team-detail/team-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<app-content-card title=\"{{team.title}}\">\n    <div class=\"row row-team-detail\">\n        <div class=\"col-md-6 teams-top\">\n            <div class=\"card-block\">\n                <h5>2017-01-01</h5>\n                <p class=\"card-text\">{{team.description}}</p>\n            </div>\n        </div>\n        <div class=\"col-md-6 teams-bottom\">\n            <div class=\"card-img-bottom-team-detail\">\n                <img class=\"card-img-top\" src=\"{{team.img}}\" />\n                <ul class=\"list-group\">\n                    <li *ngFor=\"let member of team.members\" class=\"list-group-item\">{{member}}</li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</app-content-card>"

/***/ }),

/***/ "../../../../../src/app/team-detail/team-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row-team-detail {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin: 1em; }\n\n@media screen and (max-width: 768px) {\n  .teams-bottom {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0; }\n  .teams-top {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n    margin-top: 1em; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/team-detail/team-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeamDetailComponent = /** @class */ (function () {
    function TeamDetailComponent(_dataService) {
        this._dataService = _dataService;
    }
    TeamDetailComponent.prototype.ngOnInit = function () {
        this._team = this._dataService.getTeams()[0];
    };
    Object.defineProperty(TeamDetailComponent.prototype, "team", {
        get: function () {
            return this._team;
        },
        enumerable: true,
        configurable: true
    });
    TeamDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-team-detail',
            template: __webpack_require__("../../../../../src/app/team-detail/team-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/team-detail/team-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], TeamDetailComponent);
    return TeamDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/team-list/team-list.component.html":
/***/ (function(module, exports) {

module.exports = "<app-content-card title=\"Teams\" cardless=\"true\">\n    <section *ngFor=\"let team of teams\">\n        <div class=\"container\">\n            <div class=\"card\">\n                <div class=\"row team-container\">\n                    <div class=\"col-md-6\">\n                        <img class=\"team-card-image\" src=\"{{ team.img }}\" alt=\"{{ team.title }}\" />\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"card-block\">\n                            <h4 class=\"card-title\">{{ team.title }}</h4>\n                            <p class=\"card-text\">{{ team.description }}</p>\n                            <a [routerLink]=\"['/teams/details']\" class=\"btn btn-primary float-right read-more\">Details</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n</app-content-card>"

/***/ }),

/***/ "../../../../../src/app/team-list/team-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section {\n  margin: 1em; }\n\nsection .container .card {\n  padding: 1em; }\n\nsection .container {\n  position: relative; }\n\n.read-more {\n  position: absolute;\n  bottom: 0;\n  right: 0; }\n\n.team-card-image {\n  max-width: 100%;\n  max-height: 100%; }\n\n.team-container {\n  padding: 1em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/team-list/team-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeamListComponent = /** @class */ (function () {
    function TeamListComponent(_dataService) {
        this._dataService = _dataService;
    }
    TeamListComponent.prototype.ngOnInit = function () {
        this._teams = this._dataService.getTeams();
    };
    Object.defineProperty(TeamListComponent.prototype, "teams", {
        get: function () {
            return this._teams;
        },
        enumerable: true,
        configurable: true
    });
    TeamListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-team-list',
            template: __webpack_require__("../../../../../src/app/team-list/team-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/team-list/team-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], TeamListComponent);
    return TeamListComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map