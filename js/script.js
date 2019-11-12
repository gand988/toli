// create the Vue instance
let vm = new Vue({
  el: '#app',
  data: {
    newTodo: '',
    upcomingTodo: []
  },
  
  computed: {
    todoNumber: function () {
      // var pip = document.querySelectorAll('.upcoming li');
      // return pip.length; 
      var upTodo = 0; 
      for(notComplete of this.upcomingTodo){
        // console.log(notComplete.complete)
        if (notComplete.complete === false){
          upTodo +=1; 
        }
      }
      return upTodo; 
    }
  },

  methods: {
    addTask: function () {

      this.upcomingTodo.push({
        id: this.upcomingTodo.length,
        text: this.newTodo,
        complete: false
      });

      this.newTodo = '';
      console.log('add task')
      // console.log(this.todos.length)
    },
    editTask: function () {
      console.log('edit task')
    },
    removeTask: function (upcomingTodo) {
      // ! questo ritorna sempre -1 
      // console.log(this.upcomingTodo.indexOf(upcomingTodo))
      // this.upcomingTodo.splice(this.upcomingTodo.indexOf(item), 1)
      console.log('remove task')
    }, 
  }
});

// var pip = document.querySelectorAll('.upcoming li');

// console.log(pip)
