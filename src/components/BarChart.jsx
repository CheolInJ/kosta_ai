import { useState } from "react";

// 막대 하나 = 기간 하나(월 또는 연도). 막대를 누르면 onSelect(key)가 불린다.
// data: [{ key, label, count }]
export default function BarChart({ data, selectedKey, onSelect, unitLabel }) {
  const [hoverKey, setHoverKey] = useState(null);
  const max = Math.max(1, ...data.map((d) => d.count));
  const step = max <= 5 ? 1 : Math.ceil(max / 4);
  const top = Math.ceil(max / step) * step;
  const ticks = [];
  for (let t = 0; t <= top; t += step) ticks.push(t);

  return (
    <div className="chart">
      <div className="chart-plot">
        <div className="chart-grid" aria-hidden="true">
          {ticks.map((t) => (
            <div key={t} className="chart-gridline" style={{ bottom: `${(t / top) * 100}%` }}>
              <span>{t}</span>
            </div>
          ))}
        </div>

        <div className="chart-bars">
          {data.map((d) => {
            const selected = d.key === selectedKey;
            const hovered = d.key === hoverKey;
            return (
              <button
                key={d.key}
                type="button"
                className={`chart-col${selected ? " selected" : ""}`}
                aria-pressed={selected}
                aria-label={`${d.label}에 ${d.count}권 읽었어요`}
                onClick={() => onSelect(d.key)}
                onMouseEnter={() => setHoverKey(d.key)}
                onMouseLeave={() => setHoverKey(null)}
                onFocus={() => setHoverKey(d.key)}
                onBlur={() => setHoverKey(null)}
              >
                <span className="chart-bar-area">
                  {(selected || hovered) && (
                    <span
                      className={`chart-value${hovered ? " tooltip" : ""}`}
                      style={{ bottom: `${(d.count / top) * 100}%` }}
                    >
                      {hovered ? `${d.label} · ${d.count}권` : `${d.count}권`}
                    </span>
                  )}
                  {d.count > 0 && (
                    <span className="chart-bar" style={{ height: `${(d.count / top) * 100}%` }} />
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="chart-labels" aria-hidden="true">
        {data.map((d) => (
          <span key={d.key} className={d.key === selectedKey ? "selected" : ""}>
            {d.shortLabel ?? d.label}
          </span>
        ))}
      </div>
      <p className="chart-unit">{unitLabel}</p>
    </div>
  );
}
