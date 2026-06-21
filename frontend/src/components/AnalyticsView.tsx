type Props = {
  documentsCount: number;
  questionsCount: number;
};

export default function AnalyticsView({ documentsCount, questionsCount }: Props) {
  return (
    <div className="grid gap-6">
      <div className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
          <h3 className="text-xl font-semibold">Usage insights</h3>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Track document indexing, question volume, and storage health.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl bg-slate-50 p-5 dark:bg-slate-950">
              <p className="text-sm text-slate-500 dark:text-slate-400">Documents</p>
              <p className="mt-3 text-3xl font-semibold text-slate-900 dark:text-slate-100">{documentsCount}</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-5 dark:bg-slate-950">
              <p className="text-sm text-slate-500 dark:text-slate-400">Questions</p>
              <p className="mt-3 text-3xl font-semibold text-slate-900 dark:text-slate-100">{questionsCount}</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-5 dark:bg-slate-950">
              <p className="text-sm text-slate-500 dark:text-slate-400">Response time</p>
              <p className="mt-3 text-3xl font-semibold text-slate-900 dark:text-slate-100">1.4s</p>
            </div>
          </div>
        </article>

        <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
          <h3 className="text-xl font-semibold">Storage usage</h3>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Current indexing usage for this workspace.</p>
          <div className="mt-8 space-y-4">
            <div className="rounded-3xl bg-slate-50 p-5 dark:bg-slate-950">
              <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                <span>Platform storage</span>
                <span>24%</span>
              </div>
              <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                <div className="h-full w-1/4 rounded-full bg-slate-900 dark:bg-slate-200"></div>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-50 p-5 dark:bg-slate-950">
                <p className="text-sm text-slate-500 dark:text-slate-400">Database health</p>
                <p className="mt-2 font-semibold text-slate-900 dark:text-slate-100">Stable</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-5 dark:bg-slate-950">
                <p className="text-sm text-slate-500 dark:text-slate-400">Index coverage</p>
                <p className="mt-2 font-semibold text-slate-900 dark:text-slate-100">96%</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
