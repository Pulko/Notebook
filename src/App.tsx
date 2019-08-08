import React, { Component } from 'react';
import './components/styles/App.css';
import {Store} from "./types"
import Notes from './containers/Notes'
import NoteForm from './containers/NoteForm';

export interface AppState {
  addingNote: boolean;
}

class App extends Component<{}, AppState> {
  constructor(props: Store) {
    super(props);
    this.state = {
      addingNote: false
    }
  }

  onPlusHandler = () => {
    this.setState(
      {addingNote: !this.state.addingNote}
    )
  }

  get renderPlus() {
    return(
      <div className={"plus-btn"} 
           style={this.state.addingNote ? {top: 0} : {bottom: 100, borderRadius: "50%"}}
           onClick={this.onPlusHandler}>
        {this.state.addingNote ? "x" : "+"}
      </div>
    )
  }

  render() {
    return (
      <div className="app">
        {this.state.addingNote && <NoteForm />}
        <Notes />
        {this.renderPlus}
      </div>
    );
  }
}

export default App;
