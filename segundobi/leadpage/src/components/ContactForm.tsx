import { useState } from "react";
import Button from "./Button";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function sendContactEmail() {
    await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        message,
      }),
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await sendContactEmail();

    setEmail("");
    setMessage("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Seu melhor Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <textarea
        placeholder="Motivo do contato..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />

      <Button text="Enviar" />
    </form>
  );
}