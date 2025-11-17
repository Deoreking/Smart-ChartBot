import React, { useState, useRef } from 'react';

// --- MODIFICATION: Removed recharts imports as they are no longer used ---

export default function ChartbotAPP() {
  const [messages, setMessages] = useState([
    { id: 0, role: 'system', text: 'You are ChatGPT for this website. Answer concisely.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  function appendMessage(msg) {
    setMessages(prev => [...prev, { id: Date.now() + Math.random(), ...msg }]);
    setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), 50);
  }

  async function handleSend(e) {
    e?.preventDefault();
    const text = input.trim();
    if (!text) return;

    appendMessage({ role: 'user', text });
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text })
      });

      const data = await res.json();
      appendMessage({ role: 'assistant', text: data.reply });
    } catch (err) {
      appendMessage({ role: 'assistant', text: 'Network error: ' + err.message });
    } finally {
      setLoading(false);
    }
  }

  // --- MODIFICATION: Updated to display raw JSON text ---
  async function handleFileUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const userQuestion = input.trim();
    setInput("");

    appendMessage({ role: "user", text: userQuestion ? `📂 ${file.name} + Question: ${userQuestion}` : `📂 Uploaded file: ${file.name}` });
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("question", userQuestion);

    try {
      const res = await fetch("/api/upload", { method: "POST", body: formData });

      const contentType = res.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
          const errorText = await res.text();
          console.error("Server did not return JSON. Raw response:", errorText);
          appendMessage({ role: "assistant", text: "Server error: Invalid response from server. Check the server logs." });
          setLoading(false);
          return;
      }

      const data = await res.json();

      if (data.error) {
          appendMessage({ role: "assistant", text: "Server error: " + data.error });
          setLoading(false);
          return;
      }

      // Format the entire JSON object into a readable, multi-line string.
      const formattedJsonText = JSON.stringify(data, null, 2);

      // Append the formatted string as the message text.
      appendMessage({
        role: "assistant",
        text: formattedJsonText,
        // The 'chart' object is no longer needed.
      });

    } catch (err) {
      appendMessage({ role: "assistant", text: "File upload error: " + err.message + ". Please check your network and server connection." });
      console.error("Client-side error during file upload:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl overflow-hidden">
        <header className="p-4 border-b">
          <h1 className="text-xl font-semibold">AI LIVE- chatbot : AI ASSISTANT WITH CHARTS</h1>
          <p className="text-sm text-gray-500">Ask questions or upload a dataset to see visual insights.</p>
        </header>

        <main className="p-4 h-[60vh] overflow-auto" id="chat-window">
          <div className="space-y-4">
            {messages.filter(m => m.role !== 'system').map((m) => (
              <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[75%] p-3 rounded-xl ${m.role === 'user' ? 'bg-blue-600 text-black' : 'bg-gray-100 text-gray-900'}`}>
                  {/* This div will now render the raw text or the formatted JSON string */}
                  <div className="whitespace-pre-wrap">{m.text}</div>

                  {/* --- MODIFICATION: All chart rendering logic has been removed --- */}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="p-3 rounded-xl bg-gray-100 text-gray-700">Typing...</div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>
        </main>

        <form className="p-4 border-t flex gap-2" onSubmit={handleSend}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything..."
            className="flex-1 rounded-lg border p-2 focus:outline-none"
          />
          <input type="file" onChange={handleFileUpload} className="hidden" id="fileUpload" />
          <label htmlFor="fileUpload" className="px-4 py-2 rounded-lg bg-green-600 text-black cursor-pointer">
            Upload
          </label>
          <button type="submit" className="px-4 py-2 rounded-lg bg-blue-600 text-white" disabled={loading}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}