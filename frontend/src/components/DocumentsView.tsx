type Props = {
  files: { name: string; type: string; date: string; status: string }[];
  onDelete: (name: string) => void;
};

export default function DocumentsView({ files, onDelete }: Props) {
  return (
    <div className="grid gap-6">
      <section className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold">Document Library</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Review uploaded files and manage your workspace content.</p>
          </div>
          <button className="rounded-3xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100">Add files</button>
        </div>
      </section>

      <section className="grid gap-4">
        {files.length === 0 ? (
          <div className="rounded-[2rem] border border-dashed border-slate-200 bg-slate-50 p-10 text-center text-slate-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400">
            No documents uploaded yet.
          </div>
        ) : (
          <div className="grid gap-4">
            {files.map(file => (
              <article key={file.name} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{file.type}</p>
                    <h3 className="text-lg font-semibold">{file.name}</h3>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Uploaded {file.date}</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <button className="rounded-3xl border border-slate-200 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-200">View</button>
                    <button className="rounded-3xl border border-slate-200 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-200">Re-index</button>
                    <button className="rounded-3xl border border-slate-200 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-200">Download</button>
                    <button className="rounded-3xl border border-rose-200 bg-rose-50 px-4 py-2 text-sm text-rose-900 hover:bg-rose-100 dark:border-rose-800 dark:bg-rose-950 dark:text-rose-200" onClick={() => onDelete(file.name)}>Delete</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
