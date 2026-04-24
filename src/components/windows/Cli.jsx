import React, { useState, useRef, useEffect } from "react";
import MacWindow from "./MacWindow";
import "./cli.scss";

const Cli = () => {
  const [history, setHistory] = useState([
    { type: "output", text: 'Welcome! Type "help" for available commands.' },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  const commands = {
    help: () => "Available commands: help, clear, echo, whoami, date",
    whoami: () => "saniyapawar",
    date: () => new Date().toString(),
    echo: (args) => args.join(" "),
    clear: () => "__clear__",
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e) => {
    if (e.key !== "Enter") return;
    const parts = input.trim().split(" ");
    const cmd = parts[0];
    const args = parts.slice(1);

    const newEntry = { type: "input", text: `saniyapawar:~$ ${input}` };
    const fn = commands[cmd];
    const result = fn ? fn(args) : `command not found: ${cmd}`;

    if (result === "__clear__") {
      setHistory([]);
    } else {
      setHistory((prev) => [
        ...prev,
        newEntry,
        { type: "output", text: result },
      ]);
    }
    setInput("");
  };

  return (
    <MacWindow>
      <div className="cli-window">
        {history.map((line, i) => (
          <p key={i} className={line.type}>
            {line.text}
          </p>
        ))}
        <div className="cli-input-row">
          <span>saniyapawar:~$&nbsp;</span>
          <input
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </MacWindow>
  );
};

export default Cli;
