import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Archive, ChatBubble, ClipboardList, Gauge, Settings2, Sparkles, LogOut, ShieldCheck } from 'lucide-react';
import DashboardView from './components/DashboardView';
import DocumentsView from './components/DocumentsView';
import ChatView from './components/ChatView';
import HistoryView from './components/HistoryView';
import AnalyticsView from './components/AnalyticsView';
import SettingsView from './components/SettingsView';

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Gauge },
  { id: 'documents', label: 'Documents', icon: Archive },
  { id: 'chat', label: 'AI Chat', icon: ChatBubble },
  { id: 'history', label: 'Chat History', icon: ClipboardList },
  { id: 'analytics', label: 'Analytics', icon: Sparkles },
  { id: 'settings', label: 'Settings', icon: Settings2 },
];

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

type UploadedFile = { name: string; type: string; date: string; status: string };

type ChatEntry = { id: number; question: string; answer: string; date: string };

const defaultSettings: UserSettings = {
  apiKey: '',
  modelName: 'llama-3.3-70b-versatile',
  embedModel: 'sentence-transformers/all-MiniLM-L6-v2',
  temperature: 0.1,
  maxTokens: 1024,
  theme: 'system',
  fontSize: '16',
  language: 'en',
  darkMode: false,
};

function App() {
  const [activeView, setActiveView] = useState<'dashboard' | 'documents' | 'chat' | 'history' | 'analytics' | 'settings'>('dashboard');
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [authEmail, setAuthEmail] = useState<string | null>(null);
  const [settings, setSettings] = useState<UserSettings>(defaultSettings);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [chatHistory, setChatHistory] = useState<ChatEntry[]>([]);
  const [toast, setToast] = useState<{ title: string; message: string; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    const storedSettings = localStorage.getItem('multiDocSettings');
    const storedToken = localStorage.getItem('authToken');
    const storedEmail = localStorage.getItem('authEmail');
    setSettings(storedSettings ? { ...defaultSettings, ...JSON.parse(storedSettings) } : defaultSettings);
    setAuthToken(storedToken);
    setAuthEmail(storedEmail);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(null), 3200);
    return () => window.clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    document.documentElement.style.fontSize = `${settings.fontSize}px`;
    if (settings.darkMode || settings.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [settings]);

  const activeContent = useMemo(() => {
    switch (activeView) {
      case 'dashboard':
        return <DashboardView uploadedFiles={uploadedFiles} onUpload={() => showToast('Upload', 'Upload feature is available in the current app.')} />;
      case 'documents':
        return <DocumentsView files={uploadedFiles} onDelete={handleDeleteDocument} />;
      case 'chat':
        return <ChatView
          chatHistory={chatHistory}
          onSend={handleSendMessage}
          onSuggested={handleSuggestedQuestion}
        />;
      case 'history':
        return <HistoryView history={chatHistory} onClear={handleClearHistory} onExport={handleExportHistory} />;
      case 'analytics':
        return <AnalyticsView documentsCount={uploadedFiles.length} questionsCount={chatHistory.length} />;
      case 'settings':
        return <SettingsView settings={settings} onSave={handleSaveSettings} onChange={setSettings} />;
      default:
        return null;
    }
  }, [activeView, uploadedFiles, chatHistory, settings]);

  const renderNavItem = (item: typeof navItems[number]) => {
    const Icon = item.icon;
    return (
      <button
        key={item.id}
        className={`group flex items-center gap-3 rounded-3xl px-4 py-3 text-left transition ${activeView === item.id ? 'bg-slate-100 text-slate-900 shadow-soft' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}
        onClick={() => setActiveView(item.id as any)}
      >
        <Icon className="h-5 w-5" />
        <span className="font-medium">{item.label}</span>
      </button>
    );
  };

  const showToast = (title: string, message: string, type: 'success' | 'error' = 'success') => {
    setToast({ title, message, type });
  };

  const handleSaveSettings = (next: UserSettings) => {
    setSettings(next);
    localStorage.setItem('multiDocSettings', JSON.stringify(next));
    showToast('Settings saved', 'Your preferences were stored successfully.');
  };

  const handleDeleteDocument = (name: string) => {
    setUploadedFiles(files => files.filter(file => file.name !== name));
    showToast('Document removed', `${name} has been removed.`);
  };

  const handleSendMessage = (question: string) => {
    if (!authToken) return showToast('Login required', 'Please sign in before chatting.', 'error');
    if (!question.trim()) return showToast('Empty question', 'Type a question before sending.', 'error');
    if (!settings.apiKey) return showToast('API key missing', 'Enter your Groq API key in settings.', 'error');
    const answer = 'AI assistant is ready. The backend response will appear here once connected.';
    setChatHistory(history => [{ id: Date.now(), question, answer, date: new Date().toLocaleString() }, ...history]);
  };

  const handleSuggestedQuestion = (question: string) => {
    setActiveView('chat');
    showToast('Suggested question', `Loaded prompt: ${question}`);
  };

  const handleClearHistory = () => {
    setChatHistory([]);
    showToast('Chat history cleared', 'All conversations have been removed.');
  };

  const handleExportHistory = (entryId: number) => {
    const entry = chatHistory.find(item => item.id === entryId);
    if (!entry) return;
    const blob = new Blob([`Question: ${entry.question}\n\nAnswer: ${entry.answer}`], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `chat-${entry.id}.txt`;
    anchor.click();
    URL.revokeObjectURL(url);
    showToast('Export ready', 'Chat exported to file.');
  };

  const renderAuthSection = (
    <div className="space-y-3">
      {authToken && authEmail ? (
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm text-slate-500">Signed in as</p>
              <p className="text-base font-semibold text-slate-900">{authEmail}</p>
            </div>
            <button className="rounded-2xl border border-slate-200 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50" onClick={() => { setAuthToken(null); setAuthEmail(null); localStorage.removeItem('authToken'); localStorage.removeItem('authEmail'); showToast('Logged out', 'You have been signed out.'); }}>
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className="grid gap-3 rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
          <button className="rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-700" onClick={() => showToast('Login flow', 'Login is available through the current auth interface.')}>Login</button>
          <button className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 hover:bg-slate-50" onClick={() => showToast('Register flow', 'Register is available through the current auth interface.')}>Register</button>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto grid min-h-screen max-w-[1600px] gap-6 px-4 py-6 lg:grid-cols-[300px_1fr]">
        <aside className="sticky top-6 hidden h-fit rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900 lg:block">
          <div className="mb-10 flex items-center gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900 text-white">MD</div>
            <div>
              <h1 className="text-xl font-semibold">MultiDoc AI</h1>
              <p className="text-sm text-slate-500 dark:text-slate-400">Premium document intelligence</p>
            </div>
          </div>
          <div className="space-y-2">{navItems.map(renderNavItem)}</div>
          <div className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
            <p className="mb-2">Workspace</p>
            {renderAuthSection}
          </div>
        </aside>

        <main className="space-y-6">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-2xl font-semibold">{navItems.find(item => item.id === activeView)?.label}</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">Manage your document AI workspace from one premium dashboard.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200">Notifications</button>
                <button className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200">Support</button>
              </div>
            </div>
          </div>

          {activeContent}
        </main>
      </div>
      {toast && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className={`fixed bottom-6 right-6 z-50 w-[360px] rounded-3xl border p-5 shadow-soft ${toast.type === 'success' ? 'border-emerald-200 bg-emerald-50 text-emerald-900' : 'border-rose-200 bg-rose-50 text-rose-900'}`}>
          <p className="font-semibold">{toast.title}</p>
          <p className="mt-2 text-sm">{toast.message}</p>
        </motion.div>
      )}
    </div>
  );
}

export default App;
