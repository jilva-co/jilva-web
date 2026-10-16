"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/icon";

export function CopyCommand({ value }: { value: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const commandRef = useRef<HTMLPreElement>(null);

  useEffect(
    () => () => {
      if (timeout.current) clearTimeout(timeout.current);
    },
    [],
  );

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setStatus("copied");
    } catch {
      setStatus("failed");
      if (commandRef.current) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(commandRef.current);
        selection?.removeAllRanges();
        selection?.addRange(range);
      }
    }
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setStatus("idle"), 3000);
  }

  return (
    <div className="border border-terminal-line bg-terminal">
      <div className="flex min-h-11 items-center justify-between gap-4 border-b border-terminal-line px-4 text-[11px] text-dim">
        <span className="flex items-center gap-2">
          <Icon name="terminal" className="size-3" /> your terminal
        </span>
        <button
          type="button"
          onClick={copy}
          aria-label="Copy contributor setup commands"
          className="inline-flex min-h-10 items-center gap-2 text-muted hover:text-foreground"
        >
          <span aria-live="polite">
            {status === "copied"
              ? "Copied"
              : status === "failed"
                ? "Select & copy"
                : "Copy"}
          </span>
          <Icon
            name={status === "copied" ? "check" : "copy"}
            className="size-3.5"
          />
        </button>
      </div>
      <pre
        ref={commandRef}
        className="overflow-x-auto p-5 text-[11px] leading-[2.4] sm:p-6 sm:text-[13px]"
      >
        <code>
          {value.split("\n").map((line, index) => (
            <span key={line}>
              <span className="select-none text-dim" aria-hidden="true">
                ${" "}
              </span>
              <span className={index === 0 ? "text-foreground" : "text-muted"}>
                {line}
              </span>
              {index < value.split("\n").length - 1 ? "\n" : ""}
            </span>
          ))}
        </code>
      </pre>
      <div className="border-t border-terminal-line px-5 py-3 text-[10px] leading-relaxed text-dim">
        Git + Rust stable. Setup details live in the contributor guide.
      </div>
    </div>
  );
}
