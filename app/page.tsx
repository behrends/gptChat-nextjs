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
    <main className="flex flex-col justify-between h-screen">
      <div className="flex flex-col w-full max-w-md mx-auto overflow-auto pb-8">
        {messages.map((m) => (
          <div key={m.id} className="whitespace-pre-wrap">
            {m.role === 'user' ? 'User: ' : 'AI: '}
            {m.content}
          </div>
        ))}
      </div>
      <form className="flex justify-center" onSubmit={handleSubmit}>
        <input
          className={`w-full max-w-md p-2 mb-4 border border-gray-300 rounded shadow-xl text-black  ${
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
    </main>
  );
}
