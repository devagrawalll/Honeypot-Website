const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve fake login page
app.use(express.static("public"));
// Honeypot login endpoint
app.post("/login", (req, res) => {
const { username, password } = req.body;
const log = `
TIME: ${new Date().toISOString()}
USERNAME:${username}
PASSWORD:${password}
IP: ${req.ip}----------------------------------
`;
// Save attacker data
fs.appendFile("attack_logs.txt", log, (err) => {
	if (err) console.error("Failed to write log:", err);
});
// Fake response (never allow login)
res.send(`
<h3>Invalid credentials</h3>
<p>Please try again later.</p>
`);
});
const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log(`Honeypot running at http://localhost:${PORT}`);
});
