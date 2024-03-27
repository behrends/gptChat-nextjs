'use client';

import { useChat } from 'ai/react';
import Markdown from 'react-markdown';

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
      <div className="flex flex-col w-full max-w-md mx-auto overflow-auto">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`mb-2 ${
              m.role === 'user' ? '' : 'border-b-2 border-neutral-300'
            }`}
          >
            <Markdown className="markdown">
              {`${m.role === 'user' ? '**User:**' : '**AI:**'} ${
                m.content
              }`}
            </Markdown>
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
