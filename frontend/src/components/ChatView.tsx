type Props = {
  chatHistory: { id: number; question: string; answer: string; date: string }[];
  onSend: (question: string) => void;
  onSuggested: (question: string) => void;
};

export default function ChatView({ chatHistory, onSend, onSuggested }: Props) {
  return (
    <div className="grid gap-6">
      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold">AI Chat Assistant</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Ask questions across uploaded documents and receive answers with citation-aware responses.</p>
          </div>
          <div className="inline-flex items-center gap-3 rounded-3xl bg-slate-100 px-4 py-3 text-sm text-slate-700 dark:bg-slate-950 dark:text-slate-300">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white">💬</span>
            Live assistant
          </div>
        </div>
      </section>

      <section className="grid gap-4 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-soft dark:border-slate-800 dark:bg-slate-950">
        <div className="grid gap-3 sm:grid-cols-2">
          {['Summarize this document', 'Who are the authors?', 'What are the key findings?', 'Generate presentation slides'].map(prompt => (
            <button key={prompt} className="rounded-3xl border border-slate-200 bg-white px-4 py-3 text-left text-sm text-slate-700 hover:border-slate-300 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200" onClick={() => onSuggested(prompt)}>
              {prompt}
            </button>
          ))}
        </div>
      </section>

      <section className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
        <textarea id="chat-input" className="min-h-[150px] w-full rounded-[1.5rem] border border-slate-300 bg-slate-50 p-5 text-slate-900 outline-none transition focus:border-slate-400 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100" placeholder="Type your question here..."></textarea>
        <button className="self-end rounded-3xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700" onClick={() => {
          const input = document.getElementById('chat-input') as HTMLTextAreaElement;
          if (input) onSend(input.value);
        }}>
          Send message
        </button>
      </section>

      <section className="grid gap-4">
        {chatHistory.length === 0 ? (
          <div className="rounded-[2rem] border border-dashed border-slate-200 bg-slate-50 p-10 text-center text-slate-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400">
            Your conversation will appear here.
          </div>
        ) : (
          <div className="grid gap-4">
            {chatHistory.map(entry => (
              <article key={entry.id} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-soft dark:border-slate-800 dark:bg-slate-950">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{entry.date}</p>
                    <h4 className="text-lg font-semibold">{entry.question}</h4>
                  </div>
                </div>
                <p className="text-slate-700 dark:text-slate-200">{entry.answer}</p>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
