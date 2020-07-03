import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { newPractice } from '../actions/Practice';
import Input from './Input';
import './RegistrationForm.css';
import { required, number } from '../PracticeFormValidators';


export class PracticeForm extends React.Component {
state = {
  message: ['']
}

  onSubmit(values) {
    const { date, timePracticed, scales, otherMusic } = values;
    const user = { date, timePracticed, scales, otherMusic };
    return this.props.dispatch(newPractice(user))
    .then(this.props.reset)
    .then(this.setState({ message: 'Thanks for submitting your practice!' }));
  }

  render() {
    return (
      <form
        className="practice-form"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
        <label htmlFor="date">Today's Date</label>
        <p className="success">{this.state.message}</p>
        <Field component={Input} type="text" name="date" />
        <label htmlFor="timePracticed">How Many Minutes Did You Practice?</label>
        <Field component={Input} type="text" name="timePracticed" validate={[required, number]}/>
        <label htmlFor="scales">Which Scales Did You Practice?</label>
        <Field component={Input} type="text" name="scales" />
        <label htmlFor="otherMusic">
          What Other Music Did You Practice? Be Specific.
        </label>
        <Field component={Input} type="text" name="otherMusic" />
        <button className="button-reg"
          type="submit"
          disabled={this.props.pristine || this.props.submitting}
          onClick={this.resetValues}
        >
          Log Practice
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'practice',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('practice', Object.keys(errors)[0]))
})(PracticeForm);
