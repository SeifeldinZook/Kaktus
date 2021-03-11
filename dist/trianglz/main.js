(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/zook/GitHub/TrianglZ/trianglz/src/main.ts */"zUnb");


/***/ }),

/***/ "0pRC":
/*!************************************************!*\
  !*** ./src/app/notfound/notfound.component.ts ***!
  \************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NotfoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotfoundComponent.ɵfac = function NotfoundComponent_Factory(t) { return new (t || NotfoundComponent)(); };
NotfoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotfoundComponent, selectors: [["app-notfound"]], decls: 0, vars: 0, template: function NotfoundComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGZvdW5kL25vdGZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotfoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notfound',
                templateUrl: './notfound.component.html',
                styleUrls: ['./notfound.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "18Le":
/*!*******************************************!*\
  !*** ./src/app/authentication.service.ts ***!
  \*******************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




class AuthenticationService {
    constructor(router, location) {
        this.router = router;
        this.location = location;
        this._opened = true;
        this.sideBarOpened = true;
    }
    _toggleSidebar() {
        this._opened = !this._opened;
        this.sideBarOpened = !this.sideBarOpened;
    }
    isLoggedIn() {
        // console.log(this.router.url);
        // console.log(this.location.path());
        if (this.location.path() == "/profile") {
            return true;
        }
        else {
            return false;
        }
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"])); };
AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }]; }, null); })();


/***/ }),

