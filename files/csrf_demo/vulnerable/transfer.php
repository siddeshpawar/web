<?php
session_start();

if (!isset($_SESSION['user'])) {
    die('Not logged in');
}

// ⚠️ VULNERABLE: NO CSRF TOKEN VALIDATION!
// This endpoint accepts ANY POST request with valid session

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $sender = $_SESSION['user'];
    $recipient = $_POST['recipient'] ?? '';
    $amount = floatval($_POST['amount'] ?? 0);
    
    if (empty($recipient) || $amount <= 0) {
        die('Invalid transfer parameters');
    }
    
    try {
        $db = new PDO('sqlite:bank_vulnerable.db');
        $db->beginTransaction();
        
        // Check sender balance
        $stmt = $db->prepare("SELECT balance FROM users WHERE username = ?");
        $stmt->execute([$sender]);
        $sender_balance = $stmt->fetchColumn();
        
        if ($sender_balance < $amount) {
            die('Insufficient funds');
        }
        
        // Deduct from sender
        $stmt = $db->prepare("UPDATE users SET balance = balance - ? WHERE username = ?");
        $stmt->execute([$amount, $sender]);
        
        // Add to recipient
        $stmt = $db->prepare("UPDATE users SET balance = balance + ? WHERE username = ?");
        $stmt->execute([$amount, $recipient]);
        
        // Log transaction
        $stmt = $db->prepare("
            INSERT INTO transactions (sender, recipient, amount) VALUES (?, ?, ?)
        ");
        $stmt->execute([$sender, $recipient, $amount]);
        
        $db->commit();
        
        // Success - redirect back
        header('Location: dashboard.php');
        exit;
        
    } catch (PDOException $e) {
        $db->rollBack();
        die('Transfer failed: ' . $e->getMessage());
    }
}
?>