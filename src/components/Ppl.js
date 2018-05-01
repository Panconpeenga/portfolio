import React, {Component} from 'react';
import Person from './Person';

class Ppl extends Component {
  render () {
    let pplArr;
    if (this.props.people.results) {
      const arr = this.props.people.results;
      pplArr = arr.map(person => {
        // console.log(person);
        return (
          <Person key={person} name={person.name} mass={person.mass} height={person.height} />
        );
      }
      );
    }
    return (
      <div className='tc dib br3 ma0 pa3 black bg-light-gray ma2 grow bw2 shadow-5'>
        <h1>List of Star Wars Characters</h1>
        <ul className='list pl0'>
          {pplArr}
        </ul>
      </div>
    );
  }
}

export default Ppl;
