// 책 데이터, 날짜 계산, localStorage 저장을 맡는다.
// 저장된 목록이 없을 때만 예시 데이터를 쓴다.
// 연속 독서일 기록(readingDays)은 아직 예시 데이터이고 저장하지 않는다.

const STORAGE_KEY = "book-motivate-manage-app.books";
const DAY_MS = 24 * 60 * 60 * 1000;

export const MONTHLY_GOAL = 2;

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export const today = startOfDay(new Date());

function daysAgo(n) {
  return new Date(today.getTime() - n * DAY_MS);
}

// 올해 안에서 n달 전 1일. 올해 1월보다 앞서지 않는다.
function earlierThisYear(n) {
  return new Date(today.getFullYear(), Math.max(0, today.getMonth() - n), 1);
}

export function newId() {
  return crypto.randomUUID();
}

// 날짜는 오늘 기준으로 만들어서 처음 열 때 화면이 맞게 보이게 한다.
const sampleBooks = [
  {
    id: newId(),
    title: "지구 끝의 온실",
    author: "김초엽",
    status: "reading",
    position: "5장",
    lastReadAt: daysAgo(0),
  },
  {
    id: newId(),
    title: "물고기는 존재하지 않는다",
    author: "룰루 밀러",
    status: "reading",
    position: "2장",
    lastReadAt: daysAgo(3),
  },
  {
    id: newId(),
    title: "불편한 편의점",
    author: "김호연",
    status: "finished",
    // 이번 달 1일보다 앞서지 않게 해서 항상 이번 달 완독으로 잡히게 한다.
    finishedAt: daysAgo(Math.min(2, today.getDate() - 1)),
    review: "따뜻한 이야기라 금방 읽혔어요. 지친 날 다시 펼쳐 보고 싶어요.",
  },
  // 올해 앞선 달에 다 읽은 책 (1월이면 1월 1일로 잡혀서 이번 달에도 세어진다)
  {
    id: newId(),
    title: "아몬드",
    author: "손원평",
    status: "finished",
    finishedAt: earlierThisYear(1),
    review: "감정을 배워 가는 과정이 마음에 오래 남았어요.",
  },
  {
    id: newId(),
    title: "달러구트 꿈 백화점",
    author: "이미예",
    status: "finished",
    finishedAt: earlierThisYear(3),
    review: "상상력이 즐거워서 자기 전에 조금씩 읽었어요.",
  },
  {
    id: newId(),
    title: "데미안",
    author: "헤르만 헤세",
    status: "finished",
    finishedAt: earlierThisYear(6),
    review: "어렵지만 문장을 곱씹어 읽는 재미가 있었어요.",
  },
  // 지난해 이전에 다 읽은 책
  {
    id: newId(),
    title: "어린 왕자",
    author: "앙투안 드 생텍쥐페리",
    status: "finished",
    finishedAt: new Date(today.getFullYear() - 1, 10, 20),
    review: "어릴 때와 다르게 읽혀서 신기했어요.",
  },
  {
    id: newId(),
    title: "82년생 김지영",
    author: "조남주",
    status: "finished",
    finishedAt: new Date(today.getFullYear() - 1, 4, 8),
    review: "주변 사람들을 다시 생각해 보게 됐어요.",
  },
  {
    id: newId(),
    title: "채식주의자",
    author: "한강",
    status: "finished",
    finishedAt: new Date(today.getFullYear() - 2, 8, 3),
    review: "강렬해서 한동안 다른 책을 못 읽었어요.",
  },
];

// 오늘부터 5일 연속으로 읽고, 그 전에는 띄엄띄엄 읽은 기록이에요.
export const readingDays = [0, 1, 2, 3, 4, 7, 9].map(daysAgo);

// 주소에 ?reset을 붙여 열면 저장된 목록을 지우고 예시 데이터로 되돌린다.
function resetIfRequested() {
  const url = new URL(window.location.href);
  if (!url.searchParams.has("reset")) return;
  localStorage.removeItem(STORAGE_KEY);
  url.searchParams.delete("reset");
  window.history.replaceState(null, "", url);
}

// JSON에는 날짜가 문자열로 저장되므로 읽을 때 Date로 되돌린다.
export function loadBooks() {
  try {
    resetIfRequested();
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === null) return sampleBooks;
    return JSON.parse(raw).map((b) => ({
      ...b,
      id: b.id ?? newId(),
      lastReadAt: b.lastReadAt ? new Date(b.lastReadAt) : null,
      finishedAt: b.finishedAt ? new Date(b.finishedAt) : null,
    }));
  } catch {
    return sampleBooks; // 저장된 값이 깨졌거나 저장소를 쓸 수 없으면 예시 데이터로 시작한다.
  }
}

export function saveBooks(books) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
  } catch {
    // 저장소를 쓸 수 없는 환경에서는 화면에만 반영한다.
  }
}

// 오늘(오늘 안 읽었으면 어제)부터 끊기지 않고 읽은 날 수
export function calcStreak(days) {
  const read = new Set(days.map((d) => startOfDay(d).getTime()));
  let cursor = read.has(today.getTime()) ? today : daysAgo(1);
  let streak = 0;
  while (read.has(cursor.getTime())) {
    streak++;
    cursor = new Date(cursor.getTime() - DAY_MS);
  }
  return streak;
}

function finishedBooks(books) {
  return books.filter((b) => b.status === "finished" && b.finishedAt);
}

export function countFinishedThisMonth(books) {
  return finishedBooks(books).filter(
    (b) =>
      b.finishedAt.getFullYear() === today.getFullYear() &&
      b.finishedAt.getMonth() === today.getMonth()
  ).length;
}

export function countFinishedThisYear(books) {
  return finishedBooks(books).filter(
    (b) => b.finishedAt.getFullYear() === today.getFullYear()
  ).length;
}

export function countFinishedAll(books) {
  return finishedBooks(books).length;
}

export function finishedText(date) {
  if (!date) return "다 읽은 날을 아직 적지 않았어요";
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일에 다 읽었어요`;
}

// <input type="date">와 주고받는 "YYYY-MM-DD" 문자열 (로컬 날짜 기준)
export function toDateInput(date) {
  if (!date) return "";
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${m}-${d}`;
}

export function fromDateInput(value) {
  if (!value) return null;
  const [y, m, d] = value.split("-").map(Number);
  return new Date(y, m - 1, d);
}

export function lastReadText(date) {
  if (!date) return "아직 읽기 전이에요";
  const diff = Math.round((today - startOfDay(date)) / DAY_MS);
  if (diff === 0) return "오늘 읽었어요";
  if (diff === 1) return "어제 읽었어요";
  return `${diff}일 전에 읽었어요`;
}
