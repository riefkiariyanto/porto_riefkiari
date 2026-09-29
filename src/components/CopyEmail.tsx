"use client";

import { useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyEmail({ email }: { email: string }) {
  const emailRef = useRef<HTMLSpanElement>(null);
  const [status, setStatus] = useState<"idle" | "copied" | "selected">("idle");

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      // Clipboard API unavailable (e.g. insecure context): select the text so the user can copy it manually.
      const selection = window.getSelection();
      if (emailRef.current && selection) {
        selection.selectAllChildren(emailRef.current);
      }
      setStatus("selected");
    }
    setTimeout(() => setStatus("idle"), 2500);
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span
        ref={emailRef}
        className="break-all rounded-lg border border-line bg-surface px-4 py-3 font-mono text-sm sm:text-base"
      >
        {email}
      </span>
      <button
        type="button"
        onClick={copy}
        className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-90"
      >
        {status === "copied" ? (
          <Check aria-hidden className="size-4" />
        ) : (
          <Copy aria-hidden className="size-4" />
        )}
        Salin alamat email
      </button>
      <span role="status" className="font-mono text-xs text-muted">
        {status === "copied" && "Alamat email telah disalin."}
        {status === "selected" && "Tekan Ctrl+C / ⌘C untuk menyalin."}
      </span>
    </div>
  );
}
