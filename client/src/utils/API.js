import axios from "axios";

export default {
  // Gets all todos
  getToDos: function() {
    return axios.get("/api/todos");
  },
  // Gets the todo with the given id
  getToDo: function(id) {
    return axios.get("/api/todos/" + id);
  },
  // Deletes the todo with the given id
  deleteToDo: function(id) {
    return axios.delete("/api/todos/" + id);
  },
  // Saves a todo to the database
  saveToDo: function(todoData) {
    return axios.post("/api/todos", todoData);
  },
  
  registerUser: function(creds) {
    return axios.post("/api/signup", creds)
  }
};