/***/ "1W4x":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function RegisterComponent_span_627_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 298);
} }
function RegisterComponent_span_628_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 299);
} }
class RegisterComponent {
    constructor(_Router) {
        this._Router = _Router;
        this.loginFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            fName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            lName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            country_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
        this.show = false;
        this.passwordState = 'Show';
    }
    showPassword() {
        this.show = !this.show;
    }
    ngOnInit() {
        // $('.countrypicker').countrypicker();
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 641, vars: 4, consts: [["id", "register"], [1, "row", "w-100"], [1, "col-lg-6", "d-lg-block", "d-none"], ["src", "../../assets/auth-2.svg", 1, "img-fluid"], [1, "ml-5"], [1, "size-5", "weight-700", "text-gray-2", "mb-2"], [1, "size-3", "text-gray-2", "d-flex", "align-items-top"], [1, "fa", "fa-check-circle", "text-primary", "mr-3", "my-auto"], [1, "my-auto"], [1, "col-lg-6", "col-md-12", "col-sm-12"], [1, "formBox"], [1, "size-4", "text-gray-2", "weight-700", "mb-4"], [3, "formGroup"], [1, "form", "m-auto"], [1, "row"], [1, "col-md-6"], [1, "input-group", "mr-sm-2"], ["formControlName", "fName", "type", "text", "placeholder", "First name", "maxlength", "20", 1, "form-control", "ng-pristine", "ng-invalid", "ng-touched"], ["formControlName", "lName", "type", "text", "placeholder", "Last name", "maxlength", "20", 1, "form-control", "ng-pristine", "ng-invalid", "ng-touched"], [1, "input-group", "mr-sm-2", "my-3"], ["id", "emailInput", "formControlName", "email", "type", "email", "placeholder", "Work Email", "maxlength", "20", 1, "form-control"], [1, "ng-invalid", "ng-dirty", "ng-touched"], [1, "form-group"], ["formcontrolname", "country_id", 1, "form-control", "input-item", "ng-dirty", "ng-valid", "ng-touched"], ["value", "null", "disabled", "", "selected", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["value", "11"], ["value", "12"], ["value", "13"], ["value", "14"], ["value", "15"], ["value", "16"], ["value", "17"], ["value", "18"], ["value", "19"], ["value", "20"], ["value", "21"], ["value", "22"], ["value", "23"], ["value", "24"], ["value", "25"], ["value", "26"], ["value", "27"], ["value", "28"], ["value", "29"], ["value", "30"], ["value", "31"], ["value", "32"], ["value", "33"], ["value", "34"], ["value", "35"], ["value", "36"], ["value", "37"], ["value", "38"], ["value", "39"], ["value", "40"], ["value", "41"], ["value", "42"], ["value", "43"], ["value", "44"], ["value", "45"], ["value", "46"], ["value", "47"], ["value", "48"], ["value", "49"], ["value", "50"], ["value", "51"], ["value", "52"], ["value", "53"], ["value", "54"], ["value", "55"], ["value", "56"], ["value", "57"], ["value", "58"], ["value", "59"], ["value", "60"], ["value", "61"], ["value", "62"], ["value", "63"], ["value", "64"], ["value", "65"], ["value", "66"], ["value", "67"], ["value", "68"], ["value", "69"], ["value", "70"], ["value", "71"], ["value", "72"], ["value", "73"], ["value", "74"], ["value", "75"], ["value", "76"], ["value", "77"], ["value", "78"], ["value", "79"], ["value", "80"], ["value", "81"], ["value", "82"], ["value", "83"], ["value", "84"], ["value", "85"], ["value", "86"], ["value", "87"], ["value", "88"], ["value", "89"], ["value", "90"], ["value", "91"], ["value", "92"], ["value", "93"], ["value", "94"], ["value", "95"], ["value", "96"], ["value", "97"], ["value", "98"], ["value", "99"], ["value", "100"], ["value", "101"], ["value", "102"], ["value", "103"], ["value", "104"], ["value", "105"], ["value", "106"], ["value", "107"], ["value", "108"], ["value", "109"], ["value", "110"], ["value", "111"], ["value", "112"], ["value", "113"], ["value", "114"], ["value", "115"], ["value", "116"], ["value", "117"], ["value", "118"], ["value", "119"], ["value", "120"], ["value", "121"], ["value", "122"], ["value", "123"], ["value", "124"], ["value", "125"], ["value", "126"], ["value", "127"], ["value", "128"], ["value", "129"], ["value", "130"], ["value", "131"], ["value", "132"], ["value", "133"], ["value", "134"], ["value", "135"], ["value", "136"], ["value", "137"], ["value", "138"], ["value", "139"], ["value", "140"], ["value", "141"], ["value", "142"], ["value", "143"], ["value", "144"], ["value", "145"], ["value", "146"], ["value", "147"], ["value", "148"], ["value", "149"], ["value", "150"], ["value", "151"], ["value", "152"], ["value", "153"], ["value", "154"], ["value", "155"], ["value", "156"], ["value", "157"], ["value", "158"], ["value", "159"], ["value", "160"], ["value", "161"], ["value", "162"], ["value", "163"], ["value", "164"], ["value", "165"], ["value", "166"], ["value", "167"], ["value", "168"], ["value", "169"], ["value", "170"], ["value", "171"], ["value", "172"], ["value", "173"], ["value", "174"], ["value", "175"], ["value", "176"], ["value", "177"], ["value", "178"], ["value", "179"], ["value", "180"], ["value", "181"], ["value", "182"], ["value", "183"], ["value", "184"], ["value", "185"], ["value", "186"], ["value", "187"], ["value", "188"], ["value", "189"], ["value", "190"], ["value", "191"], ["value", "192"], ["value", "193"], ["value", "194"], ["value", "195"], ["value", "196"], ["value", "197"], ["value", "198"], ["value", "199"], ["value", "200"], ["value", "201"], ["value", "202"], ["value", "203"], ["value", "204"], ["value", "205"], ["value", "206"], ["value", "207"], ["value", "208"], ["value", "209"], ["value", "210"], ["value", "211"], ["value", "212"], ["value", "213"], ["value", "214"], ["value", "215"], ["value", "216"], ["value", "217"], ["value", "218"], ["value", "219"], ["value", "220"], ["value", "221"], ["value", "222"], ["value", "223"], ["value", "224"], ["value", "225"], ["value", "226"], ["value", "227"], ["value", "228"], ["value", "229"], ["value", "230"], ["value", "231"], ["value", "232"], ["value", "233"], ["value", "234"], ["value", "235"], ["value", "236"], ["value", "237"], ["value", "238"], ["value", "239"], ["value", "240"], ["value", "241"], ["value", "242"], ["value", "243"], ["value", "244"], ["value", "245"], ["value", "246"], ["value", "247"], ["value", "248"], ["value", "249"], ["value", "250"], ["value", "251"], ["value", "252"], ["value", "253"], ["value", "254"], ["value", "255"], ["value", "256"], ["value", "257"], [1, "form-group", "select-invalid"], ["formcontrolname", "industry_category_id", 1, "form-control", "input-item", "ng-pristine", "ng-invalid", "ng-touched"], [1, "col", "form-group"], ["type", "text", "placeholder", "Company name", "formcontrolname", "name", 1, "form-control", "ng-untouched", "ng-pristine", "ng-invalid"], [1, "col", "form-group", "select-invalid"], [1, ""], ["formcontrolname", "company_size_id", 1, "form-control", "input-item", "ng-untouched", "ng-pristine", "ng-invalid"], ["disabled", "", "selected", "", "value", "null"], ["id", "passwordInput", "formControlName", "password", "placeholder", "Create your password", "maxlength", "20", 1, "form-control", "position-relative", 3, "type"], [1, "eyeIcon", 3, "click"], ["class", "fa fa-eye btn w-25", 4, "ngIf"], ["class", "fa fa-eye-slash btn w-25", 4, "ngIf"], [1, "form-group", "mb-0", "mt-3", "text-left"], [1, "size-2", "text-gray-2"], ["href", "#"], [1, "btn", "btn-color", "w-100", "mt-3"], [1, "fa", "fa-eye", "btn", "w-25"], [1, "fa", "fa-eye-slash", "btn", "w-25"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " The leading employee engagement platform ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Maximise your engagement, retention, and productivity.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Receive actionable insights - and identify areas for improvement - in real-time.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Create account with your email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Country ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Afghanistan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Akrotiri ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Albania ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Algeria ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " American samoa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Andorra ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Angola ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Anguilla ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Antarctica ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Antigua and barbuda ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Argentina ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Armenia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Aruba ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Ashmore and cartier islands ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Australia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Austria ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Azerbaijan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Bahamas, the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Bahrain ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Bangladesh ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "option", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Barbados ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Bassas da india ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "option", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Belarus ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "option", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Belgium ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "option", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Belize ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "option", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Benin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "option", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Bermuda ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "option", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Bhutan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "option", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Bolivia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "option", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Bosnia and herzegovina ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "option", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " Botswana ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "option", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " Bouvet island ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "option", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Brazil ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "option", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " British indian ocean territory ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "option", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " British virgin islands ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "option", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " Brunei ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "option", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " Bulgaria ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "option", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Burkina faso ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "option", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " Burma ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "option", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " Burundi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "option", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " Cambodia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "option", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " Cameroon ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "option", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " Canada ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "option", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " Cape verde ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "option", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " Cayman islands ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "option", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " Central african republic ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "option", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " Chad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "option", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " Chile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "option", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " China ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "option", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " Christmas island ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "option", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " Clipperton island ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "option", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " Cocos (keeling) islands ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "option", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " Colombia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "option", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " Comoros ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "option", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " Congo, democratic republic of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "option", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " Congo, republic of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "option", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " Cook islands ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "option", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, " Coral sea islands ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "option", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, " Costa rica ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "option", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " Cote d'ivoire ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "option", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " Croatia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "option", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " Cuba ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "option", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " Cyprus ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "option", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, " Czech republic ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "option", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, " Denmark ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "option", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " Dhekelia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "option", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " Djibouti ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "option", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, " Dominica ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "option", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, " Dominican republic ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "option", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, " Ecuador ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "option", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, " Egypt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "option", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, " El salvador ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "option", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, " Equatorial guinea ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "option", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, " Eritrea ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "option", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, " Estonia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "option", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, " Ethiopia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "option", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, " Europa island ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "option", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, " Falkland islands (islas malvinas) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "option", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, " Faroe islands ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "option", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, " Fiji ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "option", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, " Finland ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "option", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, " France ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "option", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, " French guiana ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "option", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, " French polynesia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "option", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, " French southern and antarctic lands ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "option", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, " Gabon ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "option", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, " Gambia, the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "option", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, " Gaza strip ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "option", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, " Georgia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "option", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, " Germany ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "option", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, " Ghana ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "option", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, " Gibraltar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "option", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, " Glorioso islands ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "option", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, " Greece ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "option", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, " Greenland ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "option", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, " Grenada ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "option", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, " Guadeloupe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "option", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, " Guam ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "option", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, " Guatemala ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "option", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, " Guernsey ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "option", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, " Guinea ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "option", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, " Guinea-bissau ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "option", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, " Guyana ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "option", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, " Haiti ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "option", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, " Heard island and mcdonald islands ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "option", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, " Holy see (vatican city) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "option", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, " Honduras ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "option", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, " Hong kong ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "option", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, " Hungary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "option", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, " Iceland ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "option", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, " India ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "option", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, " Indonesia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "option", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, " Iran ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "option", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, " Iraq ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "option", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, " Ireland ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "option", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, " Isle of man ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "option", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, " Israel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "option", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, " Italy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "option", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, " Jamaica ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "option", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, " Jan mayen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "option", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, " Japan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "option", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, " Jersey ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "option", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, " Jordan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "option", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, " Juan de nova island ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "option", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, " Kazakhstan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "option", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, " Kenya ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "option", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, " Kiribati ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "option", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, " Korea, north ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "option", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, " Korea, south ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "option", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, " Kuwait ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "option", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, " Kyrgyzstan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "option", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, " Laos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "option", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, " Latvia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "option", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, " Lebanon ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "option", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, " Lesotho ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "option", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, " Liberia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "option", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, " Libya ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "option", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, " Liechtenstein ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "option", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, " Lithuania ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "option", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, " Luxembourg ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "option", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, " Macau ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "option", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, " Macedonia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "option", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, " Madagascar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "option", 168);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, " Malawi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "option", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, " Malaysia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "option", 170);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, " Maldives ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "option", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, " Mali ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "option", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, " Malta ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "option", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, " Marshall islands ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "option", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, " Martinique ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "option", 175);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338, " Mauritania ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "option", 176);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, " Mauritius ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "option", 177);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, " Mayotte ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "option", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, " Mexico ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "option", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, " Micronesia, federated states of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "option", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, " Moldova ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "option", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, " Monaco ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "option", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, " Mongolia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "option", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, " Montserrat ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "option", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, " Morocco ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "option", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, " Mozambique ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "option", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, " Namibia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "option", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, " Nauru ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "option", 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, " Navassa island ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "option", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366, " Nepal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "option", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, " Netherlands ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "option", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, " Netherlands antilles ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "option", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, " New caledonia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "option", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, " New zealand ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "option", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](376, " Nicaragua ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "option", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](378, " Niger ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "option", 196);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](380, " Nigeria ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "option", 197);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, " Niue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "option", 198);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, " Norfolk island ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "option", 199);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](386, " Northern mariana islands ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "option", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, " Norway ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "option", 201);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](390, " Oman ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "option", 202);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](392, " Pakistan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "option", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](394, " Palau ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "option", 204);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, " Panama ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "option", 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398, " Papua new guinea ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "option", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](400, " Paracel islands ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "option", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](402, " Paraguay ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "option", 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](404, " Peru ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "option", 209);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](406, " Philippines ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "option", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408, " Pitcairn islands ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "option", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](410, " Poland ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "option", 212);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](412, " Portugal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "option", 213);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](414, " Puerto rico ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "option", 214);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](416, " Qatar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "option", 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](418, " Reunion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "option", 216);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](420, " Romania ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "option", 217);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](422, " Russia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "option", 218);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](424, " Rwanda ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "option", 219);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](426, " Saint helena ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "option", 220);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](428, " Saint kitts and nevis ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "option", 221);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](430, " Saint lucia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "option", 222);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](432, " Saint pierre and miquelon ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "option", 223);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](434, " Saint vincent and the grenadines ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "option", 224);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](436, " Samoa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "option", 225);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](438, " San marino ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "option", 226);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](440, " Sao tome and principe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "option", 227);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](442, " Saudi arabia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "option", 228);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](444, " Senegal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "option", 229);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](446, " Serbia and montenegro ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](447, "option", 230);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](448, " Seychelles ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "option", 231);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](450, " Sierra leone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "option", 232);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](452, " Singapore ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "option", 233);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](454, " Slovakia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "option", 234);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](456, " Slovenia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "option", 235);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](458, " Solomon islands ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "option", 236);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](460, " Somalia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "option", 237);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](462, " South africa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "option", 238);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](464, " South georgia and the south sandwich islands ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](465, "option", 239);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](466, " Spain ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](467, "option", 240);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](468, " Spratly islands ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](469, "option", 241);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](470, " Sri lanka ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](471, "option", 242);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](472, " Sudan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "option", 243);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](474, " Suriname ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "option", 244);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](476, " Svalbard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](477, "option", 245);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](478, " Swaziland ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "option", 246);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](480, " Sweden ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](481, "option", 247);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](482, " Switzerland ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](483, "option", 248);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](484, " Syria ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](485, "option", 249);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](486, " Taiwan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "option", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](488, " Tajikistan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](489, "option", 251);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](490, " Tanzania ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](491, "option", 252);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](492, " Thailand ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](493, "option", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](494, " Timor-leste ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](495, "option", 254);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](496, " Togo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](497, "option", 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](498, " Tokelau ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](499, "option", 256);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](500, " Tonga ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](501, "option", 257);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](502, " Trinidad and tobago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](503, "option", 258);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](504, " Tromelin island ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](505, "option", 259);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](506, " Tunisia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](507, "option", 260);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](508, " Turkey ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "option", 261);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](510, " Turkmenistan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](511, "option", 262);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](512, " Turks and caicos islands ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](513, "option", 263);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](514, " Tuvalu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](515, "option", 264);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](516, " Uganda ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](517, "option", 265);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](518, " Ukraine ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](519, "option", 266);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](520, " United arab emirates ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](521, "option", 267);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](522, " United kingdom ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](523, "option", 268);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](524, " United states ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](525, "option", 269);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](526, " Uruguay ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](527, "option", 270);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](528, " Uzbekistan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](529, "option", 271);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](530, " Vanuatu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](531, "option", 272);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](532, " Venezuela ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](533, "option", 273);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](534, " Vietnam ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](535, "option", 274);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](536, " Virgin islands ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](537, "option", 275);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](538, " Wake island ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](539, "option", 276);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](540, " Wallis and futuna ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](541, "option", 277);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](542, " West bank ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](543, "option", 278);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](544, " Western sahara ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](545, "option", 279);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](546, " Yemen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](547, "option", 280);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](548, " Zambia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](549, "option", 281);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](550, " Zimbabwe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](551, "div", 282);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](552, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](553, "select", 283);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](554, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](555, " Industry ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](556, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](557, " Banks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](558, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](559, " Capital goods ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](560, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](561, " Commercial and professional services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](562, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](563, " Communication services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](564, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](565, " Consumer durables and apparel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](566, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](567, " Consumer services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](568, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](569, " Financials ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](570, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](571, " Education ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](572, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](573, " Energy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](574, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](575, " Food ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](576, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](577, " Governments ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](578, "option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](579, " Manufactring ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](580, "option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](581, " Healthcare ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](582, "option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](583, " Insurance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](584, "option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](585, " Materials ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](586, "option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](587, " Non profit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](588, "option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](589, " Media and entertainment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](590, "option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](591, " Pharmaceuticals, biotechnology, and life sciences ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](592, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](593, " Real estate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](594, "option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](595, " Retailing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](596, "option", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](597, " Hospitality ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](598, "option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](599, " Semiconductors and semiconductor equipment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](600, "option", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](601, " Software and services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](602, "option", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](603, " Technology ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](604, "option", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](605, " Transportation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](606, "option", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](607, " Utilities ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](608, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](609, "div", 284);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](610, "input", 285);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](611, "div", 286);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](612, "div", 287);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](613, "select", 288);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](614, "option", 289);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](615, " Company size ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](616, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](617, " 0-49 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](618, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](619, " 50-100 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](620, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](621, " 101-500 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](622, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](623, " > 500 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](624, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](625, "input", 290);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](626, "div", 291);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_div_click_626_listener() { return ctx.showPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](627, RegisterComponent_span_627_Template, 1, 0, "span", 292);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](628, RegisterComponent_span_628_Template, 1, 0, "span", 293);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](629, "div", 294);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](630, "div", 295);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](631, " By registering you agree to our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](632, "a", 296);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](633, "privacy policy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](634, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](635, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](636, "a", 296);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](637, "terms & conditions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](638, "button", 297);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](639, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](640, "Create Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](605);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.show ? "text" : "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["#register[_ngcontent-%COMP%] {\n  background-color: #F6F5F3;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 93vh;\n  background-image: url(/assets/images/auth-bg.svg);\n  background-position: 100% 100%;\n  background-size: 200px auto;\n  background-repeat: no-repeat;\n}\n\n.size-4[_ngcontent-%COMP%] {\n  font-size: 1.125rem!important;\n}\n\n.weight-700[_ngcontent-%COMP%] {\n  font-weight: 700!important;\n}\n\n.alert[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0.3rem 1.25rem 0.3rem 0.7rem;\n  margin-bottom: 10px;\n  border: 1px solid transparent;\n  border-radius: 0.5rem;\n}\n\n#myPasswordBtn[_ngcontent-%COMP%] {\n  border: none !important;\n}\n\n.formBox[_ngcontent-%COMP%]{\n  padding-top: 60px!important;\n  padding-bottom: 60px!important;\n  padding-left: 20px!important;\n  padding-right: 20px!important;\n  max-width: 450px;\n  border-radius: 12px;\n  box-shadow: 0 0 9px 0 rgba(0,0,0,.06);\n  background-color: white;\n  position: relative;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.btn-color[_ngcontent-%COMP%] {\n  background-color: #8c5fb4;\n  color: white;\n}\n\n#myPasswordBtn[_ngcontent-%COMP%] {\n  color: #8139c2!important;\n}\n\n.size-2[_ngcontent-%COMP%] {\n  font-size: .875rem!important;\n}\n\n.size-5[_ngcontent-%COMP%] {\n  font-size: 1.25rem!important;\n}\n\n.size-3[_ngcontent-%COMP%] {\n  font-size: 1rem!important;\n}\n\n.text-primary[_ngcontent-%COMP%] {\n  color: #8139c2!important;\n}\n\n.btn-link[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: #8139c2;\n  background-color: transparent;\n}\n\n.size-2[_ngcontent-%COMP%] {\n  font-size: .875rem!important;\n}\n\n.size-6[_ngcontent-%COMP%] {\n  font-size: 1.375rem!important;\n}\n\n.text-gray-2[_ngcontent-%COMP%] {\n  color: #75849b!important;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: .375rem .75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #465061;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #e1e5e9;\n  border-radius: .25rem;\n  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n}\n\n.form-control[_ngcontent-%COMP%]:focus {\n  color: #465061;\n  background-color: #fff;\n  border-color: #bf99e1;\n  outline: 0;\n  box-shadow: 0 0 8px -1px #8139c2;\n}\n\n.eyeIcon[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 9999;\n  right: 0;\n  top: 50%;\n  transform: translate(0%, -50%);\n}\n\n.downArrow[_ngcontent-%COMP%] {\n  z-index: 2;\n  position: absolute;\n  top: 0;\n  width: 38px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2em;\n}\n\n.input-with-icon.icon-end[_ngcontent-%COMP%]   .input-item[_ngcontent-%COMP%] {\n  padding-right: 38px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osaURBQWlEO0VBQ2pELDhCQUE4QjtFQUM5QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFDQUFxQztFQUNyQyxtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiw4QkFBOEI7RUFDOUIsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHFDQUFxQztFQUNyQyx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHFFQUFxRTtBQUN2RTs7QUFFQTtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFFBQVE7RUFDUixRQUFRO0VBQ1IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3JlZ2lzdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RjVGMztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogOTN2aDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2F1dGgtYmcuc3ZnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwMHB4IGF1dG87XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5zaXplLTQge1xuICBmb250LXNpemU6IDEuMTI1cmVtIWltcG9ydGFudDtcbn1cblxuLndlaWdodC03MDAge1xuICBmb250LXdlaWdodDogNzAwIWltcG9ydGFudDtcbn1cblxuLmFsZXJ0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwLjNyZW0gMS4yNXJlbSAwLjNyZW0gMC43cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xufVxuXG4jbXlQYXNzd29yZEJ0biB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uZm9ybUJveHtcbiAgcGFkZGluZy10b3A6IDYwcHghaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogNjBweCFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMjBweCFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHghaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDQ1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3gtc2hhZG93OiAwIDAgOXB4IDAgcmdiYSgwLDAsMCwuMDYpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmJ0bi1jb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4YzVmYjQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuI215UGFzc3dvcmRCdG4ge1xuICBjb2xvcjogIzgxMzljMiFpbXBvcnRhbnQ7XG59XG5cbi5zaXplLTIge1xuICBmb250LXNpemU6IC44NzVyZW0haW1wb3J0YW50O1xufVxuXG4uc2l6ZS01IHtcbiAgZm9udC1zaXplOiAxLjI1cmVtIWltcG9ydGFudDtcbn1cblxuLnNpemUtMyB7XG4gIGZvbnQtc2l6ZTogMXJlbSFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LXByaW1hcnkge1xuICBjb2xvcjogIzgxMzljMiFpbXBvcnRhbnQ7XG59XG5cbi5idG4tbGluayB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjODEzOWMyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnNpemUtMiB7XG4gIGZvbnQtc2l6ZTogLjg3NXJlbSFpbXBvcnRhbnQ7XG59XG5cbi5zaXplLTYge1xuICBmb250LXNpemU6IDEuMzc1cmVtIWltcG9ydGFudDtcbn1cblxuLnRleHQtZ3JheS0yIHtcbiAgY29sb3I6ICM3NTg0OWIhaW1wb3J0YW50O1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAuMzc1cmVtIC43NXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzQ2NTA2MTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UxZTVlOTtcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCxib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBjb2xvcjogIzQ2NTA2MTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjYmY5OWUxO1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiAwIDAgOHB4IC0xcHggIzgxMzljMjtcbn1cblxuLmV5ZUljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTk7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xufVxuXG4uZG93bkFycm93IHtcbiAgei1pbmRleDogMjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAzOHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuXG4uaW5wdXQtd2l0aC1pY29uLmljb24tZW5kIC5pbnB1dC1pdGVtIHtcbiAgcGFkZGluZy1yaWdodDogMzhweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "4QAB":
/*!****************************************************!*\
  !*** ./src/app/statistics/statistics.component.ts ***!
  \****************************************************/
/*! exports provided: StatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function() { return StatisticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var node_modules_chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node_modules/chart.js */ "MO+k");
/* harmony import */ var node_modules_chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_modules_chart_js__WEBPACK_IMPORTED_MODULE_1__);



class StatisticsComponent {
    constructor() { }
    ngOnInit() {
    }
    ngAfterViewInit() {
        var myChart = new node_modules_chart_js__WEBPACK_IMPORTED_MODULE_1__["Chart"]("myChart", {
            type: 'line',
            data: {
                labels: ['Oct 20', 'Oct 27', 'Nov 03', 'Nov 10'],
                datasets: [
                    {
                        label: 'Chart',
                        // data: [
                        //   {x: 0,y: 7.2}, 
                        //   {x: 5,y: 6.9},
                        //   {x: 10,y: 7.4},
                        //   {x: 15,y: 7.5}
                        // ],
                        data: ['7.2', '6.9', '7.4', '7.5'],
                        pointBackgroundColor: [
                            '#8139c2',
                            '#8139c2',
                            '#8139c2',
                            '#8139c2'
                        ],
                        pointStyle: [
                            'rectRounded',
                            'rectRounded',
                            'rectRounded',
                            'rectRounded'
                        ],
                        borderColor: [
                            '#8139c2'
                        ],
                        borderWidth: 2,
                    },
                ]
            },
            options: {
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                            },
                        },
                    ],
                },
            },
        });
    }
}
StatisticsComponent.ɵfac = function StatisticsComponent_Factory(t) { return new (t || StatisticsComponent)(); };
StatisticsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatisticsComponent, selectors: [["app-statistics"]], decls: 133, vars: 0, consts: [[1, "row", "mx-0", "pb-5"], [1, "col-md-8", "col-sm-8", "col-8", "chart"], [1, "row", "h-100"], [1, "col-6", "brdRt"], [1, "fntBold", "fntgrayX", "fnt14", "float-left", "py-2"], ["id", "rthArrow", 1, "fntBold", "fntgrayX", "fnt14", "float-right", "py-2"], ["src", "../../assets/chevron-right.svg", 1, "ml-1", "img-fluid"], [1, "row", "w-100", "mx-0", "mt-5"], [1, "col-7", "pl-0"], [1, "numColored"], [1, "GWR"], [1, "position-relative"], [1, "fntNormal", "fntgrayX", "fnt12"], [1, "fntRed", "font-weight-bold"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bar80", "bg-Mypurple", 2, "width", "70%"], [1, "progressBarNum"], [1, "abs75"], [1, "abs95"], [1, "col-5", "px-0"], [1, "d-inline-block"], ["src", "../../assets/promoters/promoters.png", 1, "img28", "fntGreen", "float-left"], [1, "float-left", "fnt12", "fntBold"], [1, "fntGreen"], [1, "fntgray"], [1, "my-2", "d-inline-block"], ["src", "../../assets/questions/questions.png", 1, "img28", "fntGreen", "float-left"], ["src", "../../assets/detractors/detractors.png", 1, "img28", "fntGreen", "float-left"], [1, "float-right", "fnt12", "fntBold", "float-left"], [1, "fntRed"], [1, "fnt12", "fntNormal"], [1, "fntGreen", "my-1"], [1, "textUnderline"], [1, "col-6", "brdLf"], [1, "divChart", "mt-5"], ["id", "myChart"], [1, "col-md-4", "col-sm-4", "col-4", "pl-4"], ["id", "participation", 1, "row"], [1, "col-md-12", "col-12"], [1, "fntBold", "fntgrayX", "fnt14", "float-left"], ["id", "rthArrow", 1, "fntBold", "fntgrayX", "fnt14", "float-right"], [1, "p-2", "row", "w-100", "mx-0"], [1, "col-2", "p-0"], [1, "progress-ring"], ["cx", "20", "cy", "20", "r", "20"], [1, "fntBold", "fntgrayX", "fntGreen", "fnt14"], [1, "col-10", "pl-2", "pr-0", "position-relative"], [1, "fntBold", "fntgrayX"], [1, "fntGreen", "font-weight-bold"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bar80", "bg-Mypurple", 2, "width", "80%"], ["id", "communications", 1, "row", "mt-3"], [1, "p-3", "row", "w-100", "mx-0"], [1, "fntBold", "fntgrayX", "fntOrange", "fnt14"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "limit70", "bg-Mypurple", 2, "width", "63%"], [1, "abs65"]], template: function StatisticsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "OVERAL SCORE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " 7.5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "-0.5 below");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " the Technology Benchmark ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "8.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "49%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Promoters (195)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "28%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Passive (113)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "23%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Detractors (92)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Good");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " In the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "middle range");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " of the Technology sector ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "SCORE OVER TIME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Full Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "canvas", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h5", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "PARTICIPATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "circle", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "circle", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h2", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "75%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "+0.2 above");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " the Benchmark ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "(300/400 Employee) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "8.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h5", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "COMMUNICATIONS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "circle", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "circle", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "h2", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "63%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "-1.1 below");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " the Communications Benchmark ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "7.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#highlighted[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  background-color: #fbfbfb;\n}\n#subHighlight[_ngcontent-%COMP%] {\n  \n  \n  border-radius: 4px;\n  box-shadow: 0 0 9px 0 #eeeeee;\n  background-color: #ffffff;\n}\n.highBtn[_ngcontent-%COMP%] {\n  width: 104px;\n  height: 40px;\n  border-radius: 4px;\n  border: solid 1px #e1e5e9;\n  background-color: #ffffff;\n  \n  font-size: 14px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: center;\n  color: #8139c2;\n  border: none;\n  }\n.fnt10[_ngcontent-%COMP%] {font-size: 10px;}\n.fnt11[_ngcontent-%COMP%] {font-size: 11px;}\n.fnt12[_ngcontent-%COMP%] {font-size: 12px;}\n.fnt13[_ngcontent-%COMP%] {font-size: 13px;}\n.fnt14[_ngcontent-%COMP%] {font-size: 14px;}\n.fnt15[_ngcontent-%COMP%] {font-size: 15px;}\n.fnt20[_ngcontent-%COMP%] {font-size: 20px;}\n.fntGreen[_ngcontent-%COMP%] {color: #4ac979;}\n.fntRed[_ngcontent-%COMP%] {color: #f75656;}\n.fntOrange[_ngcontent-%COMP%] {color: #ffa93a;}\n.fntPurple[_ngcontent-%COMP%] {color: #8139c2;}\n.fntgray[_ngcontent-%COMP%] {color: #75849b;}\n.fntgrayX[_ngcontent-%COMP%] {color: #465061;}\n.bg-Mypurple[_ngcontent-%COMP%] {background-color: #8139c2;}\n.fntBold[_ngcontent-%COMP%] {\n  \n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  margin-bottom: 1px;\n}\n.fntNormal[_ngcontent-%COMP%] {\n  \n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n}\n.textUnderline[_ngcontent-%COMP%] {text-decoration: underline;}\n.img50[_ngcontent-%COMP%]{\n  width: 50px;\n  height: 50px;\n  object-fit: contain;\n}\n.img10[_ngcontent-%COMP%]{\n  width: 10px;\n  height: 10px;\n  object-fit: contain;\n}\n\n\n\n.img28[_ngcontent-%COMP%]{\n  width: 28px;\n  height: 28px;\n  object-fit: contain;\n  margin-right: 15px;\n}\n.progress-ring[_ngcontent-%COMP%] {\n  position: relative;\n  width: 50px;\n  height: 50px;\n}\nsvg[_ngcontent-%COMP%] {\n  transform: rotate(-90deg);\n  width: 50px;\n  height: 50px;\n}\nsvg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  fill: transparent;\n  stroke: #465061;\n  stroke-width: 2;\n  transform: translate(5px, 5px);\n  stroke-dasharray: 125;\n  stroke-dashoffset: 125;\n  stroke-linecap: round;\n}\nsvg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]:nth-child(1) {\n  stroke: #f1f2f4;\n  stroke-dashoffset: 0;\n}\n#participation[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]:nth-child(2) {\n  stroke: #4ac979;\n  stroke-dashoffset: calc(125 - (125*75) / 100);\n}\n#communications[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]:nth-child(2) {\n  stroke: #ffa93a;\n  stroke-dashoffset: calc(125 - (125*63) / 100);\n}\n.progress-ring[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.progress[_ngcontent-%COMP%] {\n  width: 219px;\n  width: 100%;\n  height: 5px;\n  border-radius: 4px;\n  margin-top: 15px;\n}\n.bar80[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 3px;\n  height: 11px;\n  border-radius: 2px;\n  background-color: #4ac979;\n  position: absolute;\n  left: 76%;\n}\n.limit70[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 3px;\n  height: 11px;\n  border-radius: 2px;\n  background-color: #4ac979;\n  position: absolute;\n  left: 70%;\n}\n.progressBarNum[_ngcontent-%COMP%]{\n  width: 7px;\n  height: 15px;\n  \n  font-size: 12px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #a0aabb;\n  margin-top: 2px;\n}\n.abs65[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 67%;\n}\n.abs75[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 73%;\n}\n.abs95[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 95%;\n}\n#participation[_ngcontent-%COMP%], #communications[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  box-shadow: 0 0 9px 0 #eeeeee;\n  background-color: #ffffff;\n  padding-top: 10px;\n}\n#rthArrow[_ngcontent-%COMP%] {\n  border: 0px;\n  background-color: transparent;\n}\n.chart[_ngcontent-%COMP%] {\n  width: 873px;\n  \n  border-radius: 4px;\n  box-shadow: 0 0 9px 0 #eeeeee;\n  background-color: #ffffff;\n}\n.brdRt[_ngcontent-%COMP%] {\n  border-right: 0.5px solid #f1f2f4;;\n}\n.brdLf[_ngcontent-%COMP%] {\n  border-left: 0.5px solid #f1f2f4;;\n}\ncanvas[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to bottom, #f7eeff, #ffffff);;\n}\n.numColored[_ngcontent-%COMP%] {\n  height: 60%;\n}\n.GWR[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  color: rgb(255, 255, 255, 0.1);\n  margin-bottom: 0;\n  font-size: 120px;\n  background-image: url('GWR.jpg');\n  background-repeat: repeat-x;\n  background-position-y: -20px;\n  -webkit-text-fill-color:transparent;\n  -webkit-background-clip:text;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGlzdGljcy9zdGF0aXN0aWNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkJBQTJCO0FBQzNCLDJCQUEyQjtBQUMzQiwyQkFBMkI7QUFDM0I7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7RUFDWjtBQUVGLFFBQVEsZUFBZSxDQUFDO0FBQ3hCLFFBQVEsZUFBZSxDQUFDO0FBQ3hCLFFBQVEsZUFBZSxDQUFDO0FBQ3hCLFFBQVEsZUFBZSxDQUFDO0FBQ3hCLFFBQVEsZUFBZSxDQUFDO0FBQ3hCLFFBQVEsZUFBZSxDQUFDO0FBQ3hCLFFBQVEsZUFBZSxDQUFDO0FBQ3hCLFdBQVcsY0FBYyxDQUFDO0FBQzFCLFNBQVMsY0FBYyxDQUFDO0FBQ3hCLFlBQVksY0FBYyxDQUFDO0FBQzNCLFlBQVksY0FBYyxDQUFDO0FBQzNCLFVBQVUsY0FBYyxDQUFDO0FBQ3pCLFdBQVcsY0FBYyxDQUFDO0FBQzFCLGNBQWMseUJBQXlCLENBQUM7QUFFeEM7RUFDRSx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCO0FBRUEsZ0JBQWdCLDBCQUEwQixDQUFDO0FBRTNDO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBQ0EseUJBQXlCO0FBQ3pCLHlCQUF5QjtBQUN6Qix5QkFBeUI7QUFFekI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLGVBQWU7RUFDZiw2Q0FBNkM7QUFDL0M7QUFFQTtFQUNFLGVBQWU7RUFDZiw2Q0FBNkM7QUFDL0M7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWDtBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsV0FBVztFQUNYLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DO0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7QUFFQTtFQUNFLDhEQUE4RDtBQUNoRTtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0NBQTZDO0VBQzdDLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsbUNBQW1DO0VBQ25DLDRCQUE0QjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL3N0YXRpc3RpY3Mvc3RhdGlzdGljcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKioqKioqKioqKioqKioqKioqKioqKiAqL1xuLyogKioqIFN0YXJ0IHJlcGVhdGVkICoqKiAqL1xuLyogKioqKioqKioqKioqKioqKioqKioqKiAqL1xuI2hpZ2hsaWdodGVkIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYmZiO1xufVxuXG4jc3ViSGlnaGxpZ2h0IHtcbiAgLyogd2lkdGg6IDEyMzlweDsgKi9cbiAgLyogaGVpZ2h0OiAzNzBweDsgKi9cbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDAgOXB4IDAgI2VlZWVlZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmhpZ2hCdG4ge1xuICB3aWR0aDogMTA0cHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjZTFlNWU5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAvKiBmb250LWZhbWlseTogTGF0bzsgKi9cbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzgxMzljMjtcbiAgYm9yZGVyOiBub25lO1xuICB9XG5cbi5mbnQxMCB7Zm9udC1zaXplOiAxMHB4O31cbi5mbnQxMSB7Zm9udC1zaXplOiAxMXB4O30gXG4uZm50MTIge2ZvbnQtc2l6ZTogMTJweDt9XG4uZm50MTMge2ZvbnQtc2l6ZTogMTNweDt9XG4uZm50MTQge2ZvbnQtc2l6ZTogMTRweDt9XG4uZm50MTUge2ZvbnQtc2l6ZTogMTVweDt9XG4uZm50MjAge2ZvbnQtc2l6ZTogMjBweDt9XG4uZm50R3JlZW4ge2NvbG9yOiAjNGFjOTc5O31cbi5mbnRSZWQge2NvbG9yOiAjZjc1NjU2O31cbi5mbnRPcmFuZ2Uge2NvbG9yOiAjZmZhOTNhO31cbi5mbnRQdXJwbGUge2NvbG9yOiAjODEzOWMyO31cbi5mbnRncmF5IHtjb2xvcjogIzc1ODQ5Yjt9XG4uZm50Z3JheVgge2NvbG9yOiAjNDY1MDYxO31cbi5iZy1NeXB1cnBsZSB7YmFja2dyb3VuZC1jb2xvcjogIzgxMzljMjt9XG5cbi5mbnRCb2xkIHtcbiAgLyogZm9udC1mYW1pbHk6IExhdG87ICovXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG59XG5cbi5mbnROb3JtYWwge1xuICAvKiBmb250LWZhbWlseTogTGF0bzsgKi9cbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbn1cblxuLnRleHRVbmRlcmxpbmUge3RleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO31cblxuLmltZzUwe1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4uaW1nMTB7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG4vKiAqKioqKioqKioqKioqKioqKioqKiAqL1xuLyogKioqIEVuZCByZXBlYXRlZCAqKiogKi9cbi8qICoqKioqKioqKioqKioqKioqKioqICovXG5cbi5pbWcyOHtcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogMjhweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4ucHJvZ3Jlc3MtcmluZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuc3ZnIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn0gXG5cbnN2ZyBjaXJjbGUge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmaWxsOiB0cmFuc3BhcmVudDtcbiAgc3Ryb2tlOiAjNDY1MDYxO1xuICBzdHJva2Utd2lkdGg6IDI7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDVweCwgNXB4KTtcbiAgc3Ryb2tlLWRhc2hhcnJheTogMTI1O1xuICBzdHJva2UtZGFzaG9mZnNldDogMTI1O1xuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG59XG5cbnN2ZyBjaXJjbGU6bnRoLWNoaWxkKDEpIHtcbiAgc3Ryb2tlOiAjZjFmMmY0O1xuICBzdHJva2UtZGFzaG9mZnNldDogMDtcbn1cblxuI3BhcnRpY2lwYXRpb24gc3ZnIGNpcmNsZTpudGgtY2hpbGQoMikge1xuICBzdHJva2U6ICM0YWM5Nzk7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiBjYWxjKDEyNSAtICgxMjUqNzUpIC8gMTAwKTtcbn1cblxuI2NvbW11bmljYXRpb25zICBzdmcgY2lyY2xlOm50aC1jaGlsZCgyKSB7XG4gIHN0cm9rZTogI2ZmYTkzYTtcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IGNhbGMoMTI1IC0gKDEyNSo2MykgLyAxMDApO1xufVxuXG4ucHJvZ3Jlc3MtcmluZyBoMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucHJvZ3Jlc3Mge1xuICB3aWR0aDogMjE5cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uYmFyODA6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDNweDtcbiAgaGVpZ2h0OiAxMXB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YWM5Nzk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNzYlO1xufVxuXG4ubGltaXQ3MDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogM3B4O1xuICBoZWlnaHQ6IDExcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRhYzk3OTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA3MCU7XG59XG5cbi5wcm9ncmVzc0Jhck51bXtcbiAgd2lkdGg6IDdweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICAvKiBmb250LWZhbWlseTogTGF0bzsgKi9cbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogI2EwYWFiYjtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG4uYWJzNjUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDY3JTtcbn1cblxuLmFiczc1IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA3MyU7XG59XG5cbi5hYnM5NSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogOTUlO1xufVxuXG4jcGFydGljaXBhdGlvbiwgI2NvbW11bmljYXRpb25zIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDAgOXB4IDAgI2VlZWVlZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbiNydGhBcnJvdyB7XG4gIGJvcmRlcjogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmNoYXJ0IHtcbiAgd2lkdGg6IDg3M3B4O1xuICAvKiBoZWlnaHQ6IDI5MHB4OyAqL1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgMCA5cHggMCAjZWVlZWVlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4uYnJkUnQge1xuICBib3JkZXItcmlnaHQ6IDAuNXB4IHNvbGlkICNmMWYyZjQ7O1xufVxuXG4uYnJkTGYge1xuICBib3JkZXItbGVmdDogMC41cHggc29saWQgI2YxZjJmNDs7XG59XG5cbmNhbnZhcyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmN2VlZmYsICNmZmZmZmYpOztcbn1cblxuLm51bUNvbG9yZWQge1xuICBoZWlnaHQ6IDYwJTtcbn1cblxuLkdXUiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAxMjBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvR1dSLmpwZycpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogLTIwcHg7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOnRyYW5zcGFyZW50O1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDp0ZXh0O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatisticsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-statistics',
                templateUrl: './statistics.component.html',
                styleUrls: ['./statistics.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "597Q":
/*!**********************************************************************!*\
  !*** ./src/app/highlighted-drivers/highlighted-drivers.component.ts ***!
  \**********************************************************************/
/*! exports provided: HighlightedDriversComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightedDriversComponent", function() { return HighlightedDriversComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HighlightedDriversComponent {
    constructor() { }
    ngOnInit() {
    }
}
HighlightedDriversComponent.ɵfac = function HighlightedDriversComponent_Factory(t) { return new (t || HighlightedDriversComponent)(); };
HighlightedDriversComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HighlightedDriversComponent, selectors: [["app-highlighted-drivers"]], decls: 120, vars: 0, consts: [["id", "highlighted", 1, "row", "mx-0", "py-2", "mb-1"], [1, "col-1", "d-flex", "align-items-center", "justify-content-center"], ["src", "../../assets/drivers/drivers.png", 1, "img", "img-fluid"], [1, "col-9"], [1, "fntBold", "fntgray", "fnt20"], [1, "fntNormal", "fntgrayX", "fnt13"], [1, "col-2", "d-flex", "align-items-center", "justify-content-center"], [1, "highBtn"], ["id", "subHighlight", 1, "p-2"], [1, "fntBold", "fntgrayX", "mb-3", "fnt14"], [1, "row", "mx-0"], [1, "col-10"], [1, "row"], [1, "col-4"], [1, "row", "py-2", "smallDiv", "align-items-center"], [1, "col-2", "environment"], [1, "col-8", "pr-0"], [1, "fntBold", "fntgrayX", "fnt14"], [1, "fntRed", "ml-2", "fnt13"], [1, "fntBold", "fntgrayX", "fnt11"], [1, "fntRed"], [1, "fntPurple", "ml-2"], [1, "col-1"], ["id", "rthArrow"], [1, "col-2", "freedom"], [1, "col-2", "growth"], [1, "col-2"], ["id", "subHighlight", 1, "mb-5", "p-2"], [1, "col-2", "reward"], [1, "fntGreen", "ml-2", "fnt13"], [1, "fntGreen"], [1, "col-2", "organizational"]], template: function HighlightedDriversComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Highlighted Drivers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Drivers measure how satisfied employees are with the culture, leadership, and responsibilities that make up their experience at work. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "All Drivers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Drivers to improve (3)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Environment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "6.2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "-2.1 below ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "the Benchmark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "8.3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Freedom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "5.2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "-1.9 below ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "the Benchmark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "7.1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Growth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "6.8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "-2.2 below ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "the Benchmark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "9.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Drivers doing great (2)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Reward");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "8.2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "1.2 above ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "the Benchmark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "7.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Organizational Fit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "9.2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "2.3 above ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "the Benchmark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "7.9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#highlighted[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  background-color: #fbfbfb;\n}\n#subHighlight[_ngcontent-%COMP%] {\n  \n  \n  border-radius: 4px;\n  box-shadow: 0 0 9px 0 #eeeeee;\n  background-color: #ffffff;\n}\n.highBtn[_ngcontent-%COMP%] {\nwidth: 104px;\nheight: 40px;\nborder-radius: 4px;\nborder: solid 1px #e1e5e9;\nbackground-color: #ffffff;\n\nfont-size: 14px;\nfont-weight: bold;\nfont-stretch: normal;\nfont-style: normal;\nline-height: normal;\nletter-spacing: normal;\ntext-align: center;\ncolor: #8139c2;\nborder: none;\n}\n.smallDiv[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  border: solid 1px #e1e5e9;\n  background-color: #ffffff;\n  margin-right: 1px;\n}\n.fnt10[_ngcontent-%COMP%] {font-size: 10px;}\n.fnt11[_ngcontent-%COMP%] {font-size: 11px;}\n.fnt12[_ngcontent-%COMP%] {font-size: 12px;}\n.fnt13[_ngcontent-%COMP%] {font-size: 13px;}\n.fnt14[_ngcontent-%COMP%] {font-size: 14px;}\n.fnt15[_ngcontent-%COMP%] {font-size: 15px;}\n.fnt20[_ngcontent-%COMP%] {font-size: 20px;}\n.fntGreen[_ngcontent-%COMP%] {color: #4ac979;}\n.fntRed[_ngcontent-%COMP%] {color: #f75656;}\n.fntOrange[_ngcontent-%COMP%] {color: #ffa93a;}\n.fntPurple[_ngcontent-%COMP%] {color: #8139c2;}\n.fntgray[_ngcontent-%COMP%] {color: #75849b;}\n.fntgrayX[_ngcontent-%COMP%] {color: #465061;}\n.bg-Mypurple[_ngcontent-%COMP%] {background-color: #8139c2;}\n.fntBold[_ngcontent-%COMP%] {\n  \n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  margin-bottom: 1px;\n}\n.fntNormal[_ngcontent-%COMP%] {\n  \n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n}\n.textUnderline[_ngcontent-%COMP%] {text-decoration: underline;}\n.img50[_ngcontent-%COMP%]{\n  width: 50px;\n  height: 50px;\n  object-fit: contain;\n}\n.img10[_ngcontent-%COMP%]{\n  width: 10px;\n  height: 10px;\n  object-fit: contain;\n}\n\n#rthArrow[_ngcontent-%COMP%] {\n  background-image: url('chevron-right.svg');\n  border: 0px;\n  background-color: transparent;\n  background-size: contain;\n  width: 10px;\n  height: 14px;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.environment[_ngcontent-%COMP%] {\n  background-image: url('environment.png');\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  margin-left: 10px;\n  width: 50px;\n  height: 50px;\n}\n.freedom[_ngcontent-%COMP%] {\n  background-image: url('freedom.png');\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  margin-left: 10px;\n  width: 50px;\n  height: 50px;\n}\n.growth[_ngcontent-%COMP%] {\n  background-image: url('growth.png');\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  margin-left: 10px;\n  width: 50px;\n  height: 50px;\n}\n.reward[_ngcontent-%COMP%] {\n  background-image: url('reward.png');\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  margin-left: 10px;\n  width: 50px;\n  height: 50px;\n}\n.organizational[_ngcontent-%COMP%] {\n  background-image: url('organizational-fit.png');\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  margin-left: 10px;\n  width: 50px;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGlnaGxpZ2h0ZWQtZHJpdmVycy9oaWdobGlnaHRlZC1kcml2ZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkJBQTJCO0FBQzNCO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLHlCQUF5QjtBQUMzQjtBQUVBO0FBQ0EsWUFBWTtBQUNaLFlBQVk7QUFDWixrQkFBa0I7QUFDbEIseUJBQXlCO0FBQ3pCLHlCQUF5QjtBQUN6Qix1QkFBdUI7QUFDdkIsZUFBZTtBQUNmLGlCQUFpQjtBQUNqQixvQkFBb0I7QUFDcEIsa0JBQWtCO0FBQ2xCLG1CQUFtQjtBQUNuQixzQkFBc0I7QUFDdEIsa0JBQWtCO0FBQ2xCLGNBQWM7QUFDZCxZQUFZO0FBQ1o7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjtBQUVBLFFBQVEsZUFBZSxDQUFDO0FBQ3hCLFFBQVEsZUFBZSxDQUFDO0FBQ3hCLFFBQVEsZUFBZSxDQUFDO0FBQ3hCLFFBQVEsZUFBZSxDQUFDO0FBQ3hCLFFBQVEsZUFBZSxDQUFDO0FBQ3hCLFFBQVEsZUFBZSxDQUFDO0FBQ3hCLFFBQVEsZUFBZSxDQUFDO0FBQ3hCLFdBQVcsY0FBYyxDQUFDO0FBQzFCLFNBQVMsY0FBYyxDQUFDO0FBQ3hCLFlBQVksY0FBYyxDQUFDO0FBQzNCLFlBQVksY0FBYyxDQUFDO0FBQzNCLFVBQVUsY0FBYyxDQUFDO0FBQ3pCLFdBQVcsY0FBYyxDQUFDO0FBQzFCLGNBQWMseUJBQXlCLENBQUM7QUFFeEM7RUFDRSx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCO0FBRUEsZ0JBQWdCLDBCQUEwQixDQUFDO0FBRTNDO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBQ0EseUJBQXlCO0FBRXpCO0VBQ0UsMENBQXFEO0VBQ3JELFdBQVc7RUFDWCw2QkFBNkI7RUFDN0Isd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLDJCQUEyQjtBQUM3QjtBQUVBO0VBQ0Usd0NBQStEO0VBQy9ELHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBRUE7RUFDRSxvQ0FBdUQ7RUFDdkQsd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFFQTtFQUNFLG1DQUFxRDtFQUNyRCx3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUVBO0VBQ0UsbUNBQXFEO0VBQ3JELHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBRUE7RUFDRSwrQ0FBeUU7RUFDekUsd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9oaWdobGlnaHRlZC1kcml2ZXJzL2hpZ2hsaWdodGVkLWRyaXZlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICoqKiBTdGFydCByZXBlYXRlZCAqKiogKi9cbiNoaWdobGlnaHRlZCB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmJmYjtcbn1cblxuI3N1YkhpZ2hsaWdodCB7XG4gIC8qIHdpZHRoOiAxMjM5cHg7ICovXG4gIC8qIGhlaWdodDogMzcwcHg7ICovXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCAwIDlweCAwICNlZWVlZWU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi5oaWdoQnRuIHtcbndpZHRoOiAxMDRweDtcbmhlaWdodDogNDBweDtcbmJvcmRlci1yYWRpdXM6IDRweDtcbmJvcmRlcjogc29saWQgMXB4ICNlMWU1ZTk7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuLyogZm9udC1mYW1pbHk6IExhdG87ICovXG5mb250LXNpemU6IDE0cHg7XG5mb250LXdlaWdodDogYm9sZDtcbmZvbnQtc3RyZXRjaDogbm9ybWFsO1xuZm9udC1zdHlsZTogbm9ybWFsO1xubGluZS1oZWlnaHQ6IG5vcm1hbDtcbmxldHRlci1zcGFjaW5nOiBub3JtYWw7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG5jb2xvcjogIzgxMzljMjtcbmJvcmRlcjogbm9uZTtcbn1cblxuLnNtYWxsRGl2IHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjZTFlNWU5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tcmlnaHQ6IDFweDtcbn1cblxuLmZudDEwIHtmb250LXNpemU6IDEwcHg7fVxuLmZudDExIHtmb250LXNpemU6IDExcHg7fSBcbi5mbnQxMiB7Zm9udC1zaXplOiAxMnB4O31cbi5mbnQxMyB7Zm9udC1zaXplOiAxM3B4O31cbi5mbnQxNCB7Zm9udC1zaXplOiAxNHB4O31cbi5mbnQxNSB7Zm9udC1zaXplOiAxNXB4O31cbi5mbnQyMCB7Zm9udC1zaXplOiAyMHB4O31cbi5mbnRHcmVlbiB7Y29sb3I6ICM0YWM5Nzk7fVxuLmZudFJlZCB7Y29sb3I6ICNmNzU2NTY7fVxuLmZudE9yYW5nZSB7Y29sb3I6ICNmZmE5M2E7fVxuLmZudFB1cnBsZSB7Y29sb3I6ICM4MTM5YzI7fVxuLmZudGdyYXkge2NvbG9yOiAjNzU4NDliO31cbi5mbnRncmF5WCB7Y29sb3I6ICM0NjUwNjE7fVxuLmJnLU15cHVycGxlIHtiYWNrZ3JvdW5kLWNvbG9yOiAjODEzOWMyO31cblxuLmZudEJvbGQge1xuICAvKiBmb250LWZhbWlseTogTGF0bzsgKi9cbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbn1cblxuLmZudE5vcm1hbCB7XG4gIC8qIGZvbnQtZmFtaWx5OiBMYXRvOyAqL1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xufVxuXG4udGV4dFVuZGVybGluZSB7dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7fVxuXG4uaW1nNTB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5pbWcxMHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbi8qICoqKiBFbmQgcmVwZWF0ZWQgKioqICovXG5cbiNydGhBcnJvdyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvY2hldnJvbi1yaWdodC5zdmcpO1xuICBib3JkZXI6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTRweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4uZW52aXJvbm1lbnQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2Vudmlyb25tZW50L2Vudmlyb25tZW50LnBuZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLmZyZWVkb20ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ZyZWVkb20vZnJlZWRvbS5wbmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5ncm93dGgge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2dyb3d0aC9ncm93dGgucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4ucmV3YXJkIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9yZXdhcmQvcmV3YXJkLnBuZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLm9yZ2FuaXphdGlvbmFsIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9vcmdhbml6YXRpb25hbC9vcmdhbml6YXRpb25hbC1maXQucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HighlightedDriversComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-highlighted-drivers',
                templateUrl: './highlighted-drivers.component.html',
                styleUrls: ['./highlighted-drivers.component.css',],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Jjks":
/*!**********************************************!*\
  !*** ./src/app/sidenav/sidenav.component.ts ***!
  \**********************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/authentication.service */ "18Le");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-sidebar */ "k4pO");






