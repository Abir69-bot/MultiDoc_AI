import { Archive, Sparkles } from 'lucide-react';

type Props = {
  uploadedFiles: { name: string; type: string; date: string; status: string }[];
  onUpload: () => void;
};

export default function DashboardView({ uploadedFiles, onUpload }: Props) {
  return (
    <div className="grid gap-6">
      <div className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
        <section className="rounded-[2rem] border border-slate-200 bg-slate-100 p-8 shadow-soft dark:border-slate-800 dark:bg-slate-950">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-3xl bg-slate-900 text-white"><Archive size={24} /></div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Document Intelligence</p>
                <h3 className="text-2xl font-semibold">Upload, index, and ask.</h3>
              </div>
            </div>
            <p className="max-w-2xl text-slate-600 dark:text-slate-300">Bring PDFs, slides, notes, and spreadsheets into one AI assistant. Ask questions and get context-aware summaries in seconds.</p>
            <div className="grid gap-3 sm:grid-cols-2">
              <button className="rounded-3xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800" onClick={onUpload}>Upload documents</button>
              <button className="rounded-3xl border border-slate-200 bg-white px-5 py-3 text-sm text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">Explore analytics</button>
            </div>
          </div>
        </section>

        <section className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Workspace summary</p>
              <h3 className="text-xl font-semibold">At a glance</h3>
            </div>
            <Sparkles className="h-6 w-6 text-slate-500 dark:text-slate-400" />
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl bg-slate-50 p-5 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
              <p className="text-sm text-slate-500 dark:text-slate-400">Documents</p>
              <p className="mt-3 text-3xl font-semibold">{uploadedFiles.length}</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-5 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
              <p className="text-sm text-slate-500 dark:text-slate-400">Indexed chunks</p>
              <p className="mt-3 text-3xl font-semibold">{uploadedFiles.length * 6}</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-5 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
              <p className="text-sm text-slate-500 dark:text-slate-400">Questions</p>
              <p className="mt-3 text-3xl font-semibold">0</p>
            </div>
          </div>
        </section>
      </div>

      <section className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold">Recommended workflows</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Use AI to accelerate document review and research.</p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {['Summarize documents', 'Generate questions', 'Create slides', 'Extract insights'].map(label => (
            <div key={label} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100">
              <p className="font-semibold">{label}</p>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Tap the AI chat to get started with this workflow.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
