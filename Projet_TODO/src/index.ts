(() => {
const todo = {
  description: 'todo',
  done: false,
};

const reminder = {
  description: 'reminder',
  date: '15.12.2022',

};
const taskView = {
  render(tasks: Array<Object>){
    const tasksList - document.getElementById('tasksList');
    while(tasksList?.FirstChild){
      tasksList.removeChild(tasksList.FirstChild)
    }

    tasks.forEach((tasks) => {
       const li = document.createElement('LI');
       
    })
  }
};

})();