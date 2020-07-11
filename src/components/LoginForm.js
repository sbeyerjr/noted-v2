import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './Input';
import { login } from '../actions/Auth';
import { required, nonEmpty } from '../validators';

export class LoginForm extends React.Component {
  onSubmit(values) {
    return this.props.dispatch(login(values.username, values.password));
  }

  render() {
    let error;
    if (this.props.error) {
      error = (
        <div className='alert alert-danger' role='alert' aria-live='polite'>
          {this.props.error}
        </div>
      );
    }
    return (
      <form
        className='login-form'
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
        <label htmlFor='username'>Username</label>
        <Field
          component={Input}
          type='text'
          name='username'
          id='username'
          validate={[required, nonEmpty]}
        />
        <label htmlFor='password'>Password</label>
        <Field
          component={Input}
          type='password'
          name='password'
          id='password'
          validate={[required, nonEmpty]}
        />
        <div className='mt-3'>{error}</div>
        <button
          className='fp-button'
          disabled={this.props.pristine || this.props.submitting}
        >
          Login
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
