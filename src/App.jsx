import { useEffect, useState } from "react";
import AddBookForm from "./components/AddBookForm.jsx";
import BookItem from "./components/BookItem.jsx";
import StatsPage from "./components/StatsPage.jsx";
import {
  MONTHLY_GOAL,
  today,
  readingDays,
  loadBooks,
  saveBooks,
  calcStreak,
  countFinishedThisMonth,
  countFinishedThisYear,
  countFinishedAll,
  lastReadText,
  finishedText,
} from "./books.js";

export default function App() {
  const [books, setBooks] = useState(loadBooks);
  const [changed, setChanged] = useState(false);
  const [page, setPage] = useState("home"); // "home" | "stats"

  // 책을 추가·수정·삭제한 뒤부터 저장한다. 처음 열 때 예시 데이터를 바로 저장하지 않기 위해서다.
  useEffect(() => {
    if (changed) saveBooks(books);
  }, [books, changed]);

  function addBook(book) {
    setBooks((prev) => [book, ...prev]);
    setChanged(true);
  }

  function updateBook(updated) {
    setBooks((prev) => prev.map((b) => (b.id === updated.id ? updated : b)));
    setChanged(true);
  }

  function deleteBook(book) {
    if (!confirm(`독자님, '${book.title}'을(를) 목록에서 지울까요?`)) return;
    setBooks((prev) => prev.filter((b) => b.id !== book.id));
    setChanged(true);
  }

  const done = countFinishedThisMonth(books);
  const streak = calcStreak(readingDays);
  const percent = Math.min(100, Math.round((done / MONTHLY_GOAL) * 100));
  const readingBooks = books.filter((b) => b.status === "reading");
  // 다 읽은 책은 최근에 다 읽은 순서로 보여준다.
  const finishedBooks = books
    .filter((b) => b.status === "finished")
    .sort((a, b) => (b.finishedAt ?? 0) - (a.finishedAt ?? 0));

  return (
    <main className="app">
      <header className="header">
        <h1>책길 · Book Path</h1>
        <p className="greeting">독자님, 오늘도 반가워요</p>
      </header>

      <nav className="menu">
        <button
          type="button"
          className={page === "home" ? "active" : ""}
          onClick={() => setPage("home")}
        >
          홈
        </button>
        <button
          type="button"
          className={page === "stats" ? "active" : ""}
          onClick={() => setPage("stats")}
        >
          독서 현황
        </button>
      </nav>

      {page === "stats" ? (
        <StatsPage books={books} />
      ) : (
      <>
      <section className="summary">
        <p className="summary-title">독자님, 지금까지 이만큼 다 읽었어요</p>
        <div className="summary-stats">
          <div>
            <p className="summary-label">{today.getMonth() + 1}월</p>
            <p className="summary-count">{done}권</p>
          </div>
          <div>
            <p className="summary-label">{today.getFullYear()}년</p>
            <p className="summary-count">{countFinishedThisYear(books)}권</p>
          </div>
          <div>
            <p className="summary-label">전체</p>
            <p className="summary-count">{countFinishedAll(books)}권</p>
          </div>
        </div>
        <p className="summary-reading">
          {readingBooks.length > 0 ? (
            <>
              지금 <strong>{readingBooks.length}권</strong>을 읽고 있어요
            </>
          ) : (
            "지금 읽고 있는 책이 없어요"
          )}
        </p>
      </section>

      <section className="card streak">
        {streak === 0 ? (
          <>
            <p className="streak-number">0일</p>
            <p className="streak-text">독자님, 오늘 읽으면 1일째가 돼요</p>
          </>
        ) : (
          <>
            <p className="streak-number">{streak}일째</p>
            <p className="streak-text">독자님, 연속으로 읽고 있어요</p>
          </>
        )}
      </section>

      <section className="card goal">
        <h2>이번 달 목표를 확인해요</h2>
        <p className="goal-text">
          {MONTHLY_GOAL}권 중 {done}권 읽었어요
        </p>
        <div className="progress">
          <div className="progress-bar" style={{ width: `${percent}%` }} />
        </div>
        <p className="goal-remain">
          {done >= MONTHLY_GOAL
            ? "독자님, 이번 달 목표를 이뤘어요"
            : `목표까지 ${MONTHLY_GOAL - done}권 남았어요`}
        </p>
      </section>

      <AddBookForm onAdd={addBook} />

      {books.length === 0 ? (
        <section className="empty-guide">
          <p className="empty-title">독자님, 아직 등록한 책이 없어요</p>
          <p>지금 읽고 있는 책을 위에서 추가해 봐요.</p>
          <p>어디까지 읽었는지 적어 두면 다음에 바로 이어서 읽을 수 있어요.</p>
        </section>
      ) : (
        <>
          <section>
            <h2 className="section-title">지금 읽고 있어요</h2>
            {readingBooks.length === 0 ? (
              <p className="list-empty">지금 읽고 있는 책이 없어요</p>
            ) : (
              <ul className="book-list">
                {readingBooks.map((b) => (
                  <BookItem key={b.id} book={b} onUpdate={updateBook} onDelete={deleteBook}>
                    <p className="book-position">
                      {b.position ? `${b.position}까지 읽었어요` : "아직 시작하지 않았어요"}
                    </p>
                    <p className="book-last-read">{lastReadText(b.lastReadAt)}</p>
                  </BookItem>
                ))}
              </ul>
            )}
          </section>

          <section>
            <h2 className="section-title">다 읽었어요</h2>
            {finishedBooks.length === 0 ? (
              <p className="list-empty">아직 다 읽은 책이 없어요</p>
            ) : (
              <ul className="book-list">
                {finishedBooks.map((b) => (
                  <BookItem key={b.id} book={b} onUpdate={updateBook} onDelete={deleteBook}>
                    <p className="book-finished">{finishedText(b.finishedAt)}</p>
                    {b.review && <p className="book-review">{b.review}</p>}
                  </BookItem>
                ))}
              </ul>
            )}
          </section>
        </>
      )}
      </>
      )}
    </main>
  );
}
