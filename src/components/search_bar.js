// imports from react module Recat and Component  object
import React, {Component} from 'react';

class SearchBar extends Component {
    //setting up constructor fo state management
    //initialize state in a class based component
    constructor(props) {
      // inherits properties from its parent class
      super(props);
      // we always initiaize by crating a new object
      // and assing it to this.state; the object passed
      //cntains properties that are to be recorded to
      // see its changes
      this.state = { term: "Good mythical morning"}
    }
  //render method
  render() {
    return(
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({term : event.target.value})} />
      </div>
  );
  }
}


export default SearchBar;