function SidenavComponent_ng_sidebar_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-sidebar-container");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ng-sidebar", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openedChange", function SidenavComponent_ng_sidebar_container_0_Template_ng_sidebar_openedChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1._AuthenticationService._opened = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Insights");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "(current)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Segments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Drivers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "People Reports");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Communications");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h6", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Administration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Surveys");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opened", ctx_r0._AuthenticationService._opened);
} }
class SidenavComponent {
    constructor(_Router, _AuthenticationService) {
        this._Router = _Router;
        this._AuthenticationService = _AuthenticationService;
    }
    ngOnInit() {
    }
}
SidenavComponent.ɵfac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"])); };
SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidenavComponent, selectors: [["app-sidenav"]], decls: 3, vars: 1, consts: [[4, "ngIf"], ["ng-sidebar-content", ""], ["id", "btnSide", 2, "border", "none", 3, "click"], [3, "opened", "openedChange"], [1, "sidebar-heading", "px-3", "mt-4", "mb-1", "text-muted"], ["id", "insights", 1, "nav", "flex-column"], [1, "nav-item", "active"], ["href", "#", 1, "nav-link"], ["src", "../../assets/Sidebar/overview.svg", 1, "overview"], [1, "text"], [1, "sr-only"], [1, "nav-item"], ["src", "../../assets/Sidebar/segments.svg", 1, "segments"], ["src", "../../assets/Sidebar/drivers.svg", 1, "drivers"], ["src", "../../assets/Sidebar/questions.svg", 1, "questions"], ["src", "../../assets/Sidebar/comments.svg", 1, "comments"], ["src", "../../assets/Sidebar/people.svg", 1, "people"], ["src", "../../assets/Sidebar/communication.svg", 1, "communication"], [1, "nav", "flex-column", "mb-2"], ["src", "../../assets/Sidebar/survey.svg", 1, "survey"], ["src", "../../assets/chevron-down.svg", 1, "ml-1", "mr-0", "img-fluid", "downArrow", "float-right"], ["src", "../../assets/Sidebar/company.svg", 1, "company"]], template: function SidenavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SidenavComponent_ng_sidebar_container_0_Template, 59, 1, "ng-sidebar-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_button_click_2_listener() { return ctx._AuthenticationService._toggleSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._AuthenticationService.sideBarOpened);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ng_sidebar__WEBPACK_IMPORTED_MODULE_4__["SidebarContainer"], ng_sidebar__WEBPACK_IMPORTED_MODULE_4__["Sidebar"]], styles: ["#btnSide[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -36px;\n  left: 9rem;\n  z-index: 999;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-image: url('close-menu.png');\n  width: 30px;\n  height: 23px;\n  background-color: transparent;\n}\n\n\nng-sidebar[_ngcontent-%COMP%]   .sidebar-heading[_ngcontent-%COMP%] {\n  width: 43px;\n  height: 15px;\n  \n  font-size: 12px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #a0aabb;\n}\n\n\nng-sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  \n  width: 100%;\n  height: 37px;\n  border-radius: 4px;\n  background-color: #f6f5f4;\n  margin: auto;\n}\n\n\nng-sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  object-fit: contain;\n  margin-right: 20px;\n}\n\n\n.text[_ngcontent-%COMP%]{\n  \n  font-size: 12px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #465061;\n}\n\n\n#insights[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{\n  background-color: #ffffff;\n  color: #8139c2;\n}\n\n\n#insights[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  color: #8139c2 !important;\n}\n\n\n.downArrow[_ngcontent-%COMP%] {\n  width: 9px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFVBQVU7RUFDVixZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1Qix1Q0FBMkU7RUFDM0UsV0FBVztFQUNYLFlBQVk7RUFDWiw2QkFBNkI7QUFDL0I7OztBQUdBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7O0FBSUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7OztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7OztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7OztBQUdBO0VBQ0UseUJBQXlCO0FBQzNCOzs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2J0blNpZGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTM2cHg7XG4gIGxlZnQ6IDlyZW07XG4gIHotaW5kZXg6IDk5OTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy8vY2xvc2UtbWVudV8yMDIwLTEwLTI2L2Nsb3NlLW1lbnUucG5nJyk7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDIzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5cbm5nLXNpZGViYXIgLnNpZGViYXItaGVhZGluZyB7XG4gIHdpZHRoOiA0M3B4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIC8qIGZvbnQtZmFtaWx5OiBMYXRvOyAqL1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogI2EwYWFiYjtcbn1cblxubmctc2lkZWJhciB1bCBsaSB7XG4gIC8qIHdpZHRoOiAxNDZweDsgKi9cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzdweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNWY0O1xuICBtYXJnaW46IGF1dG87XG59XG5cblxuXG5uZy1zaWRlYmFyIHVsIGxpIGEgaW1nIHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4udGV4dHtcbiAgLyogZm9udC1mYW1pbHk6IExhdG87ICovXG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjNDY1MDYxO1xufVxuXG4jaW5zaWdodHMgLmFjdGl2ZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgY29sb3I6ICM4MTM5YzI7XG59XG5cblxuI2luc2lnaHRzIC5hY3RpdmUgLnRleHQge1xuICBjb2xvcjogIzgxMzljMiAhaW1wb3J0YW50O1xufVxuXG4uZG93bkFycm93IHtcbiAgd2lkdGg6IDlweCAhaW1wb3J0YW50O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidenavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidenav',
                templateUrl: './sidenav.component.html',
                styleUrls: ['./sidenav.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'trianglz';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "W6KJ":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/authentication.service */ "18Le");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sidenav/sidenav.component */ "Jjks");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../statistics/statistics.component */ "4QAB");
/* harmony import */ var _highlighted_drivers_highlighted_drivers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../highlighted-drivers/highlighted-drivers.component */ "597Q");
/* harmony import */ var _highlighted_segments_highlighted_segments_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../highlighted-segments/highlighted-segments.component */ "bTg8");
/* harmony import */ var _highlighted_comments_highlighted_comments_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../highlighted-comments/highlighted-comments.component */ "Yz5n");










function ProfileComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-statistics");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-highlighted-drivers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-highlighted-segments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-highlighted-comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-statistics");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-highlighted-drivers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-highlighted-segments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-highlighted-comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProfileComponent {
    // public _opened: boolean = true;
    // sideBarOpened:boolean = true;
    // public _toggleSidebar() {
    //   this._opened = !this._opened;
    //   this.sideBarOpened = !this.sideBarOpened
    // }
    constructor(_Router, _AuthenticationService) {
        this._Router = _Router;
        this._AuthenticationService = _AuthenticationService;
    }
    ngOnInit() {
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 4, vars: 2, consts: [["id", "profile", 1, "row"], [1, "col-2", "pl-5"], ["id", "dashboard", "class", "col-10 mt-5", 4, "ngIf"], ["id", "dashboard", "class", "col-12 mt-5 pl-5", 4, "ngIf"], ["id", "dashboard", 1, "col-10", "mt-5"], ["id", "dashboard", 1, "col-12", "mt-5", "pl-5"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sidenav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileComponent_div_2_Template, 5, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileComponent_div_3_Template, 5, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._AuthenticationService.sideBarOpened);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx._AuthenticationService.sideBarOpened);
    } }, directives: [_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__["SidenavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_5__["StatisticsComponent"], _highlighted_drivers_highlighted_drivers_component__WEBPACK_IMPORTED_MODULE_6__["HighlightedDriversComponent"], _highlighted_segments_highlighted_segments_component__WEBPACK_IMPORTED_MODULE_7__["HighlightedSegmentsComponent"], _highlighted_comments_highlighted_comments_component__WEBPACK_IMPORTED_MODULE_8__["HighlightedCommentsComponent"]], styles: ["#profile[_ngcontent-%COMP%] {\n  width: 1440px;\n  height: 1770px;\n  height: 1510px;\n  background-color: #f6f5f4;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcHJvZmlsZSB7XG4gIHdpZHRoOiAxNDQwcHg7XG4gIGhlaWdodDogMTc3MHB4O1xuICBoZWlnaHQ6IDE1MTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjVmNDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuXG5cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "Yz5n":
/*!************************************************************************!*\
  !*** ./src/app/highlighted-comments/highlighted-comments.component.ts ***!
  \************************************************************************/
/*! exports provided: HighlightedCommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightedCommentsComponent", function() { return HighlightedCommentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HighlightedCommentsComponent {
    constructor() { }
    ngOnInit() {
    }
}
HighlightedCommentsComponent.ɵfac = function HighlightedCommentsComponent_Factory(t) { return new (t || HighlightedCommentsComponent)(); };
HighlightedCommentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HighlightedCommentsComponent, selectors: [["app-highlighted-comments"]], decls: 61, vars: 0, consts: [["id", "highlighted", 1, "row", "mx-0", "py-2"], [1, "col-sm-1", "d-flex", "align-items-center", "justify-content-center"], ["src", "../../assets/comments/comments.png"], [1, "col-sm-9"], [1, "fntBold", "fntgray", "fnt20"], [1, "fntNormal", "fntgrayX", "fnt13"], [1, "col-sm-2", "d-flex", "align-items-center", "justify-content-center"], [1, "highBtn"], ["id", "subHighlight", 1, "mb-5", "p-2"], [1, "row", "mx-0"], [1, "col-1", "d-flex", "align-items-center", "justify-content-center", "flex-column"], ["src", "../../assets/promoters/promoters.png", 1, "img50"], [1, "fntgray", "fntBold", "fnt11", "mt-2"], [1, "col-11", "px-2"], [1, "promoters", "fnt14", "fntgrayX", "fntNormal", "text-left"], [1, ""], [1, "fnt12", "fntgray", "my-2"], ["src", "../../assets/calendar.svg", 1, "img10", "mr-2"], [1, "ml-1", "textUnderline"], [1, "fntBold"], ["src", "../../assets/questions/questions.png", 1, "img50"], [1, "questions", "sb6", "fnt14", "fntgrayX", "fntNormal", "text-left"], ["src", "../../assets/detractors/detractors.png", 1, "img50"], [1, "detractors", "sb6", "fnt14", "fntgrayX", "fntNormal", "text-left"]], template: function HighlightedCommentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Highlighted Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Comments are given in response to survey questions from Kaktus. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "All Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Score: 8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Q: I feel like I am given enough freedom to decide how to do my work. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "17 Nov 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Driver: Autonomy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " I'm basically not doing my work for what I think will resonate best with our audience, it's just whatever I think will please my manager most. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Q: What\u2019s the one thing that would improve your productivity right now? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "17 Nov 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Open ended question");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " I'm basically not doing my work for what I think will resonate best with our audience, it's just whatever I think will please my manager most. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Score: 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Q: At work, I know what is expected of me every day. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "17 Nov 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Driver: Goal Setting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " I know what my core objectives are, but they are always overridden by what my manager wants at that particular instant ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#highlighted[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  background-color: #fbfbfb;\n}\n#subHighlight[_ngcontent-%COMP%] {\n  \n  \n  border-radius: 4px;\n  box-shadow: 0 0 9px 0 #eeeeee;\n  background-color: #ffffff;\n}\n.highBtn[_ngcontent-%COMP%] {\n  width: 104px;\n  height: 40px;\n  border-radius: 4px;\n  border: solid 1px #e1e5e9;\n  background-color: #ffffff;\n  \n  font-size: 14px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: center;\n  color: #8139c2;\n  border: none;\n  }\n.fnt10[_ngcontent-%COMP%] {font-size: 10px;}\n.fnt11[_ngcontent-%COMP%] {font-size: 11px;}\n.fnt12[_ngcontent-%COMP%] {font-size: 12px;}\n.fnt13[_ngcontent-%COMP%] {font-size: 13px;}\n.fnt14[_ngcontent-%COMP%] {font-size: 14px;}\n.fnt15[_ngcontent-%COMP%] {font-size: 15px;}\n.fnt20[_ngcontent-%COMP%] {font-size: 20px;}\n.fntGreen[_ngcontent-%COMP%] {color: #4ac979;}\n.fntRed[_ngcontent-%COMP%] {color: #f75656;}\n.fntOrange[_ngcontent-%COMP%] {color: #ffa93a;}\n.fntPurple[_ngcontent-%COMP%] {color: #8139c2;}\n.fntgray[_ngcontent-%COMP%] {color: #75849b;}\n.fntgrayX[_ngcontent-%COMP%] {color: #465061;}\n.bg-Mypurple[_ngcontent-%COMP%] {background-color: #8139c2;}\n.fntBold[_ngcontent-%COMP%] {\n  \n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  margin-bottom: 1px;\n}\n.fntNormal[_ngcontent-%COMP%] {\n  \n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n}\n.textUnderline[_ngcontent-%COMP%] {text-decoration: underline;}\n.img50[_ngcontent-%COMP%]{\n  width: 50px;\n  height: 50px;\n  object-fit: contain;\n}\n.img10[_ngcontent-%COMP%]{\n  width: 10px;\n  height: 10px;\n  object-fit: contain;\n}\n\n.promoters[_ngcontent-%COMP%] {\n  \n  \n  border-radius: 4px;\n  border: solid 1px #b5dfc5;\n  background-color: #f6fff9;\n  margin: 5px auto;\n  padding: 10px;\n  text-align: center;\n  position: relative;\n}\n.questions[_ngcontent-%COMP%]{\n  border-radius: 4px;\n  background-color: #ffff;\n  border: solid 1px #e1e5e9;\n  margin: 5px auto;\n  padding: 10px;\n  text-align: center;\n  position: relative;\n}\n.detractors[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  background-color: #fff9f9;\n  border: solid 1px #ffcbcb;\n  margin: 5px auto;\n  padding: 10px;\n  text-align: center;\n  position: relative;\n}\n.promoters[_ngcontent-%COMP%]:before {\n  content: \"\";\n  width: 0px;\n  height: 0px;\n  position: absolute;\n  border-left: 10px solid transparent;\n  border-right: 10px solid #b5dfc5;\n  border-top: 10px solid #b5dfc5;\n  border-bottom: 10px solid transparent;\n  left: -21px;\n  top: 20px;\n}\n.promoters[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 0px;\n  height: 0px;\n  position: absolute;\n  border-left: 10px solid transparent;\n  border-right: 10px solid #fff;\n  border-top: 10px solid #fff;\n  border-bottom: 10px solid transparent;\n  left: -19px;\n  top: 21px;\n}\n.questions[_ngcontent-%COMP%]:before {\n  content: \"\";\n  width: 0px;\n  height: 0px;\n  position: absolute;\n  border-left: 10px solid transparent;\n  border-right: 10px solid #e1e5e9;\n  border-top: 10px solid #e1e5e9;\n  border-bottom: 10px solid transparent;\n  left: -21px;\n  top: 20px;\n}\n.questions[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 0px;\n  height: 0px;\n  position: absolute;\n  border-left: 10px solid transparent;\n  border-right: 10px solid #fff;\n  border-top: 10px solid #fff;\n  border-bottom: 10px solid transparent;\n  left: -19px;\n  top: 21px;\n}\n.detractors[_ngcontent-%COMP%]:before {\n  content: \"\";\n  width: 0px;\n  height: 0px;\n  position: absolute;\n  border-left: 10px solid transparent;\n  border-right: 10px solid #ffcbcb;\n  border-top: 10px solid #ffcbcb;\n  border-bottom: 10px solid transparent;\n  left: -21px;\n  top: 20px;\n}\n.detractors[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 0px;\n  height: 0px;\n  position: absolute;\n  border-left: 10px solid transparent;\n  border-right: 10px solid #fff;\n  border-top: 10px solid #fff;\n  border-bottom: 10px solid transparent;\n  left: -19px;\n  top: 21px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGlnaGxpZ2h0ZWQtY29tbWVudHMvaGlnaGxpZ2h0ZWQtY29tbWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQkFBMkI7QUFDM0I7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7RUFDWjtBQUVGLFFBQVEsZUFBZSxDQUFDO0FBQ3hCLFFBQVEsZUFBZSxDQUFDO0FBQ3hCLFFBQVEsZUFBZSxDQUFDO0FBQ3hCLFFBQVEsZUFBZSxDQUFDO0FBQ3hCLFFBQVEsZUFBZSxDQUFDO0FBQ3hCLFFBQVEsZUFBZSxDQUFDO0FBQ3hCLFFBQVEsZUFBZSxDQUFDO0FBQ3hCLFdBQVcsY0FBYyxDQUFDO0FBQzFCLFNBQVMsY0FBYyxDQUFDO0FBQ3hCLFlBQVksY0FBYyxDQUFDO0FBQzNCLFlBQVksY0FBYyxDQUFDO0FBQzNCLFVBQVUsY0FBYyxDQUFDO0FBQ3pCLFdBQVcsY0FBYyxDQUFDO0FBQzFCLGNBQWMseUJBQXlCLENBQUM7QUFFeEM7RUFDRSx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCO0FBRUEsZ0JBQWdCLDBCQUEwQixDQUFDO0FBRTNDO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBQ0EseUJBQXlCO0FBRXpCO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCO0FBR0E7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUNBQW1DO0VBQ25DLGdDQUFnQztFQUNoQyw4QkFBOEI7RUFDOUIscUNBQXFDO0VBQ3JDLFdBQVc7RUFDWCxTQUFTO0FBQ1g7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQ0FBbUM7RUFDbkMsNkJBQTZCO0VBQzdCLDJCQUEyQjtFQUMzQixxQ0FBcUM7RUFDckMsV0FBVztFQUNYLFNBQVM7QUFDWDtBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1DQUFtQztFQUNuQyxnQ0FBZ0M7RUFDaEMsOEJBQThCO0VBQzlCLHFDQUFxQztFQUNyQyxXQUFXO0VBQ1gsU0FBUztBQUNYO0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUNBQW1DO0VBQ25DLDZCQUE2QjtFQUM3QiwyQkFBMkI7RUFDM0IscUNBQXFDO0VBQ3JDLFdBQVc7RUFDWCxTQUFTO0FBQ1g7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQ0FBbUM7RUFDbkMsZ0NBQWdDO0VBQ2hDLDhCQUE4QjtFQUM5QixxQ0FBcUM7RUFDckMsV0FBVztFQUNYLFNBQVM7QUFDWDtBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1DQUFtQztFQUNuQyw2QkFBNkI7RUFDN0IsMkJBQTJCO0VBQzNCLHFDQUFxQztFQUNyQyxXQUFXO0VBQ1gsU0FBUztBQUNYIiwiZmlsZSI6InNyYy9hcHAvaGlnaGxpZ2h0ZWQtY29tbWVudHMvaGlnaGxpZ2h0ZWQtY29tbWVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICoqKiBTdGFydCByZXBlYXRlZCAqKiogKi9cbiNoaWdobGlnaHRlZCB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmJmYjtcbn1cblxuI3N1YkhpZ2hsaWdodCB7XG4gIC8qIHdpZHRoOiAxMjM5cHg7ICovXG4gIC8qIGhlaWdodDogMzcwcHg7ICovXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCAwIDlweCAwICNlZWVlZWU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi5oaWdoQnRuIHtcbiAgd2lkdGg6IDEwNHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2UxZTVlOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgLyogZm9udC1mYW1pbHk6IExhdG87ICovXG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM4MTM5YzI7XG4gIGJvcmRlcjogbm9uZTtcbiAgfVxuXG4uZm50MTAge2ZvbnQtc2l6ZTogMTBweDt9XG4uZm50MTEge2ZvbnQtc2l6ZTogMTFweDt9IFxuLmZudDEyIHtmb250LXNpemU6IDEycHg7fVxuLmZudDEzIHtmb250LXNpemU6IDEzcHg7fVxuLmZudDE0IHtmb250LXNpemU6IDE0cHg7fVxuLmZudDE1IHtmb250LXNpemU6IDE1cHg7fVxuLmZudDIwIHtmb250LXNpemU6IDIwcHg7fVxuLmZudEdyZWVuIHtjb2xvcjogIzRhYzk3OTt9XG4uZm50UmVkIHtjb2xvcjogI2Y3NTY1Njt9XG4uZm50T3JhbmdlIHtjb2xvcjogI2ZmYTkzYTt9XG4uZm50UHVycGxlIHtjb2xvcjogIzgxMzljMjt9XG4uZm50Z3JheSB7Y29sb3I6ICM3NTg0OWI7fVxuLmZudGdyYXlYIHtjb2xvcjogIzQ2NTA2MTt9XG4uYmctTXlwdXJwbGUge2JhY2tncm91bmQtY29sb3I6ICM4MTM5YzI7fVxuXG4uZm50Qm9sZCB7XG4gIC8qIGZvbnQtZmFtaWx5OiBMYXRvOyAqL1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xufVxuXG4uZm50Tm9ybWFsIHtcbiAgLyogZm9udC1mYW1pbHk6IExhdG87ICovXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG59XG5cbi50ZXh0VW5kZXJsaW5lIHt0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTt9XG5cbi5pbWc1MHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLmltZzEwe1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuLyogKioqIEVuZCByZXBlYXRlZCAqKiogKi9cblxuLnByb21vdGVycyB7XG4gIC8qIHdpZHRoOiAxMTQzcHg7ICovXG4gIC8qIGhlaWdodDogMTAwcHg7ICovXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2I1ZGZjNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZmZmOTtcbiAgbWFyZ2luOiA1cHggYXV0bztcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5xdWVzdGlvbnN7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmY7XG4gIGJvcmRlcjogc29saWQgMXB4ICNlMWU1ZTk7XG4gIG1hcmdpbjogNXB4IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZGV0cmFjdG9ycyB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjlmOTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2ZmY2JjYjtcbiAgbWFyZ2luOiA1cHggYXV0bztcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cblxuLnByb21vdGVyczpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMHB4O1xuICBoZWlnaHQ6IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkICNiNWRmYzU7XG4gIGJvcmRlci10b3A6IDEwcHggc29saWQgI2I1ZGZjNTtcbiAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgbGVmdDogLTIxcHg7XG4gIHRvcDogMjBweDtcbn1cblxuLnByb21vdGVyczphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAwcHg7XG4gIGhlaWdodDogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjZmZmO1xuICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBsZWZ0OiAtMTlweDtcbiAgdG9wOiAyMXB4O1xufVxuXG4ucXVlc3Rpb25zOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAwcHg7XG4gIGhlaWdodDogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgI2UxZTVlOTtcbiAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjZTFlNWU5O1xuICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBsZWZ0OiAtMjFweDtcbiAgdG9wOiAyMHB4O1xufVxuXG4ucXVlc3Rpb25zOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDBweDtcbiAgaGVpZ2h0OiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCAjZmZmO1xuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGxlZnQ6IC0xOXB4O1xuICB0b3A6IDIxcHg7XG59XG5cbi5kZXRyYWN0b3JzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAwcHg7XG4gIGhlaWdodDogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgI2ZmY2JjYjtcbiAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjZmZjYmNiO1xuICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBsZWZ0OiAtMjFweDtcbiAgdG9wOiAyMHB4O1xufVxuXG4uZGV0cmFjdG9yczphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAwcHg7XG4gIGhlaWdodDogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjZmZmO1xuICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBsZWZ0OiAtMTlweDtcbiAgdG9wOiAyMXB4O1xufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HighlightedCommentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-highlighted-comments',
                templateUrl: './highlighted-comments.component.html',
                styleUrls: ['./highlighted-comments.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./notfound/notfound.component */ "0pRC");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-sidebar */ "k4pO");
