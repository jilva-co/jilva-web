"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { Icon } from "@/components/icon";

const initialTasks = [
  { name: "Make something useful", detail: "the idea", done: true },
  { name: "Give it a little character", detail: "the craft", done: true },
  { name: "Bring it to the terminal", detail: "the canvas", done: false },
];

export function TerminalPreview() {
  const [tab, setTab] = useState<"preview" | "idea">("preview");
  const [tasks, setTasks] = useState(initialTasks);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const completed = tasks.filter((task) => task.done).length;

  function onTabKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    let nextIndex: number;
    if (event.key === "ArrowRight" || event.key === "ArrowLeft")
      nextIndex = 1 - index;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = 1;
    else return;
    event.preventDefault();
    setTab(nextIndex === 0 ? "preview" : "idea");
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <div id="playground" className="terminal-study min-w-0 scroll-mt-8">
      <div className="mb-3.5 flex items-center justify-between gap-4 text-[11px] tracking-wide text-dim">
        <span className="flex items-center gap-2">
          <Icon name="terminal" className="size-3.5" /> A LITTLE OF WHAT
          WE&apos;RE BUILDING
        </span>
        <span className="text-muted">STUDY / 001</span>
      </div>
      <div className="terminal-frame border border-terminal-line bg-terminal">
        <div className="flex h-11 items-center justify-between border-b border-terminal-line px-4 text-[11px] text-dim">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="size-1.5 bg-[#555c65]" />
            <span className="size-1.5 bg-[#3d444d]" />
            <span className="size-1.5 bg-[#303640]" />
          </div>
          <span>jilva — a terminal, considered.</span>
          <Icon name="terminal" className="size-3" />
        </div>
        <div
          role="tablist"
          aria-label="Terminal design study"
          className="flex border-b border-terminal-line px-5"
        >
          {(["preview", "idea"] as const).map((item, index) => (
            <button
              key={item}
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              type="button"
              role="tab"
              id={`tab-${item}`}
              aria-controls={`panel-${item}`}
              aria-selected={tab === item}
              tabIndex={tab === item ? 0 : -1}
              onClick={() => setTab(item)}
              onKeyDown={(event) => onTabKeyDown(event, index)}
              className={`terminal-tab -mb-px border-b px-3 py-3 text-[11px] ${tab === item ? "border-accent text-accent" : "border-transparent text-dim hover:text-muted"}`}
            >
              {item === "preview" ? "Preview" : "The idea"}
            </button>
          ))}
          <span className="ml-auto flex items-center gap-1.5 text-[10px] text-dim">
            <span className="size-1 bg-green" /> DESIGN STUDY
          </span>
        </div>
        <div
          role="tabpanel"
          id="panel-preview"
          aria-labelledby="tab-preview"
          hidden={tab !== "preview"}
          tabIndex={0}
          className="terminal-body p-6"
        >
          <div className="mb-7 flex items-start justify-between gap-3">
            <div>
              <p className="mb-2 text-[11px] text-dim">~/a-small-beginning</p>
              <p className="text-sm text-foreground">
                Good things start here<span className="text-accent">.</span>
              </p>
            </div>
            <span className="border border-terminal-line px-2 py-1 text-[10px] text-muted">
              personal
            </span>
          </div>
          <div className="mb-2 flex justify-between border-b border-terminal-line pb-2 text-[10px] uppercase tracking-wider text-dim">
            <span>The checklist</span>
            <span>status</span>
          </div>
          <ul className="space-y-0.5">
            {tasks.map((task, index) => (
              <li key={task.name}>
                <button
                  type="button"
                  aria-pressed={task.done}
                  onClick={() =>
                    setTasks(
                      tasks.map((item, itemIndex) =>
                        itemIndex === index
                          ? { ...item, done: !item.done }
                          : item,
                      ),
                    )
                  }
                  className="task-row flex w-full items-center gap-2.5 py-3 text-left text-[12px] hover:bg-white/[0.025]"
                >
                  <span
                    className={task.done ? "text-green" : "text-accent"}
                    aria-hidden="true"
                  >
                    {task.done ? "[✓]" : "[ ]"}
                  </span>
                  <span
                    className={task.done ? "text-muted" : "text-foreground"}
                  >
                    {task.name}
                  </span>
                  <span className="ml-auto hidden text-[10px] text-dim min-[420px]:inline">
                    {task.detail}
                  </span>
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center justify-between border-t border-terminal-line pt-3 text-[10px] text-dim">
            <span aria-live="polite">
              <span className="text-green">{completed}</span> of 3 things, a
              little closer.
            </span>
            <span className="text-accent">↵ toggle</span>
          </div>
        </div>
        <div
          role="tabpanel"
          id="panel-idea"
          aria-labelledby="tab-idea"
          hidden={tab !== "idea"}
          tabIndex={0}
          className="terminal-body p-6"
        >
          <p className="mb-5 text-[11px] text-dim">
            // design direction, not a released API
          </p>
          <pre className="overflow-x-auto text-[12px] leading-[2.2] text-muted">
            <code>
              <span className="text-lilac">describe</span>
              {" your interface\n"}
              <span className="text-dim"> ├─ </span>
              {"layout with intent\n"}
              <span className="text-dim"> ├─ </span>
              {"compose small pieces\n"}
              <span className="text-dim"> └─ </span>
              {"make room for your idea\n\n"}
              <span className="text-lilac">let</span>
              {" the framework handle\n"}
              <span className="text-dim"> ├─ </span>
              {"terminal details\n"}
              <span className="text-dim"> └─ </span>
              {"the thoughtful defaults"}
            </code>
          </pre>
        </div>
        <div className="flex items-center justify-between gap-3 border-t border-terminal-line bg-[#13171c] px-4 py-2 text-[10px] text-dim">
          <span>
            <span className="text-accent">jilva</span> / canvas
          </span>
          <span>Rust first. Details matter.</span>
        </div>
      </div>
      <p className="mt-3.5 text-right text-[11px] text-dim">
        <span aria-hidden="true">↳</span> an interactive sketch of the
        direction. try it.
      </p>
    </div>
  );
}
