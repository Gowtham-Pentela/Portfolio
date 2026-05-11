from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

app = FastAPI(title="Gowtham Portfolio API", version="1.0.0")

# ── CORS ──────────────────────────────────────────────────────────────────────
origins = [
    "http://localhost:5173",
    "http://localhost:4173",
    os.getenv("FRONTEND_URL", "https://gowtham-pentela.vercel.app"),
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],          # tighten in production to `origins`
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── Models ────────────────────────────────────────────────────────────────────
class ContactMessage(BaseModel):
    name:    str
    email:   str
    message: str

# ── Health check ─────────────────────────────────────────────────────────────
@app.get("/api/health")
def health():
    return {"status": "ok"}

# ── Contact form ──────────────────────────────────────────────────────────────
@app.post("/api/contact")
async def contact(msg: ContactMessage):
    """
    Receives contact form submissions and forwards them via email.
    Requires env vars:
      SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, RECIPIENT_EMAIL
    Falls back to logging if env vars are not set (useful in dev).
    """
    smtp_host = os.getenv("SMTP_HOST")
    smtp_user = os.getenv("SMTP_USER")
    smtp_pass = os.getenv("SMTP_PASS")
    smtp_port = int(os.getenv("SMTP_PORT", "587"))
    recipient = os.getenv("RECIPIENT_EMAIL", "pentelagowtham@gmail.com")

    body = f"""
New portfolio contact message
------------------------------
Name:    {msg.name}
Email:   {msg.email}

Message:
{msg.message}
"""

    if not smtp_host or not smtp_user or not smtp_pass:
        # Dev mode — just print and return success
        print("── [DEV] Contact form submission ──")
        print(body)
        return {"status": "ok", "dev": True}

    try:
        mime = MIMEMultipart()
        mime["From"]    = smtp_user
        mime["To"]      = recipient
        mime["Subject"] = f"Portfolio contact from {msg.name}"
        mime["Reply-To"] = msg.email
        mime.attach(MIMEText(body, "plain"))

        with smtplib.SMTP(smtp_host, smtp_port) as server:
            server.starttls()
            server.login(smtp_user, smtp_pass)
            server.sendmail(smtp_user, recipient, mime.as_string())

        return {"status": "ok"}
    except Exception as e:
        print(f"Email error: {e}")
        raise HTTPException(status_code=500, detail="Failed to send message")
