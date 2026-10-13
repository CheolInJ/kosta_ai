import { useState } from "react";
import { today, toDateInput, fromDateInput } from "../books.js";

// 책 정보를 고친다. "다 읽었어요"로 바꾸면 다 읽은 날과 감상을 적을 수 있다.
export default function EditBookForm({ book, onSave, onCancel }) {
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author ?? "");
  const [status, setStatus] = useState(book.status);
  const [position, setPosition] = useState(book.position ?? "");
  const [lastReadAt, setLastReadAt] = useState(toDateInput(book.lastReadAt));
  const [finishedAt, setFinishedAt] = useState(
    toDateInput(book.finishedAt ?? today)
  );
  const [review, setReview] = useState(book.review ?? "");
  const [error, setError] = useState("");
  const maxDate = toDateInput(today);

  function handleSubmit(event) {
    event.preventDefault();
    if (!title.trim()) {
      setError("독자님, 책 제목을 적어 주세요");
      return;
    }
    if (status === "finished" && !finishedAt) {
      setError("독자님, 언제 다 읽었는지 적어 주세요");
      return;
    }

    onSave({
      ...book,
      title: title.trim(),
      author: author.trim(),
      status,
      position: position.trim(),
      lastReadAt: fromDateInput(lastReadAt),
      finishedAt: status === "finished" ? fromDateInput(finishedAt) : null,
      review: review.trim(),
    });
  }

  return (
    <form className="edit-form" onSubmit={handleSubmit} noValidate>
      <label>
        책 제목이에요
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        저자예요
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </label>

      <div className="status-choice">
        <label>
          <input
            type="radio"
            name={`status-${book.id}`}
            checked={status === "reading"}
            onChange={() => setStatus("reading")}
          />
          읽고 있어요
        </label>
        <label>
          <input
            type="radio"
            name={`status-${book.id}`}
            checked={status === "finished"}
            onChange={() => setStatus("finished")}
          />
          다 읽었어요
        </label>
      </div>

      {status === "reading" ? (
        <>
          <label>
            어디까지 읽었어요?
            <input
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              placeholder="예: 3장"
            />
          </label>
          <label>
            마지막으로 언제 읽었어요?
            <input
              type="date"
              value={lastReadAt}
              max={maxDate}
              onChange={(e) => setLastReadAt(e.target.value)}
            />
          </label>
        </>
      ) : (
        <>
          <label>
            언제 다 읽었어요?
            <input
              type="date"
              value={finishedAt}
              max={maxDate}
              onChange={(e) => setFinishedAt(e.target.value)}
            />
          </label>
          <label>
            어떤 감상이 남았어요?
            <textarea
              rows={3}
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="짧게 남겨도 좋아요"
            />
          </label>
        </>
      )}

      {error && <p className="add-error">{error}</p>}
      <div className="edit-buttons">
        <button type="button" className="edit-cancel" onClick={onCancel}>
          취소해요
        </button>
        <button type="submit">저장해요</button>
      </div>
    </form>
  );
}
