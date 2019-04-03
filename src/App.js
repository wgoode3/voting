import React, { Component } from 'react';
import Library from './Library';
import './utilities';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      libraries: [
        {"name": "React", "votes": 0},
        {"name": "Vue", "votes": 0},
        {"name": "Angular", "votes": 0},
        {"name": "Ember", "votes": 0}
      ]
    }
  }

  onVote = (library) => {
    let libraries = [...this.state.libraries];
    for(let i in libraries){
      if(libraries[i] === library){
        libraries[i].votes++;
      }
    }
    libraries = libraries.iSort("votes");
    this.setState({libraries: libraries});
  }

  reset = () => {
    let libraries = [...this.state.libraries];
    for(let i in libraries){
      libraries[i].votes = 0;
    }
    this.setState({libraries: libraries});
  }

  render() {
    return (
      <div className="container">
        {
          this.state.libraries.map( (library, i) => 
            <Library 
              key={i}
              library={library} 
              onVote={this.onVote}
            />
          )
        }
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default App;
