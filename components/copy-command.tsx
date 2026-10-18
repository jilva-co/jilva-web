"use client";

import { useEffect, useRef, useState } from "react";

export function CopyCommand({
  value,
  title = "your terminal",
  showTitle = true,
  note = "Git + Rust stable. Setup details live in the contributor guide.",
  prompt = true,
  copyLabel = "Copy contributor setup commands",
}: {
  value: string;
  title?: string;
  showTitle?: boolean;
  note?: string | null;
  prompt?: boolean;
  copyLabel?: string;
}) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const commandRef = useRef<HTMLPreElement>(null);
  const lines = value.split("\n");

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
        const range = document.createRange();
        range.selectNodeContents(commandRef.current);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
      }
    }
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setStatus("idle"), 3000);
  }

  return (
    <div className="command-block">
      <div
        className={
          showTitle
            ? "command-heading"
            : "command-heading command-heading--copy-only"
        }
      >
        {showTitle && <span>{title}</span>}
        <button
          type="button"
          onClick={copy}
          aria-label={copyLabel}
          className="copy-button"
        >
          <span
            role="status"
            aria-live="polite"
            className={
              status === "copied" ? "copy-feedback is-copied" : "copy-feedback"
            }
          >
            {status === "copied"
              ? "Copied ✓"
              : status === "failed"
                ? "Select & copy"
                : "Copy"}
          </span>
        </button>
      </div>
      <pre
        ref={commandRef}
        className="command-code"
        tabIndex={0}
        aria-label={title}
      >
        <code>
          {lines.map((line, index) => (
            <span key={index}>
              {prompt && (
                <span className="command-prompt" aria-hidden="true">
                  ${" "}
                </span>
              )}
              {line}
              {index < lines.length - 1 ? "\n" : ""}
            </span>
          ))}
        </code>
      </pre>
      {note && <p className="command-note">{note}</p>}
    </div>
  );
}
