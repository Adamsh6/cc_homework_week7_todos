import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      todos: [{name: "Buy Shopping", priority: "high"}, {name: "Clean Bathroom", priority: "medium"}, {name: "Car MOT", priority: "low"}],
      newItem: "",
      priority: ""
    },
    methods: {
      addItem: function(){
        this.todos.push({
          name: this.newItem, priority: this.priority.toLowerCase()})
        this.newItem = ""
      }
      // getPriority: function(){
      //
      // }
    }
  });
})
