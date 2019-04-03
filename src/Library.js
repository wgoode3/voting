import React, { Component } from 'react';

class Library extends Component {

  render() {
    return(
      <div>
        <p>{this.props.library.name}
          <span>{this.props.library.votes} &nbsp;
            <button onClick={this.props.onVote.bind(this, this.props.library)}>
              +
            </button>
          </span>
        </p>
        <hr />
      </div>
    );
  }

}

export default Library;