<?php
// Database initialization for SECURE banking site
// (Same as vulnerable but different database name)

try {
    $db = new PDO('sqlite:bank_secure.db');
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $db->exec("
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            balance REAL NOT NULL DEFAULT 0
        )
    ");
    
    $db->exec("
        CREATE TABLE IF NOT EXISTS transactions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            sender TEXT NOT NULL,
            recipient TEXT NOT NULL,
            amount REAL NOT NULL,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    ");
    
    $db->exec("DELETE FROM users");
    $db->exec("DELETE FROM transactions");
    
    $users = [
        ['alice', 'alice123', 5000],
        ['bob', 'bob123', 3000],
        ['eve', 'eve123', 1000]
    ];
    
    $stmt = $db->prepare("INSERT INTO users (username, password, balance) VALUES (?, ?, ?)");
    foreach ($users as $user) {
        $stmt->execute($user);
    }
    
    echo "✓ Secure database initialized successfully!\n";
    echo "Test users created:\n";
    echo "  alice/alice123 - \$5,000\n";
    echo "  bob/bob123     - \$3,000\n";
    echo "  eve/eve123     - \$1,000\n";
    
} catch (PDOException $e) {
    die("✗ Database error: " . $e->getMessage());
}
?>