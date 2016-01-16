System.register([], function(exports_1) {
    var TodoModel;
    return {
        setters:[],
        execute: function() {
            /**
             * Created by a548159 on 1/16/16.
             */
            TodoModel = (function () {
                function TodoModel(title, status) {
                    if (title === void 0) { title = ""; }
                    if (status === void 0) { status = "started"; }
                    this.title = title;
                    this.status = status;
                }
                return TodoModel;
            })();
            exports_1("TodoModel", TodoModel);
        }
    }
});
//# sourceMappingURL=todo-model.js.map