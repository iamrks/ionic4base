(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-sign-up-sign-up-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Pages/sign-up/sign-up.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Pages/sign-up/sign-up.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Sign Up</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size-md=\"6\" offset-md=\"3\">\n        <ion-card>\n          <h4 text-center margin-top>Create your account...</h4>\n          <ion-card-content>\n            <form [formGroup]=\"singUpForm\" (ngSubmit)=\"onSubmit()\">\n              <ion-list>\n                <ion-item>\n                  <ion-label position=\"floating\">Username <ion-text color=\"danger\">*</ion-text>\n                  </ion-label>\n                  <ion-input type=\"text\" formControlName=\"username\"></ion-input>\n                </ion-item>\n\n                <ion-item>\n                  <ion-label position=\"floating\">First Name <ion-text color=\"danger\">*</ion-text>\n                  </ion-label>\n                  <ion-input type=\"text\" formControlName=\"firstName\"></ion-input>\n                </ion-item>\n\n                <ion-item>\n                  <ion-label position=\"floating\">Last Name <ion-text color=\"danger\">*</ion-text>\n                  </ion-label>\n                  <ion-input type=\"text\" formControlName=\"lastName\"></ion-input>\n                </ion-item>\n\n                <ion-item>\n                  <ion-label position=\"floating\">Email <ion-text color=\"danger\">*</ion-text>\n                  </ion-label>\n                  <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n                </ion-item>\n\n                <ion-item>\n                  <ion-label position=\"floating\">Age</ion-label>\n                  <ion-input type=\"number\" formControlName=\"age\"></ion-input>\n                </ion-item>\n\n                <ion-item>\n                  <ion-label position=\"floating\">Password <ion-text color=\"danger\">*</ion-text>\n                  </ion-label>\n                  <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n                </ion-item>\n              </ion-list>\n\n              <div class=\"ion-padding\" text-center>\n                <ion-button type=\"submit\" class=\"ion-no-margin\" [disabled]=\"!singUpForm.valid\">\n                  <ion-icon name=\"checkmark\" slot=\"start\"></ion-icon> Create account</ion-button>\n              </div>\n            </form>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/Pages/sign-up/sign-up.module.ts":
/*!*************************************************!*\
  !*** ./src/app/Pages/sign-up/sign-up.module.ts ***!
  \*************************************************/
/*! exports provided: SignUpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function() { return SignUpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-up.page */ "./src/app/Pages/sign-up/sign-up.page.ts");







var routes = [
    {
        path: '',
        component: _sign_up_page__WEBPACK_IMPORTED_MODULE_6__["SignUpPage"]
    }
];
var SignUpPageModule = /** @class */ (function () {
    function SignUpPageModule() {
    }
    SignUpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sign_up_page__WEBPACK_IMPORTED_MODULE_6__["SignUpPage"]]
        })
    ], SignUpPageModule);
    return SignUpPageModule;
}());



/***/ }),

/***/ "./src/app/Pages/sign-up/sign-up.page.scss":
/*!*************************************************!*\
  !*** ./src/app/Pages/sign-up/sign-up.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL3NpZ24tdXAvc2lnbi11cC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/Pages/sign-up/sign-up.page.ts":
/*!***********************************************!*\
  !*** ./src/app/Pages/sign-up/sign-up.page.ts ***!
  \***********************************************/
/*! exports provided: SignUpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPage", function() { return SignUpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");




var SignUpPage = /** @class */ (function () {
    function SignUpPage(formBuilder, alertService) {
        this.formBuilder = formBuilder;
        this.alertService = alertService;
    }
    SignUpPage.prototype.ngOnInit = function () {
        this.initializeForm();
    };
    SignUpPage.prototype.onSubmit = function () {
        console.table(this.singUpForm.value);
        this.alertService.alert('Accout created successfully!');
    };
    // private methods start
    SignUpPage.prototype.initializeForm = function () {
        this.singUpForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            age: [''],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    SignUpPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }
    ]; };
    SignUpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! raw-loader!./sign-up.page.html */ "./node_modules/raw-loader/index.js!./src/app/Pages/sign-up/sign-up.page.html"),
            styles: [__webpack_require__(/*! ./sign-up.page.scss */ "./src/app/Pages/sign-up/sign-up.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], SignUpPage);
    return SignUpPage;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-sign-up-sign-up-module-es5.js.map