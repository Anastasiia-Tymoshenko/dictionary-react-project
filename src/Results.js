import React from 'react';
import Meaning from './Meaning';

export default function Results(props) {
  console.log(props.result);
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        {props.results.meanings.map(function (meaning, index) {
          return (
            //meaning.definitions[0].definition;
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
