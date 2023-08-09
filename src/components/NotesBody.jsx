import React from "react";
import NotesInput from "./NotesInput";
import NotesList from "./NotesList";

const NotesBody = ({ notes, addNote, onArchive, onDelete }) => {
  const activeNotes = notes.filter((note) => {
    return note.archived === false;
  });

  const archivedNotes = notes.filter((note) => {
    return note.archived === true;
  });

  return (
    <div className="note-app__body">
      <NotesInput addNote={addNote} />
      <h2>Catatan Aktif</h2>
      <NotesList notes={activeNotes} onDelete={onDelete} onArchive={onArchive}/>
      <h2>Arsip</h2>
      <NotesList notes={archivedNotes} onDelete={onDelete} onArchive={onArchive}/>
    </div>
  );
};

export default NotesBody;
