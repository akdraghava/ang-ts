System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var StatusFilter;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            StatusFilter = (function () {
                function StatusFilter() {
                    this.select = new core_1.EventEmitter();
                }
                StatusFilter.prototype.ngOnInit = function () {
                    this.select.emit('all');
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], StatusFilter.prototype, "select", void 0);
                StatusFilter = __decorate([
                    core_1.Component({
                        selector: 'status-filter',
                        templateUrl: '/app/templates/filters/status.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], StatusFilter);
                return StatusFilter;
            })();
            exports_1("StatusFilter", StatusFilter);
        }
    }
});
//# sourceMappingURL=status-filter.js.map