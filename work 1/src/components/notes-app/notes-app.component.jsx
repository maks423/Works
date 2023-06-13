import { Component } from "react";
import NoteEditor from "../note-editor/note-editor.component";
import NotesGrid from "../notes-grid/notes-grid.component";
import "./notes-app.styles.css";

let data = [
  {
    id: 1,
    title: "To do tomorrow",
    text: "We have a new project to build a new project with the following dependencies",
    color: "red",
  },
  {
    id: 2,
    title: "More",
    text: "Nice do after the project is finished",
    color: "green",
  },
  {
    id: 3,
    title: "Wensday",
    text: "Hello my team we are new team because we new team",
    color: "yellow",
  },
  {
    id: 4,
    title: "Friend",
    text: "Michael has a new project because he wprk all day",
    color: "blue",
  },
];

class NotesApp extends Component {
  constructor() {
    super();
    this.state = {
      notes: data,
      filtNotes: data,
    };
  }

  filteredNotes = (text) => {
    let result = this.state.notes.filter((notes) => notes.title.include(text));
    this.setState({ filtNotes: result });
  };

 
  handleNoteAdd = (note) => {
    let copy = [...this.state.notes];
    copy.unshift(note);
    this.setState({ notes: copy });
  };

  handleNoteDelete = (id) => {
    let filteretNotes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes: filteretNotes });
  };

  render() {
    return (
      <div className="notes-app container">
        <NoteEditor onNoteAdd={this.handleNoteAdd} />
        <NotesGrid
          onNoteDelete={this.handleNoteDelete}
          notes={this.state.notes}
        />
      </div>
    );
  }
}

export default NotesApp;
