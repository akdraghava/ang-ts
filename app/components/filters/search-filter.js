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
    var SearchFilter;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SearchFilter = (function () {
                function SearchFilter() {
                    this.search = new core_1.EventEmitter();
                }
                SearchFilter.prototype.ngOnInit = function () {
                    this.search.emit('');
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], SearchFilter.prototype, "search", void 0);
                SearchFilter = __decorate([
                    core_1.Component({
                        selector: 'search-filter',
                        template: "<div>\n    search todo: <input type=\"text\" #keyword (input)=\"search.emit(keyword.value)\">\n    </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], SearchFilter);
                return SearchFilter;
            })();
            exports_1("SearchFilter", SearchFilter);
        }
    }
});
//# sourceMappingURL=search-filter.js.map