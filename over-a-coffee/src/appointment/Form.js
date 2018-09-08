import React, { Component } from 'react';
import mentor from '../mocks/mentor';
import Dropdown from '../form-elements/dropdown';

class Form extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fields: {}
    }
  }

  setValue(key, value) {
    let fields = this.state.fields
    fields[key] = value;

    this.setState({fields});
  }

  getTimeslots() {
    // get the selected date.
    // get the mentor's schedule.availability and check each entry for the day #
    // if the day # matches the selected date day #, get the start and end time
    // get the timeslot length
    // take the start time, add the timeslot length to it for each slot until reaching the end time
    // return this array of times
    return ["5:30", "6:00", "6:30"];
  }

  checkForSelectedDate() {
    if (!this.props.date) {
      return "please select a date first";
    }
  }

  render() {
    return (
      <div>
        <h1>Your Appointment with {mentor.name}</h1>
        <img src={mentor.photo} />
        <Dropdown
          field="topic"
          options={mentor.expertise}
          setValue={this.setValue.bind(this)}
        />
        <Dropdown
          field="time"
          placeholder={this.checkForSelectedDate()}
          options={this.getTimeslots()}
          setValue={this.setValue.bind(this)}
        />
      </div>
    );
  }
}

export default Form;