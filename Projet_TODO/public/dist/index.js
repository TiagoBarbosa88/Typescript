(function () {
    var todo = {
        description: 'todo',
        done: false
    };
    var reminder = {
        description: 'reminder',
        date: '15.12.2022'
    };
    var taskView = {
        render: function (tasks) {
            var tasksList;
            -document.getElementById('tasksList');
            while (tasksList === null || tasksList === void 0 ? void 0 : tasksList.FirstChild) {
                tasksList.removeChild(tasksList.FirstChild);
            }
            tasks.forEach(function (tasks) {
                var li = document.createElement('LI');
            });
        }
    };
})();
