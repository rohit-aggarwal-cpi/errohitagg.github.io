(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./src/app/modules/employee/feedback/add-feedback/add-feedback.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/modules/employee/feedback/add-feedback/add-feedback.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n\n          <form #feedbackForm=\"ngForm\">\n\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"feedback\">\n                Feedback <span class=\"required\">*</span>\n              </label>\n              <div class=\"col-md-9\">\n                <textarea name=\"feedback\" class=\"form-control\" id=\"feedback\" [(ngModel)]=\"feedback.feedback\"></textarea>\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\">Anonymous</label>\n              <div class=\"col-md-3\">\n                <div class=\"form-check\">\n                  <input type=\"checkbox\" name=\"anonymous\" class=\"form-check-input\" id=\"anonymous\" value=\"true\"\n                    [(ngModel)]=\"feedback.is_anonymous\">\n                  <label class=\"form-check-label\" for=\"anonymous\">Post feedback anonymously</label>\n                </div>\n              </div>\n            </div>\n\n          </form>\n\n          <div class=\"form-actions row mt-4\">\n            <div class=\"col-12\">\n              <button type=\"button\" class=\"btn btn-link pull-right\" routerLink=\"/employee/feedback\" (click)=\"exatask.trackEvent('employee-feedback', 'cancel')\">Cancel</button>\n              <button [disabled]=\"!feedbackForm.valid\" type=\"submit\" class=\"btn btn-primary pull-right\" (click)=\"exatask.trackEvent('employee-feedback', 'submit'); postFeedback()\">Post</button>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-success-modal #successModal title=\"Success!\">\n  <div content>\n    Feedback posted successfully\n  </div>\n</app-success-modal>\n\n<app-error-modal #errorModal title=\"Error!\">\n  <div content>\n    <p>There was an error posting feedback.</p>\n    <p>{{error}}</p>\n    <ul>\n      <li *ngFor=\"let attribute of invalid_attributes \">{{attribute}}</li>\n    </ul>\n  </div>\n</app-error-modal>"

/***/ }),

