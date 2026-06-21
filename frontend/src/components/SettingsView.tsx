type UserSettings = {
  apiKey: string;
  modelName: string;
  embedModel: string;
  temperature: number;
  maxTokens: number;
  theme: 'light' | 'dark' | 'system';
  fontSize: string;
  language: string;
  darkMode: boolean;
};

type Props = {
  settings: UserSettings;
  onSave: (settings: UserSettings) => void;
  onChange: (settings: UserSettings) => void;
};

export default function SettingsView({ settings, onSave, onChange }: Props) {
  const update = (field: keyof UserSettings, value: string | number | boolean) => {
    onChange({ ...settings, [field]: value });
  };

  return (
    <div className="grid gap-6">
      <section className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
        <div className="grid gap-2">
          <p className="text-sm text-slate-500 dark:text-slate-400">AI configuration</p>
          <h3 className="text-xl font-semibold">Model and request settings</h3>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm text-slate-700 dark:text-slate-200">
            API key
            <input className="rounded-3xl border border-slate-200 bg-slate-50 p-4 outline-none transition dark:border-slate-800 dark:bg-slate-950" value={settings.apiKey} onChange={e => update('apiKey', e.target.value)} placeholder="groq-..." />
          </label>
          <label className="grid gap-2 text-sm text-slate-700 dark:text-slate-200">
            Model name
            <select className="rounded-3xl border border-slate-200 bg-slate-50 p-4 outline-none transition dark:border-slate-800 dark:bg-slate-950" value={settings.modelName} onChange={e => update('modelName', e.target.value)}>
              <option value="llama-3.3-70b-versatile">llama-3.3-70b-versatile</option>
              <option value="llama-3.1-8b-instant">llama-3.1-8b-instant</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm text-slate-700 dark:text-slate-200">
            Embedding model
            <select className="rounded-3xl border border-slate-200 bg-slate-50 p-4 outline-none transition dark:border-slate-800 dark:bg-slate-950" value={settings.embedModel} onChange={e => update('embedModel', e.target.value)}>
              <option value="sentence-transformers/all-MiniLM-L6-v2">all-MiniLM-L6-v2</option>
              <option value="sentence-transformers/bert-base-nli-stsb-mean-tokens">BERT NLI</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm text-slate-700 dark:text-slate-200">
            Temperature
            <input type="range" min="0" max="1" step="0.05" className="w-full" value={settings.temperature} onChange={e => update('temperature', parseFloat(e.target.value))} />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm text-slate-700 dark:text-slate-200">
            Max tokens
            <input type="number" min="64" max="4096" className="rounded-3xl border border-slate-200 bg-slate-50 p-4 outline-none transition dark:border-slate-800 dark:bg-slate-950" value={settings.maxTokens} onChange={e => update('maxTokens', parseInt(e.target.value, 10))} />
          </label>
          <label className="grid gap-2 text-sm text-slate-700 dark:text-slate-200">
            Theme
            <select className="rounded-3xl border border-slate-200 bg-slate-50 p-4 outline-none transition dark:border-slate-800 dark:bg-slate-950" value={settings.theme} onChange={e => update('theme', e.target.value as UserSettings['theme'])}>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="system">System</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm text-slate-700 dark:text-slate-200">
            Font size
            <select className="rounded-3xl border border-slate-200 bg-slate-50 p-4 outline-none transition dark:border-slate-800 dark:bg-slate-950" value={settings.fontSize} onChange={e => update('fontSize', e.target.value)}>
              <option value="14">Small</option>
              <option value="16">Default</option>
              <option value="18">Large</option>
              <option value="20">XL</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm text-slate-700 dark:text-slate-200">
            Language
            <select className="rounded-3xl border border-slate-200 bg-slate-50 p-4 outline-none transition dark:border-slate-800 dark:bg-slate-950" value={settings.language} onChange={e => update('language', e.target.value)}>
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
          </label>
        </div>

        <div className="flex flex-col gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Dark mode</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Use the system theme or force a dark interface.</p>
            </div>
            <label className="inline-flex cursor-pointer items-center gap-3 rounded-3xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm dark:bg-slate-900 dark:text-slate-100">
              <input type="checkbox" className="h-5 w-5 rounded-lg border border-slate-300 text-slate-900" checked={settings.darkMode} onChange={e => update('darkMode', e.target.checked)} />
              Enable
            </label>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="rounded-3xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800" onClick={() => onSave(settings)}>
            Save settings
          </button>
          <button className="rounded-3xl border border-slate-200 px-6 py-3 text-sm text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-200">
            Test connection
          </button>
        </div>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center gap-4">
          <div className="grid h-12 w-12 place-items-center rounded-3xl bg-slate-900 text-white">🔒</div>
          <div>
            <h3 className="text-xl font-semibold">Security</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Manage access controls and active sessions.</p>
          </div>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <button className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-left text-sm text-slate-900 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200">Change password</button>
          <button className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-left text-sm text-slate-900 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200">Logout all devices</button>
        </div>
      </section>
    </div>
  );
}
