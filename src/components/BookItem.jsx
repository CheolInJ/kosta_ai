import { useState } from "react";
import EditBookForm from "./EditBookForm.jsx";

export default function BookItem({ book, onUpdate, onDelete, children }) {
  const [editing, setEditing] = useState(false);

  if (editing) {
    return (
      <li className="book">
        <EditBookForm
          book={book}
          onSave={(updated) => {
            onUpdate(updated);
            setEditing(false);
          }}
          onCancel={() => setEditing(false)}
        />
      </li>
    );
  }

  return (
    <li className="book">
      <div className="book-actions">
        <button type="button" className="book-edit" onClick={() => setEditing(true)}>
          고쳐요
        </button>
        <button type="button" className="book-delete" onClick={() => onDelete(book)}>
          지워요
        </button>
      </div>
      <p className="book-title">{book.title}</p>
      <p className="book-author">{book.author}</p>
      {children}
    </li>
  );
}