/* harmony import */ var _highlighted_drivers_highlighted_drivers_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./highlighted-drivers/highlighted-drivers.component */ "597Q");
/* harmony import */ var _highlighted_segments_highlighted_segments_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./highlighted-segments/highlighted-segments.component */ "bTg8");
/* harmony import */ var _highlighted_comments_highlighted_comments_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./highlighted-comments/highlighted-comments.component */ "Yz5n");
/* harmony import */ var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./statistics/statistics.component */ "4QAB");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "Jjks");






















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__["MatSliderModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ng_sidebar__WEBPACK_IMPORTED_MODULE_13__["SidebarModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
        _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_9__["NotfoundComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
        _highlighted_drivers_highlighted_drivers_component__WEBPACK_IMPORTED_MODULE_14__["HighlightedDriversComponent"],
        _highlighted_segments_highlighted_segments_component__WEBPACK_IMPORTED_MODULE_15__["HighlightedSegmentsComponent"],
        _highlighted_comments_highlighted_comments_component__WEBPACK_IMPORTED_MODULE_16__["HighlightedCommentsComponent"],
        _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_17__["StatisticsComponent"],
        _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_18__["SidenavComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__["MatSliderModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ng_sidebar__WEBPACK_IMPORTED_MODULE_13__["SidebarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                    _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_9__["NotfoundComponent"],
                    _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
                    _highlighted_drivers_highlighted_drivers_component__WEBPACK_IMPORTED_MODULE_14__["HighlightedDriversComponent"],
                    _highlighted_segments_highlighted_segments_component__WEBPACK_IMPORTED_MODULE_15__["HighlightedSegmentsComponent"],
                    _highlighted_comments_highlighted_comments_component__WEBPACK_IMPORTED_MODULE_16__["HighlightedCommentsComponent"],
                    _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_17__["StatisticsComponent"],
                    _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_18__["SidenavComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__["MatSliderModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    ng_sidebar__WEBPACK_IMPORTED_MODULE_13__["SidebarModule"].forRoot()
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "bTg8":
/*!************************************************************************!*\
  !*** ./src/app/highlighted-segments/highlighted-segments.component.ts ***!
  \************************************************************************/
/*! exports provided: HighlightedSegmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightedSegmentsComponent", function() { return HighlightedSegmentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class HighlightedSegmentsComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        $(document).ready(function () {
            $("#owl-example1").owlCarousel({
                margin: 10,
                items: 3.5,
                autoplay: true,
                autoplayTimeout: 1000,
            });
            $("#owl-example2").owlCarousel({
                margin: 10,
                items: 3.5,
                autoplay: true,
                autoplayTimeout: 1000,
            });
        });
    }
}
HighlightedSegmentsComponent.ɵfac = function HighlightedSegmentsComponent_Factory(t) { return new (t || HighlightedSegmentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
HighlightedSegmentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HighlightedSegmentsComponent, selectors: [["app-highlighted-segments"]], decls: 257, vars: 0, consts: [["id", "highlighted", 1, "row", "mx-0", "py-2", "mb-1"], [1, "col-1", "d-flex", "align-items-center", "justify-content-center"], ["src", "../../assets/segments/segments.png"], [1, "col-9"], [1, "fntBold", "fntgray", "fnt20"], [1, "fntNormal", "fntgrayX", "fnt13"], [1, "col-2", "d-flex", "align-items-center", "justify-content-center"], [1, "highBtn"], ["id", "subHighlight", "role", "tablist", "aria-multiselectable", "true", 1, "panel-group", "p-2"], [1, "panel", "panel-default"], ["role", "tab", "id", "headingOne", 1, "panel-heading"], [1, "fntBold", "fntgrayX", "mb-3", "fnt14"], [1, "seeAll"], ["id", "collapseOne", "role", "tabpanel", "aria-labelledby", "headingOne", 1, "panel-collapse", "collapse", "in", "show"], [1, "panel-body", "position-relative"], [1, "bg-fade"], ["id", "owl-example1", 1, "owl-carousel"], [1, "item"], [1, "row", "ml-0", "py-2", "smallDiv", "align-items-center", "itemContent"], [1, "col-2", "less30", "oval"], [1, "textInOval"], [1, "col-8", "pr-0"], [1, "fntBold", "fntgrayX", "fnt14"], [1, "fntRed", "ml-2", "fnt13"], [1, "fntNormal", "fnt11", "fntgray"], [2, "width", "81px"], [1, "peopleImg"], [1, "fntBold", "fntgrayX", "fnt11"], [1, "fntRed"], [1, "fntPurple", "ml-2"], [1, "col-1"], ["id", "rthArrow"], [1, "col-2", "berlin", "oval"], [1, "col-2", "cairo", "oval"], [1, "col-2", "CR", "oval"], [1, "fntGreen", "ml-2", "fnt13"], [1, "fntGreen"], ["id", "subHighlight", "role", "tablist", "aria-multiselectable", "true", 1, "panel-group", "mb-5", "p-2"], ["id", "owl-example2", 1, "owl-carousel"], [1, "col-2", "NY", "oval"], [1, "col-2", "ND", "oval"], [1, "col-2", "london", "oval"], [1, "col-2", "NC", "oval"]], template: function HighlightedSegmentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Highlighted Segments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Segments are the groups of employees, based on teams and demographics, that report upward to you. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "All Segments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Segments to improve (14) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "See All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "< 30");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "< 30");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "6.2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Commute Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "5 people");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "-2.1 below ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "the Benchmark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "8.3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Berlin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "5.9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Local Office");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "22 people");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "-1.1 below ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "the Benchmark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "8.3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Cairo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "5.9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Local Office");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "22 people");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "-1.1 below ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "the Benchmark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "8.3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "CR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Carolyn Robertson ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "8.2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Local Office");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "55 people");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "-2.1 above ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "the Benchmark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "8.3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Segments doing great (8) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "See All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "NY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "New York");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "8.2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Local Office");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "55 people");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "-2.1 above ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "the Benchmark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "8.3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "ND");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "New Delhy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "8.2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Local Office");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "55 people");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "-2.1 above ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "the Benchmark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "8.3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "L");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "London");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "8.2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Local Office");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "55 people");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "-2.1 above ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "the Benchmark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "8.3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "NC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "New Cairo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "8.2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "Local Office");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "55 people");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "-2.1 above ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "the Benchmark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "8.3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](256, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#highlighted[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  background-color: #fbfbfb;\n}\n\n#subHighlight[_ngcontent-%COMP%] {\n  \n  \n  border-radius: 4px;\n  box-shadow: 0 0 9px 0 #eeeeee;\n  background-color: #ffffff;\n}\n\n.highBtn[_ngcontent-%COMP%] {\n  width: 104px;\n  height: 40px;\n  border-radius: 4px;\n  border: solid 1px #e1e5e9;\n  background-color: #ffffff;\n  \n  font-size: 14px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: center;\n  color: #8139c2;\n  border: none;\n}\n\n.fnt10[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.fnt11[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n\n.fnt12[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.fnt13[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\n.fnt14[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.fnt15[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.fnt20[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.fntGreen[_ngcontent-%COMP%] {\n  color: #4ac979;\n}\n\n.fntRed[_ngcontent-%COMP%] {\n  color: #f75656;\n}\n\n.fntOrange[_ngcontent-%COMP%] {\n  color: #ffa93a;\n}\n\n.fntPurple[_ngcontent-%COMP%] {\n  color: #8139c2;\n}\n\n.fntgray[_ngcontent-%COMP%] {\n  color: #75849b;\n}\n\n.fntgrayX[_ngcontent-%COMP%] {\n  color: #465061;\n}\n\n.bg-Mypurple[_ngcontent-%COMP%] {\n  background-color: #8139c2;\n}\n\n.fntBold[_ngcontent-%COMP%] {\n  \n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  margin-bottom: 1px;\n}\n\n.fntNormal[_ngcontent-%COMP%] {\n  \n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n}\n\n.textUnderline[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n\n.img50[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  object-fit: contain;\n}\n\n.img10[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  object-fit: contain;\n}\n\n\n\n.seeAll[_ngcontent-%COMP%] {\n  background-color: transparent;\n  \n  font-size: 12px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #8139c2;\n  border: none;\n  text-decoration: underline;\n}\n\n.smallDiv[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  border: solid 1px #e1e5e9;\n  background-color: #ffffff;\n  margin-right: 1px;\n}\n\n.oval[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 25px;\n  margin-left: 10px;\n  position: relative;\n}\n\n.less30[_ngcontent-%COMP%] {background-image: linear-gradient(137deg, #0017ff 14%, #0096ff 85%);}\n\n.berlin[_ngcontent-%COMP%] {background-image: linear-gradient(137deg, #ff0000 14%, #a100a7 85%);}\n\n.cairo[_ngcontent-%COMP%] {background-image: linear-gradient(137deg, #ff8500 14%, #86a541 85%);}\n\n.NY[_ngcontent-%COMP%] {background-image: linear-gradient(137deg, #00a779 14%, #2bff00 85%);}\n\n.ND[_ngcontent-%COMP%] {background-image: linear-gradient(137deg, #66f1cb 14%, #00e8ff 85%);}\n\n.london[_ngcontent-%COMP%] {background-image: linear-gradient(137deg, #00a1ff 14%, #007aff 85%);}\n\n.NC[_ngcontent-%COMP%] {background-image: linear-gradient(137deg, #d6a9ff 14%, #00d0ff 85%);}\n\n.CR[_ngcontent-%COMP%] {background-image: linear-gradient(137deg, #4f00ff 14%, #ff6400 85%);}\n\n.textInOval[_ngcontent-%COMP%] {\n  width: 31px;\n  height: 19px;\n  \n  font-size: 16px;\n  font-weight: 900;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: center;\n  color: #ffffff;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-45%, -50%);\n}\n\n.peopleImg[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  object-fit: contain;\n  display: inline-block;\n  background-image: url('profile.svg');\n  background-color: transparent;\n  background-size: contain;\n  margin-left: 10px;\n  margin-right: 5px;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n#rthArrow[_ngcontent-%COMP%] {\n  background-image: url('chevron-right.svg');\n  border: 0px;\n  background-color: transparent;\n  background-size: contain;\n  width: 10px;\n  height: 14px;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.mr--8[_ngcontent-%COMP%] {\n  margin-right: -8px;\n}\n\n.bg-fade[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to left, #fff 0%, rgba(255, 255, 255, 0) 100%);\n  width: 121px;\n  height: 100%;\n  position: absolute;\n  right: 0;\n  z-index: 2;\n}\n\n.itemContent[_ngcontent-%COMP%] {\n  width: 320px;\n  height: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGlnaGxpZ2h0ZWQtc2VnbWVudHMvaGlnaGxpZ2h0ZWQtc2VnbWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQkFBMkI7O0FBRTNCO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUEseUJBQXlCOztBQUV6QjtFQUNFLDZCQUE2QjtFQUM3Qix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLFlBQVk7RUFDWiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUNBLFNBQVMsbUVBQW1FLENBQUM7O0FBQzdFLFNBQVMsbUVBQW1FLENBQUM7O0FBQzdFLFFBQVEsbUVBQW1FLENBQUM7O0FBQzVFLEtBQUssbUVBQW1FLENBQUM7O0FBQ3pFLEtBQUssbUVBQW1FLENBQUM7O0FBQ3pFLFNBQVMsbUVBQW1FLENBQUM7O0FBQzdFLEtBQUssbUVBQW1FLENBQUM7O0FBQ3pFLEtBQUssbUVBQW1FLENBQUM7O0FBRXpFO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsb0NBQWlEO0VBQ2pELDZCQUE2QjtFQUM3Qix3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQiw0QkFBNEI7RUFDNUIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsMENBQXFEO0VBQ3JELFdBQVc7RUFDWCw2QkFBNkI7RUFDN0Isd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdGQUFnRjtFQUNoRixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2hpZ2hsaWdodGVkLXNlZ21lbnRzL2hpZ2hsaWdodGVkLXNlZ21lbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqKiogU3RhcnQgcmVwZWF0ZWQgKioqICovXG5cbiNoaWdobGlnaHRlZCB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmJmYjtcbn1cblxuI3N1YkhpZ2hsaWdodCB7XG4gIC8qIHdpZHRoOiAxMjM5cHg7ICovXG4gIC8qIGhlaWdodDogMzcwcHg7ICovXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCAwIDlweCAwICNlZWVlZWU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi5oaWdoQnRuIHtcbiAgd2lkdGg6IDEwNHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2UxZTVlOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgLyogZm9udC1mYW1pbHk6IExhdG87ICovXG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM4MTM5YzI7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmZudDEwIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uZm50MTEge1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbi5mbnQxMiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmZudDEzIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uZm50MTQge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5mbnQxNSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmZudDIwIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uZm50R3JlZW4ge1xuICBjb2xvcjogIzRhYzk3OTtcbn1cblxuLmZudFJlZCB7XG4gIGNvbG9yOiAjZjc1NjU2O1xufVxuXG4uZm50T3JhbmdlIHtcbiAgY29sb3I6ICNmZmE5M2E7XG59XG5cbi5mbnRQdXJwbGUge1xuICBjb2xvcjogIzgxMzljMjtcbn1cblxuLmZudGdyYXkge1xuICBjb2xvcjogIzc1ODQ5Yjtcbn1cblxuLmZudGdyYXlYIHtcbiAgY29sb3I6ICM0NjUwNjE7XG59XG5cbi5iZy1NeXB1cnBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MTM5YzI7XG59XG5cbi5mbnRCb2xkIHtcbiAgLyogZm9udC1mYW1pbHk6IExhdG87ICovXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG59XG5cbi5mbnROb3JtYWwge1xuICAvKiBmb250LWZhbWlseTogTGF0bzsgKi9cbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbn1cblxuLnRleHRVbmRlcmxpbmUge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmltZzUwIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLmltZzEwIHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLyogKioqIEVuZCByZXBlYXRlZCAqKiogKi9cblxuLnNlZUFsbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAvKiBmb250LWZhbWlseTogTGF0bzsgKi9cbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6ICM4MTM5YzI7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5zbWFsbERpdiB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2UxZTVlOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luLXJpZ2h0OiAxcHg7XG59XG5cbi5vdmFsIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5sZXNzMzAge2JhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzdkZWcsICMwMDE3ZmYgMTQlLCAjMDA5NmZmIDg1JSk7fVxuLmJlcmxpbiB7YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEzN2RlZywgI2ZmMDAwMCAxNCUsICNhMTAwYTcgODUlKTt9XG4uY2Fpcm8ge2JhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzdkZWcsICNmZjg1MDAgMTQlLCAjODZhNTQxIDg1JSk7fVxuLk5ZIHtiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTM3ZGVnLCAjMDBhNzc5IDE0JSwgIzJiZmYwMCA4NSUpO31cbi5ORCB7YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEzN2RlZywgIzY2ZjFjYiAxNCUsICMwMGU4ZmYgODUlKTt9XG4ubG9uZG9uIHtiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTM3ZGVnLCAjMDBhMWZmIDE0JSwgIzAwN2FmZiA4NSUpO31cbi5OQyB7YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEzN2RlZywgI2Q2YTlmZiAxNCUsICMwMGQwZmYgODUlKTt9XG4uQ1Ige2JhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzdkZWcsICM0ZjAwZmYgMTQlLCAjZmY2NDAwIDg1JSk7fVxuXG4udGV4dEluT3ZhbCB7XG4gIHdpZHRoOiAzMXB4O1xuICBoZWlnaHQ6IDE5cHg7XG4gIC8qIGZvbnQtZmFtaWx5OiBMYXRvOyAqL1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQ1JSwgLTUwJSk7XG59XG5cbi5wZW9wbGVJbWcge1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL3Byb2ZpbGUuc3ZnJyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4jcnRoQXJyb3cge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2NoZXZyb24tcmlnaHQuc3ZnKTtcbiAgYm9yZGVyOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLm1yLS04IHtcbiAgbWFyZ2luLXJpZ2h0OiAtOHB4O1xufVxuXG4uYmctZmFkZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjZmZmIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xuICB3aWR0aDogMTIxcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMjtcbn1cblxuLml0ZW1Db250ZW50IHtcbiAgd2lkdGg6IDMyMHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HighlightedSegmentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-highlighted-segments',
                templateUrl: './highlighted-segments.component.html',
                styleUrls: ['./highlighted-segments.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/authentication.service */ "18Le");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function NavbarComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Context ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Golden Eagle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavbarComponent {
    constructor(_AuthenticationService, _Router) {
        this._AuthenticationService = _AuthenticationService;
        this._Router = _Router;
    }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 11, vars: 5, consts: [[1, "navbar", "navbar-expand", "navbar-light", "bg-navbar"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand", "mr-5"], ["src", "../../assets/logo_2020-10-25/logo.png", 1, "img-fluid"], ["class", "mr-auto ml-5", 4, "ngIf"], ["id", "navbarNav", 1, ""], [1, "navbar-nav"], ["class", "nav-item", 4, "ngIf"], ["class", "nav-item d-flex align-items-center ", 4, "ngIf"], [1, "mr-auto", "ml-5"], ["id", "rthArrow", 1, "btn", "contextBtn"], ["src", "../../assets/growth/growth.png", 1, "Bitmap"], [1, "fnt10", "fntBold", "fntgray", "mb-0", "context"], ["src", "../../assets/chevron-down.svg", 1, "ml-1", "img-fluid"], [1, "nav-item"], ["routerLink", "/login", 1, "nav-link"], ["routerLink", "/register", 1, "nav-link"], [1, "nav-item", "d-flex", "align-items-center"], [1, "bellImg"], [1, "dropdown"], ["id", "rthArrow", 1, "btn", "btn-secondary", "profileBtn"], ["src", "../../assets/promoters/promoters.png", 1, "Profile-picture"], [1, "fnt11", "fntNormal", "fntgray", "mb-0", "subName"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavbarComponent_div_4_Template, 6, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NavbarComponent_li_7_Template, 3, 0, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NavbarComponent_li_8_Template, 3, 0, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NavbarComponent_li_9_Template, 2, 0, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NavbarComponent_li_10_Template, 7, 0, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._AuthenticationService.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx._AuthenticationService.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx._AuthenticationService.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._AuthenticationService.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._AuthenticationService.isLoggedIn());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["#highlighted[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  background-color: #fbfbfb;\n}\n#subHighlight[_ngcontent-%COMP%] {\n  \n  \n  border-radius: 4px;\n  box-shadow: 0 0 9px 0 #eeeeee;\n  background-color: #ffffff;\n}\n.highBtn[_ngcontent-%COMP%] {\nwidth: 104px;\nheight: 40px;\nborder-radius: 4px;\nborder: solid 1px #e1e5e9;\nbackground-color: #ffffff;\n\nfont-size: 14px;\nfont-weight: bold;\nfont-stretch: normal;\nfont-style: normal;\nline-height: normal;\nletter-spacing: normal;\ntext-align: center;\ncolor: #8139c2;\nborder: none;\n}\n.smallDiv[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  border: solid 1px #e1e5e9;\n  background-color: #ffffff;\n  margin-right: 1px;\n}\n.fnt10[_ngcontent-%COMP%] {font-size: 10px;}\n.fnt11[_ngcontent-%COMP%] {font-size: 11px;}\n.fnt12[_ngcontent-%COMP%] {font-size: 12px;}\n.fnt13[_ngcontent-%COMP%] {font-size: 13px;}\n.fnt14[_ngcontent-%COMP%] {font-size: 14px;}\n.fnt15[_ngcontent-%COMP%] {font-size: 15px;}\n.fnt20[_ngcontent-%COMP%] {font-size: 20px;}\n.fntGreen[_ngcontent-%COMP%] {color: #4ac979;}\n.fntRed[_ngcontent-%COMP%] {color: #f75656;}\n.fntOrange[_ngcontent-%COMP%] {color: #ffa93a;}\n.fntPurple[_ngcontent-%COMP%] {color: #8139c2;}\n.fntgray[_ngcontent-%COMP%] {color: #75849b;}\n.fntgrayX[_ngcontent-%COMP%] {color: #465061;}\n.bg-Mypurple[_ngcontent-%COMP%] {background-color: #8139c2;}\n.fntBold[_ngcontent-%COMP%] {\n  \n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  margin-bottom: 1px;\n}\n.fntNormal[_ngcontent-%COMP%] {\n  \n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n}\n.textUnderline[_ngcontent-%COMP%] {text-decoration: underline;}\n.img50[_ngcontent-%COMP%]{\n  width: 50px;\n  height: 50px;\n  object-fit: contain;\n}\n.img10[_ngcontent-%COMP%]{\n  width: 10px;\n  height: 10px;\n  object-fit: contain;\n}\n\n.bg-navbar[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.navbar[_ngcontent-%COMP%] {\n  height: 7vh;\n  \n}\n.mainFontColor[_ngcontent-%COMP%] {\n  color: #8139c2;\n}\n.nav-link[_ngcontent-%COMP%] {\n  color: #75849b!important;\n  font-size: .875rem!important;\n  font-weight: 600!important;\n  margin-right: 30px!important;\n}\n.nav-link[_ngcontent-%COMP%]:focus {\n  color: #8139c2!important;\n}\n.profileBtn[_ngcontent-%COMP%] {\n  height: 6vh;\n  position: relative;\n  padding: 0 5px;\n}\n.Profile-picture[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  margin: 0px 100px 0px 5px;\n  \n}\n.subName[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 60px;\n  top: 5px;\n}\n.subName[_ngcontent-%COMP%]::before {\n  content: \" \";\n  background-image: url('growth.png');\n  font-size: 14px;\n  font-weight: bold;\n  color: #465061;\n  position: absolute;\n  top: -5px;\n  left: -25px;\n  width: 20px;\n  height: 20px;\n  background-position: center;\n  background-size: contain;\n}\n.subName[_ngcontent-%COMP%]::after {\n  content: \"John Doe\";\n  font-size: 14px;\n  font-weight: bold;\n  color: #465061;\n  position: absolute;\n  top: 15px;\n  left: 20px;\n  width: 60px;\n}\n#rthArrow[_ngcontent-%COMP%] {\n  border: 0px;\n  background-color: transparent;\n}\n.bellImg[_ngcontent-%COMP%] {\n  width: 21px;\n  height: 24px;\n  background-color: #a0aabb;\n  background-image: url('bell.jpg');\n  background-size: contain;\n  background-position: center;\n  border: none;\n  margin-right: 10px;\n}\n.contextBtn[_ngcontent-%COMP%] {\n  height: 6vh;\n  position: relative;\n  padding: 0 5px;\n  border-radius: 4px;\n  border: solid 2px #f3e6ff !important;\n  background-color: #ffffff;\n}\n.Bitmap[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  margin: 0px 135px 0px 5px;\n}\n.context[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 45px;\n  top: 7px;\n}\n.context[_ngcontent-%COMP%]::after {\n  content: \"Company: Golden Eagle\";\n  font-size: 12px;\n  font-weight: bold;\n  color: #170641;\n  position: absolute;\n  top: 15px;\n  left: 0px;\n  width: 128px;;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJCQUEyQjtBQUMzQjtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3Qix5QkFBeUI7QUFDM0I7QUFFQTtBQUNBLFlBQVk7QUFDWixZQUFZO0FBQ1osa0JBQWtCO0FBQ2xCLHlCQUF5QjtBQUN6Qix5QkFBeUI7QUFDekIsdUJBQXVCO0FBQ3ZCLGVBQWU7QUFDZixpQkFBaUI7QUFDakIsb0JBQW9CO0FBQ3BCLGtCQUFrQjtBQUNsQixtQkFBbUI7QUFDbkIsc0JBQXNCO0FBQ3RCLGtCQUFrQjtBQUNsQixjQUFjO0FBQ2QsWUFBWTtBQUNaO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7QUFFQSxRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixRQUFRLGVBQWUsQ0FBQztBQUN4QixXQUFXLGNBQWMsQ0FBQztBQUMxQixTQUFTLGNBQWMsQ0FBQztBQUN4QixZQUFZLGNBQWMsQ0FBQztBQUMzQixZQUFZLGNBQWMsQ0FBQztBQUMzQixVQUFVLGNBQWMsQ0FBQztBQUN6QixXQUFXLGNBQWMsQ0FBQztBQUMxQixjQUFjLHlCQUF5QixDQUFDO0FBRXhDO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4QjtBQUVBLGdCQUFnQiwwQkFBMEIsQ0FBQztBQUUzQztFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUNBLHlCQUF5QjtBQUV6QjtFQUNFLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QiwwQkFBMEI7RUFDMUIsNEJBQTRCO0FBQzlCO0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjtBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsK0JBQStCO0FBQ2pDO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFFBQVE7QUFDVjtBQUVBO0VBQ0UsWUFBWTtFQUNaLG1DQUF1RDtFQUN2RCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQix3QkFBd0I7QUFDMUI7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFFQTtFQUNFLFdBQVc7RUFDWCw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGlDQUE4QztFQUM5Qyx3QkFBd0I7RUFDeEIsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0FBQ1Y7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7RUFDVCxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqKiogU3RhcnQgcmVwZWF0ZWQgKioqICovXG4jaGlnaGxpZ2h0ZWQge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmI7XG59XG5cbiNzdWJIaWdobGlnaHQge1xuICAvKiB3aWR0aDogMTIzOXB4OyAqL1xuICAvKiBoZWlnaHQ6IDM3MHB4OyAqL1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgMCA5cHggMCAjZWVlZWVlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4uaGlnaEJ0biB7XG53aWR0aDogMTA0cHg7XG5oZWlnaHQ6IDQwcHg7XG5ib3JkZXItcmFkaXVzOiA0cHg7XG5ib3JkZXI6IHNvbGlkIDFweCAjZTFlNWU5O1xuYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbi8qIGZvbnQtZmFtaWx5OiBMYXRvOyAqL1xuZm9udC1zaXplOiAxNHB4O1xuZm9udC13ZWlnaHQ6IGJvbGQ7XG5mb250LXN0cmV0Y2g6IG5vcm1hbDtcbmZvbnQtc3R5bGU6IG5vcm1hbDtcbmxpbmUtaGVpZ2h0OiBub3JtYWw7XG5sZXR0ZXItc3BhY2luZzogbm9ybWFsO1xudGV4dC1hbGlnbjogY2VudGVyO1xuY29sb3I6ICM4MTM5YzI7XG5ib3JkZXI6IG5vbmU7XG59XG5cbi5zbWFsbERpdiB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2UxZTVlOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luLXJpZ2h0OiAxcHg7XG59XG5cbi5mbnQxMCB7Zm9udC1zaXplOiAxMHB4O31cbi5mbnQxMSB7Zm9udC1zaXplOiAxMXB4O30gXG4uZm50MTIge2ZvbnQtc2l6ZTogMTJweDt9XG4uZm50MTMge2ZvbnQtc2l6ZTogMTNweDt9XG4uZm50MTQge2ZvbnQtc2l6ZTogMTRweDt9XG4uZm50MTUge2ZvbnQtc2l6ZTogMTVweDt9XG4uZm50MjAge2ZvbnQtc2l6ZTogMjBweDt9XG4uZm50R3JlZW4ge2NvbG9yOiAjNGFjOTc5O31cbi5mbnRSZWQge2NvbG9yOiAjZjc1NjU2O31cbi5mbnRPcmFuZ2Uge2NvbG9yOiAjZmZhOTNhO31cbi5mbnRQdXJwbGUge2NvbG9yOiAjODEzOWMyO31cbi5mbnRncmF5IHtjb2xvcjogIzc1ODQ5Yjt9XG4uZm50Z3JheVgge2NvbG9yOiAjNDY1MDYxO31cbi5iZy1NeXB1cnBsZSB7YmFja2dyb3VuZC1jb2xvcjogIzgxMzljMjt9XG5cbi5mbnRCb2xkIHtcbiAgLyogZm9udC1mYW1pbHk6IExhdG87ICovXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG59XG5cbi5mbnROb3JtYWwge1xuICAvKiBmb250LWZhbWlseTogTGF0bzsgKi9cbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbn1cblxuLnRleHRVbmRlcmxpbmUge3RleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO31cblxuLmltZzUwe1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4uaW1nMTB7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG4vKiAqKiogRW5kIHJlcGVhdGVkICoqKiAqL1xuXG4uYmctbmF2YmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5uYXZiYXIge1xuICBoZWlnaHQ6IDd2aDtcbiAgLyogaGVpZ2h0OiA1MHB4OyAqL1xufVxuXG4ubWFpbkZvbnRDb2xvciB7XG4gIGNvbG9yOiAjODEzOWMyO1xufVxuXG4ubmF2LWxpbmsge1xuICBjb2xvcjogIzc1ODQ5YiFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogLjg3NXJlbSFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDMwcHghaW1wb3J0YW50O1xufVxuXG4ubmF2LWxpbms6Zm9jdXMge1xuICBjb2xvcjogIzgxMzljMiFpbXBvcnRhbnQ7XG59XG5cbi5wcm9maWxlQnRuIHtcbiAgaGVpZ2h0OiA2dmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMCA1cHg7XG59XG5cbi5Qcm9maWxlLXBpY3R1cmUge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW46IDBweCAxMDBweCAwcHggNXB4O1xuICAvKiBib3JkZXI6IHNvbGlkIDFweCAjZTFlNWU5OyAqL1xufVxuXG4uc3ViTmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNjBweDtcbiAgdG9wOiA1cHg7XG59XG5cbi5zdWJOYW1lOjpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvZ3Jvd3RoL2dyb3d0aC5wbmcnKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM0NjUwNjE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNXB4O1xuICBsZWZ0OiAtMjVweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG5cbi5zdWJOYW1lOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiSm9obiBEb2VcIjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM0NjUwNjE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNXB4O1xuICBsZWZ0OiAyMHB4O1xuICB3aWR0aDogNjBweDtcbn0gXG5cbiNydGhBcnJvdyB7XG4gIGJvcmRlcjogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmJlbGxJbWcge1xuICB3aWR0aDogMjFweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTBhYWJiO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9iZWxsLmpwZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5jb250ZXh0QnRuIHtcbiAgaGVpZ2h0OiA2dmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiBzb2xpZCAycHggI2YzZTZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4uQml0bWFwIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luOiAwcHggMTM1cHggMHB4IDVweDtcbn1cblxuLmNvbnRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDQ1cHg7XG4gIHRvcDogN3B4O1xufVxuXG4uY29udGV4dDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIkNvbXBhbnk6IEdvbGRlbiBFYWdsZVwiO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzE3MDY0MTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1cHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDEyOHB4Oztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: src_app_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notfound/notfound.component */ "0pRC");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");








const routes = [
    { path: "", redirectTo: "profile", pathMatch: "full" },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: "register", component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: "profile", component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
    { path: "**", component: _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_4__["NotfoundComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");





class LoginComponent {
    // isLogin={'color': '#8139c2!important;'}
    constructor(_Router) {
        this._Router = _Router;
        this.loginFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
        this.show = false;
        this.passwordState = 'Show';
    }
    showPassword() {
        this.show = !this.show;
        if (this.show) {
            this.passwordState = 'Hide';
        }
        else {
            this.passwordState = 'Show';
        }
    }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 27, vars: 3, consts: [["id", "login"], [1, "row", "w-100"], [1, "col-lg-6", "d-lg-block", "d-none"], ["src", "../../assets/auth-1.svg", 1, "img-fluid"], [1, "col-lg-6", "col-md-12", "col-sm-12"], [1, "formBox"], [1, "size-4", "text-gray-2", "weight-700", "mb-4"], [3, "formGroup"], [1, "form", "m-auto"], [1, "input-group", "mr-sm-2"], ["id", "emailInput", "formControlName", "email", "type", "email", "placeholder", "Enter Email", "maxlength", "20", 1, "form-control"], [1, "input-group", "mr-sm-2", "mt-4"], ["id", "passwordInput", "formControlName", "password", "placeholder", "Enter password", "maxlength", "20", 1, "form-control", 3, "type"], ["id", "myPasswordBtn", "type", "button", 1, "btn-link", "btn", "text-primary", "size-2", "w-25", 3, "click"], ["type", "button", 1, "btn-link", "btn", "float-right", "mt-2"], [1, "btn", "btn-color", "w-100", "mt-3"], [1, "form-group", "mb-0", "mt-3", "text-center"], [1, "size-2", "text-gray-2"], ["href", "#"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Sign in with email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_15_listener() { return ctx.showPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Forgot password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "SignIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " If you forgot your email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Contct Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.show ? "text" : "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.passwordState);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"]], styles: ["#login[_ngcontent-%COMP%] {\n  background-color: #F6F5F3;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 93vh;\n  background-image: url(/assets/images/auth-bg.svg);\n  background-position: 100% 100%;\n  background-size: 200px auto;\n  background-repeat: no-repeat;\n}\n\n.size-4[_ngcontent-%COMP%] {\n  font-size: 1.125rem!important;\n}\n\n.weight-700[_ngcontent-%COMP%] {\n  font-weight: 700!important;\n}\n\n.alert[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0.3rem 1.25rem 0.3rem 0.7rem;\n  margin-bottom: 10px;\n  border: 1px solid transparent;\n  border-radius: 0.5rem;\n}\n\n#myPasswordBtn[_ngcontent-%COMP%] {\n  border: none !important;\n}\n\n.formBox[_ngcontent-%COMP%]{\n  padding-top: 60px!important;\n  padding-bottom: 60px!important;\n  padding-left: 20px!important;\n  padding-right: 20px!important;\n  max-width: 450px;\n  border-radius: 12px;\n  box-shadow: 0 0 9px 0 rgba(0,0,0,.06);\n  \n  background-color: white;\n  position: relative;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.btn-color[_ngcontent-%COMP%] {\n  background-color: #8c5fb4;\n  color: white;\n}\n\n#myPasswordBtn[_ngcontent-%COMP%] {\n  color: #8139c2!important;\n}\n\n.size-2[_ngcontent-%COMP%] {\n  font-size: .875rem!important;\n}\n\n.text-primary[_ngcontent-%COMP%] {\n  color: #8139c2!important;\n}\n\n.btn-link[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: #8139c2;\n  background-color: transparent;\n}\n\n.size-2[_ngcontent-%COMP%] {\n  font-size: .875rem!important;\n}\n\n.text-gray-2[_ngcontent-%COMP%] {\n  color: #75849b!important;\n}\n\ninput#emailInput[_ngcontent-%COMP%] {\n  background-image: url('download.png');\n  background-position-y: center;\n  background-position-x: 10px;\n  background-size: 15px;\n  background-repeat: no-repeat;\n  text-indent: 20px;\n}\n\n#passwordInput[_ngcontent-%COMP%] {\n  background-image: url('passwordicon.png');\n  background-position-y: center;\n  background-position-x: 10px;\n  background-size: 15px;\n  background-repeat: no-repeat;\n  text-indent: 20px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  display: block;\n  \n  padding: .375rem .75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #465061;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #e1e5e9;\n  border-radius: .25rem;\n  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n}\n\n.form-control[_ngcontent-%COMP%]:focus {\n  color: #465061;\n  background-color: #fff;\n  border-color: #bf99e1;\n  outline: 0;\n  box-shadow: 0 0 8px -1px #8139c2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osaURBQWlEO0VBQ2pELDhCQUE4QjtFQUM5QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFDQUFxQztFQUNyQyxtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiw4QkFBOEI7RUFDOUIsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHFDQUFxQztFQUNyQztpQ0FDK0I7RUFDL0IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHFDQUFnRDtFQUNoRCw2QkFBNkI7RUFDN0IsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUNBQW9EO0VBQ3BELDZCQUE2QjtFQUM3QiwyQkFBMkI7RUFDM0IscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIscUVBQXFFO0FBQ3ZFOztBQUVBO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGdDQUFnQztBQUNsQyIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbG9naW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGNUYzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA5M3ZoO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvYXV0aC1iZy5zdmcpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogMjAwcHggYXV0bztcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLnNpemUtNCB7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW0haW1wb3J0YW50O1xufVxuXG4ud2VpZ2h0LTcwMCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDAhaW1wb3J0YW50O1xufVxuXG4uYWxlcnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDAuM3JlbSAxLjI1cmVtIDAuM3JlbSAwLjdyZW07XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59XG5cbiNteVBhc3N3b3JkQnRuIHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5mb3JtQm94e1xuICBwYWRkaW5nLXRvcDogNjBweCFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiA2MHB4IWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4IWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMjBweCFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogNDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJveC1zaGFkb3c6IDAgMCA5cHggMCByZ2JhKDAsMCwwLC4wNik7XG4gIC8qIG1hcmdpbi1sZWZ0OiBhdXRvIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvIWltcG9ydGFudDsgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5idG4tY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGM1ZmI0O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbiNteVBhc3N3b3JkQnRuIHtcbiAgY29sb3I6ICM4MTM5YzIhaW1wb3J0YW50O1xufVxuXG4uc2l6ZS0yIHtcbiAgZm9udC1zaXplOiAuODc1cmVtIWltcG9ydGFudDtcbn1cblxuLnRleHQtcHJpbWFyeSB7XG4gIGNvbG9yOiAjODEzOWMyIWltcG9ydGFudDtcbn1cblxuLmJ0bi1saW5rIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICM4MTM5YzI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uc2l6ZS0yIHtcbiAgZm9udC1zaXplOiAuODc1cmVtIWltcG9ydGFudDtcbn1cbi50ZXh0LWdyYXktMiB7XG4gIGNvbG9yOiAjNzU4NDliIWltcG9ydGFudDtcbn1cblxuaW5wdXQjZW1haWxJbnB1dCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvZG93bmxvYWQucG5nKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogMTBweDtcbiAgYmFja2dyb3VuZC1zaXplOiAxNXB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB0ZXh0LWluZGVudDogMjBweDtcbn1cblxuI3Bhc3N3b3JkSW5wdXQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL3Bhc3N3b3JkaWNvbi5wbmcpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDE1cHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHRleHQtaW5kZW50OiAyMHB4O1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC8qIHdpZHRoOiAxMDAlOyAqL1xuICBwYWRkaW5nOiAuMzc1cmVtIC43NXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzQ2NTA2MTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UxZTVlOTtcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCxib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBjb2xvcjogIzQ2NTA2MTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjYmY5OWUxO1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiAwIDAgOHB4IC0xcHggIzgxMzljMjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map