'use client';

import { useChat } from 'ai/react';

export default function Chat() {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
  } = useChat();
  return (
    <main className="flex flex-col min-h-screen ">
      <div className="w-full max-w-md py-24 mx-auto stretch">
        {messages.map((m) => (
          <div key={m.id} className="whitespace-pre-wrap">
            {m.role === 'user' ? 'User: ' : 'AI: '}
            {m.content}
          </div>
        ))}

        <form onSubmit={handleSubmit}>
          <input
            className={`fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl ${
              isLoading ? 'opacity-50' : ''
            }`}
            value={input}
            placeholder={
              isLoading ? 'Warte auf die Antwort…' : 'Start chat…'
            }
            onChange={handleInputChange}
            disabled={isLoading}
          />
        </form>
      </div>
    </main>
  );
}
