# 📌 Overview

**MultiDoc AI** is a full-stack document intelligence platform that allows users to upload multiple documents and ask natural language questions about their content. Built with a **Retrieval-Augmented Generation (RAG)** architecture, it combines vector search with large language models to deliver accurate, context-aware answers.

The platform features a secure **authentication system**, **per-user document isolation**, and a modern **dark-mode-ready UI** — making it ideal for researchers, students, and professionals who need to quickly extract insights from document collections.

---

## ✨ Features

### 📄 Document Management
- Upload multiple documents simultaneously — drag & drop or click to browse
- Support for **PDF, DOCX, TXT, HTML, PPTX, XLSX, CSV, and MD** files
- Automatic text extraction and chunking for efficient indexing
- Per-user document library with upload history and metadata

### 🤖 AI-Powered Q&A
- Ask natural language questions about your uploaded documents
- **RAG pipeline** retrieves relevant chunks and generates accurate answers
- Context-aware responses with source attribution
- Polite fallback when answers aren't found in your documents

### 🔐 User Authentication
- Register and login with email/password
- Session-based authentication with secure tokens
- Per-user data isolation — your documents and chats are private
- Logout to end your session

### 🎨 Modern UI/UX
- Clean, intuitive dashboard with real-time statistics
- Dark mode support for comfortable night-time use
- Responsive design works on desktop and mobile
- Document library with view, download, and delete actions

### 📊 Analytics & Insights
- Track uploaded documents, indexed chunks, and questions asked
- Suggested questions to help you get started
- Chat history for revisiting previous conversations
# 📁 Project Structure

```text
MultiDoc_AI/
│
├── backend/
│   ├── app.py                    # FastAPI backend entry point
│   ├── routes/                   # API endpoints
│   ├── services/                 # Document processing & business logic
│   ├── auth/                     # Authentication modules
│   ├── database/                 # ChromaDB configurations
│   └── utils/                    # Utility functions
│
├── frontend/
│   ├── index.html                # Single Page Application (SPA)
│   ├── assets/                   # CSS, JavaScript, and static files
│   └── components/               # Reusable UI components
│
├── data/
│   ├── uploads/                  # Uploaded documents
│   ├── embeddings/               # Generated vector embeddings
│   └── chroma_db/                # Persistent vector database
│
├── tests/                        # Unit and integration tests
├── docs/                         # Technical documentation
│
├── requirements.txt             # Python dependencies
├── .env.example                 # Environment variables template
├── .gitignore                   # Git ignore rules
├── README.md                    # Project documentation
└── LICENSE                      # License information
```


  
## Document Library
<img width="1600" height="809" alt="WhatsApp Image 2026-06-22 at 3 54 08 AM" src="https://github.com/user-attachments/assets/f15f2fdc-e3a7-4235-80d3-66ae30f97e3f" />
                      The dashboard displays key metrics — total documents, active sessions, indexed chunks, and questions asked.
                      
                
## Upload Documents
<img width="1600" height="802" alt="WhatsApp Image 2026-06-22 at 3 54 34 AM" src="https://github.com/user-attachments/assets/0862db5b-1ce9-4cea-a696-a04b878f2ea2" />

                                  Drag & drop or click to upload multiple documents in various formats.

                     
## AI Chat Interface
<img width="1600" height="817" alt="WhatsApp Image 2026-06-22 at 3 53 42 AM" src="https://github.com/user-attachments/assets/24815f22-9e68-4a78-9ede-325fbd6bfa64" />
                                  Ask questions and get AI-powered answers with source references from your documents.

## Backend Setup
### Clone the repository
git clone https://github.com/Abir69-bot/MultiDoc_AI.git
cd MultiDoc_AI
### Create and activate a Python virtual environment
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
### Run the FastAPI backend
.\.venv\Scripts\python.exe -m uvicorn app:app --reload


The backend will be available at http://localhost:8000


## Frontend Setup
### Navigate to the frontend directory
cd frontend
### Install dependencies
npm install
### Start the development server
npm run dev

The frontend will be available at http://localhost:5173


## Using the Application
Register a new account using the sidebar

Log in with your email and password

Upload one or more documents (PDF, DOCX, TXT, etc.)

Ask questions in the chat input

View answers with source references from your documents




