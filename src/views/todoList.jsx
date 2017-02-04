import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './todoItem';

export default function TodoList(props) {
    return (
        <section className="list-group">
            {props
                .todos
                .map((todo, index) => <TodoItem
                    key={index}
                    isChecked={todo.isChecked}
                    title={todo.title}
                    onToogle={() => props.onToogle(index)}
                    onRemove={() => props.onRemove(index)}/>)}
        </section>
    )
}

TodoList.propTypes = {
    todos: React
        .PropTypes
        .arrayOf(React.PropTypes.shape({isChecked: React.PropTypes.bool.isRequired, title: React.PropTypes.string.isRequired})),

    onToogle: React.PropTypes.func.isRequired,
    onRemove: React.PropTypes.func.isRequired
};