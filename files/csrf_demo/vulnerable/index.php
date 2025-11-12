<?php
session_start();

if (isset($_SESSION['user'])) {
    header('Location: dashboard.php');
    exit;
}

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';
    
    try {
        $db = new PDO('sqlite:bank_vulnerable.db');
        $stmt = $db->prepare("SELECT * FROM users WHERE username = ? AND password = ?");
        $stmt->execute([$username, $password]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if ($user) {
            $_SESSION['user'] = $username;
            header('Location: dashboard.php');
            exit;
        } else {
            $error = 'Invalid credentials';
        }
    } catch (PDOException $e) {
        $error = 'Database error';
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Vulnerable Bank - Login</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>🏦 Vulnerable Bank Login</h1>
        <div class="warning"> NO CSRF PROTECTION</div>
        
        <?php if ($error): ?>
            <div class="error"><?= htmlspecialchars($error) ?></div>
        <?php endif; ?>
        
        <form method="POST">
            <label>Username:</label>
            <input type="text" name="username" required autofocus>
            
            <label>Password:</label>
            <input type="password" name="password" required>
            
            <button type="submit">Login</button>
        </form>
        
        <p class="hint">Test users: alice/alice123, bob/bob123, eve/eve123</p>
    </div>
</body>
</html>