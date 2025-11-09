# CSRF Attack Demonstration

**Author:** Siddesh Vilas Pawar  
**Course:** MSc Cyber Security - University of Surrey  
**Module:** COMM047 - Web Security

## 🎯 Project Overview

This is an educational demonstration of Cross-Site Request Forgery (CSRF) attacks in web applications. The project includes:

- **Vulnerable Banking Application** - Demonstrates how CSRF attacks work
- **Attacker's Malicious Website** - Simulates the attacker's exploit
- **Secure Banking Application** - Shows proper CSRF protection implementation

## 📁 Project Structure

```
csrf_demo/
├── README.md (this file)
├── vulnerable/          (NO CSRF PROTECTION)
│   ├── init_db.php      - Database initialization
│   ├── index.php        - Login page
│   ├── dashboard.php    - User dashboard with transfer form
│   ├── transfer.php     - Money transfer handler (VULNERABLE!)
│   ├── logout.php       - Logout handler
│   └── styles.css       - Styling
│
├── attacker/            (MALICIOUS SITE)
│   └── malicious.html   - CSRF exploit page
│
└── secure/              (WITH CSRF PROTECTION)
    ├── init_db.php      - Database initialization
    ├── index.php        - Login page with token generation
    ├── dashboard.php    - User dashboard with CSRF token
    ├── transfer.php     - Money transfer handler with validation
    ├── logout.php       - Logout handler
    └── styles.css       - Styling
```

## 🚀 Quick Start

### Prerequisites
- PHP 7.4 or higher
- SQLite3 extension enabled
- Modern web browser

### Step 1: Initialize Databases

```bash
# Initialize vulnerable database
cd vulnerable
php init_db.php

# Initialize secure database
cd ../secure
php init_db.php
```

### Step 2: Start Three Servers

You need **three terminal windows** running simultaneously:

**Terminal 1: Vulnerable Bank (Port 8000)**
```bash
cd vulnerable
php -S localhost:8000
```

**Terminal 2: Attacker Site (Port 9000)**
```bash
cd attacker
php -S localhost:9000
```

**Terminal 3: Secure Bank (Port 8001)**
```bash
cd secure
php -S localhost:8001
```

### Step 3: Test the Attack (Vulnerable Version)

1. Open browser → `http://localhost:9000/malicious.html`
2. Select "Port 8000 - Vulnerable Bank" from dropdown
3. Open new tab → `http://localhost:8000`
4. Login as **alice** / **alice123** (Balance: $5,000)
5. Return to attacker tab → Click "Claim Your Prize!"
6. Return to bank tab → Refresh page
7. **Result:** Balance dropped to $4,000 ❌ (Attack succeeded!)

### Step 4: Test Protection (Secure Version)

1. Same attacker site, select "Port 8001 - Secure Bank"
2. Open new tab → `http://localhost:8001`
3. Login as **alice** / **alice123**
4. Return to attacker tab → Click "Claim Your Prize!"
5. **Result:** Error message - "CSRF token validation failed!" ✅ (Attack blocked!)

## 👥 Test Users

All versions have the same test users:

| Username | Password  | Initial Balance |
|----------|-----------|-----------------|
| alice    | alice123  | $5,000         |
| bob      | bob123    | $3,000         |
| eve      | eve123    | $1,000         |

## 🛡️ Security Countermeasures

The **secure version** implements multiple defense layers:

1. **CSRF Tokens** (Synchronizer Token Pattern)
   - Unique, unpredictable tokens per session
   - Validated on every state-changing request

2. **SameSite Cookies**
   - Set to 'Lax' mode
   - Prevents cross-site cookie transmission

3. **Referer Header Validation**
   - Checks request origin
   - Blocks requests from different domains

4. **Token Regeneration**
   - New token after each transaction
   - Limits token reuse window

## 📚 Learning Outcomes

After completing this demonstration, you will understand:

- ✅ How CSRF attacks exploit browser cookie behavior
- ✅ Why authentication alone is insufficient
- ✅ How to implement CSRF tokens correctly
- ✅ Modern browser-based protections (SameSite)
- ✅ Defense-in-depth security principles

## ⚠️ Important Notes

### Educational Purpose Only
This project is for **educational and research purposes only**. Use only in controlled environments for learning and testing. Never use these techniques on systems you don't own or have explicit permission to test.

### Database Resets
To reset the databases to initial state, simply run `init_db.php` again:
```bash
php init_db.php
```

### Port Conflicts
If ports are already in use, you can use different ports:
```bash
php -S localhost:8080  # Instead of 8000
php -S localhost:9090  # Instead of 9000
php -S localhost:8081  # Instead of 8001
```
Remember to update the port in `attacker/malicious.html` dropdown!

## 🔧 Troubleshooting

### SQLite Extension Not Found
1. Check: `php -m | grep sqlite`
2. Enable in php.ini:
   ```
   extension=sqlite3
   extension=pdo_sqlite
   ```
3. Restart terminal

### Port Already in Use
```bash
# Windows
netstat -ano | findstr :8000

# Mac/Linux
lsof -i :8000
```

### Session Issues
- Clear browser cookies
- Close all browser tabs
- Restart PHP servers
- Try incognito/private window

## 📖 Additional Resources

For detailed documentation, see:
- `CSRF_SETUP_GUIDE.txt` - Comprehensive setup instructions
- `CSRF_Complete_Code.txt` - Complete source code with explanations

## 📞 Contact

**Siddesh Vilas Pawar**  
Email: siddeshvilaspawar@gmail.com  
MSc Cyber Security | University of Surrey

## 📜 License

This project is for educational purposes. Feel free to use it for learning, but always ensure ethical use.

---

**Grade:** 15-17/17 Marks  
**Course:** COMM047 - Web Security  
**Institution:** University of Surrey
