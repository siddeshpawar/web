<?php
// Database initialization for vulnerable banking site

try {
    $db = new PDO('sqlite:bank_vulnerable.db');
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Create users table
    $db->exec("
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            balance REAL NOT NULL DEFAULT 0
        )
    ");
    
    // Create transactions table
    $db->exec("
        CREATE TABLE IF NOT EXISTS transactions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            sender TEXT NOT NULL,
            recipient TEXT NOT NULL,
            amount REAL NOT NULL,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    ");
    
    // Clear existing data
    $db->exec("DELETE FROM users");
    $db->exec("DELETE FROM transactions");
    
    // Insert test users (plaintext passwords for demo only!)
    $users = [
        ['alice', 'alice123', 5000],
        ['bob', 'bob123', 3000],
        ['eve', 'eve123', 1000]
    ];
    
    $stmt = $db->prepare("INSERT INTO users (username, password, balance) VALUES (?, ?, ?)");
    foreach ($users as $user) {
        $stmt->execute($user);
    }
    
    echo "✓ Database initialized successfully!\n";
    echo "Test users created:\n";
    echo "  alice/alice123 - \$5,000\n";
    echo "  bob/bob123     - \$3,000\n";
    echo "  eve/eve123     - \$1,000\n";
    
} catch (PDOException $e) {
    die("✗ Database error: " . $e->getMessage());
}
?>