import React from 'react';
import { Field, reduxForm } from 'redux-form';//reduxForm IS a function
class StreamForm extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return <div style={{ color: 'red' }}>{error}</div>
        }
    }
    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} />
                <div>{this.renderError(meta)}</div>
            </div>
        );
    }
    onSubmit = (formProps) => {
        this.props.onSubmit(formProps);
    }
    render() {
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}
const validateForm = (formValues) => {
    const errors = {};
    if (!formValues.title) {
        errors.title = "Must enter title";
    }
    if (!formValues.description) {
        errors.description = "You must enter description";
    }
    return errors;
}
export default reduxForm({
    form: 'streamForm',
    validate: validateForm
})(StreamForm);
