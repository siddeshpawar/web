<?php
session_start();

if (!isset($_SESSION['user'])) {
    die('Not logged in');
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!isset($_POST['csrf_token']) || $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
        die(' CSRF token validation failed! Attack blocked.');
    }
    
    $referer = $_SERVER['HTTP_REFERER'] ?? '';
    if (strpos($referer, 'http://localhost:8001') !== 0) {
        die(' Invalid referer! Request must originate from same domain.');
    }
    
    $sender = $_SESSION['user'];
    $recipient = $_POST['recipient'] ?? '';
    $amount = floatval($_POST['amount'] ?? 0);
    
    if (empty($recipient) || $amount <= 0) {
        die('Invalid transfer parameters');
    }
    
    try {
        $db = new PDO('sqlite:bank_secure.db');
        $db->beginTransaction();
        
        $stmt = $db->prepare("SELECT balance FROM users WHERE username = ?");
        $stmt->execute([$sender]);
        $sender_balance = $stmt->fetchColumn();
        
        if ($sender_balance < $amount) {
            die('Insufficient funds');
        }
        
        $stmt = $db->prepare("UPDATE users SET balance = balance - ? WHERE username = ?");
        $stmt->execute([$amount, $sender]);
        
        $stmt = $db->prepare("UPDATE users SET balance = balance + ? WHERE username = ?");
        $stmt->execute([$amount, $recipient]);
        
        $stmt = $db->prepare("INSERT INTO transactions (sender, recipient, amount) VALUES (?, ?, ?)");
        $stmt->execute([$sender, $recipient, $amount]);
        
        $db->commit();
        
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
        
        header('Location: dashboard.php');
        exit;
        
    } catch (PDOException $e) {
        $db->rollBack();
        die('Transfer failed: ' . $e->getMessage());
    }
}
?>