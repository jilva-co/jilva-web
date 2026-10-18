"use client";

import {
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
} from "react";

const modes = ["signal", "orbit", "terrain"] as const;
const wave = Array.from({ length: 43 }, (_, i) =>
  Math.round(20 + Math.abs(Math.sin(i * 0.61) * Math.cos(i * 0.19)) * 78),
);
const terrain = Array.from({ length: 17 }, (_, row) =>
  Array.from({ length: 47 }, (_, column) => {
    const peak = 7 + Math.sin(column * 0.19) * 4 + Math.cos(column * 0.43) * 2;
    if (row < peak) return " ";
    if (row < peak + 1) return "▄";
    return (column + row) % 3 === 0 ? "░" : "▒";
  }).join(""),
).join("\n");

export function TerminalPreview() {
  const [mode, setMode] = useState<(typeof modes)[number]>("signal");
  const [intensity, setIntensity] = useState(65);
  const [playing, setPlaying] = useState(true);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    if (event.key === "ArrowRight" || event.key === "ArrowDown")
      next = (index + 1) % modes.length;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp")
      next = (index + modes.length - 1) % modes.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = modes.length - 1;
    else return;
    event.preventDefault();
    setMode(modes[next]);
    tabs.current[next]?.focus();
  }

  return (
    <div className={"signal-console " + (playing ? "is-playing" : "is-paused")}>
      <div className="console-body">
        <div
          className="console-tabs"
          role="tablist"
          aria-label="Signal lab views"
          aria-orientation="vertical"
        >
          {modes.map((item, index) => (
            <button
              key={item}
              type="button"
              ref={(element) => {
                tabs.current[index] = element;
              }}
              id={"view-" + item}
              role="tab"
              aria-controls={"display-" + item}
              aria-selected={mode === item}
              tabIndex={mode === item ? 0 : -1}
              onClick={() => setMode(item)}
              onKeyDown={(event) => navigate(event, index)}
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="console-display-wrap">
          <div
            id="display-signal"
            role="tabpanel"
            aria-labelledby="view-signal"
            tabIndex={0}
            hidden={mode !== "signal"}
            className="console-display signal-display"
          >
            <span className="sr-only">
              Animated signal bars. Adjust energy to change their height.
            </span>
            <div
              className="signal-bars"
              aria-hidden="true"
              style={{ "--energy": intensity / 100 } as CSSProperties}
            >
              {wave.map((height, index) => (
                <span
                  key={index}
                  style={
                    {
                      "--bar-height": height + "%",
                      "--bar-delay": index * -83 + "ms",
                      "--bar-speed": 800 + (index % 7) * 120 + "ms",
                    } as CSSProperties
                  }
                />
              ))}
            </div>
          </div>
          <div
            id="display-orbit"
            role="tabpanel"
            aria-labelledby="view-orbit"
            tabIndex={0}
            hidden={mode !== "orbit"}
            className="console-display orbit-display"
          >
            <svg
              viewBox="0 0 500 310"
              width="500"
              height="310"
              preserveAspectRatio="xMidYMid meet"
              fill="none"
              aria-hidden="true"
              style={
                {
                  "--orbit-scale": 0.65 + (intensity / 100) * 0.35,
                } as CSSProperties
              }
            >
              <g className="lab-orbit-scale">
                <g className="lab-orbit">
                  <circle cx="250" cy="155" r="105" />
                  {[28, 60, 86].map((radius) => (
                    <ellipse
                      key={radius}
                      cx="250"
                      cy="155"
                      rx={radius}
                      ry="105"
                    />
                  ))}
                  {[30, 65, 90].map((radius) => (
                    <ellipse
                      key={radius}
                      cx="250"
                      cy="155"
                      rx="105"
                      ry={radius}
                    />
                  ))}
                </g>
                <ellipse
                  cx="250"
                  cy="155"
                  rx="210"
                  ry="45"
                  transform="rotate(-20 250 155)"
                />
              </g>
            </svg>
            <span className="sr-only">
              A wireframe orbit. Adjust energy to change its scale.
            </span>
          </div>
          <div
            id="display-terrain"
            role="tabpanel"
            aria-labelledby="view-terrain"
            tabIndex={0}
            hidden={mode !== "terrain"}
            className="console-display terrain-display"
          >
            <pre
              aria-hidden="true"
              style={{ transform: "scaleY(" + (0.65 + intensity / 140) + ")" }}
            >
              {terrain}
            </pre>
            <span className="sr-only">
              A landscape made of terminal characters. Adjust energy to change
              its height.
            </span>
          </div>
          <div className="console-controls">
            <label className="energy-control" htmlFor="signal-energy">
              <span>ENERGY</span>
              <input
                id="signal-energy"
                type="range"
                min="10"
                max="100"
                value={intensity}
                onChange={(event) => setIntensity(Number(event.target.value))}
              />
              <output htmlFor="signal-energy">{intensity}%</output>
            </label>
            <button
              type="button"
              className="signal-power"
              aria-pressed={!playing}
              onClick={() => setPlaying(!playing)}
            >
              {playing ? "Ⅱ PAUSE" : "▶ RESUME"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
