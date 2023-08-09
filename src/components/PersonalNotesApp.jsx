import React from "react";
import NotesHeader from "./NotesHeader";
import { getInitialData } from "../utils";
import NotesBody from "./NotesBody";

class PersonalNotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchKeywords: "",
    };

    this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
    this.onAddNoteEventHandler = this.onAddNoteEventHandler.bind(this);
    this.onArchiveEventHandler = this.onArchiveEventHandler.bind(this);
    this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
  }

  onSearchEventHandler(event) {
    this.setState(() => {
      return {
        searchKeywords: event.target.value,
      };
    });
  }

  onAddNoteEventHandler({ title, body }) {
    this.setState((prev) => {
      return {
        notes: [
          ...prev.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date(),
            archived: false,
          },
        ],
      };
    });
  }

  onArchiveEventHandler(id) {
    const archivedNotes = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    this.setState({ notes: archivedNotes });
  }

  onDeleteEventHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  render() {
    const filteredNotes = this.state.notes.filter((note) =>
      note.title
        .toLocaleLowerCase()
        .includes(this.state.searchKeywords.toLocaleLowerCase())
    );

    return (
      <>
        <NotesHeader onSearch={this.onSearchEventHandler} />
        <NotesBody
          notes={filteredNotes}
          addNote={this.onAddNoteEventHandler}
          onArchive={this.onArchiveEventHandler}
          onDelete={this.onDeleteEventHandler}
        />
      </>
    );
  }
}

export default PersonalNotesApp;
