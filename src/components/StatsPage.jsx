import { useState } from "react";
import BarChart from "./BarChart.jsx";
import { today, finishedText } from "../books.js";

// 독서 현황: 월별/연별로 다 읽은 책 수를 막대그래프로 보여주고,
// 막대를 누르면 그 기간에 다 읽은 책 목록을 아래에 보여준다.
export default function StatsPage({ books }) {
  const thisYear = today.getFullYear();
  const [view, setView] = useState("month"); // "month" | "year"
  const [year, setYear] = useState(thisYear);
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
  const [selectedYear, setSelectedYear] = useState(thisYear);

  const finished = books
    .filter((b) => b.status === "finished" && b.finishedAt)
    .sort((a, b) => b.finishedAt - a.finishedAt);

  const firstYear = Math.min(thisYear, ...finished.map((b) => b.finishedAt.getFullYear()));

  function changeYear(next) {
    setYear(next);
    // 올해로 돌아오면 이번 달을, 다른 해로 가면 선택을 비운다.
    setSelectedMonth(next === thisYear ? today.getMonth() : null);
  }

  let data;
  let selectedKey;
  let selectedBooks = [];
  let selectedTitle = "";
  let headline;

  if (view === "month") {
    const inYear = finished.filter((b) => b.finishedAt.getFullYear() === year);
    data = Array.from({ length: 12 }, (_, m) => ({
      key: m,
      label: `${m + 1}월`,
      shortLabel: `${m + 1}`,
      count: inYear.filter((b) => b.finishedAt.getMonth() === m).length,
    }));
    selectedKey = selectedMonth;
    if (selectedMonth !== null) {
      selectedBooks = inYear.filter((b) => b.finishedAt.getMonth() === selectedMonth);
      selectedTitle = `${year}년 ${selectedMonth + 1}월에 다 읽은 책이에요`;
    }
    headline = (
      <>
        {year}년에 <span className="stats-count">{inYear.length}권</span> 읽었어요
      </>
    );
  } else {
    data = [];
    for (let y = firstYear; y <= thisYear; y++) {
      data.push({
        key: y,
        label: `${y}년`,
        shortLabel: `${y}`,
        count: finished.filter((b) => b.finishedAt.getFullYear() === y).length,
      });
    }
    selectedKey = selectedYear;
    selectedBooks = finished.filter((b) => b.finishedAt.getFullYear() === selectedYear);
    selectedTitle = `${selectedYear}년에 다 읽은 책이에요`;
    headline = (
      <>
        지금까지 <span className="stats-count">{finished.length}권</span> 읽었어요
      </>
    );
  }

  return (
    <>
      <section className="card stats">
        <div className="view-toggle">
          <button
            type="button"
            className={view === "month" ? "active" : ""}
            onClick={() => setView("month")}
          >
            월별
          </button>
          <button
            type="button"
            className={view === "year" ? "active" : ""}
            onClick={() => setView("year")}
          >
            연별
          </button>
        </div>

        {view === "month" && (
          <div className="year-nav">
            <button type="button" onClick={() => changeYear(year - 1)} aria-label="이전 해로 가요">
              ◀
            </button>
            <span>{year}년</span>
            <button
              type="button"
              onClick={() => changeYear(year + 1)}
              disabled={year >= thisYear}
              aria-label="다음 해로 가요"
            >
              ▶
            </button>
          </div>
        )}

        <p className="stats-headline">독자님, {headline}</p>

        <BarChart
          data={data}
          selectedKey={selectedKey}
          onSelect={view === "month" ? setSelectedMonth : setSelectedYear}
          unitLabel={view === "month" ? "막대를 누르면 그 달에 읽은 책이 보여요" : "막대를 누르면 그 해에 읽은 책이 보여요"}
        />
      </section>

      <section>
        {selectedKey === null ? (
          <p className="list-empty">그래프에서 보고 싶은 달을 눌러 봐요</p>
        ) : (
          <>
            <h2 className="section-title">
              {selectedTitle} ({selectedBooks.length}권)
            </h2>
            {selectedBooks.length === 0 ? (
              <p className="list-empty">이때는 다 읽은 책이 없어요</p>
            ) : (
              <ul className="book-list">
                {selectedBooks.map((b) => (
                  <li key={b.id} className="book">
                    <p className="book-title">{b.title}</p>
                    <p className="book-author">{b.author}</p>
                    <p className="book-finished">{finishedText(b.finishedAt)}</p>
                    {b.review && <p className="book-review">{b.review}</p>}
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </section>
    </>
  );
}
