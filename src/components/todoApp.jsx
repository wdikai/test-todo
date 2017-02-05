import React from 'react';
import ReactDOM from 'react-dom';
import TodoForm from './todoForm';
import TodoList from './todoList';

import type {TodoType}
from '../flow-types';

type PropsType = {
    todos: TodoType[]
};

export default class TodoApp extends React.Component {
    props : PropsType;
    state : PropsType;

    constructor(props) {
        super(props);

        this.state = {
            todos: props.todos
        }

        this.onCreateTodo = this
            .onCreateTodo
            .bind(this);

        this.onToogleTodo = this
            .onToogleTodo
            .bind(this);

        this.onRemoveTodo = this
            .onRemoveTodo
            .bind(this);
    }

    get completed() : number {
        return(this.state.todos.filter((todo : TodoType) => todo.isChecked)).length;
    }

    onCreateTodo(title : string) : void {
        if(!title.length) {
            return;
        }

        this.setState({
            todos: [
                ...this.state.todos, {
                    title,
                    isChecked: false
                }
            ]
        });
    }

    onToogleTodo(index : number) : void {
        if(index < 0 || index >= this.state.length) {
            return;
        }

        let todos = [...this.state.todos];
        todos[index] = Object.assign({}, todos[index], {
            isChecked: !todos[index].isChecked
        });

        this.setState({todos});
    }

    onRemoveTodo(index : number) : void {
        if(index < 0 || index >= this.state.length) {
            return;
        }

        this.setState({
            todos: this
                .state
                .todos
                .filter((todo : TodoType, position : number) => index !== position)
        });
    }

    render() {
        return (
            <div className="container">
                <TodoForm onSubmit={this.onCreateTodo}/>
                <hr/>
                <TodoList
                    todos={this.state.todos}
                    onToogle={this.onToogleTodo}
                    onRemove={this.onRemoveTodo}/>
                <span className="pull-right">
                    Compleated todos: {this.completed !== this.state.todos.length
                        ? this.completed + '/' + this.state.todos.length
                        : 'all'}
                </span>
            </div>
        );
    }
}