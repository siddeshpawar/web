<?php
session_start();

// ✅ COUNTERMEASURE 1: SameSite Cookie Attribute
session_set_cookie_params([
    'lifetime' => 3600,
    'path' => '/',
    'domain' => 'localhost',
    'secure' => false,     // Set true in production with HTTPS
    'httponly' => true,    // Prevent JavaScript access
    'samesite' => 'Lax'    // Block cross-site cookie transmission
]);

if (isset($_SESSION['user'])) {
    header('Location: dashboard.php');
    exit;
}

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';
    
    try {
        $db = new PDO('sqlite:bank_secure.db');
        $stmt = $db->prepare("SELECT * FROM users WHERE username = ? AND password = ?");
        $stmt->execute([$username, $password]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if ($user) {
            $_SESSION['user'] = $username;
            // ✅ COUNTERMEASURE 2: Generate CSRF token on login
            $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
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
    <title>Secure Bank - Login</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>🔒 Secure Bank Login</h1>
        <div class="success">✅ CSRF PROTECTION ENABLED</div>
        
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