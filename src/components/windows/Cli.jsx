import React, { useState, useRef, useEffect } from "react";
import MacWindow from "./MacWindow";
import "./cli.scss";

const Cli = () => {
  const [history, setHistory] = useState([
    {
      type: "output",
      text: 'Welcome to Saniya\'s Terminal! Type "help" for available commands.',
    },
  ]);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  const commands = {
    help: () => `Available commands:
  help       → show this list
  whoami     → current user
  date       → current date & time
  echo       → print text  (e.g. echo hello)
  ls         → list files
  pwd        → print working directory
  clear      → clear terminal
  open       → open a url  (e.g. open https://github.com)
  github     → open GitHub profile
  projects   → list projects`,

    whoami: () => "saniyapawar",
    pwd: () => "/Users/saniyapawar",
    date: () => new Date().toString(),
    ls: () => `Desktop  Documents  Downloads  Projects  resume.pdf  notes.txt`,
    github: () => {
      window.open("https://github.com/Saniya30pawar", "_blank");
      return "Opening GitHub profile...";
    },
    projects: () => `1. React Mac OS  → github.com/Saniya30pawar/React-mac-os
2. Portfolio     → coming soon`,
    echo: (args) => (args.length ? args.join(" ") : ""),
    open: (args) => {
      if (!args[0]) return "Usage: open <url>";
      const url = args[0].startsWith("http") ? args[0] : `https://${args[0]}`;
      window.open(url, "_blank");
      return `Opening ${url}...`;
    },
    clear: () => "__clear__",
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const trimmed = input.trim();
      if (!trimmed) return;

      const parts = trimmed.split(" ");
      const cmd = parts[0].toLowerCase();
      const args = parts.slice(1);

      const inputLine = { type: "input", text: `saniyapawar:~$ ${trimmed}` };
      const fn = commands[cmd];
      const result = fn ? fn(args) : `zsh: command not found: ${cmd}`;

      if (result === "__clear__") {
        setHistory([]);
      } else {
        setHistory((prev) => [
          ...prev,
          inputLine,
          { type: "output", text: result },
        ]);
      }

      setCmdHistory((prev) => [trimmed, ...prev]);
      setHistoryIndex(-1);
      setInput("");
    }

    // Arrow up — previous command
    if (e.key === "ArrowUp") {
      setCmdHistory((prev) => {
        const next = Math.min(historyIndex + 1, prev.length - 1);
        setHistoryIndex(next);
        setInput(prev[next] || "");
        return prev;
      });
    }

    // Arrow down — next command
    if (e.key === "ArrowDown") {
      const next = Math.max(historyIndex - 1, -1);
      setHistoryIndex(next);
      setInput(next === -1 ? "" : cmdHistory[next]);
    }
  };

  return (
    <MacWindow>
      <div className="cli-window" onClick={() => inputRef.current?.focus()}>
        {history.map((line, i) => (
          <pre key={i} className={`line ${line.type}`}>
            {line.text}
          </pre>
        ))}
        <div className="cli-input-row">
          <span className="prompt">saniyapawar:~$&nbsp;</span>
          <input
            ref={inputRef}
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            spellCheck={false}
            autoComplete="off"
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </MacWindow>
  );
};

export default Cli;
