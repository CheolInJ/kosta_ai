import { useRef, useState } from "react";
import { newId } from "../books.js";

export default function AddBookForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [position, setPosition] = useState("");
  const [error, setError] = useState("");
  const titleRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    if (!title.trim()) {
      setError("독자님, 책 제목을 적어 주세요");
      titleRef.current.focus();
      return;
    }

    onAdd({
      id: newId(),
      title: title.trim(),
      author: author.trim(),
      status: "reading",
      position: position.trim(),
      lastReadAt: null,
    });

    setTitle("");
    setAuthor("");
    setPosition("");
    setError("");
  }

  return (
    <section className="card">
      <h2>새 책을 추가해요</h2>
      <form className="add-form" onSubmit={handleSubmit} noValidate>
        <input
          ref={titleRef}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="책 제목을 적어 주세요"
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="저자를 적어 주세요 (안 적어도 돼요)"
        />
        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          placeholder="어디까지 읽었는지 적어요 (예: 1장)"
        />
        {error && <p className="add-error">{error}</p>}
        <button type="submit">추가해요</button>
      </form>
    </section>
  );
}
