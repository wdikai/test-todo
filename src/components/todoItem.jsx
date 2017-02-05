import React from 'react';
import ReactDOM from 'react-dom';

export default function TodoItem(props) {
    return (
        <section className="list-group-item">
            <input
                type="checkbox"
                checked={props.isChecked}
                onChange={props.onToogle}/>
            <span
                style={{
                "textDecoration": props.isChecked
                    ? 'line-through'
                    : 'none',
                marginLeft: '10px'
            }}>{props.title}</span>
            <button
                type="button"
                className="btn btn-danger btn-xs pull-right"
                onClick={props.onRemove}>
                <i className="fa fa-trash"></i>
            </button>
        </section>
    );
}

TodoItem.propTypes = {
    isChecked: React.PropTypes.bool.isRequired,
    title: React.PropTypes.string.isRequired,

    onToogle: React.PropTypes.func.isRequired,
    onRemove: React.PropTypes.func.isRequired
};