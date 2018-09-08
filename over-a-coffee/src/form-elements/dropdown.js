import React, { Component } from 'react';
import Option from './option';

class Dropdown extends Component {

  handleChange(e) {
    this.props.setValue(this.props.field, e.target.value)
  }

  renderOptions(options) {
    return options.map(option => {
      return (
        <Option option={option} />
      )
    });
  }

  render() {
    return (
      <div>
        <label htmlFor={this.props.field}>
          {this.props.field}
        </label>
        <select id={this.props.field} onChange={this.handleChange.bind(this)}>
          {this.props.placeholder ? <Option option={this.props.placeholder} /> : null}
          {this.renderOptions(this.props.options)}
        </select>
      </div>
    );
  }
}

export default Dropdown;


// Could also do this from template
// {(() => {
//   if (this.props.placeholder) {
//     return (
//       <option value="">{this.props.placeholder}</option>
//     )
//   }
// })()}