import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron"
import DeleteBtn from "../components/DeleteBtn"
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { ToDoList, ToDoListItem } from "../components/ToDoList"
import { Input, TextArea, FormBtn } from "../components/Form";
import { Link } from "react-router-dom";
import axios from "axios"

class TodoPage extends Component {


    state = {
        todos: [],
        todoName: "",
        todoDescription: ""
    };

    // When the component mounts, load all books and save them to this.state.books
    componentDidMount() {
        this.loadTodos();
    }

    // Loads all books  and sets them to this.state.books
    loadTodos = () => {
        API.getToDos()
            .then(res => this.setState({ todos: res.data, todoName: "", todoDescription: "" }))
            .catch(err => console.log(err));
    };

    // Deletes a todo from the database with a given id, then reloads todos from the db
    deleteToDo = id => {
        API.deleteTodo(id)
            .then(res => this.loadTodos())
            .catch(err => console.log(err));
    };

    // Handles updating component state when the user types into the input field
    handleInputChange = event => {
        console.log(event.target.value)
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    // When the form is submitted, use the API.saveToDo method to save the todo data
    // Then reload books from the database
    handleFormSubmit = event => {
        event.preventDefault();
        console.log('hit')
        if (this.state.todoName && this.state.todoDescription) {
            API.saveToDo({
                todoName: this.state.todoName,
                todoDescription: this.state.todoDescription,
            })
                .then(res => this.loadTodos())
                .catch(err => console.log(err));
        }
    };


    render() {
        return (
            <div>
                <Jumbotron />
                <Container>
                    <Row>
                        <div className="mx-auto p-4">
                            <Col size="md-6">
                                <Link className="btn btn-success" to="/dashboard">Dashboard</Link>
                            </Col>
                            <Col size="md-6">
                                <Link className="btn btn-success" to="/logout">Logout</Link>
                            </Col>
                        </div>
                    </Row>
                    <Row>
                        <Col size="md-6">

                            <h1>Todo List</h1>

                            <form>
                                <Input

                                    value={this.state.todoName}
                                    onChange={this.handleInputChange}
                                    name="todoName"
                                    placeholder="Todo Name (required)"
                                />
                                <TextArea

                                    value={this.state.todoDescription}
                                    onChange={this.handleInputChange}
                                    name="todoDescription"
                                    placeholder="Todo Description (Optional)"
                                />
                                <FormBtn
                                    disabled={!(this.state.todoName && this.state.todoDescription)}
                                    onClick={this.handleFormSubmit}
                                >
                                    Add Todo
                                </FormBtn>
                            </form>
                        </Col>
                        <Col size="md-6 sm-12">

                            <Row>
                                <Col size="md-12">
                                    <h2>Things To Do</h2>

                                </Col>
                            </Row>

                            {this.state.todos.length ? (
                                <ToDoList>
                                    {this.state.todos.map(todo => (
                                        <ToDoListItem key={todo._id}>
                                            <a href={"/todopage/" + todo._id}>
                                                <Row>
                                                    <Col size="md-6">
                                                        <strong>

                                                            {todo.todoName}
                                                        </strong>
                                                    </Col>
                                                    <Col size="md-6">
                                                        <strong>

                                                            {todo.todoDescription}
                                                        </strong>
                                                    </Col>
                                                </Row>
                                            </a>
                                            <DeleteBtn />
                                        </ToDoListItem>
                                    ))}
                                </ToDoList>
                            ) : (
                                    <h3>No Results to Display</h3>
                                )}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}


export default TodoPage;