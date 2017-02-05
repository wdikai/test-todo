/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/todoApp';
import type {TodoType} from './flow-types';
import defaultData from './defaultData';

ReactDOM.render(React.createElement(TodoApp, {todos:defaultData}), document.getElementById('root'));