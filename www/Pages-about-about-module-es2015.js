(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-about-about-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Pages/about/about.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Pages/about/about.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>About</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\n\n    <ion-slide>\n      <ion-card>\n        <ion-card-header>\n          <ion-card-subtitle>Card Subtitle 1</ion-card-subtitle>\n          <ion-card-title>Card Title 1</ion-card-title>\n        </ion-card-header>\n\n        <ion-card-content>\n          Keep close to Nature's heart... and break clear away, once in awhile,\n          and climb a mountain or spend a week in the woods. Wash your spirit clean.\n        </ion-card-content>\n      </ion-card>\n    </ion-slide>\n\n    <ion-slide>\n      <ion-card>\n        <ion-card-header>\n          <ion-card-subtitle>Card Subtitle 2</ion-card-subtitle>\n          <ion-card-title>Card Title 2</ion-card-title>\n        </ion-card-header>\n\n        <ion-card-content>\n          Keep close to Nature's heart... and break clear away, once in awhile,\n          and climb a mountain or spend a week in the woods. Wash your spirit clean.\n        </ion-card-content>\n      </ion-card>\n    </ion-slide>\n\n    <ion-slide>\n      <ion-card>\n        <ion-card-header>\n          <ion-card-subtitle>Card Subtitle 3</ion-card-subtitle>\n          <ion-card-title>Card Title 3</ion-card-title>\n        </ion-card-header>\n\n        <ion-card-content>\n          Keep close to Nature's heart... and break clear away, once in awhile,\n          and climb a mountain or spend a week in the woods. Wash your spirit clean.\n        </ion-card-content>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n</ion-content>"

/***/ }),

/***/ "./src/app/Pages/about/about.module.ts":
/*!*********************************************!*\
  !*** ./src/app/Pages/about/about.module.ts ***!
  \*********************************************/
/*! exports provided: AboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about.page */ "./src/app/Pages/about/about.page.ts");







const routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]
    }
];
let AboutPageModule = class AboutPageModule {
};
AboutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]]
    })
], AboutPageModule);



/***/ }),

/***/ "./src/app/Pages/about/about.page.scss":
/*!*********************************************!*\
  !*** ./src/app/Pages/about/about.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2Fib3V0L2Fib3V0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Pages/about/about.page.ts":
/*!*******************************************!*\
  !*** ./src/app/Pages/about/about.page.ts ***!
  \*******************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutPage = class AboutPage {
    constructor() {
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            autoplay: true,
            loop: true
        };
    }
    ngOnInit() {
    }
};
AboutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: __webpack_require__(/*! raw-loader!./about.page.html */ "./node_modules/raw-loader/index.js!./src/app/Pages/about/about.page.html"),
        styles: [__webpack_require__(/*! ./about.page.scss */ "./src/app/Pages/about/about.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AboutPage);



/***/ })

}]);
//# sourceMappingURL=Pages-about-about-module-es2015.js.map