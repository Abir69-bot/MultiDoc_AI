Overview
MultiDoc AI is a full-stack document intelligence platform that allows users to upload multiple documents and ask natural language questions about their content. Built with a Retrieval-Augmented Generation (RAG) architecture, it combines vector search with large language models to deliver accurate, context-aware answers.

The platform features a secure authentication system, per-user document isolation, and a modern dark-mode-ready UI — making it ideal for researchers, students, and professionals who need to quickly extract insights from document collections.

✨ Features
📄 Document Management
Upload multiple documents simultaneously — drag & drop or click to browse

Support for PDF, DOCX, TXT, HTML, PPTX, XLSX, CSV, and MD files

Automatic text extraction and chunking for efficient indexing

Per-user document library with upload history and metadata

🤖 AI-Powered Q&A
Ask natural language questions about your uploaded documents

RAG pipeline retrieves relevant chunks and generates accurate answers

Context-aware responses with source attribution

Polite fallback when answers aren't found in your documents

🔐 User Authentication
Register and login with email/password

Session-based authentication with secure tokens

Per-user data isolation — your documents and chats are private

Logout to end your session

🎨 Modern UI/UX
Clean, intuitive dashboard with real-time statistics

Dark mode support for comfortable night-time use

Responsive design works on desktop and mobile

Document library with view, download, and delete actions

📊 Analytics & Insights
Track uploaded documents, indexed chunks, and questions asked

Suggested questions to help you get started

Chat history for revisiting previous conversations



## Setup

1. Create and activate a Python virtual environment.

   ```powershell
   python -m venv .venv
   .\.venv\Scripts\Activate.ps1
   ```

2. Install dependencies.

   ```powershell
   .\.venv\Scripts\python.exe -m pip install -r requirements.txt
   ```

## Run the app

```powershell
.\.venv\Scripts\python.exe -m uvicorn app:app --reload
```

Open your browser and go to:

- `http://127.0.0.1:8000`

or

- `http://localhost:8000`

<img width="1600" height="809" alt="WhatsApp Image 2026-06-22 at 3 54 08 AM" src="https://github.com/user-attachments/assets/f15f2fdc-e3a7-4235-80d3-66ae30f97e3f" />
The dashboard displays key metrics — total documents, active sessions, indexed chunks, and questions asked.

