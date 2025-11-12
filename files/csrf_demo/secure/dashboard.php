<?php
session_start();

if (!isset($_SESSION['user'])) {
    header('Location: index.php');
    exit;
}

if (!isset($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}

$username = $_SESSION['user'];

try {
    $db = new PDO('sqlite:bank_secure.db');
    
    $stmt = $db->prepare("SELECT balance FROM users WHERE username = ?");
    $stmt->execute([$username]);
    $balance = $stmt->fetchColumn();
    
    $stmt = $db->prepare("
        SELECT * FROM transactions 
        WHERE sender = ? OR recipient = ? 
        ORDER BY timestamp DESC LIMIT 10
    ");
    $stmt->execute([$username, $username]);
    $transactions = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
} catch (PDOException $e) {
    die('Database error');
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Dashboard - Secure Bank</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Welcome, <?= htmlspecialchars($username) ?></h1>
        <div class="balance">Current Balance: $<?= number_format($balance, 2) ?></div>
        
        <div class="success"> PROTECTED: CSRF tokens enabled!</div>
        
        <h2>Transfer Money</h2>
        <form method="POST" action="transfer.php">
            <input type="hidden" name="csrf_token" value="<?= $_SESSION['csrf_token'] ?>">
            
            <label>Recipient:</label>
            <select name="recipient" required>
                <option value="">Select recipient</option>
                <?php
                $stmt = $db->prepare("SELECT username FROM users WHERE username != ?");
                $stmt->execute([$username]);
                while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                    echo "<option value='{$row['username']}'>{$row['username']}</option>";
                }
                ?>
            </select>
            
            <label>Amount:</label>
            <input type="number" name="amount" min="1" step="0.01" required>
            
            <button type="submit">Transfer</button>
        </form>
        
        <h2>Recent Transactions</h2>
        <table>
            <tr><th>From</th><th>To</th><th>Amount</th><th>Time</th></tr>
            <?php foreach ($transactions as $tx): ?>
                <tr>
                    <td><?= htmlspecialchars($tx['sender']) ?></td>
                    <td><?= htmlspecialchars($tx['recipient']) ?></td>
                    <td>$<?= number_format($tx['amount'], 2) ?></td>
                    <td><?= $tx['timestamp'] ?></td>
                </tr>
            <?php endforeach; ?>
        </table>
        
        <a href="logout.php" class="logout">Logout</a>
    </div>
</body>
</html>