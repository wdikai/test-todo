import React from 'react';
import ReactDOM from 'react-dom';

export default function TodoForm(props) {
    let title;
    let onSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(title.value);
        title.value = '';
    };

    return (
        <section className="row">
            <form
                className="form-group col-xs-12"
                onSubmit={onSubmit}>
                <label htmlFor="title">
                    Title:
                </label>

                <span className="input-group">
                    <input
                        id="title"
                        type="text"
                        ref={(input) => title = input}
                        className="form-control"
                        placeholder="Enter title"/>

                    <span className="input-group-btn">
                        <button className=" btn btn-primary pull-right">
                            <i className="fa fa-plus"></i>
                            Add
                        </button>
                    </span>
                </span>
            </form>
        </section>
    );
}

TodoForm.propTypes = {
    onSubmit: React.PropTypes.func.isRequired
}