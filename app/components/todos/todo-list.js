System.register(['angular2/core', '../../services/todo-service', './todo-item-renderer', '../../pipes/search', '../../pipes/status'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, todo_service_1, todo_item_renderer_1, search_1, status_1;
    var TodoList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            },
            function (todo_item_renderer_1_1) {
                todo_item_renderer_1 = todo_item_renderer_1_1;
            },
            function (search_1_1) {
                search_1 = search_1_1;
            },
            function (status_1_1) {
                status_1 = status_1_1;
            }],
        execute: function() {
            TodoList = (function () {
                function TodoList(todoService) {
                    this.todoService = todoService;
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TodoList.prototype, "status", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TodoList.prototype, "term", void 0);
                TodoList = __decorate([
                    core_1.Component({
                        selector: 'todo-list',
                        pipes: [search_1.SearchPipe, status_1.StatusPipe],
                        directives: [todo_item_renderer_1.TodoItemRenderer],
                        templateUrl: '/app/templates/todos/todo-list.html'
                    }), 
                    __metadata('design:paramtypes', [todo_service_1.TodoService])
                ], TodoList);
                return TodoList;
            })();
            exports_1("TodoList", TodoList);
        }
    }
});
//# sourceMappingURL=todo-list.js.map