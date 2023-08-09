import React from "react";
import NotesItemContent from "./NotesItemContent";
import NotesItemAction from "./NotesItemAction";

const NotesItem = ({
  title,
  createdAt,
  body,
  id,
  archived,
  onArchive,
  onDelete,
}) => {
  return (
    <div className="note-item">
      <NotesItemContent title={title} createdAt={createdAt} body={body} />
      <NotesItemAction
        id={id}
        archived={archived}
        onArchive={onArchive}
        onDelete={onDelete}
      />
    </div>
  );
};

export default NotesItem;
