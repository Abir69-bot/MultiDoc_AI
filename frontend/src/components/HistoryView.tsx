type Props = {
  history: { id: number; question: string; answer: string; date: string }[];
  onClear: () => void;
  onExport: (id: number) => void;
};

export default function HistoryView({ history, onClear, onExport }: Props) {
  return (
    <div className="grid gap-6">
      <section className="flex flex-col gap-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold">Chat history</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Review your previous conversations and export insights.</p>
        </div>
        <button className="rounded-3xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200" onClick={onClear}>
          Clear history
        </button>
      </section>

      {history.length === 0 ? (
        <div className="rounded-[2rem] border border-dashed border-slate-200 bg-slate-50 p-10 text-center text-slate-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400">
          No chat history yet.
        </div>
      ) : (
        <div className="grid gap-4">
          {history.map(item => (
            <article key={item.id} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{item.date}</p>
                  <h4 className="text-lg font-semibold">{item.question}</h4>
                </div>
                <button className="rounded-3xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm text-slate-900 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200" onClick={() => onExport(item.id)}>
                  Export
                </button>
              </div>
              <p className="text-slate-700 dark:text-slate-200">{item.answer}</p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
