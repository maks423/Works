import { Component } from "react";
import Search from "../search/search.component";
import "./note-ediror.styles.css";

class NoteEditor extends Component {
  constructor(props) {
    super(props);

    this.state = { text: "" };
    
  }



  handleTextChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  handleColorChange = (e) => {
    this.setState({ color: e.target.value });
  };

  handleNoteAdd = () => {
    let newNote = {
      id: Date.now(),
      title: this.state.title,
      text: this.state.text,
      color: this.state.color,
    };
    this.props.onNoteAdd(newNote);
    this.setState({ text: '' });
    this.setState({ title: '' });
  };

  render() {
    return (
      <div className="note-editor">
        <div className="row">
          <div className="input-field col s5">
            <i className="material-icons prefix">title</i>
            <input
              onChange={this.handleTitleChange}
              id="title"
              type="text"
              className="validate"
            />
            <label htmlFor="title">Title</label>
          </div>
          <div className="input-field col s5">
            <i className="material-icons prefix">toc</i>
            <input
              value={this.state.text}
              onChange={this.handleTextChange}
              id="text"
              type="text"
              class="validate"
            />
            <label htmlFor="text">Enter text</label>
          </div>
          <div className="input-field col s1 ">
            <input
              value={this.state.color}
              onChange={this.handleColorChange}
              type="color"
              id="bgColor"
              htmlvalue="#000000"
            />
          </div>
          <div className="input-field col s2">
            <a
              onClick={this.handleNoteAdd}
              className="btn-floating btn-large waves-effect waves-light red"
            >
              <i className="material-icons">add</i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NoteEditor;
