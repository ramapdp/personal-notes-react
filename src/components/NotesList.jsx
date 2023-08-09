import React from "react";
import NotesItem from "./NotesItem";

const NotesList = ({ notes, onArchive, onDelete }) => {
  return notes.length > 0 ? (
    <div className="notes-list">
      {notes.map((note) => (
        <NotesItem
          onArchive={onArchive}
          onDelete={onDelete}
          key={note.id}
          id={note.id}
          {...note}
        />
      ))}
    </div>
  ) : (
    <div className="notes-list__empty-message">Tidak Ada Catatan.</div>
  );
};

export default NotesList;
