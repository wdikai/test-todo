import React from 'react';
import ReactDOM from 'react-dom';
import TodoForm from './todoForm';
import TodoList from './todoList';

export default class TodoApp extends React.Component {
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

    onCreateTodo(title) {
        if (!title) {
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

    onToogleTodo(index) {
        if (index < 0 || index >= this.state.length) {
            return;
        }

        let todos = [...this.state.todos];
        todos[index] = Object.assign({}, todos[index], {
            isChecked: !todos[index].isChecked
        })

        this.setState({todos});
    }

    onRemoveTodo(index) {
        if (index < 0) {
            return;
        }

        console.log('remove', index)

        this.setState({
            todos: this
                .state
                .todos
                .filter((todo, position) => index !== position)
        });
    }

    render() {
        return (
            <div className="container">
                <TodoForm onSubmit={this.onCreateTodo}/>
                <hr/>
                <TodoList todos={this.state.todos} onToogle={this.onToogleTodo} onRemove={this.onRemoveTodo}/>
            </div>
        );
    }
}

TodoApp.propTypes = {
    todos: React
        .PropTypes
        .arrayOf(React.PropTypes.shape({isChecked: React.PropTypes.bool.isRequired, title: React.PropTypes.string.isRequired}))
};