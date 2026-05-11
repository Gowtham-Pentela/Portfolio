# Gowtham Pentela — Portfolio

Personal portfolio site for **Gowtham Pentela**, Applied AI Engineer.

Live: [pentela.xyz](https://pentela.xyz/)

---

## Stack

| Layer    | Tech                              |
|----------|-----------------------------------|
| Frontend | React 18 + Vite + CSS Modules     |
| Backend  | FastAPI (Python)                  |
| Deploy   | Vercel (frontend + serverless API)|

---

## Project Structure

```
portfolio/
├── frontend/
│   ├── public/
│   │   └── favicon.svg
│   ├── src/
│   │   ├── components/
│   │   │   ├── Cursor.jsx / .module.css
│   │   │   ├── Nav.jsx / .module.css
│   │   │   ├── Hero.jsx / .module.css
│   │   │   ├── Stats.jsx / .module.css
│   │   │   ├── About.jsx / .module.css
│   │   │   ├── Experience.jsx / .module.css
│   │   │   ├── Projects.jsx / .module.css
│   │   │   ├── Contact.jsx / .module.css
│   │   │   └── Footer.jsx / .module.css
│   │   ├── lib/
│   │   │   └── useReveal.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   └── .env.example
│
├── vercel.json
├── .gitignore
└── README.md
```

---

## Local Development

### 1. Clone

```bash
git clone https://github.com/Gowtham-Pentela/portfolio.git
cd portfolio
```

### 2. Frontend

```bash
cd frontend
npm install
npm run dev
# Runs on http://localhost:5173
```

### 3. Backend (optional — only needed for contact form)

```bash
cd backend
python3 -m venv venv
source venv/bin/activate      # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env          # Fill in your SMTP credentials
uvicorn main:app --reload --port 8000
# Runs on http://localhost:8000
```

> **Note:** If you skip the backend, the contact form will return an error.  
> The rest of the portfolio works entirely without the backend.

---

## Deploy to Vercel (recommended)

### Option A: Vercel CLI (fastest)

```bash
npm i -g vercel
cd portfolio
vercel
```

Follow prompts. Vercel auto-detects the `vercel.json` and builds both frontend and backend.

### Option B: Vercel Dashboard

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repo
4. Set **Root Directory** to `.` (the repo root)
5. Vercel reads `vercel.json` automatically
6. Click **Deploy**

### Environment Variables (contact form)

In Vercel dashboard → Project → Settings → Environment Variables, add:

| Variable         | Example value              |
|------------------|----------------------------|
| `SMTP_HOST`      | `smtp.gmail.com`           |
| `SMTP_PORT`      | `587`                      |
| `SMTP_USER`      | `your-gmail@gmail.com`     |
| `SMTP_PASS`      | `your-gmail-app-password`  |
| `RECIPIENT_EMAIL`| `pentelagowtham@gmail.com` |
| `FRONTEND_URL`   | `https://pentela.xyz` |

> **Gmail app password:** Go to Google Account → Security → 2-Step Verification → App passwords.  
> Generate one for "Mail" and use that as `SMTP_PASS`.

---

## Customization

### Add a new project
Edit `frontend/src/components/Projects.jsx` — add an object to the `others` array:

```js
{
  num:   '04 / 04',
  title: 'My New Project',
  sub:   'Short tagline',
  desc:  'Description here.',
  tags:  ['Python', 'FastAPI'],
  link:  'https://github.com/...',
  liveUrl: 'https://...',  // or null
}
```

### Update experience
Edit `frontend/src/components/Experience.jsx` — modify the `jobs` array.

### Change colors
Edit `frontend/src/index.css` — all colors are CSS variables in `:root`.

---

## Contact Form

The contact form POSTs to `/api/contact` (FastAPI serverless function on Vercel).  
In dev mode (no SMTP env vars set), it logs the message and returns `{"status":"ok","dev":true}`.  
In production, it sends an email to `RECIPIENT_EMAIL` via SMTP.

---

## License

MIT — use freely, attribution appreciated.
