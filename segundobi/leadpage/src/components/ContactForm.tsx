import { useState } from "react";
import { toast } from "react-toastify";
import Button from "./Button";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function sendContactEmail() {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        message,
      }),
    });

    if (!response.ok) {
      throw new Error("Erro ao enviar e-mail");
    }

    return response;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      await toast.promise(
        sendContactEmail(),
        {
          pending: "Enviando mensagem...",
          success: "Mensagem enviada com sucesso! ✅",
          error: "Erro ao enviar a mensagem ❌",
        }
      );

      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
    }
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