/***/ "./src/app/modules/employee/feedback/add-feedback/add-feedback.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/employee/feedback/add-feedback/add-feedback.component.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! modules/employee/feedback/feedback.service */ "./src/app/modules/employee/feedback/feedback.service.ts"), __webpack_require__(/*! shared/components/error-modal/error-modal.component */ "./src/app/shared/components/error-modal/error-modal.component.ts"), __webpack_require__(/*! shared/components/success-modal/success-modal.component */ "./src/app/shared/components/success-modal/success-modal.component.ts"), __webpack_require__(/*! ../../../../core/providers/exatask.service */ "./src/app/core/providers/exatask.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, feedback_service_1, error_modal_component_1, success_modal_component_1, exatask_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var error_map = {
        feedback: 'Feedback'
    };
    var AddFeedbackComponent = (function () {
        function AddFeedbackComponent(feedbackService, exatask) {
            this.feedbackService = feedbackService;
            this.exatask = exatask;
            this.feedback = new feedback_service_1.Feedback();
            this.exatask.setTitle('Add Employee Feedback');
        }
        AddFeedbackComponent.prototype.ngOnInit = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2];
                });
            });
        };
        AddFeedbackComponent.prototype.__validate = function () {
            return true;
        };
        AddFeedbackComponent.prototype.postFeedback = function () {
            var _this = this;
            if (this.__validate()) {
                var feedback = JSON.parse(JSON.stringify(this.feedback));
                this.error = '';
                this.invalid_attributes = [];
                this.feedbackService.postFeedback(feedback).then(function (data) {
                    _this.successModal.show('/employee/feedback');
                }).catch(function (err) {
                    _this.error = err.error.message.text;
                    if (err.error.invalid_attributes) {
                        for (var key in err.error.invalid_attributes) {
                            if (err.error.invalid_attributes.hasOwnProperty(key)) {
                                _this.invalid_attributes.push(error_map[key] ? error_map[key] : err.error.invalid_attributes[key]);
                            }
                        }
                    }
                    _this.errorModal.show();
                });
            }
        };
        __decorate([
            core_1.ViewChild('errorModal'),
            __metadata("design:type", error_modal_component_1.ErrorModalComponent)
        ], AddFeedbackComponent.prototype, "errorModal", void 0);
        __decorate([
            core_1.ViewChild('successModal'),
            __metadata("design:type", success_modal_component_1.SuccessModalComponent)
        ], AddFeedbackComponent.prototype, "successModal", void 0);
        AddFeedbackComponent = __decorate([
            core_1.Component({
                selector: 'app-add-feedback',
                template: __webpack_require__(/*! ./add-feedback.component.html */ "./src/app/modules/employee/feedback/add-feedback/add-feedback.component.html"),
                providers: [feedback_service_1.FeedbackService]
            }),
            __metadata("design:paramtypes", [feedback_service_1.FeedbackService,
                exatask_service_1.ExaTask])
        ], AddFeedbackComponent);
        return AddFeedbackComponent;
    }());
    exports.AddFeedbackComponent = AddFeedbackComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/employee/feedback/feedback.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/employee/feedback/feedback.module.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"), __webpack_require__(/*! ./feedback.routing */ "./src/app/modules/employee/feedback/feedback.routing.ts"), __webpack_require__(/*! modules/application-components.module */ "./src/app/modules/application-components.module.ts"), __webpack_require__(/*! ./list-feedback/list-feedback.component */ "./src/app/modules/employee/feedback/list-feedback/list-feedback.component.ts"), __webpack_require__(/*! ./add-feedback/add-feedback.component */ "./src/app/modules/employee/feedback/add-feedback/add-feedback.component.ts"), __webpack_require__(/*! modules/application-pipes.module */ "./src/app/modules/application-pipes.module.ts"), __webpack_require__(/*! ./review-feedback/review-feedback.component */ "./src/app/modules/employee/feedback/review-feedback/review-feedback.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, common_1, http_1, forms_1, feedback_routing_1, application_components_module_1, list_feedback_component_1, add_feedback_component_1, application_pipes_module_1, review_feedback_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FeedbackModule = (function () {
        function FeedbackModule() {
        }
        FeedbackModule = __decorate([
            core_1.NgModule({
                imports: [
                    feedback_routing_1.FeedbackRoutingModule,
                    forms_1.FormsModule,
                    http_1.HttpClientModule,
                    common_1.CommonModule,
                    application_components_module_1.ApplicationComponentsModule,
                    application_pipes_module_1.ApplicationPipesModule
                ],
                declarations: [
                    add_feedback_component_1.AddFeedbackComponent,
                    list_feedback_component_1.ListFeedbackComponent,
                    review_feedback_component_1.ReviewFeedbackComponent
                ],
                providers: []
            })
        ], FeedbackModule);
        return FeedbackModule;
    }());
    exports.FeedbackModule = FeedbackModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/employee/feedback/feedback.routing.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/employee/feedback/feedback.routing.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! core/services/authentication.service */ "./src/app/core/services/authentication.service.ts"), __webpack_require__(/*! core/services/authorization.service */ "./src/app/core/services/authorization.service.ts"), __webpack_require__(/*! ./list-feedback/list-feedback.component */ "./src/app/modules/employee/feedback/list-feedback/list-feedback.component.ts"), __webpack_require__(/*! ./add-feedback/add-feedback.component */ "./src/app/modules/employee/feedback/add-feedback/add-feedback.component.ts"), __webpack_require__(/*! ./review-feedback/review-feedback.component */ "./src/app/modules/employee/feedback/review-feedback/review-feedback.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, router_1, authentication_service_1, authorization_service_1, list_feedback_component_1, add_feedback_component_1, review_feedback_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var routes = [
        {
            path: '',
            data: {
                title: 'Feedback'
            },
            children: [
                {
                    path: '',
                    redirectTo: 'list'
                },
                {
                    path: 'list',
                    canActivate: [authentication_service_1.AuthenticationGuard, authorization_service_1.AuthorizationGuard],
                    data: {
                        title: 'List',
                        access: {
                            module: 'employee',
                            entity: 'feedback',
                            action: 'find'
                        }
                    },
                    component: list_feedback_component_1.ListFeedbackComponent
                },
                {
                    path: 'add',
                    canActivate: [authentication_service_1.AuthenticationGuard, authorization_service_1.AuthorizationGuard],
                    data: {
                        title: 'Add',
                        access: {
                            module: 'employee',
                            entity: 'feedback',
                            action: 'create'
                        }
                    },
                    component: add_feedback_component_1.AddFeedbackComponent
                },
                {
                    path: 'review',
                    canActivate: [authentication_service_1.AuthenticationGuard, authentication_service_1.AuthenticationGuard],
                    data: {
                        title: 'Review',
                        access: {
                            module: 'employee',
                            entity: 'feedback',
                            action: 'find-review'
                        }
                    },
                    component: review_feedback_component_1.ReviewFeedbackComponent
                }
            ]
        }
    ];
    var FeedbackRoutingModule = (function () {
        function FeedbackRoutingModule() {
        }
        FeedbackRoutingModule = __decorate([
            core_1.NgModule({
                imports: [router_1.RouterModule.forChild(routes)],
                exports: [router_1.RouterModule]
            })
        ], FeedbackRoutingModule);
        return FeedbackRoutingModule;
    }());
    exports.FeedbackRoutingModule = FeedbackRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/employee/feedback/feedback.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/employee/feedback/feedback.service.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! core/services/api.service */ "./src/app/core/services/api.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, api_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Comment = (function () {
        function Comment() {
        }
        return Comment;
    }());
    exports.Comment = Comment;
    var Feedback = (function () {
        function Feedback() {
        }
        return Feedback;
    }());
    exports.Feedback = Feedback;
    var FeedbackService = (function (_super) {
        __extends(FeedbackService, _super);
        function FeedbackService() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._base_url = '/employees/feedbacks';
            return _this;
        }
        FeedbackService.prototype.postFeedback = function (feedback) {
            return this.post(this._base_url, feedback)
                .then(function (response) { return response; });
        };
        FeedbackService.prototype.getFeedbacks = function (query) {
            return this.get(this._base_url, query)
                .then(function (response) { return response['data']; });
        };
        FeedbackService.prototype.getFeedback = function (feedback_id) {
            return this.get(this._base_url + '/' + feedback_id)
                .then(function (response) { return response; });
        };
        FeedbackService.prototype.submitComment = function (feedback_id, comment) {
            return this.put(this._base_url + '/comment/' + feedback_id, { comment: comment })
                .then(function (response) { return response; });
        };
        FeedbackService.prototype.getReviewFeedbacks = function (query) {
            return this.get(this._base_url + '?review=true', query)
                .then(function (response) { return response['data']; });
        };
        FeedbackService.prototype.getReviewFeedback = function (feedback_id) {
            return this.get(this._base_url + '/' + feedback_id + '?review=true')
                .then(function (response) { return response; });
        };
        FeedbackService.prototype.submitReviewComment = function (feedback_id, comment) {
            return this.put(this._base_url + '/comment/' + feedback_id + '?review=true', { comment: comment })
                .then(function (response) { return response; });
        };
        FeedbackService = __decorate([
            core_1.Injectable()
        ], FeedbackService);
        return FeedbackService;
    }(api_service_1.Api));
    exports.FeedbackService = FeedbackService;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/employee/feedback/list-feedback/list-feedback.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/employee/feedback/list-feedback/list-feedback.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n\n          <div class=\"row mb-4\">\n            <div class=\"col-12 text-right\">\n              <button class=\"btn btn-primary mr-1\" type=\"button\" routerLink=\"/employee/feedback/review\" *ngIf=\"reviewAllowed\" (click)=\"exatask.trackEvent('employee-feedback', 'review', 'list')\">+\n                Review Feedback(s)</button>\n              <button class=\"btn btn-primary\" role='button' type=\"button\" routerLink=\"/employee/feedback/add\" (click)=\"exatask.trackEvent('employee-feedback', 'add', 'list')\">+\n                Add Feedback</button>\n            </div>\n          </div>\n\n          <div class=\"text-center m-5\" *ngIf=\"feedbacks.length === 0\">\n            <h3>No feedbacks have been given</h3>\n          </div>\n\n          <div class=\"row\">\n\n            <div class=\"table-responsive\" [ngClass]=\"{'col-12': !commentOpened, 'col-7': commentOpened}\">\n              <table class=\"table table-striped\" *ngIf=\"feedbacks.length > 0\">\n                <thead>\n                  <tr>\n                    <th>Feedback</th>\n                    <th>Anonymous</th>\n                    <th>Status</th>\n                    <th></th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let feedback of feedbacks; let i = index\" (click)=\"exatask.trackEvent('employee-feedback', 'open', feedback._id.toString()); openFeedback(feedback._id)\">\n                    <td>{{feedback.feedback}}</td>\n                    <td>{{feedback.is_anonymous ? \"Yes\" : \"No\"}}</td>\n                    <td>\n                      <span class=\"badge\">{{'feedback.status.' + feedback.feedback_status | constants}}</span>\n                    </td>\n                    <td>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n\n            <div *ngIf=\"commentOpened\" class=\"comment-container rounded border col-5\">\n\n              <div class=\"row\">\n                <div class=\"col-12 text-right\">\n                  <button class=\"btn btn-link\" (click)=\"exatask.trackEvent('employee-feedback', 'close', feedback_details._id.toString()); closeFeedback()\">Close</button>\n                </div>\n              </div>\n\n              <div class=\"comments\" *ngIf=\"feedback_details.comments && feedback_details.comments.length > 0\">\n                <div *ngFor=\"let comment of feedback_details.comments\" class=\"alert col-11\" [ngClass]=\"{'alert-secondary pull-left': !comment.is_review, 'alert-dark pull-right text-right': comment.is_review}\">\n                  <p class=\"mb-2 comment text-left\">{{comment.comment}}</p>\n                  <small>\n                    {{comment.name}}, {{comment.commented_at | date:'medium'}}\n                  </small>\n                </div>\n              </div>\n              <div *ngIf=\"!feedback_details.comments || feedback_details.comments.length == 0\">\n                <h3 class=\"text-center mt-5\">No Comments on feedback</h3>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"col-12 feedback-comment p-0\">\n                  <div class=\"input-group feedback-comment\">\n                    <textarea name=\"feedback\" class=\"form-control\" id=\"comment\" [(ngModel)]=\"comment\"></textarea>\n                    <div class=\"input-group-append\">\n                      <button class=\"btn btn-primary\" type=\"button\" (click)=\"exatask.trackEvent('employee-feedback', 'submit-comment', feedback_details._id.toString()); submitComment()\">Submit</button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n            </div>\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/employee/feedback/list-feedback/list-feedback.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/employee/feedback/list-feedback/list-feedback.component.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! modules/employee/feedback/feedback.service */ "./src/app/modules/employee/feedback/feedback.service.ts"), __webpack_require__(/*! shared/components/error-modal/error-modal.component */ "./src/app/shared/components/error-modal/error-modal.component.ts"), __webpack_require__(/*! core/providers/access.service */ "./src/app/core/providers/access.service.ts"), __webpack_require__(/*! ../../../../core/providers/exatask.service */ "./src/app/core/providers/exatask.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, feedback_service_1, error_modal_component_1, access_service_1, exatask_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ListFeedbackComponent = (function () {
        function ListFeedbackComponent(feedbackService, access, exatask) {
            this.feedbackService = feedbackService;
            this.access = access;
            this.exatask = exatask;
            this.feedbacks = [];
            this.reviewAllowed = false;
            this.commentOpened = false;
            this.exatask.setTitle('Employee Feedback List');
        }
        ListFeedbackComponent.prototype.ngOnInit = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.loadFeedbacks();
                            _a = this;
                            return [4, this.access.hasAccess({
                                    module: 'employee',
                                    entity: 'feedback',
                                    action: 'review'
                                })];
                        case 1:
                            _a.reviewAllowed = _b.sent();
                            return [2];
                    }
                });
            });
        };
        ListFeedbackComponent.prototype.loadFeedbacks = function () {
            var self = this;
            this.feedbackService.getFeedbacks().then(function (feedbacks) {
                self.feedbacks = feedbacks;
            });
        };
        ListFeedbackComponent.prototype.openFeedback = function (feedback_id) {
            var self = this;
            this.feedbackService.getFeedback(feedback_id).then(function (feedback) {
                self.commentOpened = true;
                self.feedback_details = feedback;
            });
        };
        ListFeedbackComponent.prototype.closeFeedback = function () {
            this.commentOpened = false;
            this.feedback_details = undefined;
        };
        ListFeedbackComponent.prototype.submitComment = function () {
            var _this = this;
            var feedback_id = this.feedback_details._id;
            this.feedbackService.submitComment(feedback_id, this.comment).then(function (data) {
                _this.feedback_details.comments.push({
                    user_id: _this.feedback_details.user_id,
                    name: _this.feedback_details.name,
                    comment: _this.comment,
                    commented_at: (new Date()).toString(),
                    is_review: false
                });
                _this.comment = '';
            }).catch(function (err) {
                _this.error = err.error.message.text;
                _this.errorModal.show();
            });
        };
        __decorate([
            core_1.ViewChild('errorModal'),
            __metadata("design:type", error_modal_component_1.ErrorModalComponent)
        ], ListFeedbackComponent.prototype, "errorModal", void 0);
        ListFeedbackComponent = __decorate([
            core_1.Component({
                selector: 'app-list-feedback',
                template: __webpack_require__(/*! ./list-feedback.component.html */ "./src/app/modules/employee/feedback/list-feedback/list-feedback.component.html"),
                providers: [feedback_service_1.FeedbackService]
            }),
            __metadata("design:paramtypes", [feedback_service_1.FeedbackService,
                access_service_1.Access,
                exatask_service_1.ExaTask])
        ], ListFeedbackComponent);
        return ListFeedbackComponent;
    }());
    exports.ListFeedbackComponent = ListFeedbackComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/employee/feedback/review-feedback/review-feedback.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/employee/feedback/review-feedback/review-feedback.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n\n          <div class=\"row mb-4\">\n            <div class=\"col-12 text-right\">\n              <button class=\"btn btn-link\" type=\"button\" routerLink=\"/employee/feedback/list\" (click)=\"exatask.trackEvent('employee-feedback', 'back', 'review')\">Back</button>\n            </div>\n          </div>\n\n          <div class=\"text-center m-5\" *ngIf=\"feedbacks.length === 0\">\n            <h3>No feedbacks to review</h3>\n          </div>\n\n          <div class=\"row\">\n\n            <div class=\"table-responsive\" [ngClass]=\"{'col-12': !commentOpened, 'col-7': commentOpened}\">\n              <table class=\"table table-striped\" *ngIf=\"feedbacks.length > 0\">\n                <thead>\n                  <tr>\n                    <th>#</th>\n                    <th>Given By</th>\n                    <th>Feedback</th>\n                    <th>Status</th>\n                    <th></th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let feedback of feedbacks; let i = index\" (click)=\"exatask.trackEvent('employee-feedback', 'open-review', feedback._id.toString()); openFeedback(feedback._id)\">\n                    <td>{{i+1}}.</td>\n                    <td>{{feedback.name}}</td>\n                    <td>{{feedback.feedback}}</td>\n                    <td>\n                      <span class=\"badge\">{{'feedback.status.' + feedback.feedback_status | constants}}</span>\n                    </td>\n                    <td>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n\n            <div *ngIf=\"commentOpened\" class=\"comment-container rounded border col-5\">\n\n              <div class=\"row\">\n                <div class=\"col-12 text-right\">\n                  <button class=\"btn btn-link\" (click)=\"exatask.trackEvent('employee-feedback', 'close-review', feedback_details._id.toString()); closeFeedback()\">Close</button>\n                </div>\n              </div>\n\n              <div class=\"comments\" *ngIf=\"feedback_details.comments && feedback_details.comments.length > 0\">\n                <div *ngFor=\"let comment of feedback_details.comments\" class=\"alert col-11\" [ngClass]=\"{'alert-secondary pull-left': !comment.is_review, 'alert-dark pull-right text-right': comment.is_review}\">\n                  <p class=\"mb-2 comment text-left\">{{comment.comment}}</p>\n                  <small>\n                    {{comment.name}}, {{comment.commented_at | date:'medium'}}\n                  </small>\n                </div>\n              </div>\n              <div *ngIf=\"!feedback_details.comments || feedback_details.comments.length == 0\">\n                <h3 class=\"text-center mt-5\">No Comments on feedback</h3>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"col-12 feedback-comment p-0\">\n                  <div class=\"input-group feedback-comment\">\n                    <textarea name=\"feedback\" class=\"form-control\" id=\"comment\" [(ngModel)]=\"comment\"></textarea>\n                    <div class=\"input-group-append\">\n                      <button class=\"btn btn-primary\" type=\"button\" (click)=\"exatask.trackEvent('employee-feedback', 'submit-review-comment', feedback_details._id.toString()); submitComment()\">Submit</button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n            </div>\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/employee/feedback/review-feedback/review-feedback.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/employee/feedback/review-feedback/review-feedback.component.ts ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! modules/employee/feedback/feedback.service */ "./src/app/modules/employee/feedback/feedback.service.ts"), __webpack_require__(/*! shared/components/error-modal/error-modal.component */ "./src/app/shared/components/error-modal/error-modal.component.ts"), __webpack_require__(/*! core/providers/user.service */ "./src/app/core/providers/user.service.ts"), __webpack_require__(/*! ../../../../core/providers/exatask.service */ "./src/app/core/providers/exatask.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, feedback_service_1, error_modal_component_1, user_service_1, exatask_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ReviewFeedbackComponent = (function () {
        function ReviewFeedbackComponent(feedbackService, user, exatask) {
            this.feedbackService = feedbackService;
            this.user = user;
            this.exatask = exatask;
            this.feedbacks = [];
            this.commentOpened = false;
            this.exatask.setTitle('Employee Feedback Review List');
        }
        ReviewFeedbackComponent.prototype.ngOnInit = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.loadFeedbacks();
                    return [2];
                });
            });
        };
        ReviewFeedbackComponent.prototype.loadFeedbacks = function () {
            var self = this;
            this.feedbackService.getReviewFeedbacks().then(function (feedbacks) {
                self.feedbacks = feedbacks;
            });
        };
        ReviewFeedbackComponent.prototype.openFeedback = function (feedback_id) {
            var self = this;
            this.feedbackService.getReviewFeedback(feedback_id).then(function (feedback) {
                self.commentOpened = true;
                self.feedback_details = feedback;
            });
        };
        ReviewFeedbackComponent.prototype.closeFeedback = function () {
            this.commentOpened = false;
            this.feedback_details = undefined;
        };
        ReviewFeedbackComponent.prototype.submitComment = function () {
            var _this = this;
            var feedback_id = this.feedback_details._id;
            this.feedbackService.submitReviewComment(feedback_id, this.comment).then(function (data) {
                var app_user = _this.user;
                _this.feedback_details.comments.push({
                    user_id: app_user.user_id,
                    name: app_user.name,
                    comment: _this.comment,
                    commented_at: (new Date()).toString(),
                    is_review: true
                });
                _this.comment = '';
            }).catch(function (err) {
                _this.error = err.error.message.text;
                _this.errorModal.show();
            });
        };
        __decorate([
            core_1.ViewChild('errorModal'),
            __metadata("design:type", error_modal_component_1.ErrorModalComponent)
        ], ReviewFeedbackComponent.prototype, "errorModal", void 0);
        ReviewFeedbackComponent = __decorate([
            core_1.Component({
                selector: 'app-review-feedback',
                template: __webpack_require__(/*! ./review-feedback.component.html */ "./src/app/modules/employee/feedback/review-feedback/review-feedback.component.html"),
                providers: [feedback_service_1.FeedbackService]
            }),
            __metadata("design:paramtypes", [feedback_service_1.FeedbackService,
                user_service_1.User,
                exatask_service_1.ExaTask])
        ], ReviewFeedbackComponent);
        return ReviewFeedbackComponent;
    }());
    exports.ReviewFeedbackComponent = ReviewFeedbackComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=10.291ae9981b522d0d53a7.js.map