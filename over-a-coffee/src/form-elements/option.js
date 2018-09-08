import React from 'react';

export default function Option(props) {
  return (
    <option value={props.option} key={props.option}>
      {props.option}
    </option>
  )
}
