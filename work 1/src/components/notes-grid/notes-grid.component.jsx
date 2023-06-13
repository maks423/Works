import { Component } from "react";
import Note from "../note/note.component";
import Search from "../search/search.component";
import "./notes-grid.styles.css";



class NotesGrid extends Component {

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
    let result = this.state.notes.filter((note) => note.id !== id);
    this.setState({ filtNotes: result});
  };

  render() {
    return (
      <div className="notes-grid row">
        <div>
          <Search filter={this.filteredNotes} />
        </div>
        {this.props.notes.map((item) => {
          return (
            <Note
              onDelete={this.props.onNoteDelete}
              key={item.id}
              note={item}
            />
          );
        })}
      </div>
    );
  }
}

export default NotesGrid;
