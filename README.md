# 🛡️ Honeypot Website

A lightweight **Node.js + Express honeypot** that mimics a real login page to detect, capture, and log unauthorized access attempts — built for security research and learning purposes.

Every submitted username, password, IP address, and timestamp is logged. No login ever succeeds — the goal is purely to observe and record attacker behavior.

---

## ✨ Features

- 🎯 Realistic, modern login page to lure automated bots and attackers
- 📝 Logs every attempt — username, password, IP, and timestamp
- 🚫 Always rejects login — no real authentication exists
- ⚡ Rate-limited `/login` endpoint to prevent abuse and log flooding
- 🧹 Input sanitization — every field is capped and type-safe before logging
- ⚙️ Configurable via environment variables (`.env` + `dotenv`)
- 🪶 Zero external database required — logs to a local file out of the box

---

## 🧰 Tech Stack

| Layer | Technology |
|---|---|
| Backend | Node.js, Express.js |
| Security | express-rate-limit |
| Config | dotenv |
| Frontend | HTML, CSS (no framework) |

---

## 📂 Project Structure

```
Honeypot-Website/
├── public/
│   └── index.html        # Modern fake login page (frontend)
├── server.js              # Express server, logging & rate-limit logic
├── package.json            # Dependencies
├── package-lock.json       # Locked dependency versions
├── .gitignore               # Ignores node_modules, .env, attack_logs.txt
├── LICENSE                   # MIT License
└── README.md                 # Documentation
```

---

## ⚙️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/devagrawalll/Honeypot-Website.git
cd Honeypot-Website
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment (optional)
Create a `.env` file in the project root:
```
PORT=3000
```
If skipped, the server defaults to port `3000`.

### 4. Run the server
```bash
node server.js
```

### 5. Open in browser
```
http://localhost:3000
```

---

## 📊 Logs

Every login attempt is appended to **`attack_logs.txt`** in the project root:

```
TIME: 2026-07-07T10:15:30.000Z
USERNAME: admin
PASSWORD: 123456
IP: 127.0.0.1
----------------------------------
```

Tail the file to watch attempts live:
```bash
tail -f attack_logs.txt
```

> ⚠️ This file contains captured credentials and is excluded via `.gitignore`. Never commit or share it.

---

## 🔒 Security Measures Built In

| Measure | Why it matters |
|---|---|
| Rate limiting (20 req/min per IP) | Prevents the endpoint itself from being abused or flooded |
| Input length capping (100 chars) | Stops oversized payloads from bloating logs |
| Async file writes | Keeps the server responsive under load |
| `.env` for config | Keeps secrets and settings out of source code |

---

## ⚠️ Responsible Use

- This project is strictly for **educational and ethical security research**.
- Never deploy publicly without isolating it from real infrastructure.
- Never test this against systems or accounts you don't own or have explicit permission for.
- Honeypots should always run on isolated networks/VMs.

---

## 🧭 Roadmap

- [ ] Store logs in a database (MongoDB) instead of a flat file
- [ ] Add IP geolocation for captured attempts
- [ ] Real-time alerts via Discord/Slack webhook
- [ ] Web dashboard to visualize attack attempts
- [ ] Detect known VPN/proxy/bot IP ranges

---

## 👨‍💻 Author

**Dev Agrawal**
GitHub: [@devagrawalll](https://github.com/devagrawalll)

---

## 📜 License

Released under the [MIT License](LICENSE).
