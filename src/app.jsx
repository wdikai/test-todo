import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './views/todoApp';

const lines = [
    {
        title: 'first',
        isChecked: false
    }, {
        title: 'second',
        isChecked: true
    }
];

ReactDOM.render(
    <TodoApp todos={lines}/>, document.getElementById('root'));